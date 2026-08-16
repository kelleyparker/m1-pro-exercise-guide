import { chromium, devices } from "playwright";
import http from "http";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../build/pwa");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".webmanifest": "application/manifest+json", ".png": "image/png", ".json": "application/json" };
let failures = 0;
const ok = (c, m) => { if (c) console.log("  PASS " + m); else { failures++; console.log("  FAIL " + m); } };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end("nope"); return; }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-cache" });
  fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(8731, "127.0.0.1", r));
const URL_BASE = "http://localhost:8731/";
console.log("serving", ROOT);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const errors = [];

console.log("== MANIFEST + SERVICE WORKER (Galaxy S25 viewport) ==");
const ctx = await browser.newContext({ viewport: { width: 412, height: 916 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, colorScheme: "dark" });
const p = await ctx.newPage();
p.on("pageerror", e => errors.push("pageerror: " + e.message));
p.on("console", m => { if (m.type() === "error") errors.push("console: " + m.text()); });
await p.goto(URL_BASE);
await p.waitForTimeout(500);

const cdp = await ctx.newCDPSession(p);
const mf = await cdp.send("Page.getAppManifest");
const parsed = mf.data ? JSON.parse(mf.data) : null;
ok(!!parsed, "manifest fetched and parses as JSON");
ok((mf.errors || []).filter(e => e.critical).length === 0, "manifest has no critical errors" + ((mf.errors || []).length ? " (" + mf.errors.map(e => e.message).join("; ") + ")" : ""));
ok(parsed && parsed.display === "standalone", "display: standalone (no browser chrome)");
ok(parsed && parsed.icons.some(i => i.sizes === "512x512"), "512px icon declared");
ok(parsed && parsed.icons.some(i => (i.purpose || "").includes("maskable")), "maskable icon declared");
ok(parsed && parsed.shortcuts && parsed.shortcuts.length === 4, "4 app shortcuts declared");

const swState = await p.evaluate(async () => {
  const reg = await navigator.serviceWorker.ready;
  return { scope: reg.scope, active: !!reg.active, state: reg.active && reg.active.state };
});
ok(swState.active && swState.state === "activated", "service worker activated (" + swState.scope + ")");
const cached = await p.evaluate(async () => {
  const keys = await caches.keys();
  const c = await caches.open(keys[0]);
  return { cache: keys[0], count: (await c.keys()).length };
});
console.log("  cache: " + cached.cache + " holding " + cached.count + " entries");
ok(cached.count >= 10, "shell precached (" + cached.count + " entries)");

console.log("== HARD OFFLINE RELOAD ==");
await ctx.setOffline(true);
await p.reload({ waitUntil: "load" });
await p.waitForTimeout(600);
const offlineCount = await p.evaluate(() => (typeof EXERCISES !== "undefined" ? EXERCISES.length : 0));
ok(offlineCount === 93, "all 93 exercises render with the network cut (" + offlineCount + ")");
ok(await p.locator(".card").count() > 5, "library grid renders offline");
await p.goto(URL_BASE + "#/ex/bb-conventional-deadlift");
await p.waitForTimeout(500);
ok(await p.locator("#animShell svg").count() === 1, "deep link + animation work offline");
await p.screenshot({ path: "shots/pwa-offline-s25.png" });

console.log("== COLD START, FULLY OFFLINE (new tab, never online) ==");
const p2 = await ctx.newPage();
await p2.goto(URL_BASE + "#/standards").catch(() => {});
await p2.waitForTimeout(700);
ok(await p2.evaluate(() => typeof EXERCISES !== "undefined" && EXERCISES.length === 93), "brand-new offline tab boots from cache");
await ctx.setOffline(false);
await ctx.close();

console.log("== STANDALONE DISPLAY MODE (installed look, iPhone 16 Pro Max) ==");
const ctx2 = await browser.newContext({ viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, colorScheme: "dark" });
const p3 = await ctx2.newPage();
p3.on("pageerror", e => errors.push("pageerror(standalone): " + e.message));
// Chromium's CDP cannot emulate display-mode, so drive the two real
// installed-app signals directly: navigator.standalone (iOS) and the
// display-mode media query (Android/Chrome).
await p3.addInitScript(() => { Object.defineProperty(navigator, "standalone", { get: () => true }); });
await p3.goto(URL_BASE);
await p3.waitForTimeout(900);
ok(await p3.evaluate(() => document.documentElement.classList.contains("standalone")), "iOS installed signal (navigator.standalone) applies standalone class");
ok(await p3.locator(".install-bar").count() === 0, "install prompt suppressed once installed");
await p3.screenshot({ path: "shots/pwa-standalone-iphone.png" });

const p5 = await ctx2.newPage();
await p5.addInitScript(() => {
  const real = window.matchMedia.bind(window);
  window.matchMedia = q => /display-mode:\s*standalone/.test(q) ? { matches: true, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} } : real(q);
});
await p5.goto(URL_BASE);
await p5.waitForTimeout(900);
ok(await p5.evaluate(() => document.documentElement.classList.contains("standalone")), "Android installed signal (display-mode media query) applies standalone class");
ok(await p5.locator(".install-bar").count() === 0, "install prompt suppressed on Android when installed");
await ctx2.close();

console.log("== iOS SAFARI INSTALL HINT ==");
const ctx3 = await browser.newContext({ viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, colorScheme: "dark", userAgent: devices["iPhone 15 Pro Max"].userAgent });
const p4 = await ctx3.newPage();
p4.on("pageerror", e => errors.push("pageerror(ios): " + e.message));
await p4.goto(URL_BASE);
await p4.waitForTimeout(2600);
const barTxt = await p4.locator(".install-bar").innerText().catch(() => "");
ok(/Add to Home Screen/i.test(barTxt), "iOS sees Add to Home Screen guidance");
await p4.screenshot({ path: "shots/pwa-ios-hint.png" });
await p4.click("[data-ib-dismiss]");
await p4.waitForTimeout(400);
ok(await p4.evaluate(() => localStorage.getItem("m1pfg.installDismissed") === "1"), "install hint stays dismissed");
await ctx3.close();

console.log("== SINGLE-FILE BUILD STILL CLEAN (no SW code leaked) ==");
const single = fs.readFileSync(path.resolve(ROOT, "../../m1-pro-form-guide.html"), "utf8");
ok(!single.includes("serviceWorker.register"), "offline single-file build has no service worker call");
ok(!single.includes("manifest.webmanifest"), "single-file build references no external files");
ok(!/<(script|link|img)[^>]+(src|href)="(?!data:|#)[^"]*"/i.test(single.replace(/<link rel="icon"[^>]*>/i, "")), "single-file build has zero external references");

await browser.close();
server.close();
console.log("\nConsole/page errors: " + errors.length);
errors.slice(0, 10).forEach(e => console.log("  ! " + e));
console.log(failures || errors.length ? `\n${failures} CHECK(S) FAILED` : "\nALL PWA CHECKS PASSED");
process.exit(failures || errors.length ? 1 : 0);
