# M1 Pro Form Guide - Exercise Data Authoring Brief

You are writing exercise entries for a single-file offline training reference site built around
the RitFit M1 Pro all-in-one home gym (Smith machine + power cage + dual cable stacks) in a garage.
Your output is a plain JavaScript data file. Another process assembles all parts into the final site.

## The machine (ground truth - setup lines must match this hardware)

- Smith bar on a fixed vertical linear-bearing track. 11 selectable catch heights. You rotate the
  bar/wrists to release or re-engage the spring safety hooks onto any catch. Rated ~1500+ lbs.
- Power cage uprights (2x2" steel, 1-inch hole spacing) with J-hooks and two adjustable safety
  spotter arms for free-barbell work inside the cage. An Olympic barbell and plates are available.
- Dual cable crossover: 15 carriage positions per side (floor to overhead), 360-degree rotating
  pulleys, selectorized stacks ~143 lb per side, 2:1 pulley ratio (handle receives roughly HALF the
  number selected on the stack). DO NOT explain the 2:1 ratio inside entries - the app shows an
  automatic reminder on every cable exercise. Never reference stack numbers as if they were handle loads.
- Lat pulldown station (high pulley) and a low row position with a foot tube / footplate.
- Multi-grip pull-up bar (28 mm knurled) on top of the cage, includes neutral handles.
- Accessories: landmine pivot at the base of the frame, T-bar row attachment, dip handles that mount
  on the uprights, band pegs, two single D-handles, a lat bar, a short straight bar, a rope,
  an ankle strap, a foot tube / footplate.
- Adjustable bench: flat / incline / decline.
- Garage setting: mention ceiling / pull-up bar clearance where overhead barbell work applies.

Describe positions descriptively ("a catch at armpit height", "carriage just above head height",
"lowest catch") - NEVER invent hole numbers like "hole 7".

## File you produce

A single plain-JS file (told to you in your task) of the exact shape:

```js
// M1 Pro Form Guide - exercise data (part N)
const EX_PART_N = [
  { ...entry... },
  { ...entry... }
];
```

Rules: valid strict JavaScript (`node --check` must pass). No exports, no imports, no markdown
fences, no template literals, no comments other than the one header line. Double-quoted strings.
Straight ASCII quotes only (no curly quotes). Use plain hyphens (write "3-5", "30-45 degrees";
no en-dashes, no degree symbols). 2-space indent. No trailing text after the closing `];`.

## Entry schema - every entry has EXACTLY these keys, in this order

| key | type | rule |
|---|---|---|
| id | string | copy VERBATIM from roster.json |
| name | string | copy VERBATIM from roster.json |
| aka | string[] | 0-3 realistic alternate names |
| station | string | copy VERBATIM from roster.json |
| attachments | string[] | copy VERBATIM from roster.json |
| primary | string[] | 1-3 muscles, ONLY from the muscles list in roster.json |
| secondary | string[] | 0-4 muscles, same vocabulary, no overlap with primary |
| difficulty | string | copy VERBATIM from roster.json |
| pattern | string | copy VERBATIM from roster.json |
| standards | string | ONLY if present in roster.json - copy verbatim; otherwise OMIT the key |
| smithCaveat | true | ONLY if present in roster.json; otherwise OMIT the key |
| anim | object | copy the roster.json anim object VERBATIM (deep-equal is checked) |
| setup | string[] | 3-6 lines: exact machine setup - catch/carriage height, safety arm position, bench angle, attachment, body position relative to the frame |
| steps | string[] | 4-7 numbered-order execution steps, imperative voice |
| cues | string[] | 3-6 short coaching lines, max ~9 words, recallable mid-set |
| mistakes | {m,fix}[] | 3-5 objects: m = the observable error, fix = the correction |
| breathing | string | one concrete sentence |
| tempo | string | like "3-0-1-0 - three seconds down, no pause, drive up." |
| reps | object | { strength: "4-6", hypertrophy: "8-12" } - sensible per exercise; for light isolation moves the strength value may carry a short parenthetical |
| safety | string[] | 2-4 lines, concrete: where the spotter arms / spring hooks / catches go, the bail plan, load honesty |
| swaps | string[] | 1-2 OTHER ids from roster.json training the same pattern or primary muscle, never self |

The roster `note` field is background for YOU - absorb its facts into setup/steps, never copy the
key into your output.

## Voice

Plain imperative second person. Short sentences. A competent coach talking, not a brochure.
No "this amazing exercise", no medical claims, no filler. Cues are things you can say mid-set.
Safety lines are specific to THIS lift on THIS machine (e.g. "Set the spotter arms one hole below
your bottom-position bar height" - not "be careful").

For barbell/Smith compound lifts, at least one safety line MUST state where the safety arms,
catches, or spring hooks go, and one MUST state the bail plan.

For rep ranges: big compounds roughly strength 3-6 / hypertrophy 6-12; isolation and cable work
roughly 6-10 / 10-20; core work often time-or-rep based like "10-20 controlled".

## Two finished exemplars (already in the build - do NOT re-author these ids)

Study them; match their density and tone exactly. They live in parts/data-0.js:
smith-back-squat and cbl-face-pull.

## Process (follow exactly)

1. Read parts/roster.json fully. Read parts/data-0.js fully.
2. Write your assigned entries IN ROSTER ORDER into your assigned file. Write it in 2-3 chunks
   (create the file, then append with the Edit tool) so nothing truncates.
3. Run: `node --check parts/data-N.js` - fix any syntax error.
4. Run: `node parts/validate.js parts/data-N.js EX_PART_N` - fix EVERY reported issue and re-run
   until it prints PASS.
5. Final message: exactly one line - entry count and "validator PASS", or the unresolved issues.
