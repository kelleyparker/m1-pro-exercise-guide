/* ===== APP LOGIC ============================================================ */

/* ---------- tiny utils ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const KG = 0.45359237;

const LS = {
  get(k, d) { try { const v = localStorage.getItem("m1pfg." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("m1pfg." + k, JSON.stringify(v)); } catch (e) { /* private mode etc - non-fatal */ } }
};

/* ---------- constants ---------- */
const STATIONS = ["Smith", "Cage/Barbell", "Cable High", "Cable Mid", "Cable Low", "Landmine", "Bodyweight", "Bench"];
const ST_VAR = { "Smith": "--st-smith", "Cage/Barbell": "--st-cage", "Cable High": "--st-cblh", "Cable Mid": "--st-cblm", "Cable Low": "--st-cbll", "Landmine": "--st-land", "Bodyweight": "--st-body", "Bench": "--st-bench" };
const PATTERNS = ["Squat", "Hinge", "Horizontal Push", "Vertical Push", "Horizontal Pull", "Vertical Pull", "Rotation", "Isolation", "Core"];
const DIFFS = ["Beginner", "Intermediate", "Advanced"];
const TIER_VARS = ["--tier-u", "--tier-n", "--tier-i", "--tier-a", "--tier-e", "--tier-w"];
const MUSCLE_ORDER = ["Chest", "Upper Chest", "Lats", "Upper Back", "Traps", "Rear Delts", "Front Delts", "Side Delts", "Biceps", "Triceps", "Forearms", "Quads", "Glutes", "Hamstrings", "Adductors", "Calves", "Core", "Obliques", "Lower Back", "Hip Flexors", "Rotator Cuff", "Serratus"];
const ATTACH_ORDER = ["Bench", "Lat bar", "Straight bar", "Rope", "Single D-handle", "Two D-handles", "Ankle strap", "Dip handles", "Band", "Footplate", "T-bar handle"];
const byId = new Map(EXERCISES.map(e => [e.id, e]));
const SMITH_NOTE = "Published standards describe free-weight barbell lifts. A Smith machine's fixed path removes most stabilizer demand and its bar is lighter than a 45 lb Olympic bar, so Smith numbers usually overstate free-weight strength. Compare Smith lifts against your own Smith history, not these tables.";
const EST_NOTE = "Tiers describe where a lift sits in the general lifting population - an estimate blended from published tables (ExRx, Strength Level, Symmetric Strength). They are not a measure of health, capability, or worth, and lever lengths and training history make individual comparison noisy.";

const ICONS = {
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2-5.6-3.2-5.6 3.2 1.3-6.2L3 9.5l6.3-.7z"/></svg>',
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2-5.6-3.2-5.6 3.2 1.3-6.2L3 9.5l6.3-.7z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 12h12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8l1.2 2.6 2.8-.7 1.4 2.4 2.6 1.2-.7 2.8 1.9 2.1-1.9 2.1.7 2.8-2.6 1.2-1.4 2.4-2.8-.7L12 21.2l-1.2-2.6-2.8.7-1.4-2.4-2.6-1.2.7-2.8L2.8 12l1.9-2.1-.7-2.8 2.6-1.2 1.4-2.4 2.8.7z" stroke-linejoin="round"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 6l-6 6 6 6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 6l6 6-6 6"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14.5l6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9.5l6 6 6-6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.8v14.4L19.2 12z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4.2" height="14" rx="1.2"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.2"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.4"/><path d="M12 7.4V12l3.2 2.4"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6.6" height="6.6" rx="1.6"/><rect x="13.4" y="4" width="6.6" height="6.6" rx="1.6"/><rect x="4" y="13.4" width="6.6" height="6.6" rx="1.6"/><rect x="13.4" y="13.4" width="6.6" height="6.6" rx="1.6"/></svg>',
  bars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 19V10M12 19V4M19 19v-6"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M8.5 6h11M8.5 12h11M8.5 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/></svg>',
  muscle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 4.5h4L9 9.5c3.5-1.5 8 0 8.5 4.5.4 3.5-2.5 5.5-6 5.5-4.5 0-8-2.6-7.5-7z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 7.7-7.5 9.5-4.3-1.8-7.5-4.9-7.5-9.5V6z"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4L2.8 19.6h18.4z"/><path d="M12 10v4.4M12 17.3v.01"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M5.5 15.5h-1a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7.5 11l4.5 4.5L16.5 11M4.5 19.5h15"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 6.5h15M9.5 6V4.5h5V6M6.5 6.5l1 13h9l1-13"/></svg>',
  grab: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M7 8V3.5h10V8M7 17H4.5v-7h15v7H17"/><rect x="7" y="14.5" width="10" height="6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.6"/><path d="M12 11v5.4M12 7.6v.01"/></svg>'
};

/* ---------- state ---------- */
const state = {
  settings: Object.assign({ bw: 195, unit: "lb", sex: null, age: null, smithStd: "hidden" }, LS.get("settings", {})),
  favs: new Set(LS.get("favs", [])),
  orms: LS.get("orms", {}),
  builder: LS.get("builder", []),
  introDismissed: LS.get("introDismissed", false),
  q: "", view: "lib", exId: null,
  filters: { station: new Set(), muscle: new Set(), pattern: new Set(), difficulty: new Set(), attachment: new Set(), fav: false },
  filtered: EXERCISES.slice()
};
let appAnim = null, printAnims = [], lastFocusCard = null, suppressHash = false;

const saveSettings = () => LS.set("settings", state.settings);
const saveFavs = () => LS.set("favs", Array.from(state.favs));
const saveOrms = () => LS.set("orms", state.orms);
const saveBuilder = () => LS.set("builder", state.builder);

/* ---------- units ---------- */
const isKg = () => state.settings.unit === "kg";
const round5 = v => Math.round(v / 5) * 5;
function fmtW(lbs, opts) {
  const o = opts || {};
  if (isKg()) { const kg = lbs * KG; const r = o.exact ? Math.round(kg * 10) / 10 : Math.round(kg / 2.5) * 2.5; return (r % 1 ? r.toFixed(1) : r) + (o.bare ? "" : " kg"); }
  const r = o.exact ? Math.round(lbs) : round5(lbs);
  return r + (o.bare ? "" : " lb");
}
const dispVal = lbs => isKg() ? Math.round(lbs * KG * 10) / 10 : Math.round(lbs);
const inputToLbs = v => isKg() ? v / KG : v;

/* ---------- strength standards math ---------- */
function interpMults(rows, bw) {
  const B = BW_BRACKETS;
  if (bw <= B[0]) return rows[0].slice();
  if (bw >= B[B.length - 1]) return rows[B.length - 1].slice();
  let i = 0;
  while (i < B.length - 2 && bw > B[i + 1]) i++;
  const f = (bw - B[i]) / (B[i + 1] - B[i]);
  return rows[i].map((v, j) => v + (rows[i + 1][j] - v) * f);
}
// -> { key, def, mults[], lbs[] (threshold 1RMs; TOTAL for bodyweightPlus), names[] }
function thresholdsFor(key) {
  const s = state.settings;
  if (!s.sex) return null;
  const def = STANDARDS[key];
  if (!def) return null;
  const mults = interpMults(def[s.sex], s.bw);
  const lbs = mults.map(m => m * s.bw);
  const names = TIER_NAMES.slice(1, 1 + mults.length);
  return { key, def, mults, lbs, names };
}
// oneRm: TOTAL lbs (bodyweight + added for bwPlus). -> classification
function classify(th, oneRm) {
  let idx = 0; // 0 = Untrained
  for (let i = 0; i < th.lbs.length; i++) if (oneRm >= th.lbs[i]) idx = i + 1;
  const tierName = idx === 0 ? TIER_NAMES[0] : th.names[idx - 1];
  const next = idx < th.lbs.length ? { name: th.names[idx], lbs: th.lbs[idx] - oneRm } : null;
  return { idx, tierName, next, mult: oneRm / state.settings.bw };
}
const tierVar = idx => idx === 0 ? "--tier-u" : TIER_VARS[Math.min(idx, TIER_VARS.length - 1)];
// stored orm for an exercise in TOTAL lbs (adds bodyweight for pull-up/dip)
function ormTotal(ex) {
  const raw = state.orms[ex.id];
  if (raw == null) return null;
  const def = STANDARDS[ex.standards];
  return def && def.type === "bodyweightPlus" ? state.settings.bw + raw : raw;
}
function epley(w, r) { return r === 1 ? w : w * (1 + r / 30); }
function brzycki(w, r) { return r === 1 ? w : w * 36 / (37 - Math.min(r, 36)); }

