/* M1 Pro Form Guide - offline service worker.
   The whole app is one HTML file, so caching is deliberately simple:
   precache the shell on install, then serve cache-first forever.
   Bump CACHE when you redeploy and every phone picks up the new build. */
const CACHE = "m1pfg-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-152.png",
  "./icons/icon-167.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-256.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/splash-1320x2868.png",
  "./icons/splash-2868x1320.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // addAll is atomic: one 404 would poison the install, so add individually.
    await Promise.all(ASSETS.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", ev => {
  ev.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    if (self.registration.navigationPreload) await self.registration.navigationPreload.disable();
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navigations always resolve to the app shell - keeps deep links working offline.
  if (req.mode === "navigate") {
    ev.respondWith((async () => {
      const c = await caches.open(CACHE);
      const cached = (await c.match("./index.html")) || (await c.match("./"));
      if (cached) {
        fetch(req).then(r => { if (r && r.ok) c.put("./index.html", r.clone()); }).catch(() => {});
        return cached;
      }
      try { return await fetch(req); }
      catch (e) { return new Response("<h1>Offline</h1><p>Open the app once while online to cache it.</p>", { headers: { "Content-Type": "text/html" } }); }
    })());
    return;
  }

  ev.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === "basic") c.put(req, res.clone());
      return res;
    } catch (e) {
      return hit || Response.error();
    }
  })());
});

self.addEventListener("message", ev => {
  if (ev.data === "skipWaiting") self.skipWaiting();
});
