# M1 Pro Form Guide

An offline, interactive training reference for a home gym built around a
**RitFit M1 Pro** Smith machine / power cage. 93 exercises with machine-specific
setup, form cues, mistakes-and-fixes, animated demonstrations, and
bodyweight-adjusted strength standards.

Built to be opened on a TV in the garage and on a phone mid-set — so the whole
thing is **one HTML file with zero dependencies**, no CDN links, no build step
required to run it, and no network access at any point.

![Exercises](https://img.shields.io/badge/exercises-93-38c7e3)
![Dependencies](https://img.shields.io/badge/runtime%20dependencies-0-38c7e3)
![Offline](https://img.shields.io/badge/works%20offline-always-35a463)

---

## What's here

| Path | What it is |
|---|---|
| `m1-pro-form-guide.html` | **The app.** One self-contained file. Open it in any browser. |
| `build/pwa/` | Deployable folder that phones can *install* (manifest + service worker + icons). |
| `native/ios/` | Xcode project — wraps the guide as a real iOS app. |
| `native/android/` | Gradle project — wraps it as a sideloadable APK. |
| `parts/` | Source. The single file is assembled from these. |

## Features

- **93 exercises** across 8 stations: Smith machine, free barbell in the cage,
  three cable carriage heights, landmine/T-bar, bodyweight on the frame, and bench work.
  Each entry carries exact machine setup (catch heights, safety-arm positions, bench
  angles, body position relative to the frame), 4–7 execution steps, short recallable
  cues, mistakes paired with corrections, breathing and tempo, rep ranges for strength
  vs hypertrophy, lift-specific safety notes, and swap suggestions.
- **Native SVG animations.** No GIFs, no external media. An articulated figure is driven
  by keyframed joint angles through ~30 reusable motion templates, with equipment drawn
  into the same scene — the Smith track, cage uprights, cable line and moving stack, the
  bench at its actual angle, the landmine pivot. Play/pause and 0.4× slow motion.
  Exercises that resist animation fall back to a start/end pose pair.
- **Strength standards.** Tier classification (Untrained → World Class) from bodyweight
  multiples, interpolated across 10 bodyweight brackets, with separate male and female
  tables. Per-lift bars, a stacked comparison view, a squat+bench+deadlift total, and an
  Epley/Brzycki 1RM calculator that can push its estimate straight onto a bar.
- **Honest about the Smith machine.** Published standards describe free-weight barbell
  lifts. Smith variants hide their standards bar by default behind an explicit warning,
  or show it greyed out — because a fixed bar path removes stabilizer demand and the bar
  isn't 45 lb.
- **The 2:1 cable ratio, stated once and everywhere it matters.** The M1 Pro's handle
  delivers roughly half the number selected on the stack. Every cable exercise says so.
- Search, multi-select filters (AND across categories, OR within), favorites, a workout
  builder with drag/reorder and text export, a muscle map, deep-linkable URLs, a print
  stylesheet that swaps animations for static start/end frames, and light/dark themes.

## Design targets

Two first-class layouts, both verified in headless Chromium:

- **16:9 desktop / TV** — 1920×1080 reference, checked at 1280×720, 1600×900, 2560×1440.
  Persistent sidebar, 3–5 column grid, type scaled for reading from across a garage,
  two-pane detail view that keeps the animation pinned while the cues scroll, full
  keyboard navigation (`/` to search, `J`/`K` between exercises, `Esc` to close).
- **iPhone 16 Pro Max** — 440×956 @3x, checked down to 320px wide plus landscape.
  Safe-area insets for the Dynamic Island and home indicator, `100dvh`, bottom-sheet
  filters, 44px minimum touch targets, 16px inputs so iOS never auto-zooms, and swipe
  left/right between exercises.

## Running it

Just open `m1-pro-form-guide.html`. That's the whole story — file:// works fine.

To install it on a phone as a real app, see [`build/pwa/README.txt`](build/pwa/README.txt).
To build the native wrappers, see [`native/README.txt`](native/README.txt).

## Building from source

```bash
parts/build.sh          # assembles both the single file and build/pwa/
```

The build is a shell script and `cat`. There is no bundler, no transpiler, and no
package to install for the app itself.

```bash
npm install             # only needed for the test suites (Playwright)
node parts/test.mjs     # 63 checks across every target viewport
node parts/pwa-test.mjs # manifest, service worker, offline cold boot
node parts/validate.js --all data-0.js:EX_PART_0 ... # exercise data schema
```

## Source layout

```
parts/
  roster.json         canonical exercise list — ids, stations, patterns, animation refs
  SCHEMA.md           authoring brief for exercise entries
  data-0..5.js        the 93 entries, grouped by station
  standards-gen.js    generates the strength tables ->
  data-standards.js   tier thresholds as bodyweight multiples (male/female × 10 brackets)
  anim.js             SVG rig, pose solvers, ~30 motion templates, player
  app.js              state, routing, search/filters, standards UI, builder
  styles.css          mobile-first; min-width queries up to TV sizes
  head.html body.html docs.js    document shell + inline schema documentation
  manifest.webmanifest sw.js pwa-head.html pwa-boot.js   installable-web-app layer
  mkicons.py          generates the icon set from geometry (no source image needed)
  build.sh            assembles everything
  validate.js         schema validator for the exercise data
  test.mjs pwa-test.mjs   Playwright verification
```

### Adding an exercise

Append an object to any `EX_PART_*` array following the schema documented at the top of
the built file (and in `parts/SCHEMA.md`), give it a unique `id`, point `anim` at an
existing template, and rebuild. It appears in search, filters, the muscle map, the
builder, and deep links automatically.

### Adjusting strength standards

Edit cells in `parts/data-standards.js` directly, or change the reference multiples in
`parts/standards-gen.js` and regenerate. Rows are bodyweight brackets, columns are the
multiple at which you *enter* each tier.

## Accuracy notes

Strength tiers are estimates blended from widely published tables (ExRx, Strength Level,
Symmetric Strength) at their midpoints. They describe population distribution — not
health, capability, or worth — and lever lengths and training history make individual
comparison noisy. This is general reference material, not coaching or medical advice.