/* ---------- search + filters ---------- */
const searchBlob = new Map(EXERCISES.map(e => [e.id,
  [e.name, (e.aka || []).join(" "), e.station, e.pattern, e.primary.join(" "), e.secondary.join(" "), e.cues.join(" "), (e.attachments || []).join(" ")].join(" ").toLowerCase()
]));
function applyFilters() {
  const f = state.filters, q = state.q.trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];
  state.filtered = EXERCISES.filter(e => {
    if (f.fav && !state.favs.has(e.id)) return false;
    if (f.station.size && !f.station.has(e.station)) return false;
    if (f.pattern.size && !f.pattern.has(e.pattern)) return false;
    if (f.difficulty.size && !f.difficulty.has(e.difficulty)) return false;
    if (f.muscle.size && !e.primary.some(m => f.muscle.has(m))) return false;
    if (f.attachment.size) {
      const at = e.attachments.length ? e.attachments : ["None"];
      if (!at.some(a => f.attachment.has(a))) return false;
    }
    if (terms.length) { const blob = searchBlob.get(e.id); if (!terms.every(t => blob.includes(t))) return false; }
    return true;
  });
}
const activeFilterCount = () => { const f = state.filters; return f.station.size + f.muscle.size + f.pattern.size + f.difficulty.size + f.attachment.size + (f.fav ? 1 : 0); };

/* ---------- hash routing ---------- */
function buildHash() {
  if (state.exId) return "#/ex/" + state.exId;
  if (state.view !== "lib") return "#/" + state.view;
  const f = state.filters, p = new URLSearchParams();
  if (f.station.size) p.set("st", Array.from(f.station).join("|"));
  if (f.muscle.size) p.set("mu", Array.from(f.muscle).join("|"));
  if (f.pattern.size) p.set("pt", Array.from(f.pattern).join("|"));
  if (f.difficulty.size) p.set("df", Array.from(f.difficulty).join("|"));
  if (f.attachment.size) p.set("at", Array.from(f.attachment).join("|"));
  if (f.fav) p.set("fav", "1");
  if (state.q.trim()) p.set("q", state.q.trim());
  const qs = p.toString();
  return "#/lib" + (qs ? "?" + qs : "");
}
function updateHash(push) {
  const h = buildHash();
  if (location.hash === h) return;
  suppressHash = true;
  if (push) location.hash = h;
  else history.replaceState(null, "", location.pathname + location.search + h);
  setTimeout(() => { suppressHash = false; }, 0);
}
function parseHash() {
  const h = location.hash || "#/lib";
  const mEx = h.match(/^#\/ex\/([a-z0-9-]+)/);
  if (mEx && byId.has(mEx[1])) { state.exId = mEx[1]; return; }
  state.exId = null;
  const mView = h.match(/^#\/(standards|muscles|builder|safety)\b/);
  if (mView) { state.view = mView[1]; return; }
  state.view = "lib";
  const qi = h.indexOf("?");
  const f = state.filters;
  ["station", "muscle", "pattern", "difficulty", "attachment"].forEach(k => f[k].clear());
  f.fav = false; state.q = "";
  if (qi > -1) {
    const p = new URLSearchParams(h.slice(qi + 1));
    const setF = (k, key) => { const v = p.get(k); if (v) v.split("|").forEach(x => f[key].add(x)); };
    setF("st", "station"); setF("mu", "muscle"); setF("pt", "pattern"); setF("df", "difficulty"); setF("at", "attachment");
    if (p.get("fav")) f.fav = true;
    if (p.get("q")) state.q = p.get("q");
  }
}

/* ---------- shared render bits ---------- */
const stStyle = st => `style="--stc:var(${ST_VAR[st]})"`;
const badge = (txt, cls) => `<span class="badge ${cls || ""}">${esc(txt)}</span>`;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 1900);
}

/* ---------- navigation ---------- */
const NAV = [
  { id: "lib", label: "Library", icon: "grid", hash: "#/lib" },
  { id: "standards", label: "Standards", icon: "bars", hash: "#/standards" },
  { id: "builder", label: "Builder", icon: "list", hash: "#/builder" },
  { id: "muscles", label: "Muscles", icon: "muscle", hash: "#/muscles" },
  { id: "safety", label: "Safety", icon: "shield", hash: "#/safety" }
];
function renderNav() {
  const cur = state.view;
  const mk = n => `<a href="${n.hash}" class="${cur === n.id && !state.exId ? "on" : ""}" data-nav="${n.id}">${ICONS[n.icon]}<span>${n.label}</span>${n.id === "builder" && state.builder.length ? `<span class="${innerWidth >= 1000 ? "cnt" : "bcount"}">${state.builder.length}</span>` : ""}</a>`;
  $("#topnav").innerHTML = NAV.map(mk).join("");
  $("#bottombar").innerHTML = NAV.map(mk).join("");
  const fab = $("#filterFab");
  if (state.view === "lib") {
    fab.hidden = false;
    fab.innerHTML = ICONS.filter + (activeFilterCount() ? `<span class="fcount">${activeFilterCount()}</span>` : "");
  } else fab.hidden = true;
}

/* ---------- sidebar (filters + nav) ---------- */
function chipGroup(title, items, set, extra) {
  const chips = items.map(it => {
    const v = typeof it === "string" ? it : it.v;
    const dot = typeof it === "object" && it.dot ? `<span class="dot" style="--stc:var(${it.dot})"></span>` : "";
    return `<button class="chip ${set.has(v) ? "on" : ""}" data-fg="${esc(title)}" data-fv="${esc(v)}" ${typeof it === "object" && it.dot ? `style="--stc:var(${it.dot})"` : ""}>${dot}${esc(v)}</button>`;
  }).join("");
  return `<div class="side-group"><div class="side-title">${esc(title)}${extra || ""}</div><div class="chips">${chips}</div></div>`;
}
function renderSidebar() {
  const f = state.filters;
  const attaches = ["None"].concat(ATTACH_ORDER.filter(a => EXERCISES.some(e => e.attachments.includes(a))));
  const musclesInUse = MUSCLE_ORDER.filter(m => EXERCISES.some(e => e.primary.includes(m)));
  $("#sidebarInner").innerHTML = `
    <nav class="side-nav side-nav-mobileonly">${NAV.map(n => `<a href="${n.hash}" class="${state.view === n.id && !state.exId ? "on" : ""}">${ICONS[n.icon]}<span>${n.label}</span>${n.id === "builder" && state.builder.length ? `<span class="cnt">${state.builder.length}</span>` : ""}</a>`).join("")}</nav>
    <div class="side-group"><div class="side-title">Quick</div><div class="chips">
      <button class="chip ${f.fav ? "on" : ""}" data-favchip="1">${state.favs.size ? "&#9733;" : "&#9734;"} Favorites <span style="color:var(--muted)">${state.favs.size}</span></button>
    </div></div>
    ${chipGroup("Station", STATIONS.map(s => ({ v: s, dot: ST_VAR[s] })), f.station)}
    ${chipGroup("Primary muscle", musclesInUse, f.muscle)}
    ${chipGroup("Movement pattern", PATTERNS, f.pattern)}
    ${chipGroup("Difficulty", DIFFS, f.difficulty)}
    ${chipGroup("Attachment", attaches, f.attachment)}
    <button class="btn sm" data-clearall ${activeFilterCount() || state.q ? "" : "disabled"}>Clear all filters</button>`;
}
const FGROUP = { "Station": "station", "Primary muscle": "muscle", "Movement pattern": "pattern", "Difficulty": "difficulty", "Attachment": "attachment" };

