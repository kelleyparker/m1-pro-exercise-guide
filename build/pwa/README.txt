M1 PRO FORM GUIDE - INSTALLABLE WEB APP
=======================================

This folder is the guide packaged so both phones can INSTALL it: real icon
on the home screen, launches fullscreen with no browser bars, and works with
no signal once it has loaded a single time.

  index.html            the whole guide (one file, no dependencies)
  manifest.webmanifest  app name, icon, colours, shortcuts
  sw.js                 service worker - the thing that makes it work offline
  icons/                app icon set + iPhone launch images

The catch, stated plainly: phones only grant "install" to pages served over
https. Opening index.html straight off the phone's storage runs the guide
fine, but the OS will not give it an icon or fullscreen mode. So it needs to
be served exactly once. After that first load the service worker has cached
everything and the network is never used again.


-------------------------------------------------------------------------
PUT IT ONLINE (about 2 minutes, free, no account juggling)
-------------------------------------------------------------------------
Easiest: Cloudflare Pages direct upload.
  1. https://dash.cloudflare.com  ->  Workers & Pages  ->  Create
     ->  Pages  ->  Upload assets
  2. Drag this whole folder in. Name it something like m1-pro-guide.
  3. You get a URL like https://m1-pro-guide.pages.dev

Equally fine: Netlify Drop (https://app.netlify.com/drop) - same drag and
drop, no account needed to start. Or GitHub Pages if you'd rather it live in
a repo: push this folder, then Settings -> Pages -> deploy from branch.

It is a static folder with no backend, so any static host works.

Privacy note, since it is now on the open web: the guide makes zero network
requests and has no analytics or telemetry of any kind. Your bodyweight,
1RMs, favourites and session live in the phone's localStorage and never
leave the device. The hosted copy is just the app itself. If you would
rather it not be publicly reachable at all, use the native APK/Xcode
projects in the native/ folder instead - those need no server ever.


-------------------------------------------------------------------------
INSTALL ON THE iPHONE 16 PRO MAX
-------------------------------------------------------------------------
  1. Open the URL in Safari (it must be Safari - Chrome on iOS cannot
     install web apps).
  2. Tap the Share button, scroll down, tap "Add to Home Screen", then Add.
  3. Launch it from the home screen. No Safari chrome, dark launch screen,
     and it now works in airplane mode.

The app shows a one-time hint with these steps the first time you open it
in Safari.


-------------------------------------------------------------------------
INSTALL ON THE GALAXY S25
-------------------------------------------------------------------------
  1. Open the URL in Chrome.
  2. An "Install M1 Pro Form Guide" bar appears - tap Install.
     (Or Chrome menu -> Add to Home screen -> Install.)
  3. It lands in the app drawer as a real app with its own icon and its own
     entry in the recent-apps switcher.

Long-pressing the installed icon gives shortcuts straight to Standards,
Builder, Favorites and Safety.


-------------------------------------------------------------------------
SHIPPING AN UPDATE LATER
-------------------------------------------------------------------------
Replace the files and bump the cache name at the top of sw.js:

    const CACHE = "m1pfg-v1";   ->   "m1pfg-v2"

Every installed phone picks up the new build the next time it opens with a
connection, and drops the stale cache.
