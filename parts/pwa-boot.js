/* ===== PWA BOOT (present only in the hosted build) =========================
   Registers the offline service worker and offers a one-tap install.
   Android/Chrome exposes beforeinstallprompt, so we show a real Install
   button. iOS has no install API, so we show the Share -> Add to Home
   Screen steps instead. Both are dismissible and never shown once the app
   is already running standalone.                                          */
(() => {
  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.navigator.standalone === true;

  // --- service worker -------------------------------------------------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js", { scope: "./" }).then(reg => {
        reg.addEventListener("updatefound", () => {
          const sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", () => {
            if (sw.state === "installed" && navigator.serviceWorker.controller) {
              try { toast("Updated - reopen the app to load the new version"); } catch (e) {}
            }
          });
        });
      }).catch(() => { /* offline or unsupported - app still works */ });
    });
  }

  if (isStandalone()) document.documentElement.classList.add("standalone");

  // --- install affordance ---------------------------------------------
  const KEY = "m1pfg.installDismissed";
  let deferred = null;
  let bar = null;

  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const safari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(navigator.userAgent);

  function dismiss() {
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
    if (bar) { bar.classList.remove("show"); setTimeout(() => bar && bar.remove(), 250); bar = null; }
  }
  function dismissed() {
    try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }

  function shareGlyph() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v11"/><path d="M8.5 7l3.5-3.5L15.5 7"/><path d="M6 12.5v7a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-7"/></svg>';
  }

  function show(html) {
    if (bar || dismissed() || isStandalone()) return;
    bar = document.createElement("div");
    bar.className = "install-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Install this app");
    bar.innerHTML = html +
      '<button class="ib-x" data-ib-dismiss aria-label="Dismiss install prompt">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
    document.body.appendChild(bar);
    requestAnimationFrame(() => bar.classList.add("show"));
    bar.addEventListener("click", async ev => {
      if (ev.target.closest("[data-ib-dismiss]")) { dismiss(); return; }
      if (ev.target.closest("[data-ib-install]") && deferred) {
        const p = deferred; deferred = null;
        bar.classList.remove("show");
        p.prompt();
        const res = await p.userChoice.catch(() => null);
        if (res && res.outcome === "accepted") dismiss();
        else if (bar) bar.classList.add("show");
      }
    });
  }

  window.addEventListener("beforeinstallprompt", ev => {
    ev.preventDefault();
    deferred = ev;
    show('<div class="ib-ic"><img src="icons/icon-192.png" alt="" width="38" height="38"></div>' +
      '<div class="ib-tx"><b>Install M1 Pro Form Guide</b><span>Adds it to your app drawer and keeps it working with no signal.</span></div>' +
      '<button class="btn primary sm" data-ib-install>Install</button>');
  });

  window.addEventListener("appinstalled", () => { deferred = null; dismiss(); });

  // iOS: no install event exists, so surface the manual steps once.
  if (ios && safari && !isStandalone()) {
    window.addEventListener("load", () => setTimeout(() => {
      show('<div class="ib-ic"><img src="icons/icon-192.png" alt="" width="38" height="38"></div>' +
        '<div class="ib-tx"><b>Add to your Home Screen</b><span>Tap ' + shareGlyph() +
        ' Share, then <b>Add to Home Screen</b> - it then runs fullscreen and offline.</span></div>');
    }, 1400));
  }
})();