/* ---------- library view ---------- */
function cardHTML(e) {
  const fav = state.favs.has(e.id);
  return `<a class="card" href="#/ex/${e.id}" data-card="${e.id}" ${stStyle(e.station)}>
    <h3>${esc(e.name)}</h3>
    <div class="mus">${esc(e.primary.join(" · "))}</div>
    <div class="meta">
      ${badge(e.station, "station")}${badge(e.difficulty)}${badge(e.pattern)}${e.standards ? badge(e.smithCaveat ? "standards*" : "standards", "std") : ""}
    </div>
    <div class="card-actions">
      <button data-favbtn="${e.id}" class="${fav ? "on" : ""}" aria-label="${fav ? "Unfavorite" : "Favorite"} ${esc(e.name)}" aria-pressed="${fav}">${fav ? ICONS.starFill : ICONS.star}</button>
      <button data-addbtn="${e.id}" aria-label="Add ${esc(e.name)} to workout">${ICONS.plus}</button>
    </div>
  </a>`;
}
function renderLibrary() {
  applyFilters();
  const n = state.filtered.length;
  $("#resultCount").textContent = `${n}/${EXERCISES.length}`;
  const chips = [];
  const f = state.filters;
  const chip = (label, g, v) => `<span class="achip">${esc(label)}<button data-rmchip data-g="${g}" data-v="${esc(v)}" aria-label="Remove filter ${esc(label)}">${ICONS.x}</button></span>`;
  f.station.forEach(v => chips.push(chip(v, "station", v)));
  f.muscle.forEach(v => chips.push(chip(v, "muscle", v)));
  f.pattern.forEach(v => chips.push(chip(v, "pattern", v)));
  f.difficulty.forEach(v => chips.push(chip(v, "difficulty", v)));
  f.attachment.forEach(v => chips.push(chip(v, "attachment", v)));
  if (f.fav) chips.push(chip("Favorites", "fav", "1"));
  if (state.q.trim()) chips.push(chip(`"${state.q.trim()}"`, "q", ""));
  const groups = STATIONS.map(st => {
    const list = state.filtered.filter(e => e.station === st);
    if (!list.length) return "";
    return `<div class="stgroup-h" ${stStyle(st)}><span class="dot"></span>${esc(st)} <span style="letter-spacing:0;text-transform:none;font-weight:600">(${list.length})</span></div>` + list.map(cardHTML).join("");
  }).join("");
  $("#main").innerHTML = `
    ${state.introDismissed ? "" : `<div class="intro-note" role="note">${ICONS.info.replace("<svg", '<svg style="width:20px;height:20px;flex-shrink:0;margin-top:2px;color:var(--accent)"')}
      <div><b>Cable loads read double.</b> The M1 Pro's cable system runs a 2:1 pulley ratio - the handle delivers roughly <b>half</b> the number selected on the stack (a full ~143 lb stack &asymp; ~71 lb at the handle). Free-weight and Smith loads are unaffected. Details on the Safety page.</div>
      <button class="iconbtn" data-dismissintro aria-label="Dismiss note">${ICONS.x}</button></div>`}
    <div class="lib-head"><h1>Exercise Library</h1><span class="sub">${n} of ${EXERCISES.length} exercises</span></div>
    <div class="active-chips" ${chips.length ? "" : "hidden"}>${chips.join("")}${chips.length ? `<button class="linklike" data-clearall>Clear all</button>` : ""}</div>
    ${n ? `<div class="grid">${groups}</div>` : `<div class="empty"><b>No exercises match.</b><br>Loosen a filter or clear the search.</div>`}`;
}

/* ---------- standards UI ---------- */
function stdScaleHTML(th, oneRm, grayed, exId) {
  const isBwPlus = th.def.type === "bodyweightPlus";
  const bw = state.settings.bw;
  const maxL = th.lbs[th.lbs.length - 1] * (th.lbs.length >= 5 ? 1.24 : 1.14);
  const minL = isBwPlus ? Math.min(bw * 0.82, th.lbs[0] * 0.94) : 0;
  const pos = v => Math.min(100, Math.max(0, (v - minL) / (maxL - minL) * 100));
  const segs = [];
  const names = [TIER_NAMES[0]].concat(th.names);
  const bounds = [minL].concat(th.lbs, [maxL]);
  for (let i = 0; i < names.length; i++) {
    const w = pos(bounds[i + 1]) - pos(bounds[i]);
    const isWC = names[i] === "World Class";
    segs.push(`<div class="std-seg ${isWC ? "tier-w-seg" : ""}" style="flex-basis:${w.toFixed(2)}%;${isWC ? "" : `background:var(${tierVar(i)})`}" title="${esc(names[i])}"></div>`);
  }
  const ticks = th.lbs.map(v => {
    const lab = isBwPlus ? (v - bw <= 2 ? "BW" : "BW+" + fmtW(v - bw, { bare: true })) : fmtW(v, { bare: true });
    return `<span style="left:${pos(v).toFixed(2)}%">${lab}</span>`;
  }).join("");
  const nameRow = names.map((nm, i) => {
    const w = pos(bounds[i + 1]) - pos(bounds[i]);
    return `<span style="flex-basis:${w.toFixed(2)}%"><span class="dot" style="background:var(${tierVar(i)})"></span>${w > 9 ? esc(nm) : ""}</span>`;
  }).join("");
  let marker = "";
  if (oneRm != null) {
    const key = "pos_" + exId;
    const prev = stdScaleHTML._cache ? stdScaleHTML._cache[key] : null;
    const p = pos(oneRm);
    (stdScaleHTML._cache = stdScaleHTML._cache || {})[key] = p;
    marker = `<div class="std-marker" data-target="${p.toFixed(2)}" style="left:${(prev != null ? prev : p).toFixed(2)}%"><div class="pin"></div><div class="stick"></div></div>`;
  }
  return `<div class="std-scale ${grayed ? "std-grayed" : ""}"><div class="std-track">${marker}<div class="std-band">${segs.join("")}</div></div><div class="std-ticks">${ticks}</div><div class="std-names">${nameRow}</div></div>`;
}
function stdModuleHTML(ex) {
  const s = state.settings;
  const unit = isKg() ? "kg" : "lb";
  if (!s.sex) {
    return `<section class="d-sec"><h2>Strength standards</h2><div class="std-box"><div class="std-cta">
      <span>Standards are bodyweight- and sex-adjusted. Set yours once to see where this lift lands.</span>
      <button class="btn primary" data-opensettings>Open settings</button></div>
      <p class="std-note">${esc(EST_NOTE)}</p></div></section>`;
  }
  const th = thresholdsFor(ex.standards);
  if (!th) return "";
  const isBwPlus = th.def.type === "bodyweightPlus";
  const grayed = !!ex.smithCaveat;
  if (ex.smithCaveat && s.smithStd === "hidden") {
    return `<section class="d-sec"><h2>Strength standards</h2><div class="std-box">
      <div class="smith-warn">${ICONS.warn}<div><b>Hidden for Smith lifts.</b> ${esc(SMITH_NOTE)}</div></div>
      <button class="btn sm" data-smithshow>Show anyway (grayed out)</button></div></section>`;
  }
  const raw = state.orms[ex.id];
  const total = ormTotal(ex);
  const cls = total != null ? classify(th, total) : null;
  const lift = th.def.label;
  let verdict = "";
  if (cls) {
    const remain = cls.next ? `<div class="next"><b>${fmtW(cls.next.lbs)}</b> to ${esc(cls.next.name)}` + (isBwPlus ? " (added load)" : "") + `</div>` : `<div class="next">Beyond the top listed tier.</div>`;
    verdict = `<div class="std-verdict">
      <span class="tier-chip" style="border-color:var(${tierVar(cls.idx)});background:color-mix(in srgb, var(${tierVar(cls.idx)}) 16%, var(--card))"><span class="dot" style="background:var(${tierVar(cls.idx)})"></span>${esc(cls.tierName)}</span>
      ${remain}<div class="next">${cls.mult.toFixed(2)}&times; bodyweight${isBwPlus ? " (you + added load)" : ""}</div></div>`;
  }
  return `<section class="d-sec"><h2>Strength standards <span style="letter-spacing:0;text-transform:none;color:var(--muted);font-weight:600">estimate</span></h2>
  <div class="std-box">
    ${grayed ? `<div class="smith-warn">${ICONS.warn}<div><b>Smith variant - grayed for a reason.</b> ${esc(SMITH_NOTE)} <button class="linklike" data-smithhide>Hide instead</button></div></div>` : ""}
    ${stdScaleHTML(th, total, grayed, ex.id)}
    <div class="std-inrow">
      <div class="field"><label for="orm-in">${isBwPlus ? `Added weight (${unit})` : `Your 1RM (${unit})`}</label>
        <input id="orm-in" type="number" inputmode="decimal" step="any" min="0" value="${raw != null ? dispVal(raw) : ""}" placeholder="${isBwPlus ? "0" : "&mdash;"}" data-orm="${ex.id}"></div>
      ${verdict || `<div class="std-verdict"><div class="next">Enter ${isBwPlus ? "added weight (bodyweight counts automatically)" : "a 1RM"} to place your marker.</div></div>`}
    </div>
    <details class="calc"><summary>Estimate 1RM from a rep set</summary>
      <div class="std-inrow">
        <div class="field"><label>Weight (${unit})${isBwPlus ? " added" : ""}</label><input type="number" inputmode="decimal" step="any" min="0" data-calc-w></div>
        <div class="field"><label>Reps</label><input type="number" inputmode="numeric" min="1" max="20" step="1" data-calc-r></div>
        <button class="btn sm" data-calc-go>Estimate</button>
      </div>
      <div class="calc-out" data-calc-out hidden></div>
      <div class="calc-warn" data-calc-warn hidden>Above ~10 reps these formulas degrade badly - treat the number as a rough guess.</div>
    </details>
    <p class="std-note">${esc(EST_NOTE)}${isBwPlus ? " Standards for this lift count TOTAL system weight - your bodyweight plus the added load." : ""}</p>
  </div></section>`;
}
function animateMarkers(root) {
  (root || document).querySelectorAll(".std-marker[data-target]").forEach(m => {
    const t = m.getAttribute("data-target");
    requestAnimationFrame(() => requestAnimationFrame(() => { m.style.left = t + "%"; }));
  });
}

