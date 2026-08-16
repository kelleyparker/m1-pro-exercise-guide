#!/usr/bin/env node
// Validates exercise data files against roster.json and the schema in SCHEMA.md.
// Per-file:  node validate.js data-1.js EX_PART_1
// All parts: node validate.js --all data-0.js:EX_PART_0 data-1.js:EX_PART_1 ...
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DIR = __dirname;
const roster = JSON.parse(fs.readFileSync(path.join(DIR, "roster.json"), "utf8"));
const byId = new Map(roster.exercises.map(e => [e.id, e]));
const MUSCLES = new Set(roster.muscles);
const KEY_ORDER = ["id","name","aka","station","attachments","primary","secondary","difficulty","pattern","standards","smithCaveat","anim","setup","steps","cues","mistakes","breathing","tempo","reps","safety","swaps"];
const KEYS = new Set(KEY_ORDER);
const PLACEHOLDER = /(TODO|TBD|PLACEHOLDER|lorem|Lorem|same pattern as|as above|similar to the above|\.\.\.)/;
const CURLY = /[‘’“”–—]/;

function loadArray(file, varName) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const issues = [];
  if (CURLY.test(raw)) issues.push(`${file}: contains curly quotes or en/em dashes - use straight ASCII`);
  if (/```/.test(raw)) issues.push(`${file}: contains markdown fences`);
  const ctx = {};
  vm.createContext(ctx);
  try { vm.runInContext(raw + `\n;__out = ${varName};`, ctx, { filename: file }); }
  catch (e) { issues.push(`${file}: does not evaluate: ${e.message}`); return { arr: null, issues }; }
  if (!Array.isArray(ctx.__out)) issues.push(`${file}: ${varName} is not an array`);
  return { arr: ctx.__out, issues };
}

function deepEq(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

function checkEntry(e, issues) {
  const tag = e && e.id ? e.id : "(no id)";
  const err = m => issues.push(`${tag}: ${m}`);
  if (!e || typeof e !== "object") { err("not an object"); return; }
  for (const k of Object.keys(e)) if (!KEYS.has(k)) err(`unknown key "${k}"`);
  const r = byId.get(e.id);
  if (!r) { err("id not in roster"); return; }
  for (const k of ["name","station","difficulty","pattern"]) if (e[k] !== r[k]) err(`${k} must match roster verbatim ("${r[k]}")`);
  if (!deepEq(e.attachments, r.attachments)) err(`attachments must match roster verbatim ${JSON.stringify(r.attachments)}`);
  if (!deepEq(e.anim, r.anim)) err(`anim must match roster verbatim ${JSON.stringify(r.anim)}`);
  if (r.standards) { if (e.standards !== r.standards) err(`standards must be "${r.standards}"`); }
  else if ("standards" in e) err("standards key must be omitted");
  if (r.smithCaveat) { if (e.smithCaveat !== true) err("smithCaveat: true required"); }
  else if ("smithCaveat" in e) err("smithCaveat key must be omitted");
  const arr = (k, lo, hi) => {
    if (!Array.isArray(e[k])) { err(`${k} must be an array`); return false; }
    if (e[k].length < lo || e[k].length > hi) err(`${k} needs ${lo}-${hi} items, has ${e[k].length}`);
    return true;
  };
  if (arr("aka", 0, 3)) e.aka.forEach(s => { if (typeof s !== "string" || !s.trim()) err("aka: empty item"); });
  if (arr("primary", 1, 3)) e.primary.forEach(m => { if (!MUSCLES.has(m)) err(`primary muscle "${m}" not in vocabulary`); });
  if (arr("secondary", 0, 4)) {
    e.secondary.forEach(m => { if (!MUSCLES.has(m)) err(`secondary muscle "${m}" not in vocabulary`); });
    e.secondary.forEach(m => { if (e.primary && e.primary.includes(m)) err(`"${m}" in both primary and secondary`); });
  }
  if (arr("setup", 3, 6)) e.setup.forEach(s => { if (typeof s !== "string" || s.length < 15) err("setup line too short/typed wrong"); });
  if (arr("steps", 4, 7)) e.steps.forEach(s => { if (typeof s !== "string" || s.length < 10) err("step too short"); });
  if (arr("cues", 3, 6)) e.cues.forEach(s => {
    if (typeof s !== "string" || !s.trim()) err("cue empty");
    else if (s.split(/\s+/).length > 12) err(`cue too long: "${s}"`);
  });
  if (arr("mistakes", 3, 5)) e.mistakes.forEach(o => {
    if (!o || typeof o.m !== "string" || typeof o.fix !== "string" || o.m.length < 8 || o.fix.length < 8) err("mistakes items need {m, fix} strings");
  });
  if (typeof e.breathing !== "string" || e.breathing.length < 15 || e.breathing.length > 220) err("breathing: one concrete sentence required");
  if (typeof e.tempo !== "string" || e.tempo.length < 5 || e.tempo.length > 90) err("tempo string required");
  if (!e.reps || typeof e.reps.strength !== "string" || typeof e.reps.hypertrophy !== "string") err("reps needs {strength, hypertrophy} strings");
  if (arr("safety", 2, 4)) e.safety.forEach(s => { if (typeof s !== "string" || s.length < 12) err("safety line too short"); });
  if (arr("swaps", 1, 2)) e.swaps.forEach(s => {
    if (!byId.has(s)) err(`swap "${s}" not a roster id`);
    if (s === e.id) err("swap references self");
  });
  const needsCatchNote = (e.station === "Smith" || e.station === "Cage/Barbell") && ["Squat","Hinge","Horizontal Push","Vertical Push"].includes(e.pattern);
  if (needsCatchNote && Array.isArray(e.safety) && !e.safety.some(s => /(spotter arm|safety arm|safeties|catch|spring hook|j-hook|J-hook)/i.test(s))) {
    err("safety must state where the safety arms / catches / spring hooks go for this lift");
  }
  const blob = JSON.stringify(e);
  if (PLACEHOLDER.test(blob)) err("contains placeholder-ish text (TODO/TBD/'as above'/ellipsis)");
}

function run(pairs, checkCoverage) {
  let all = [];
  let issues = [];
  for (const [file, varName] of pairs) {
    const { arr, issues: fi } = loadArray(file, varName);
    issues = issues.concat(fi);
    if (arr) all = all.concat(arr);
  }
  const seen = new Set();
  for (const e of all) {
    if (e && e.id) {
      if (seen.has(e.id)) issues.push(`${e.id}: duplicate id`);
      seen.add(e.id);
    }
    checkEntry(e, issues);
  }
  if (checkCoverage) {
    for (const id of byId.keys()) if (!seen.has(id)) issues.push(`MISSING from all parts: ${id}`);
    console.log(`Coverage: ${seen.size}/${byId.size} roster exercises present`);
  }
  if (issues.length) {
    console.log(`FAIL - ${issues.length} issue(s):`);
    issues.forEach(i => console.log("  - " + i));
    process.exit(1);
  }
  console.log(`PASS - ${all.length} entries clean`);
}

const args = process.argv.slice(2);
if (args[0] === "--all") {
  run(args.slice(1).map(a => a.split(":")), true);
} else {
  run([[path.basename(args[0]), args[1]]], false);
}
