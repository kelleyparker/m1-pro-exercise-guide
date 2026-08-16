#!/usr/bin/env node
// One-time generator for the strength-standards multiplier tables.
// Anchors: reference bodyweight-multiple thresholds at 180 lb (male) / 140 lb (female),
// blended midpoints of ExRx, Strength Level, and Symmetric Strength style tables,
// scaled across bodyweight brackets with a mild allometric curve (lighter lifters
// carry higher relative multiples), rounded to 2 decimals.
// Output: data-standards.js with fully explicit tables (hand-editable per cell).
"use strict";
const fs = require("fs");

const BRACKETS = [115, 130, 145, 160, 175, 190, 205, 220, 240, 260];
const REF = { male: 180, female: 140 };

// Curve exponents: mult(bw) = ref * (refBW/bw)^e, e depends on light/heavy side.
const CURVES = {
  lower: { light: 0.10, heavy: 0.30 },
  upper: { light: 0.06, heavy: 0.28 },
  bwPlus: { light: 0.20, heavy: 0.55 }
};

// Reference thresholds = the bodyweight multiple at which you ENTER
// [Novice, Intermediate, Advanced, Elite, (World Class)].
const LIFTS = {
  backSquat:      { label: "Back Squat",            curve: "lower",  type: "barbell",
                    male: [0.90, 1.25, 1.75, 2.25, 2.75], female: [0.65, 0.95, 1.35, 1.75, 2.15] },
  frontSquat:     { label: "Front Squat",           curve: "lower",  type: "barbell",
                    male: [0.75, 1.05, 1.45, 1.85], female: [0.55, 0.80, 1.10, 1.42] },
  deadlift:       { label: "Conventional Deadlift", curve: "lower",  type: "barbell",
                    male: [1.10, 1.50, 2.05, 2.60, 3.10], female: [0.80, 1.15, 1.60, 2.05, 2.50] },
  sumoDeadlift:   { label: "Sumo Deadlift",         curve: "lower",  type: "barbell",
                    male: [1.10, 1.50, 2.05, 2.60], female: [0.80, 1.15, 1.60, 2.05] },
  rdl:            { label: "Romanian Deadlift",     curve: "lower",  type: "barbell",
                    male: [0.90, 1.25, 1.70, 2.15], female: [0.68, 0.98, 1.35, 1.72] },
  hipThrust:      { label: "Hip Thrust",            curve: "lower",  type: "barbell",
                    male: [1.00, 1.45, 2.00, 2.60], female: [0.95, 1.40, 1.95, 2.55] },
  benchPress:     { label: "Bench Press",           curve: "upper",  type: "barbell",
                    male: [0.70, 1.00, 1.40, 1.80, 2.20], female: [0.42, 0.62, 0.88, 1.15, 1.45] },
  inclinePress:   { label: "Incline Bench Press",   curve: "upper",  type: "barbell",
                    male: [0.60, 0.85, 1.20, 1.55], female: [0.36, 0.52, 0.75, 1.00] },
  closeGripBench: { label: "Close-Grip Bench Press", curve: "upper", type: "barbell",
                    male: [0.65, 0.92, 1.28, 1.65], female: [0.38, 0.57, 0.80, 1.05] },
  overheadPress:  { label: "Overhead Press",        curve: "upper",  type: "barbell",
                    male: [0.45, 0.66, 0.90, 1.15], female: [0.30, 0.44, 0.60, 0.78] },
  barbellRow:     { label: "Barbell Row",           curve: "upper",  type: "barbell",
                    male: [0.60, 0.85, 1.18, 1.50], female: [0.42, 0.60, 0.84, 1.08] },
  weightedPullup: { label: "Weighted Pull-Up",      curve: "bwPlus", type: "bodyweightPlus",
                    male: [1.00, 1.17, 1.40, 1.67], female: [0.92, 1.03, 1.20, 1.42] },
  weightedDip:    { label: "Weighted Dip",          curve: "bwPlus", type: "bodyweightPlus",
                    male: [1.05, 1.25, 1.50, 1.80], female: [0.96, 1.10, 1.28, 1.50] }
};

function row(refs, refBW, curve) {
  return BRACKETS.map(bw => {
    const e = bw <= refBW ? CURVES[curve].light : CURVES[curve].heavy;
    return refs.map(m => Math.round(m * Math.pow(refBW / bw, e) * 100) / 100);
  });
}

let out = `// ===== STRENGTH STANDARDS DATA ==============================================
// Tier thresholds as BODYWEIGHT MULTIPLES (1RM lbs / bodyweight lbs).
// Rows = bodyweight brackets BW_BRACKETS (lbs); the last row also serves 260+.
// Columns = the multiple at which you ENTER [Novice, Intermediate, Advanced,
// Elite, World Class?] - below the first column is Untrained. The app
// interpolates linearly between brackets. Blended estimate from widely
// published tables (ExRx / Strength Level / Symmetric Strength midpoints);
// edit any cell to taste. For "bodyweightPlus" lifts (pull-up, dip) the
// multiple is TOTAL system weight (bodyweight + added load) / bodyweight.
const BW_BRACKETS = [${BRACKETS.join(", ")}];
const TIER_NAMES = ["Untrained", "Novice", "Intermediate", "Advanced", "Elite", "World Class"];
const STANDARDS = {
`;

const entries = Object.entries(LIFTS);
entries.forEach(([key, L], idx) => {
  const male = row(L.male, REF.male, L.curve);
  const female = row(L.female, REF.female, L.curve);
  const fmt = rows => rows.map(r => "      [" + r.map(v => v.toFixed(2)).join(", ") + "]").join(",\n");
  out += `  ${key}: {\n    label: "${L.label}",\n    type: "${L.type}",\n    tiers: ${L.male.length},\n    male: [\n${fmt(male)}\n    ],\n    female: [\n${fmt(female)}\n    ]\n  }${idx < entries.length - 1 ? "," : ""}\n`;
});
out += `};\n`;

fs.writeFileSync(__dirname + "/data-standards.js", out);
console.log("Wrote data-standards.js");

// Sanity print: male & female 195 lb bench + 195 lb male squat/deadlift in lbs.
function interp(key, sex, bw) {
  const t = (key === "__" ? null : null);
  const rows = (LIFTS[key] ? null : null);
  return null;
}
const check = (key, sex, bw) => {
  const L = LIFTS[key];
  const tbl = row(L[sex], REF[sex], L.curve);
  let lo = 0, hi = BRACKETS.length - 1;
  if (bw <= BRACKETS[0]) lo = hi = 0;
  else if (bw >= BRACKETS[BRACKETS.length - 1]) lo = hi = BRACKETS.length - 1;
  else { for (let i = 0; i < BRACKETS.length - 1; i++) if (bw >= BRACKETS[i] && bw <= BRACKETS[i + 1]) { lo = i; hi = i + 1; } }
  const f = lo === hi ? 0 : (bw - BRACKETS[lo]) / (BRACKETS[hi] - BRACKETS[lo]);
  return tbl[lo].map((v, i) => {
    const m = v + (tbl[hi][i] - v) * f;
    return Math.round(m * bw / 5) * 5;
  });
};
console.log("male 195 bench (lbs):", check("benchPress", "male", 195).join(" / "));
console.log("male 195 squat (lbs):", check("backSquat", "male", 195).join(" / "));
console.log("male 195 deadlift (lbs):", check("deadlift", "male", 195).join(" / "));
console.log("male 195 pullup total (lbs):", check("weightedPullup", "male", 195).join(" / "));
console.log("female 140 bench (lbs):", check("benchPress", "female", 140).join(" / "));