/* ---------- detail view ---------- */
function openDetail(id, push) {
  const ex = byId.get(id); if (!ex) return;
  state.exId = id;
  if (push !== false) updateHash(true);
  renderDetail(ex);
  document.body.classList.add("detail-open");
  renderNav();
}
function closeDetail() {
  if (appAnim) { appAnim.destroy(); appAnim = null; }
  printAnims.forEach(a => a.destroy && a.destroy()); printAnims = [];
  state.exId = null;
  $("#detail").hidden = true; $("#detail").innerHTML = "";
  document.body.classList.remove("detail-open");
  updateHash(true);
  renderNav();
  if (lastFocusCard) { const c = document.querySelector(`[data-card="${lastFocusCard}"]`); if (c) c.focus(); }
}
function neighborIds(id) {
  let list = state.filtered.length ? state.filtered : EXERCISES;
  let i = list.findIndex(e => e.id === id);
  if (i === -1) { list = EXERCISES; i = list.findIndex(e => e.id === id); }
  if (i === -1) return { prev: null, next: null };
  return { prev: i > 0 ? list[i - 1].id : null, next: i < list.length - 1 ? list[i + 1].id : null };
}
function renderDetail(ex) {
  if (appAnim) { appAnim.destroy(); appAnim = null; }
  printAnims.forEach(a => a.destroy && a.destroy()); printAnims = [];
  const d = $("#detail");
  const fav = state.favs.has(ex.id);
  const nb = neighborIds(ex.id);
  const isCable = ex.station.startsWith("Cable") || ex.station === "Bench" && ex.attachments.some(a => a.includes("handle"));
  const kv = `<div class="kv">
    <div class="k"><b>Breathing</b><span>${esc(ex.breathing)}</span></div>
    <div class="k"><b>Tempo</b><span>${esc(ex.tempo)}</span></div>
    <div class="k"><b>Strength</b><span>${esc(ex.reps.strength)} reps</span></div>
    <div class="k"><b>Hypertrophy</b><span>${esc(ex.reps.hypertrophy)} reps</span></div>
  </div>`;
  const swaps = ex.swaps.map(id => { const s = byId.get(id); return s ? `<a href="#/ex/${s.id}" ${stStyle(s.station)}><span class="dot"></span>${esc(s.name)}</a>` : ""; }).join("");
  d.innerHTML = `
    <div class="d-head">
      <button class="backbtn" data-close>${ICONS.back}<span>Back</span></button>
      <div class="d-title">${esc(ex.name)}</div>
      <div class="navpn">
        <button class="iconbtn" data-goto="${nb.prev || ""}" ${nb.prev ? "" : "disabled"} aria-label="Previous exercise">${ICONS.chevL}</button>
        <button class="iconbtn" data-goto="${nb.next || ""}" ${nb.next ? "" : "disabled"} aria-label="Next exercise">${ICONS.chevR}</button>
      </div>
      <button class="iconbtn ${fav ? "on" : ""}" data-favbtn="${ex.id}" aria-label="Favorite" aria-pressed="${fav}">${fav ? ICONS.starFill : ICONS.star}</button>
      <button class="iconbtn" data-addbtn="${ex.id}" aria-label="Add to workout">${ICONS.plus}</button>
      <button class="iconbtn" data-print aria-label="Print">${ICONS.print}</button>
      <button class="iconbtn" data-opensettings aria-label="Settings">${ICONS.gear}</button>
    </div>
    <div class="d-body">
      <div class="d-anim">
        <div class="anim-shell" id="animShell"></div>
        <div class="anim-controls" id="animControls"></div>
        ${isCable ? `<div class="ratio-chip">${ICONS.info.replace("<svg", '<svg style="width:16px;height:16px;color:var(--accent)"')} <span><b>2:1 ratio:</b> handle load &asymp; half the stack number</span></div>` : ""}
      </div>
      <div class="d-content"><div class="d-content-inner">
        <div class="d-badges">${badge(ex.station, "station").replace("<span", `<span ${stStyle(ex.station)}`)}${badge(ex.difficulty)}${badge(ex.pattern)}${ex.attachments.map(a => badge(a)).join("")}</div>
        <h1>${esc(ex.name)}</h1>
        ${ex.aka.length ? `<div class="d-aka">Also called: ${esc(ex.aka.join(", "))}</div>` : ""}
        <section class="d-sec"><h2>Machine setup</h2><ul>${ex.setup.map(s => `<li>${esc(s)}</li>`).join("")}</ul></section>
        <section class="d-sec"><h2>Execution</h2><ol>${ex.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol></section>
        <section class="d-sec"><h2>Form cues</h2><ul class="cue-list">${ex.cues.map(c => `<li>${esc(c)}</li>`).join("")}</ul></section>
        <section class="d-sec"><h2>Common mistakes</h2><div class="mis">${ex.mistakes.map(m => `<div class="mi"><div class="m">${esc(m.m)}</div><div class="f">${esc(m.fix)}</div></div>`).join("")}</div></section>
        <section class="d-sec"><h2>Breathing, tempo &amp; reps</h2>${kv}</section>
        <section class="d-sec"><h2>Safety</h2><ul class="safe-list">${ex.safety.map(s => `<li>${esc(s)}</li>`).join("")}</ul></section>
        ${ex.standards ? `<div id="stdSec">${stdModuleHTML(ex)}</div>` : ""}
        <section class="d-sec"><h2>Swap it for</h2><div class="swap-row">${swaps}</div></section>
        <div class="print-frames" id="printFrames"></div>
      </div></div>
    </div>`;
  d.hidden = false;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { d.classList.remove("enter"); void d.offsetWidth; d.classList.add("enter"); }
  // animation
  const shell = $("#animShell");
  appAnim = new ExAnim(shell, ex, { autoplay: true });
  const ctrls = $("#animControls");
  if (!appAnim.isStatic && appAnim.svg) {
    ctrls.innerHTML = `
      <button class="ctl" data-anim-toggle aria-label="Play or pause">${appAnim.playing ? ICONS.pause : ICONS.play}<span>${appAnim.playing ? "Pause" : "Play"}</span></button>
      <button class="ctl" data-anim-slow aria-pressed="false" aria-label="Slow motion 0.4x">${ICONS.slow}<span>0.4&times;</span></button>
      ${appAnim.caption ? `<span class="anim-caption">${esc(appAnim.caption)}</span>` : ""}`;
    appAnim.onstate = () => {
      const b = ctrls.querySelector("[data-anim-toggle]");
      if (b) b.innerHTML = (appAnim.playing ? ICONS.pause : ICONS.play) + `<span>${appAnim.playing ? "Pause" : "Play"}</span>`;
      const s = ctrls.querySelector("[data-anim-slow]");
      if (s) { s.classList.toggle("on", appAnim.slow); s.setAttribute("aria-pressed", appAnim.slow); }
    };
  } else if (appAnim.isStatic) {
    ctrls.innerHTML = appAnim.caption ? `<span class="anim-caption">${esc(appAnim.caption)}</span>` : "";
  }
  // print frames: static start / end snapshots
  const pf = $("#printFrames");
  if (!appAnim.isStatic) {
    [["Start position", 0], ["End position", 0.5]].forEach(([lab, ph]) => {
      const fig = document.createElement("figure");
      const host = document.createElement("div");
      fig.appendChild(host);
      const cap = document.createElement("figcaption"); cap.textContent = lab; fig.appendChild(cap);
      pf.appendChild(fig);
      const a = new ExAnim(host, ex, { autoplay: false });
      a.renderAt(ph); printAnims.push(a);
    });
  } else {
    const fig = document.createElement("figure");
    const host = document.createElement("div"); fig.appendChild(host);
    const cap = document.createElement("figcaption"); cap.textContent = "Start / end positions"; fig.appendChild(cap);
    pf.appendChild(fig);
    printAnims.push(new ExAnim(host, ex, { autoplay: false }));
  }
  animateMarkers(d);
  const bb = d.querySelector("[data-close]"); if (bb) bb.focus({ preventScroll: true });
  d.querySelector(".d-content").scrollTop = 0;
}

