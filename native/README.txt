M1 PRO FORM GUIDE - NATIVE APP PROJECTS
=======================================

Two complete, buildable app projects that wrap the guide as a real installed
app. Both bundle the entire guide inside the app binary, so neither ever
touches the network. No hosting, no accounts for Android, no signal needed
in the garage.

  ios/       Xcode project  -> app on the iPhone 16 Pro Max
  android/   Gradle project -> sideloadable APK for the Galaxy S25

Both were written and structure-checked on Linux, but neither could be
COMPILED here: Google's build hosts (dl.google.com, maven.google.com,
services.gradle.org) are firewalled off in the sandbox this was built in, so
there is no Android SDK and no Xcode toolchain available. Compiling happens
on your Mac. Everything else is done.


-------------------------------------------------------------------------
ANDROID  ->  Galaxy S25
-------------------------------------------------------------------------
Needs: Android Studio (free, macOS/Linux/Windows). First launch downloads
the SDK it needs automatically.

  1. Android Studio -> Open -> pick the "android" folder.
  2. Wait for the first Gradle sync (it fetches the SDK and dependencies).
  3. Plug in the S25 with USB debugging on, hit Run.

Or from a terminal, with no Android Studio UI at all:

     cd android
     ./gradlew assembleDebug
     # APK lands at app/build/outputs/apk/debug/app-debug.apk
     adb install -r app/build/outputs/apk/debug/app-debug.apk

The debug build is signed with the local debug key, so it installs by
sideload with no signing setup. To put the APK on the phone without adb,
copy it over and open it in the Files app (allow "install unknown apps"
for whichever app you open it from).

For a smaller, optimised build:  ./gradlew assembleRelease
That one needs your own signing key - see
https://developer.android.com/studio/publish/app-signing

Notes on the implementation:
  - The page is served through WebViewAssetLoader on a virtual https origin,
    not a raw file:// URL. file:// is an opaque origin where DOM storage is
    unreliable across WebView versions, and this app keeps your 1RMs,
    favourites and session in localStorage. A real origin makes it a
    guarantee.
  - Zero permissions are declared in the manifest. The app cannot reach the
    network even if it wanted to.
  - Edge-to-edge, with the web layer's env(safe-area-inset-*) doing the
    spacing. System bar icons flip automatically with the app's theme.
  - Gesture/hardware back walks the app's own history and only exits when
    there is nothing left to go back to.
  - minSdk 26. The Gradle wrapper is included, so ./gradlew works without
    installing Gradle first.


-------------------------------------------------------------------------
iOS  ->  iPhone 16 Pro Max
-------------------------------------------------------------------------
Needs: a Mac with Xcode (free from the Mac App Store).

  1. Open ios/M1ProFormGuide.xcodeproj in Xcode.
  2. Select the M1ProFormGuide target -> Signing & Capabilities.
  3. Set Team to your Apple ID, and change the Bundle Identifier from
     com.example.m1proformguide to something unique to you, e.g.
     com.kelleyparker.m1proformguide  (Apple rejects duplicates globally.)
  4. Plug in the iPhone, pick it as the run destination, press Run.
  5. First run only: on the phone, Settings -> General -> VPN & Device
     Management -> trust your developer certificate.

How long it stays installed depends on the account you signed with:

  Free Apple ID
     Provisioning profiles "expire 7 days from issuance, which may require
     you to rebuild and re-install your app to your device after
     expiration." Limited to 3 devices and 10 App IDs at a time. Costs
     nothing; you just re-run from Xcode each week.

  Apple Developer Program ($99/year)
     No re-provisioning limitation - a development build runs for a year.
     This tier also unlocks TestFlight, which is the closest thing to
     genuinely "publishing" it: archive the app, upload to App Store
     Connect, and install it on the phone through the TestFlight app with
     no cable and no Xcode. Handy if you want it on more than one device or
     want to hand it to a training partner.

  (Source: https://developer.apple.com/support/compare-memberships/)

To archive for TestFlight: Product -> Destination -> Any iOS Device, then
Product -> Archive, then Distribute App -> TestFlight & App Store.

Notes on the implementation:
  - UIKit, no storyboards, minimum iOS 15.
  - WKWebView pinned to the raw window edges, NOT the safe area, because the
    guide's CSS already reserves room for the Dynamic Island and the home
    indicator. Double-insetting would leave dead bands.
  - The launch screen uses a dark colour asset, so there is no white flash
    before the app draws.
  - Status bar style follows the app's theme through a small JS bridge that
    watches <html data-theme>. No change to the web app was needed.
  - System edge-swipe-back is disabled on purpose: the guide has its own
    left/right swipe for moving between exercises and the two would fight.
  - Pinch-to-zoom on the animations is left enabled.


-------------------------------------------------------------------------
UPDATING THE GUIDE INSIDE EITHER APP
-------------------------------------------------------------------------
Both projects embed a copy of the same single HTML file. To ship a newer
version of the guide, just replace it and rebuild:

  ios/M1ProFormGuide/Resources/index.html
  android/app/src/main/assets/index.html
