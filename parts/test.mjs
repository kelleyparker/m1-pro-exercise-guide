import { chromium, devices } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const FILE = "file://" + path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../m1-pro-form-guide.html");
const SHOT = p => path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../shots", p);
const errors = [];
let failures = 0;
const ok = (cond, msg) => { if (cond) console.log("  PASS " + msg); else { failures++; console.log("  FAIL " + msg); } };

async function page(browser, opts) {
  const ctx = await browser.newContext(opts);
  const p = await ctx.newPage();
  p.on("pageerror", e => errors.push("pageerror: " + e.message));
  p.on("console", m => { if (m.type() === "error") errors.push("console: " + m.text()); });
  return [ctx, p];
}
const noOverflow = async p => p.evaluate(() => document.scrollingElement.scrollWidth <= window.innerWidth + 1);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
console.log("== DESKTOP 1920x1080 ==");
{
  const [ctx, p] = await page(browser, { viewport: { width: 1920, height: 1080 }, colorScheme: "dark" });
  await p.goto(FILE); await p.waitForTimeout(400);
  ok(await p.evaluate(() => EXERCISES.length) === 93, "93 exercises loaded");
  ok(await p.evaluate(() => Object.keys(STANDARDS).length) === 13, "13 standards tables");
  ok(await p.locator(".sidebar").isVisible(), "persistent sidebar visible");
  const cols = await p.evaluate(() => getComputedStyle(document.querySelector(".grid")).gridTemplateColumns.split(" ").length);
  console.log("  grid columns @1920: " + cols);
  ok(cols >= 3 && cols <= 5, "3-5 columns at 1920 (got " + cols + ")");
  await p.screenshot({ path: SHOT("d-1920-lib.png") });
  // keyboard: / focuses search, j moves, enter opens
  await p.keyboard.press("/");
  ok(await p.evaluate(() => document.activeElement.id === "search"), "slash focuses search");
  await p.keyboard.press("Escape");
  await p.keyboard.press("j"); await p.keyboard.press("j"); await p.keyboard.press("Enter");
  await p.waitForTimeout(500);
  ok(await p.evaluate(() => !!document.body.classList.contains("detail-open")), "Enter opens detail");
  await p.keyboard.press("Escape"); await p.waitForTimeout(200);
  // open smith squat detail
  await p.goto(FILE + "#/ex/smith-back-squat"); await p.waitForTimeout(600);
  ok(await p.locator(".d-head").isVisible(), "detail via deep link");
  ok(await p.locator("#animShell svg").count() === 1, "animation svg mounted");
  ok((await p.locator("#stdSec").innerText()).includes("bodyweight- and sex-adjusted"), "standards CTA before sex set");
  await p.screenshot({ path: SHOT("d-1920-detail-smith.png") });
  // settings: set male
  await p.click(".d-head [data-opensettings]"); await p.waitForTimeout(250);
  await p.click('[data-set-sex="male"]'); await p.waitForTimeout(150);
  await p.click("[data-closesettings]"); await p.waitForTimeout(200);
  ok((await p.locator("#stdSec").innerText()).includes("Hidden for Smith lifts"), "smith standards hidden with warning");
  await p.click("[data-smithshow]"); await p.waitForTimeout(300);
  ok(await p.locator("#stdSec .std-grayed").count() === 1, "grayed smith bar after toggle");
  await p.screenshot({ path: SHOT("d-1920-detail-smith-grayed.png") });
  // free bench: enter 1RM
  await p.goto(FILE + "#/ex/bb-bench-press"); await p.waitForTimeout(500);
  const ticks = await p.locator("#stdSec .std-ticks span").allInnerTexts();
  console.log("  bench tier bounds @195 male: " + ticks.join(" / "));
  ok(ticks.length === 5, "5 boundary labels (incl World Class)");
  await p.fill("#orm-in", "225"); await p.locator("#orm-in").blur(); await p.waitForTimeout(600);
  const verdict = await p.locator("#stdSec .std-verdict").innerText();
  console.log("  verdict: " + verdict.replace(/\n/g, " | "));
  ok(/Intermediate/.test(verdict), "225 @ 195 male classifies Intermediate");
  ok(/to Advanced/.test(verdict), "shows pounds to next tier");
  ok(/1\.15/.test(verdict), "bodyweight multiple shown");
  ok(await p.locator("#stdSec .std-marker").count() === 1, "marker dropped on bar");
  // calculator
  await p.click(".calc summary");
  await p.fill("[data-calc-w]", "205"); await p.fill("[data-calc-r]", "5");
  await p.click("[data-calc-go]"); await p.waitForTimeout(200);
  const calcTxt = await p.locator("[data-calc-out]").innerText();
  console.log("  calc: " + calcTxt.replace(/\n/g, " | "));
  ok(/epley/i.test(calcTxt) && /brzycki/i.test(calcTxt) && /average/i.test(calcTxt), "Epley+Brzycki+avg shown");
  await p.click("[data-calc-use]"); await p.waitForTimeout(400);
  ok((await p.locator("#orm-in").inputValue()) !== "225", "calc pushed into 1RM input");
  await p.screenshot({ path: SHOT("d-1920-detail-bench.png") });
  // standards page with entries
  await p.evaluate(() => { localStorage.setItem("m1pfg.orms", JSON.stringify({ "bb-bench-press": 230, "bb-back-squat": 285, "bb-conventional-deadlift": 350, "pull-up": 25 })); });
  await p.goto(FILE + "#/standards"); await p.reload(); await p.waitForTimeout(700);
  const stdTxt = await p.locator("#main").innerText();
  ok(/Squat \+ Bench \+ Deadlift total/.test(stdTxt), "big-three total row");
  ok(/865/.test(stdTxt.replace(/,/g, "")), "total = 865 shown");
  ok(await p.locator(".std-row").count() >= 4, "stacked rows for entered lifts");
  await p.screenshot({ path: SHOT("d-1920-standards.png") });
  // muscles + builder + safety + favorites + search
  await p.goto(FILE + "#/muscles"); await p.waitForTimeout(300);
  ok(await p.locator(".mus-card").count() >= 15, "muscle cards render");
  await p.goto(FILE + "#/lib"); await p.waitForTimeout(300);
  await p.fill("#search", "squat"); await p.waitForTimeout(400);
  const rc = await p.locator("#resultCount").innerText();
  console.log("  search 'squat' -> " + rc);
  ok(parseInt(rc) >= 8, "search finds squats");
  await p.click('[data-card="bb-back-squat"] [data-favbtn]');
  await p.click('[data-card="bb-back-squat"] [data-addbtn]');
  await p.waitForTimeout(300);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem("m1pfg.favs")).includes("bb-back-squat")), "favorite persisted");
  await p.goto(FILE + "#/builder"); await p.waitForTimeout(300);
  ok(await p.locator(".bld-item").count() === 1, "builder has queued item");
  ok((await p.locator(".bld-export").inputValue()).includes("Barbell Back Squat"), "export text includes exercise");
  await p.goto(FILE + "#/safety"); await p.waitForTimeout(300);
  ok((await p.locator("#main").innerText()).includes("2:1"), "safety page covers 2:1 ratio");
  // light theme
  await p.click("#themeBtn"); await p.waitForTimeout(500);
  ok(await p.evaluate(() => document.documentElement.dataset.theme) === "light", "theme toggles light");
  ok(await p.evaluate(() => document.getElementById("metaTheme").content) === "#f2f4f7", "meta theme-color updates");
  await p.goto(FILE + "#/ex/bb-bench-press"); await p.waitForTimeout(500);
  await p.screenshot({ path: SHOT("d-1920-light-detail.png") });
  // deep link filters
  await p.goto(FILE + "#/lib?st=Smith&df=Beginner"); await p.reload(); await p.waitForTimeout(500);
  const rc2 = await p.locator("#resultCount").innerText();
  console.log("  deep-linked Smith+Beginner -> " + rc2);
  ok(await p.locator(".achip").count() >= 2, "filter chips restored from URL");
  await ctx.close();
}
console.log("== DESKTOP 1280x720 / 2560x1440 ==");
for (const vp of [{ width: 1280, height: 720 }, { width: 2560, height: 1440 }]) {
  const [ctx, p] = await page(browser, { viewport: vp });
  await p.goto(FILE); await p.waitForTimeout(400);
  const cols = await p.evaluate(() => getComputedStyle(document.querySelector(".grid")).gridTemplateColumns.split(" ").length);
  ok(cols >= 3 && cols <= 5, `${vp.width}: 3-5 columns (got ${cols})`);
  ok(await noOverflow(p), `${vp.width}: no horizontal overflow`);
  await p.screenshot({ path: SHOT(`d-${vp.width}-lib.png`) });
  await ctx.close();
}
console.log("== iPHONE 16 PRO MAX 440x956 ==");
{
  const [ctx, p] = await page(browser, { viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: devices["iPhone 15 Pro Max"].userAgent });
  await p.goto(FILE); await p.waitForTimeout(500);
  ok(await noOverflow(p), "no horizontal overflow");
  ok(await p.locator(".bottombar").isVisible(), "bottom nav visible");
  ok(await p.locator("#filterFab").isVisible(), "filter FAB visible");
  ok(await p.evaluate(() => document.querySelector(".sidebar").getBoundingClientRect().top >= window.innerHeight - 2), "sidebar hidden as sheet");
  const searchFs = await p.evaluate(() => parseFloat(getComputedStyle(document.getElementById("search")).fontSize));
  ok(searchFs >= 16, "search input >= 16px (no iOS zoom): " + searchFs);
  await p.screenshot({ path: SHOT("m-440-lib.png") });
  await p.tap("#filterFab"); await p.waitForTimeout(450);
  ok(await p.locator(".sidebar.open").count() === 1, "bottom sheet opens");
  await p.screenshot({ path: SHOT("m-440-sheet.png") });
  await p.tap('.sidebar [data-fv="Smith"]'); await p.waitForTimeout(300);
  await p.touchscreen.tap(220, 30); await p.waitForTimeout(450);
  ok((await p.locator("#resultCount").innerText()).startsWith("24"), "Smith filter -> 24");
  await p.goto(FILE + "#/ex/cbl-face-pull"); await p.waitForTimeout(600);
  ok(await p.locator(".backbtn").isVisible(), "sticky back button");
  ok((await p.locator(".ratio-chip").innerText()).includes("2:1"), "2:1 chip on cable exercise");
  const backBox = await p.locator(".backbtn").boundingBox();
  ok(backBox.height >= 44, "back button >= 44px tall");
  await p.screenshot({ path: SHOT("m-440-detail.png") });
  // swipe left -> next exercise
  await p.touchscreen.tap(220, 500);
  await p.evaluate(() => new Promise(r => setTimeout(r, 200)));
  const before = await p.evaluate(() => location.hash);
  await p.evaluate(() => {
    const d = document.getElementById("detail");
    const t = (type, x, y) => d.dispatchEvent(new TouchEvent(type, { touches: type === "touchend" ? [] : [new Touch({ identifier: 1, target: d, clientX: x, clientY: y })], changedTouches: [new Touch({ identifier: 1, target: d, clientX: x, clientY: y })], bubbles: true }));
    t("touchstart", 320, 480); t("touchend", 120, 490);
  });
  await p.waitForTimeout(500);
  ok(await p.evaluate(() => location.hash) !== before, "swipe navigates to next exercise");
  // settings modal usable
  await p.tap(".d-head [data-opensettings]"); await p.waitForTimeout(350);
  const bwBox = await p.locator("[data-set-bw]").boundingBox();
  ok(bwBox.height >= 44, "bodyweight input >= 44px");
  await p.screenshot({ path: SHOT("m-440-settings.png") });
  await ctx.close();
}
console.log("== SMALL PHONES ==");
for (const vp of [{ width: 390, height: 844 }, { width: 402, height: 874 }, { width: 360, height: 800 }, { width: 320, height: 700 }]) {
  const [ctx, p] = await page(browser, { viewport: vp, isMobile: true, hasTouch: true });
  await p.goto(FILE); await p.waitForTimeout(400);
  ok(await noOverflow(p), `${vp.width}w: no overflow (library)`);
  await p.goto(FILE + "#/ex/bb-conventional-deadlift"); await p.waitForTimeout(400);
  ok(await noOverflow(p), `${vp.width}w: no overflow (detail)`);
  if (vp.width === 320 || vp.width === 360) await p.screenshot({ path: SHOT(`m-${vp.width}-lib.png`) });
  await ctx.close();
}
console.log("== PHONE LANDSCAPE 956x440 ==");
{
  const [ctx, p] = await page(browser, { viewport: { width: 956, height: 440 }, isMobile: true, hasTouch: true });
  await p.goto(FILE + "#/ex/smith-bench-press"); await p.waitForTimeout(500);
  const side = await p.evaluate(() => getComputedStyle(document.querySelector(".d-body")).display);
  ok(side === "grid", "landscape detail is side-by-side (grid)");
  ok(await noOverflow(p), "no overflow in landscape");
  await p.screenshot({ path: SHOT("m-landscape-detail.png") });
  await ctx.close();
}
console.log("== PRINT ==");
{
  const [ctx, p] = await page(browser, { viewport: { width: 1280, height: 900 } });
  await p.goto(FILE + "#/ex/bb-back-squat"); await p.waitForTimeout(500);
  await p.emulateMedia({ media: "print" });
  ok(await p.locator(".print-frames figure").count() === 2, "print start/end frames present");
  ok(await p.evaluate(() => getComputedStyle(document.querySelector(".topbar")).display) === "none", "chrome hidden in print");
  await p.pdf({ path: SHOT("print-detail.pdf") }).catch(() => {});
  await ctx.close();
}
console.log("== REDUCED MOTION ==");
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  p.on("pageerror", e => errors.push("pageerror(rm): " + e.message));
  await p.goto(FILE + "#/ex/smith-back-squat"); await p.waitForTimeout(500);
  ok(await p.evaluate(() => { const b = document.querySelector("[data-anim-toggle]"); return b && b.innerText.includes("Play"); }), "demo paused behind play control under reduced motion");
  await ctx.close();
}
await browser.close();
console.log("\nConsole/page errors: " + errors.length);
errors.slice(0, 12).forEach(e => console.log("  ! " + e));
console.log(failures ? `\n${failures} CHECK(S) FAILED` : "\nALL CHECKS PASSED");
process.exit(failures || errors.length ? 1 : 0);