/* ---------- standards page ---------- */
function stdRowHTML(ex) {
  const th = thresholdsFor(ex.standards);
  const total = ormTotal(ex);
  const cls = total != null ? classify(th, total) : null;
  const isBwPlus = th.def.type === "bodyweightPlus";
  const raw = state.orms[ex.id];
  const shown = isBwPlus ? `BW + ${fmtW(raw)}` : fmtW(raw);
  return `<div class="std-row ${ex.smithCaveat ? "std-grayed-row" : ""}">
    <div class="std-row-h">
      <a href="#/ex/${ex.id}">${esc(ex.name)}</a>
      ${ex.smithCaveat ? `<span class="sub">Smith variant - not comparable to free-weight tables</span>` : ""}
      <span class="val">${shown} ${cls ? `<small>&middot; ${cls.mult.toFixed(2)}&times; BW</small>` : ""}</span>
      ${cls ? `<span class="tier-chip" style="min-height:34px;padding:5px 11px;font-size:0.82rem;border-color:var(${tierVar(cls.idx)});background:color-mix(in srgb, var(${tierVar(cls.idx)}) 16%, var(--card))"><span class="dot" style="background:var(${tierVar(cls.idx)})"></span>${esc(cls.tierName)}</span>` : ""}
    </div>
    ${stdScaleHTML(th, total, !!ex.smithCaveat, "row_" + ex.id)}
  </div>`;
}
function renderStandardsPage() {
  const s = state.settings;
  let body;
  if (!s.sex) {
    body = `<div class="std-box"><div class="std-cta"><span>Standards are bodyweight- and sex-adjusted. Set yours once and every bar on this page comes alive.</span>
      <button class="btn primary" data-opensettings>Open settings</button></div></div>`;
  } else {
    const withStd = EXERCISES.filter(e => e.standards);
    const entered = withStd.filter(e => state.orms[e.id] != null && (!e.smithCaveat || s.smithStd === "grayed"));
    const notEntered = withStd.filter(e => state.orms[e.id] == null && !e.smithCaveat);
    const rows = entered.map(stdRowHTML).join("");
    // big-three total
    const b3 = ["bb-back-squat", "bb-bench-press", "bb-conventional-deadlift"];
    const b3have = b3.filter(id => state.orms[id] != null);
    let totalRow = "";
    if (b3have.length === 3) {
      const total = b3.reduce((a, id) => a + state.orms[id], 0);
      const ths = b3.map(id => thresholdsFor(byId.get(id).standards));
      const tierCount = Math.min(...ths.map(t => t.lbs.length));
      const sumTh = { def: { type: "barbell", label: "Big-Three Total" }, lbs: [], names: ths[0].names.slice(0, tierCount) };
      for (let i = 0; i < tierCount; i++) sumTh.lbs.push(ths.reduce((a, t) => a + t.lbs[i], 0));
      const cls = classify(sumTh, total);
      totalRow = `<div class="std-row total-row">
        <div class="std-row-h"><a href="#/standards" style="pointer-events:none">Squat + Bench + Deadlift total</a>
        <span class="val">${fmtW(total)} <small>&middot; ${(total / s.bw).toFixed(2)}&times; BW</small></span>
        <span class="tier-chip" style="min-height:34px;padding:5px 11px;font-size:0.82rem;border-color:var(${tierVar(cls.idx)});background:color-mix(in srgb, var(${tierVar(cls.idx)}) 16%, var(--card))"><span class="dot" style="background:var(${tierVar(cls.idx)})"></span>${esc(cls.tierName)}</span></div>
        ${stdScaleHTML(sumTh, total, false, "row_total")}</div>`;
    } else {
      const missing = b3.filter(id => state.orms[id] == null).map(id => byId.get(id).name.replace(" (In Cage)", ""));
      totalRow = `<div class="std-row total-row"><div class="std-row-h"><span style="font-weight:800">Squat + Bench + Deadlift total</span>
        <span class="sub">Enter 1RMs for ${esc(missing.join(", "))} to see the combined bar (free-barbell lifts only).</span></div></div>`;
    }
    const calcLifts = withStd.filter(e => !e.smithCaveat);
    body = `
      ${totalRow}
      ${rows || `<div class="std-empty">No 1RMs entered yet. Open any lift with a <span class="badge std" style="display:inline-flex">standards</span> badge and type one in - it shows up here.</div>`}
      <div class="std-box" style="margin-top:16px">
        <h3 style="font-size:0.95rem;margin-bottom:8px">1RM calculator</h3>
        <div class="std-inrow">
          <div class="field grow"><label>Lift</label><select data-pcalc-lift>${calcLifts.map(e => `<option value="${e.id}">${esc(e.name)}</option>`).join("")}</select></div>
          <div class="field"><label>Weight (${isKg() ? "kg" : "lb"})</label><input type="number" inputmode="decimal" step="any" min="0" data-pcalc-w></div>
          <div class="field"><label>Reps</label><input type="number" inputmode="numeric" min="1" max="20" data-pcalc-r></div>
          <button class="btn sm" data-pcalc-go>Estimate</button>
        </div>
        <div class="calc-out" data-pcalc-out hidden></div>
        <div class="calc-warn" data-pcalc-warn hidden>Above ~10 reps these formulas degrade badly - treat the number as a rough guess.</div>
      </div>
      ${notEntered.length ? `<div class="std-box" style="margin-top:16px"><h3 style="font-size:0.95rem;margin-bottom:8px">Lifts with standards, no 1RM yet</h3>
        <div class="mus-links">${notEntered.map(e => `<a href="#/ex/${e.id}" ${stStyle(e.station)}><span class="dot"></span>${esc(e.name)}</a>`).join("")}</div></div>` : ""}`;
  }
  $("#main").innerHTML = `<div class="page">
    <h1 class="page-h">Strength Standards</h1>
    <p class="page-sub">Every entered 1RM in one stack, classified against population estimates for a ${s.sex ? `${fmtW(s.bw)} ${s.sex}` : "lifter"} lifter. Spot the lagging lift at a glance.</p>
    ${body}
    <div class="caveat-box">
      <div><b>Smith machine numbers are not comparable.</b> ${esc(SMITH_NOTE)}</div>
      <div><b>These are estimates of a population, not a scorecard.</b> ${esc(EST_NOTE)}</div>
      ${s.age && s.age >= 40 ? `<div><b>Masters note.</b> These tables are calibrated to adult lifters in their prime training years - at ${s.age}, read them loosely and trend against your own history.</div>` : ""}
    </div></div>`;
  animateMarkers($("#main"));
}

/* ---------- muscles page ---------- */
function renderMusclesPage() {
  const cards = MUSCLE_ORDER.map(m => {
    const prim = EXERCISES.filter(e => e.primary.includes(m));
    const sec = EXERCISES.filter(e => e.secondary.includes(m));
    if (!prim.length && !sec.length) return "";
    const link = e => `<a href="#/ex/${e.id}" ${stStyle(e.station)}><span class="dot"></span>${esc(e.name)}</a>`;
    return `<div class="mus-card"><h3>${esc(m)} <span class="cnt">${prim.length} primary${sec.length ? " · " + sec.length + " secondary" : ""}</span></h3>
      <div class="mus-links">${prim.map(link).join("")}${sec.map(e => link(e).replace('class="', 'class="sec ').replace("<a ", "<a data-sec ")).join("")}</div></div>`;
  }).join("");
  $("#main").innerHTML = `<div class="page">
    <h1 class="page-h">Muscle Map</h1>
    <p class="page-sub">Every muscle group with the exercises that hit it - solid chips train it as a primary mover, faded chips as a secondary.</p>
    <div class="mus-grid">${cards}</div></div>`;
}

/* ---------- builder ---------- */
function builderText() {
  const d = new Date();
  const lines = state.builder.map((it, i) => {
    const e = byId.get(it.id);
    return `${i + 1}. ${e ? e.name : it.id}  -  ${it.sets || "3x8"}  [${e ? e.station : ""}]`;
  });
  return `M1 PRO SESSION  -  ${d.toLocaleDateString()}\n${"".padEnd(34, "=")}\n${lines.join("\n")}\n\nBuilt with M1 Pro Form Guide. Warm up first; safeties set before every barbell lift.`;
}
function renderBuilderPage() {
  const items = state.builder.map((it, i) => {
    const e = byId.get(it.id); if (!e) return "";
    return `<div class="bld-item" draggable="true" data-bi="${i}" ${stStyle(e.station)}>
      <span class="grab" aria-hidden="true">${ICONS.grab}</span>
      <div class="nm"><a href="#/ex/${e.id}">${esc(e.name)}</a><span class="st">${esc(e.station)} · ${esc(e.pattern)}</span></div>
      <input class="sets" type="text" value="${esc(it.sets || "3x8")}" data-sets="${i}" aria-label="Sets and reps">
      <div class="mv"><button data-mv="${i}|-1" ${i === 0 ? "disabled" : ""} aria-label="Move up">${ICONS.up}</button>
      <button data-mv="${i}|1" ${i === state.builder.length - 1 ? "disabled" : ""} aria-label="Move down">${ICONS.down}</button></div>
      <button class="rm" data-rm="${i}" aria-label="Remove">${ICONS.x}</button>
    </div>`;
  }).join("");
  $("#main").innerHTML = `<div class="page">
    <h1 class="page-h">Workout Builder</h1>
    <p class="page-sub">Queue up a session from the library (the + on any card), set the scheme, drag to reorder - then export it as plain text.</p>
    ${state.builder.length ? `<div class="bld-list" id="bldList">${items}</div>
    <div class="bld-actions">
      <button class="btn primary" data-bld-copy>${ICONS.copy}<span>Copy as text</span></button>
      <button class="btn" data-bld-dl>${ICONS.dl}<span>Download .txt</span></button>
      <button class="btn" data-bld-clear>${ICONS.trash}<span>Clear</span></button>
    </div>
    <textarea class="bld-export" readonly aria-label="Session as text">${esc(builderText())}</textarea>`
    : `<div class="empty"><b>Nothing queued yet.</b><br>Tap the + on any exercise card to start a session.</div>`}
  </div>`;
}

/* ---------- safety page ---------- */
function renderSafetyPage() {
  $("#main").innerHTML = `<div class="page doc">
    <h1 class="page-h">Safety &amp; Setup</h1>
    <p class="page-sub">How to set the M1 Pro up so a failed rep is a non-event - plus the cable ratio everyone trips over.</p>

    <h2>The 2:1 cable ratio</h2>
    <div class="note"><b>The number on the stack is not the load in your hand.</b> The M1 Pro's cable system uses a 2:1 pulley ratio: the handle moves twice as far as the stack and receives roughly <b>half</b> the selected weight. A full ~143 lb stack delivers about ~71 lb at the handle. This is normal for all-in-one trainers - it buys smoother resistance and longer cable travel. Log cable work by stack number consistently and it stops mattering; just never compare a "140 lb" cable row to a 140 lb barbell row.</div>

    <h2>Setting the safeties for each lift type</h2>
    <ul>
      <li><b>Smith squats and presses:</b> the spring hooks are your first bail - a wrist rotation re-racks the bar on any of the 11 catches. Set the adjustable spotter arms one hole below the bar's lowest point in your rep as the true backstop, and test the catch height with an empty bar before the first heavy set.</li>
      <li><b>Barbell squats in the cage:</b> spotter arms one hole below bottom-position bar height. Fail forward-down onto the arms and slide out - never dump a bar backward in a garage.</li>
      <li><b>Barbell bench and pin press:</b> arms just below chest level at the bottom of the rep, so the bar clears your chest when you flatten out. Unrack and re-rack with locked elbows; no collars-off tilting bails on a bench in a cage - the arms are the plan.</li>
      <li><b>Overhead work:</b> check clearance to the pull-up bar and the garage ceiling with an empty bar first. Missed presses come back to the shoulders, then to the J-hooks.</li>
      <li><b>Hip thrusts:</b> spotter arms just under the bar's bottom position keep a failed rep off your pelvis; always pad the bar.</li>
      <li><b>Deadlifts and rows:</b> swing the arms clear so plates cannot clip steel mid-rep. Set the bar down; do not drop it on a slab.</li>
    </ul>

    <h2>Smith bar vs free bar - picking the tool</h2>
    <p>The Smith's fixed path removes the balance demand: ideal for learning movement grooves, training close to failure without a spotter, high-fatigue accessory work, and anything unilateral where balance is the limiter. The free barbell in the cage builds the stabilizers and carries over to everything - it should own your main strength work once form is solid. A useful default: <b>free bar for the first heavy lift of the day, Smith or cables for the volume after it.</b> The Smith bar on this machine is also lighter than a 45 lb Olympic bar - weigh it or check the manual, and log Smith loads as their own lift.</p>

    <h2>Warming up</h2>
    <ul>
      <li>Two to five minutes of easy movement to raise temperature, then ramp the day's first lift: empty bar, then roughly 40-60-80% of the working weight for falling reps (5-3-1) before the first work set.</li>
      <li>Later lifts sharing the same muscles need only one or two feel sets.</li>
      <li>Cable and isolation work: one light feel set is plenty.</li>
      <li>Cold garage? Add a layer and an extra ramp set instead of stretching longer.</li>
    </ul>

    <h2>Garage rules that prevent the dumb injuries</h2>
    <ul>
      <li>Collars on every barbell lift, every time - an uneven slide is how garage bars end up in drywall.</li>
      <li>Seat the landmine sleeve fully in the pivot and load it with smaller-diameter plates.</li>
      <li>Check that dip handles and spotter arms are pinned and even before loading them.</li>
      <li>Keep the walking path behind the deadlift/row area clear of plates.</li>
      <li>Band pegs and bands: inspect bands for nicks; a snapped band at full stretch bites.</li>
    </ul>

    <h2>Strength standards - the fine print</h2>
    <p>${esc(SMITH_NOTE)}</p>
    <p>${esc(EST_NOTE)}</p>

    <div class="warn"><b>General reference only.</b> This guide is not coaching, physical therapy, or medical advice. If a movement causes joint pain beyond normal training effort, stop and get assessed by a professional. Train within your capacity - the machine's safeties only protect the reps you set them up for.</div>
  </div>`;
}

/* ---------- settings ---------- */
function renderSettings() {
  const s = state.settings;
  $("#settingsModal").innerHTML = `
    <h2>Settings <button class="iconbtn" data-closesettings aria-label="Close settings">${ICONS.x}</button></h2>
    <div class="mrow"><div class="mlab">Bodyweight</div>
      <div class="bw-row">
        <input type="number" inputmode="decimal" step="any" min="60" max="440" value="${dispVal(s.bw)}" data-set-bw aria-label="Bodyweight">
        <div class="seg" role="group" aria-label="Units">
          <button class="${!isKg() ? "on" : ""}" data-set-unit="lb">lb</button>
          <button class="${isKg() ? "on" : ""}" data-set-unit="kg">kg</button>
        </div>
      </div>
      <div class="mhelp">Drives every strength-standard number. Unit choice applies across the whole site.</div></div>
    <div class="mrow"><div class="mlab">Sex (for standards tables)</div>
      <div class="seg" role="group" aria-label="Sex">
        <button class="${s.sex === "male" ? "on" : ""}" data-set-sex="male">Male</button>
        <button class="${s.sex === "female" ? "on" : ""}" data-set-sex="female">Female</button>
      </div>
      <div class="mhelp">${s.sex ? "" : "Not set - standards stay hidden until you choose, because the tables genuinely differ."}</div></div>
    <div class="mrow"><div class="mlab">Age (optional)</div>
      <input type="number" inputmode="numeric" min="13" max="99" value="${s.age || ""}" placeholder="&mdash;" data-set-age aria-label="Age" style="width:110px;min-height:46px;padding:8px 12px;border-radius:11px;background:var(--card);border:1px solid var(--line2)">
      <div class="mhelp">Standards are calibrated to adult lifters in their prime training years. Masters lifters: read the tiers loosely and trend against your own history instead.</div></div>
    <div class="mrow"><div class="mlab">Theme</div>
      <div class="seg" role="group" aria-label="Theme">
        <button class="${document.documentElement.dataset.theme === "dark" ? "on" : ""}" data-set-theme="dark">Dark</button>
        <button class="${document.documentElement.dataset.theme === "light" ? "on" : ""}" data-set-theme="light">Light</button>
      </div></div>
    <div class="mrow"><div class="mlab">Smith-machine standards</div>
      <div class="seg" role="group" aria-label="Smith standards display">
        <button class="${s.smithStd === "hidden" ? "on" : ""}" data-set-smith="hidden">Hidden</button>
        <button class="${s.smithStd === "grayed" ? "on" : ""}" data-set-smith="grayed">Grayed out</button>
      </div>
      <div class="mhelp">Smith numbers are not comparable to free-weight tables - show them grayed with the warning, or not at all.</div></div>
    <div class="mrow"><button class="btn sm" data-wipe>${ICONS.trash}<span>Clear saved data (1RMs, favorites, session)</span></button></div>`;
}
function openSettings() { renderSettings(); $("#settingsWrap").hidden = false; $("#scrim").hidden = false; requestAnimationFrame(() => $("#scrim").classList.add("show")); }
function closeSettings() { $("#settingsWrap").hidden = true; hideScrimIfFree(); }
function hideScrimIfFree() {
  if ($("#settingsWrap").hidden && !$("#sidebar").classList.contains("open")) {
    $("#scrim").classList.remove("show");
    setTimeout(() => { if ($("#settingsWrap").hidden && !$("#sidebar").classList.contains("open")) $("#scrim").hidden = true; }, 240);
  }
}

/* ---------- theme ---------- */
function applyTheme(t, animate) {
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("theme-anim");
    setTimeout(() => document.body.classList.remove("theme-anim"), 320);
  }
  document.documentElement.dataset.theme = t;
  $("#metaTheme").setAttribute("content", t === "dark" ? "#0f1216" : "#f2f4f7");
  $("#themeBtn").innerHTML = t === "dark" ? ICONS.sun : ICONS.moon;
  LS.set("theme", t);
}

/* ---------- view dispatch ---------- */
function renderMain() {
  if (appAnim && !state.exId) { appAnim.destroy(); appAnim = null; }
  if (state.view === "standards") renderStandardsPage();
  else if (state.view === "muscles") renderMusclesPage();
  else if (state.view === "builder") renderBuilderPage();
  else if (state.view === "safety") renderSafetyPage();
  else renderLibrary();
  renderNav();
  renderSidebar();
  const si = $("#search"); if (si.value !== state.q) si.value = state.q;
  if (state.view !== "lib") $("#resultCount").textContent = "";
}
function routeFromHash() {
  if (suppressHash) return;
  const hadDetail = !!document.body.classList.contains("detail-open");
  parseHash();
  if (state.exId) { renderMain(); openDetail(state.exId, false); }
  else {
    if (hadDetail) {
      if (appAnim) { appAnim.destroy(); appAnim = null; }
      $("#detail").hidden = true; $("#detail").innerHTML = "";
      document.body.classList.remove("detail-open");
    }
    renderMain();
  }
}

/* ---------- calculators ---------- */
function calcOut(wLbs, reps, isBwPlus) {
  const base = isBwPlus ? state.settings.bw + wLbs : wLbs;
  const e = epley(base, reps), b = brzycki(base, reps), avg = (e + b) / 2;
  const show = v => isBwPlus ? (v - state.settings.bw <= 2 ? "BW" : "BW + " + fmtW(v - state.settings.bw)) : fmtW(v);
  return { e, b, avg, html: `
    <div class="k"><b>Epley</b><span>${show(e)}</span></div>
    <div class="k"><b>Brzycki</b><span>${show(b)}</span></div>
    <div class="k"><b>Average</b><span>${show(avg)}</span></div>` };
}
function refreshStdSec() {
  const ex = state.exId ? byId.get(state.exId) : null;
  const sec = $("#stdSec");
  if (ex && sec) { sec.innerHTML = stdModuleHTML(ex); animateMarkers(sec); }
}

/* ---------- sheet (mobile filters) ---------- */
function openSheet() { $("#sidebar").classList.add("open"); $("#scrim").hidden = false; requestAnimationFrame(() => $("#scrim").classList.add("show")); }
function closeSheet() { $("#sidebar").classList.remove("open"); hideScrimIfFree(); }

/* ---------- global event delegation ---------- */
document.addEventListener("click", ev => {
  const t = ev.target;
  const q = sel => t.closest(sel);
  let n;
  if ((n = q("[data-favbtn]"))) {
    ev.preventDefault(); ev.stopPropagation();
    const id = n.getAttribute("data-favbtn");
    state.favs.has(id) ? state.favs.delete(id) : state.favs.add(id);
    saveFavs();
    const on = state.favs.has(id);
    $$(`[data-favbtn="${id}"]`).forEach(b => { b.classList.toggle("on", on); b.innerHTML = on ? ICONS.starFill : ICONS.star; b.setAttribute("aria-pressed", on); });
    if (state.view === "lib" && !state.exId) { renderLibrary(); }
    else if (state.filters.fav) renderLibrary();
    renderSidebar();
    return;
  }
  if ((n = q("[data-addbtn]"))) {
    ev.preventDefault(); ev.stopPropagation();
    const id = n.getAttribute("data-addbtn");
    if (state.builder.some(it => it.id === id)) { toast("Already in your session"); return; }
    state.builder.push({ id, sets: "3x8" }); saveBuilder(); renderNav();
    toast("Added to session (" + state.builder.length + ")");
    return;
  }
  if ((n = q("[data-close]"))) { closeDetail(); return; }
  if ((n = q("[data-goto]"))) { const id = n.getAttribute("data-goto"); if (id) openDetail(id); return; }
  if ((n = q("[data-print]"))) { window.print(); return; }
  if ((n = q("[data-anim-toggle]"))) { if (appAnim) appAnim.toggle(); return; }
  if ((n = q("[data-anim-slow]"))) { if (appAnim) appAnim.setSlow(!appAnim.slow); return; }
  if ((n = q("[data-dismissintro]"))) { state.introDismissed = true; LS.set("introDismissed", true); renderLibrary(); return; }
  if ((n = q("[data-rmchip]"))) {
    const g = n.getAttribute("data-g"), v = n.getAttribute("data-v");
    if (g === "fav") state.filters.fav = false;
    else if (g === "q") state.q = "";
    else state.filters[g].delete(v);
    updateHash(false); renderMain(); return;
  }
  if ((n = q("[data-clearall]"))) {
    ["station", "muscle", "pattern", "difficulty", "attachment"].forEach(k => state.filters[k].clear());
    state.filters.fav = false; state.q = "";
    updateHash(false); renderMain(); return;
  }
  if ((n = q("[data-favchip]"))) { state.filters.fav = !state.filters.fav; updateHash(false); renderMain(); return; }
  if ((n = q("[data-fg]"))) {
    const g = FGROUP[n.getAttribute("data-fg")], v = n.getAttribute("data-fv");
    if (g) { state.filters[g].has(v) ? state.filters[g].delete(v) : state.filters[g].add(v); updateHash(false); renderMain(); }
    return;
  }
  if ((n = q("#filterFab"))) { openSheet(); return; }
  if ((n = q("#themeBtn"))) { applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true); return; }
  if ((n = q("#settingsBtn")) || (n = q("[data-opensettings]"))) { openSettings(); return; }
  if ((n = q("[data-closesettings]"))) { closeSettings(); return; }
  if ((n = q("[data-closesheet]"))) { closeSheet(); return; }
  if ((n = q("#scrim"))) { closeSheet(); closeSettings(); return; }
  if ((n = q("[data-smithshow]"))) { state.settings.smithStd = "grayed"; saveSettings(); refreshStdSec(); return; }
  if ((n = q("[data-smithhide]"))) { state.settings.smithStd = "hidden"; saveSettings(); refreshStdSec(); return; }
  if ((n = q("[data-set-unit]"))) { state.settings.unit = n.getAttribute("data-set-unit"); saveSettings(); renderSettings(); renderMain(); refreshStdSec(); return; }
  if ((n = q("[data-set-sex]"))) { state.settings.sex = n.getAttribute("data-set-sex"); saveSettings(); renderSettings(); if (state.view === "standards") renderMain(); refreshStdSec(); return; }
  if ((n = q("[data-set-theme]"))) { applyTheme(n.getAttribute("data-set-theme"), true); renderSettings(); return; }
  if ((n = q("[data-set-smith]"))) { state.settings.smithStd = n.getAttribute("data-set-smith"); saveSettings(); renderSettings(); if (state.view === "standards") renderMain(); refreshStdSec(); return; }
  if ((n = q("[data-wipe]"))) {
    if (confirm("Clear saved 1RMs, favorites, and the session builder? Settings stay.")) {
      state.favs.clear(); state.orms = {}; state.builder = [];
      saveFavs(); saveOrms(); saveBuilder(); renderMain(); refreshStdSec(); toast("Saved data cleared");
    }
    return;
  }
  if ((n = q("[data-mv]"))) {
    const [i, d] = n.getAttribute("data-mv").split("|").map(Number);
    const j = i + d;
    if (j >= 0 && j < state.builder.length) {
      const it = state.builder.splice(i, 1)[0];
      state.builder.splice(j, 0, it);
      saveBuilder(); renderBuilderPage();
    }
    return;
  }
  if ((n = q("[data-rm]"))) { state.builder.splice(Number(n.getAttribute("data-rm")), 1); saveBuilder(); renderBuilderPage(); renderNav(); return; }
  if ((n = q("[data-bld-copy]"))) {
    const txt = builderText();
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast("Copied to clipboard")).catch(() => {
      const ta = $(".bld-export"); if (ta) { ta.select(); document.execCommand("copy"); toast("Copied"); }
    });
    return;
  }
  if ((n = q("[data-bld-dl]"))) {
    const blob = new Blob([builderText()], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "m1-pro-session.txt";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    return;
  }
  if ((n = q("[data-bld-clear]"))) { if (confirm("Clear the whole session?")) { state.builder = []; saveBuilder(); renderBuilderPage(); renderNav(); } return; }
  if ((n = q("[data-calc-go]"))) {
    const box = n.closest(".calc");
    const w = inputToLbs(parseFloat(box.querySelector("[data-calc-w]").value));
    const r = parseInt(box.querySelector("[data-calc-r]").value, 10);
    const out = box.querySelector("[data-calc-out]"), warn = box.querySelector("[data-calc-warn]");
    const ex = byId.get(state.exId);
    const isBwPlus = ex && STANDARDS[ex.standards] && STANDARDS[ex.standards].type === "bodyweightPlus";
    if (!(w >= 0) || !(r >= 1) || r > 20) { out.hidden = false; out.innerHTML = '<div class="k"><b>Input</b><span>Enter a weight and 1-20 reps.</span></div>'; warn.hidden = true; return; }
    const c = calcOut(w, r, isBwPlus);
    out.hidden = false;
    out.innerHTML = c.html + `<button class="btn sm primary" data-calc-use="${c.avg.toFixed(1)}">Use as my 1RM</button>`;
    warn.hidden = r <= 10;
    return;
  }
  if ((n = q("[data-calc-use]"))) {
    const ex = byId.get(state.exId); if (!ex) return;
    const totalOrLbs = parseFloat(n.getAttribute("data-calc-use"));
    const isBwPlus = STANDARDS[ex.standards] && STANDARDS[ex.standards].type === "bodyweightPlus";
    state.orms[ex.id] = Math.max(0, Math.round(isBwPlus ? totalOrLbs - state.settings.bw : totalOrLbs));
    saveOrms(); refreshStdSec(); toast("1RM saved to the bar");
    return;
  }
  if ((n = q("[data-pcalc-go]"))) {
    const w = inputToLbs(parseFloat($("[data-pcalc-w]").value));
    const r = parseInt($("[data-pcalc-r]").value, 10);
    const liftId = $("[data-pcalc-lift]").value;
    const ex = byId.get(liftId);
    const isBwPlus = STANDARDS[ex.standards] && STANDARDS[ex.standards].type === "bodyweightPlus";
    const out = $("[data-pcalc-out]"), warn = $("[data-pcalc-warn]");
    if (!(w >= 0) || !(r >= 1) || r > 20) { out.hidden = false; out.innerHTML = '<div class="k"><b>Input</b><span>Enter a weight and 1-20 reps.</span></div>'; warn.hidden = true; return; }
    const c = calcOut(w, r, isBwPlus);
    out.hidden = false;
    out.innerHTML = c.html + `<button class="btn sm primary" data-pcalc-save="${c.avg.toFixed(1)}|${liftId}">Save to ${esc(ex.name)}</button>`;
    warn.hidden = r <= 10;
    return;
  }
  if ((n = q("[data-pcalc-save]"))) {
    const [v, id] = n.getAttribute("data-pcalc-save").split("|");
    const ex = byId.get(id); if (!ex) return;
    const isBwPlus = STANDARDS[ex.standards] && STANDARDS[ex.standards].type === "bodyweightPlus";
    state.orms[id] = Math.max(0, Math.round(isBwPlus ? parseFloat(v) - state.settings.bw : parseFloat(v)));
    saveOrms(); renderStandardsPage(); toast("Saved");
    return;
  }
});

document.addEventListener("change", ev => {
  const t = ev.target;
  if (t.matches("[data-orm]")) {
    const id = t.getAttribute("data-orm");
    const v = parseFloat(t.value);
    if (isNaN(v) || t.value === "") delete state.orms[id];
    else state.orms[id] = Math.max(0, inputToLbs(v));
    saveOrms(); refreshStdSec();
    return;
  }
  if (t.matches("[data-sets]")) { const i = Number(t.getAttribute("data-sets")); if (state.builder[i]) { state.builder[i].sets = t.value.slice(0, 20); saveBuilder(); const ta = $(".bld-export"); if (ta) ta.value = builderText(); } return; }
  if (t.matches("[data-set-bw]")) {
    const v = parseFloat(t.value);
    if (!isNaN(v)) { state.settings.bw = Math.min(440, Math.max(60, inputToLbs(v))); saveSettings(); if (state.view === "standards") renderMain(); refreshStdSec(); }
    return;
  }
  if (t.matches("[data-set-age]")) {
    const v = parseInt(t.value, 10);
    state.settings.age = isNaN(v) ? null : v; saveSettings();
    if (state.view === "standards") renderMain();
    return;
  }
});

/* ---------- search ---------- */
let searchT = 0;
$("#search").addEventListener("input", ev => {
  clearTimeout(searchT);
  searchT = setTimeout(() => {
    state.q = ev.target.value;
    if (state.view !== "lib" || state.exId) { state.view = "lib"; state.exId = null; $("#detail").hidden = true; document.body.classList.remove("detail-open"); }
    updateHash(false); renderMain();
  }, 150);
});

/* ---------- keyboard ---------- */
document.addEventListener("keydown", ev => {
  const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (ev.key === "/" && !inField) { ev.preventDefault(); $("#search").focus(); $("#search").select(); return; }
  if (ev.key === "Escape") {
    if (!$("#settingsWrap").hidden) { closeSettings(); return; }
    if ($("#sidebar").classList.contains("open")) { closeSheet(); return; }
    if (state.exId) { closeDetail(); return; }
    if (inField) document.activeElement.blur();
    return;
  }
  if (inField) return;
  const k = ev.key.toLowerCase();
  if (state.exId) {
    if (k === "arrowleft" || k === "k") { const nb = neighborIds(state.exId); if (nb.prev) openDetail(nb.prev); ev.preventDefault(); }
    if (k === "arrowright" || k === "j") { const nb = neighborIds(state.exId); if (nb.next) openDetail(nb.next); ev.preventDefault(); }
    return;
  }
  if (state.view === "lib" && ["j", "k", "arrowleft", "arrowright", "arrowup", "arrowdown"].includes(k)) {
    const cards = $$("[data-card]");
    if (!cards.length) return;
    const cur = cards.indexOf(document.activeElement);
    let nxt;
    if (cur === -1) nxt = 0;
    else if (k === "j" || k === "arrowright" || k === "arrowdown") nxt = Math.min(cards.length - 1, cur + 1);
    else nxt = Math.max(0, cur - 1);
    cards[nxt].focus(); ev.preventDefault();
  }
});

/* remember which card was focused for restore-on-close */
document.addEventListener("focusin", ev => { const c = ev.target.closest && ev.target.closest("[data-card]"); if (c) lastFocusCard = c.getAttribute("data-card"); });

/* ---------- swipe navigation in detail ---------- */
(() => {
  const d = $("#detail");
  let x0 = 0, y0 = 0, t0 = 0;
  d.addEventListener("touchstart", ev => { const t = ev.touches[0]; x0 = t.clientX; y0 = t.clientY; t0 = Date.now(); }, { passive: true });
  d.addEventListener("touchend", ev => {
    if (!state.exId) return;
    const t = ev.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 > 700) return;
    if (Math.abs(dx) > 64 && Math.abs(dx) > 2.2 * Math.abs(dy)) {
      const nb = neighborIds(state.exId);
      if (dx < 0 && nb.next) openDetail(nb.next);
      else if (dx > 0 && nb.prev) openDetail(nb.prev);
    }
  }, { passive: true });
})();

/* ---------- drag reorder (desktop builder) ---------- */
let dragIdx = null;
document.addEventListener("dragstart", ev => {
  const it = ev.target.closest && ev.target.closest("[data-bi]");
  if (!it) return;
  dragIdx = Number(it.getAttribute("data-bi"));
  it.classList.add("dragging");
  ev.dataTransfer.effectAllowed = "move";
  try { ev.dataTransfer.setData("text/plain", String(dragIdx)); } catch (e) {}
});
document.addEventListener("dragover", ev => {
  const over = ev.target.closest && ev.target.closest("[data-bi]");
  if (over == null || dragIdx == null) return;
  ev.preventDefault();
  const overIdx = Number(over.getAttribute("data-bi"));
  if (overIdx === dragIdx) return;
  const it = state.builder.splice(dragIdx, 1)[0];
  state.builder.splice(overIdx, 0, it);
  dragIdx = overIdx;
  saveBuilder(); renderBuilderPage();
  const el = document.querySelector(`[data-bi="${dragIdx}"]`);
  if (el) el.classList.add("dragging");
});
document.addEventListener("dragend", () => { dragIdx = null; $$(".bld-item.dragging").forEach(e => e.classList.remove("dragging")); const ta = $(".bld-export"); if (ta) ta.value = builderText(); });

/* ---------- boot ---------- */
window.addEventListener("hashchange", routeFromHash);
(function init() {
  const storedTheme = LS.get("theme", null);
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(storedTheme || (prefersLight ? "light" : "dark"), false);
  $("#settingsBtn").innerHTML = ICONS.gear;
  parseHash();
  renderMain();
  if (state.exId) openDetail(state.exId, false);
  updateHash(false);
})();
