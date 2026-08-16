/* ===== SVG ANIMATION ENGINE ================================================
   Articulated 2D figure (side + front rigs) driven by keyframed joint angles.
   Angles are degrees from the vertical; forward = +x (figure faces right).
   Templates return keyframes; equipment (bars, cables, stacks, benches)
   is drawn per-frame from the solved joint points so it tracks the body.  */
"use strict";

const AN = (() => {
  const NS = "http://www.w3.org/2000/svg";
  const VB = { w: 420, h: 300 };
  const G = 272;                 // ground line y
  const RIG = { TORSO: 60, UA: 32, FA: 30, TH: 44, SH: 42, HEADR: 10.5, NECK: 6, FOOT: 17 };
  const D2R = Math.PI / 180;
  const sd = a => Math.sin(a * D2R), cd = a => Math.cos(a * D2R);
  const dd = a => [sd(a), cd(a)];        // 0deg => straight down
  const du = a => [sd(a), -cd(a)];       // 0deg => straight up
  const add = (p, v, len) => ({ x: p.x + v[0] * len, y: p.y + v[1] * len });
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  const path = (parent, cls, w, extra) => el("path", Object.assign({ class: cls || "", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": w }, extra || {}), parent);

  /* ---------- pose solvers (side rig) ---------- */
  // pose: {ankX?|hipX, hipY?, th, sh, thF?, shF?, torso, ua, fa, uaF?, faF?, head?, shoLift?, heel?}
  function solveStand(p) {
    const th = p.th ?? 5, sh = p.sh ?? 2;
    let hipY = p.hipY;
    if (hipY == null) hipY = G - 6 - (RIG.TH * cd(th) + RIG.SH * cd(sh));
    let hipX = p.hipX;
    if (hipX == null && p.ankX != null) hipX = p.ankX - RIG.TH * sd(th) - RIG.SH * sd(sh);
    if (hipX == null) hipX = 200;
    if (p.lift) hipY -= p.lift;
    const hip = { x: hipX, y: hipY };
    const knee = add(hip, dd(th), RIG.TH), ank = add(knee, dd(sh), RIG.SH);
    const pts = { hip, knee, ank };
    if (p.thF != null) { pts.kneeF = add(hip, dd(p.thF), RIG.TH); pts.ankF = add(pts.kneeF, dd(p.shF ?? 0), RIG.SH); }
    let sho = add(hip, du(p.torso ?? 0), RIG.TORSO);
    if (p.shoLift) sho = { x: sho.x, y: sho.y - p.shoLift };
    pts.sho = sho;
    pts.elb = add(sho, dd(p.ua ?? 5), RIG.UA);
    pts.hand = add(pts.elb, dd(p.fa ?? 5), RIG.FA);
    if (p.uaF != null) { pts.elbF = add(sho, dd(p.uaF), RIG.UA); pts.handF = add(pts.elbF, dd(p.faF ?? p.uaF), RIG.FA); }
    pts.headC = add(sho, du((p.torso ?? 0) + (p.head ?? 0)), RIG.NECK + RIG.HEADR);
    return pts;
  }
  // hanging: hand is fixed; body solved downward from it
  function solveHang(p) {
    const hand = { x: p.handX, y: p.handY };
    const elb = add(hand, dd(p.fa ?? 180), -RIG.FA);
    const sho = add(elb, dd(p.ua ?? 180), -RIG.UA);
    const hip = add(sho, du(p.torso ?? 0), -RIG.TORSO);
    const knee = add(hip, dd(p.th ?? 6), RIG.TH), ank = add(knee, dd(p.sh ?? -8), RIG.SH);
    const pts = { hand, elb, sho, hip, knee, ank, headC: add(sho, du((p.torso ?? 0) + (p.head ?? 0)), RIG.NECK + RIG.HEADR) };
    if (p.thF != null) { pts.kneeF = add(hip, dd(p.thF), RIG.TH); pts.ankF = add(pts.kneeF, dd(p.shF ?? 0), RIG.SH); }
    return pts;
  }

  /* ---------- figure drawing ---------- */
  function makeFigure(parent) {
    const g = el("g", { class: "fig" }, parent);
    const farLeg = path(g, "", 9, { stroke: "var(--text)", opacity: 0.38 });
    const farArm = path(g, "", 7.5, { stroke: "var(--text)", opacity: 0.38 });
    const torso = path(g, "", 13, { stroke: "var(--text)", opacity: 0.92 });
    const head = el("circle", { r: RIG.HEADR, fill: "var(--text)", opacity: 0.92 }, g);
    const nearLeg = path(g, "", 9.5, { stroke: "var(--text)", opacity: 0.92 });
    const nearArm = path(g, "", 8, { stroke: "var(--text)", opacity: 0.92 });
    return { g, farLeg, farArm, torso, head, nearLeg, nearArm };
  }
  const L = pts => pts.map((p, i) => (i ? "L" : "M") + p.x.toFixed(1) + " " + p.y.toFixed(1)).join(" ");
  function drawFigure(f, pts, opts) {
    const o = opts || {};
    const foot = o.heel
      ? a => { const toe = { x: a.x + RIG.FOOT - 3, y: G }; const heel = add(toe, du(90 + (o.heel || 0)), RIG.FOOT); return [a, heel.y > a.y ? heel : a, toe]; }
      : a => [a, { x: a.x + (o.footDir ?? 1) * RIG.FOOT, y: Math.min(a.y + 5, G) }];
    f.nearLeg.setAttribute("d", L([pts.hip, pts.knee, pts.ank].concat(o.noFoot ? [] : foot(pts.ank).slice(1))));
    f.farLeg.setAttribute("d", pts.kneeF ? L([pts.hip, pts.kneeF, pts.ankF].concat(o.noFoot ? [] : foot(pts.ankF).slice(1))) : "");
    f.torso.setAttribute("d", L([pts.hip, pts.sho]));
    f.head.setAttribute("cx", pts.headC.x); f.head.setAttribute("cy", pts.headC.y);
    f.nearArm.setAttribute("d", L([pts.sho, pts.elb, pts.hand]));
    f.farArm.setAttribute("d", pts.elbF ? L([pts.sho, pts.elbF, pts.handF]) : "");
  }

  /* ---------- front rig ---------- */
  function makeFront(parent) {
    const g = el("g", { class: "figF" }, parent);
    const legs = path(g, "", 9, { stroke: "var(--text)", opacity: 0.85 });
    const torso = el("path", { fill: "var(--text)", opacity: 0.9 }, g);
    const head = el("circle", { r: 10.5, fill: "var(--text)", opacity: 0.92 }, g);
    const armL = path(g, "", 8, { stroke: "var(--text)", opacity: 0.9 });
    const armR = path(g, "", 8, { stroke: "var(--text)", opacity: 0.9 });
    return { g, legs, torso, head, armL, armR };
  }
  // front pose: {cx, shoY, abdL, abdR, bendL, bendR, legOutL?, legOutR?, hands?: [{x,y}] override}
  function solveFront(p) {
    const cx = p.cx ?? 210, shoY = p.shoY ?? 118, hipY = 182;
    const shoL = { x: cx - 29, y: shoY }, shoR = { x: cx + 29, y: shoY };
    const dir = (side, a) => [side * sd(a), cd(a)];
    function arm(sho, side, abd, bend) {
      const elb = add(sho, dir(side, abd), RIG.UA);
      const hand = add(elb, dir(side, abd - (bend ?? 16)), RIG.FA);
      return { elb, hand };
    }
    const aL = arm(shoL, -1, p.abdL ?? 8, p.bendL);
    const aR = arm(shoR, 1, p.abdR ?? 8, p.bendR);
    return { cx, shoY, hipY, shoL, shoR, elbL: aL.elb, handL: p.handL || aL.hand, elbR: aR.elb, handR: p.handR || aR.hand,
      hipL: { x: cx - 12, y: hipY }, hipR: { x: cx + 12, y: hipY },
      legOutL: p.legOutL ?? 7, legOutR: p.legOutR ?? 7, kneeBendR: p.kneeBendR };
  }
  function drawFront(f, pts) {
    const t = `M ${pts.cx - 29} ${pts.shoY - 7} Q ${pts.cx} ${pts.shoY - 13} ${pts.cx + 29} ${pts.shoY - 7} L ${pts.cx + 15} ${pts.hipY + 4} Q ${pts.cx} ${pts.hipY + 9} ${pts.cx - 15} ${pts.hipY + 4} Z`;
    f.torso.setAttribute("d", t);
    f.head.setAttribute("cx", pts.cx); f.head.setAttribute("cy", pts.shoY - 26);
    const leg = (hip, out, kb) => {
      const knee = { x: hip.x + out * 0.55, y: 226 };
      const ank = { x: hip.x + out, y: G - 4 };
      if (kb) { knee.x = hip.x + out; knee.y = 220; ank.x = hip.x + out * 1.6; ank.y = 244; }
      return [hip, knee, ank];
    };
    f.legs.setAttribute("d", L(leg(pts.hipL, -pts.legOutL)) + " " + L(leg(pts.hipR, pts.legOutR, pts.kneeBendR)));
    f.armL.setAttribute("d", L([pts.shoL, pts.elbL, pts.handL]));
    f.armR.setAttribute("d", L([pts.shoR, pts.elbR, pts.handR]));
  }

  /* ---------- equipment drawing helpers ---------- */
  const ANCHOR_Y = { high: 54, mid: 148, low: 248 };
  function drawGround(g) { el("line", { x1: 6, y1: G + 7, x2: VB.w - 6, y2: G + 7, stroke: "var(--line2)", "stroke-width": 2.5, "stroke-linecap": "round" }, g); }
  function drawSmith(g, railX) {
    el("line", { x1: railX, y1: 26, x2: railX, y2: G + 4, stroke: "var(--muted)", "stroke-width": 5, opacity: 0.5 }, g);
    for (let y = 70; y <= 250; y += 18) el("line", { x1: railX - 8, y1: y, x2: railX - 2, y2: y + 5, stroke: "var(--muted)", "stroke-width": 2.5, opacity: 0.55 }, g);
    el("line", { x1: railX - 26, y1: G + 4, x2: railX + 26, y2: G + 4, stroke: "var(--muted)", "stroke-width": 5, opacity: 0.5, "stroke-linecap": "round" }, g);
    el("text", { x: railX, y: 18, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, g).textContent = "SMITH TRACK";
  }
  function drawCage(g, opts) {
    const o = opts || {}; const xs = [104, 322];
    xs.forEach(x => {
      el("line", { x1: x, y1: 22, x2: x, y2: G + 4, stroke: "var(--muted)", "stroke-width": 6, opacity: 0.45 }, g);
      for (let y = 46; y <= 252; y += 14) el("circle", { cx: x, cy: y, r: 1.6, fill: "var(--bg)", opacity: 0.9 }, g);
    });
    el("line", { x1: xs[0], y1: 24, x2: xs[1], y2: 24, stroke: "var(--muted)", "stroke-width": 5, opacity: 0.45 }, g);
    if (o.safeY) xs.forEach((x, i) => el("line", { x1: x, y1: o.safeY, x2: x + (i ? -58 : 58), y2: o.safeY, stroke: "var(--st-cage)", "stroke-width": 5, opacity: 0.85, "stroke-linecap": "round" }, g));
    if (o.jY) xs.forEach((x, i) => el("path", { d: `M ${x + (i ? -4 : 4)} ${o.jY} l ${i ? -14 : 14} 0 l 0 7`, stroke: "var(--muted)", "stroke-width": 4, fill: "none", opacity: 0.7 }, g));
  }
  function drawBench(g, bx, angle, len) {
    const topY = G - 48, seatL = (len || 88) / 2;
    const grp = el("g", {}, g);
    el("rect", { x: bx - seatL, y: topY, width: angle ? seatL + 6 : seatL * 2, height: 9, rx: 3, fill: "var(--card2)", stroke: "var(--line2)", "stroke-width": 1.5 }, grp);
    if (angle) {
      const back = el("rect", { x: 0, y: -4.5, width: seatL + 10, height: 9, rx: 3, fill: "var(--card2)", stroke: "var(--line2)", "stroke-width": 1.5 }, grp);
      back.setAttribute("transform", `translate(${bx + 2} ${topY + 4.5}) rotate(${-angle})`);
    }
    [bx - seatL + 12, bx + seatL - 12].forEach(x => el("line", { x1: x, y1: topY + 9, x2: x, y2: G + 2, stroke: "var(--line2)", "stroke-width": 4 }, grp));
    return grp;
  }
  function drawMast(g, side, anchorY, opts) {
    const o = opts || {}; const x = side === "left" ? 16 : VB.w - 16;
    el("line", { x1: x, y1: 20, x2: x, y2: G + 4, stroke: "var(--muted)", "stroke-width": 7, opacity: 0.5 }, g);
    el("line", { x1: x - 10, y1: G + 4, x2: x + 10, y2: G + 4, stroke: "var(--muted)", "stroke-width": 4, opacity: 0.5 }, g);
    const px = side === "left" ? x + 9 : x - 9;
    el("rect", { x: x - 5, y: anchorY - 11, width: 10, height: 22, rx: 2.5, fill: "var(--muted)", opacity: 0.8 }, g);
    const pulley = { x: px, y: anchorY };
    el("circle", { cx: px, cy: anchorY, r: 4.5, fill: "var(--bg)", stroke: "var(--muted)", "stroke-width": 2 }, g);
    let stack = null;
    if (!o.noStack) {
      el("rect", { x: x - 8 + (side === "left" ? 10 : -2), y: G - 62, width: 0.1, height: 0.1, fill: "none" }, g);
      stack = el("rect", { x: side === "left" ? x + 6 : x - 22, y: G - 44, width: 16, height: 44, rx: 2, fill: "var(--muted)", opacity: 0.55 }, g);
      for (let i = 1; i < 5; i++) el("line", { x1: side === "left" ? x + 6 : x - 22, y1: G - 44 + i * 8.8, x2: side === "left" ? x + 22 : x - 6, y2: G - 44 + i * 8.8, stroke: "var(--bg)", "stroke-width": 1.2, opacity: 0.8 }, g);
    }
    return { pulley, stack, x };
  }
  function drawPullupBar(g) {
    el("line", { x1: 128, y1: 46, x2: 300, y2: 46, stroke: "var(--muted)", "stroke-width": 6, opacity: 0.7, "stroke-linecap": "round" }, g);
    [138, 290].forEach(x => el("line", { x1: x, y1: 46, x2: x, y2: 22, stroke: "var(--muted)", "stroke-width": 5, opacity: 0.45 }, g));
    el("text", { x: 214, y: 32, "text-anchor": "middle", "font-size": 9, fill: "var(--muted)", "font-weight": 700, "letter-spacing": 1 }, g).textContent = "PULL-UP BAR";
  }
  function drawDipBars(g) {
    el("line", { x1: 152, y1: 162, x2: 152, y2: G + 4, stroke: "var(--muted)", "stroke-width": 6, opacity: 0.45 }, g);
    el("line", { x1: 236, y1: 162, x2: 236, y2: G + 4, stroke: "var(--muted)", "stroke-width": 6, opacity: 0.3 }, g);
    el("line", { x1: 150, y1: 162, x2: 240, y2: 162, stroke: "var(--muted)", "stroke-width": 6, opacity: 0.8, "stroke-linecap": "round" }, g);
  }
  function drawLandmine(g) {
    el("path", { d: `M 352 ${G + 4} l 10 -14 l 10 14 Z`, fill: "var(--muted)", opacity: 0.7 }, g);
    el("circle", { cx: 362, cy: G - 12, r: 5, fill: "var(--bg)", stroke: "var(--muted)", "stroke-width": 2.5 }, g);
  }
  function drawFootplate(g, x) {
    el("rect", { x: x - 6, y: G - 26, width: 8, height: 26, rx: 2, fill: "var(--muted)", opacity: 0.75 }, g);
  }

  /* ---------- dynamic prop helpers (created once, updated per frame) ---------- */
  function mkPlate(dyn, r) {
    const g = el("g", {}, dyn);
    el("circle", { r: r || 12, fill: "var(--card2)", stroke: "var(--text2)", "stroke-width": 2.5 }, g);
    el("circle", { r: 2.6, fill: "var(--text2)" }, g);
    return g;
  }
  const placeAt = (n, p) => n.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
  function mkCable(dyn) { return el("path", { fill: "none", stroke: "var(--accent)", "stroke-width": 2.4, "stroke-linecap": "round" }, dyn); }
  const cableD = (a, b) => `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  function mkBand(dyn) { return el("path", { fill: "none", stroke: "var(--st-body)", "stroke-width": 3.5, opacity: 0.8, "stroke-linecap": "round" }, dyn); }
  function mkBarLine(dyn, len) {
    const g = el("g", {}, dyn);
    el("line", { x1: -(len || 22), y1: 0, x2: len || 22, y2: 0, stroke: "var(--text2)", "stroke-width": 4, "stroke-linecap": "round" }, g);
    return g;
  }
  // stack rises half the cable travel (2:1 ratio, like the real machine)
  function stackTracker(mast, from) {
    let base = null;
    return hand => {
      if (!mast.stack) return;
      const d = dist(mast.pulley, hand);
      if (base == null) base = d;
      const dy = Math.max(0, (d - base) * 0.5);
      mast.stack.setAttribute("transform", `translate(0 ${(-dy).toFixed(1)})`);
    };
  }

  return { NS, VB, G, RIG, dd, du, sd, cd, add, dist, lerp, ease, el, path, L,
    solveStand, solveHang, makeFigure, drawFigure, makeFront, solveFront, drawFront,
    ANCHOR_Y, drawGround, drawSmith, drawCage, drawBench, drawMast, drawPullupBar,
    drawDipBars, drawLandmine, drawFootplate, mkPlate, placeAt, mkCable, cableD,
    mkBand, mkBarLine, stackTracker };
})();

/* ===== MOTION TEMPLATES =====================================================
   Each: { dur, caption?, build(params, station) -> {frames, rig, scene, props} }
   frames: array of {t:0..1, ...numeric pose fields} (all frames share fields).
   scene(g, ctx): draw static equipment. props(dyn, ctx): create moving props,
   return update(pts, pose, phase) called every frame.                       */
const TEMPLATES = (() => {
  const A = AN, G = A.G, T = {};
  const F = (t, o) => Object.assign({ t }, o);
  const loop = fr => { const f0 = Object.assign({}, fr[0], { t: 1 }); return fr.concat([f0]); };

  // arm angles that keep hands racked on the shoulders as the torso moves
  const gripBack = tor => ({ ua: -34 + tor * 0.9, fa: -168 + tor * 0.9 });
  const gripFront = tor => ({ ua: 55 + tor * 0.7, fa: -174 + tor * 0.7 });

  function landmineProp(dyn, r) {
    const bar = A.el("line", { stroke: "var(--text2)", "stroke-width": 4.5, "stroke-linecap": "round" }, dyn);
    const plate = A.mkPlate(dyn, r || 11);
    return pts => {
      const piv = { x: 362, y: G - 12 }, h = pts.hand;
      const u = { x: h.x - piv.x, y: h.y - piv.y }, m = Math.hypot(u.x, u.y) || 1;
      const pp = { x: h.x + u.x / m * 9, y: h.y + u.y / m * 9 };
      bar.setAttribute("x1", piv.x); bar.setAttribute("y1", piv.y);
      bar.setAttribute("x2", pp.x); bar.setAttribute("y2", pp.y);
      A.placeAt(plate, pp);
    };
  }
  function cableProp(dyn, ctx, opts) {
    const o = opts || {};
    const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
    const bar = o.att === "bar" ? A.mkBarLine(dyn, o.barLen || 13) : null;
    const prongs = o.att === "rope" ? A.path(dyn, "", 2.4, { stroke: "var(--accent)" }) : null;
    const knob = (!o.att || o.att === "handle") ? A.el("circle", { r: 2.8, fill: "var(--accent)" }, dyn) : null;
    return (target) => {
      line.setAttribute("d", A.cableD(ctx.mast.pulley, target));
      if (bar) A.placeAt(bar, target);
      if (prongs) prongs.setAttribute("d", `M ${target.x} ${target.y} l ${o.px1 ?? 8} ${o.py1 ?? -6} M ${target.x} ${target.y} l ${o.px2 ?? 8} ${o.py2 ?? 5}`);
      if (knob) { knob.setAttribute("cx", target.x); knob.setAttribute("cy", target.y); }
      track(target);
    };
  }

  /* ---------- SQUAT ---------- */
  T.squat = {
    dur: 3200,
    caption: p => p.style === "lowbar" ? "low-bar" : p.style === "front" ? "front rack" : p.toPress ? "squat + press" : null,
    build(p) {
      const smith = p.load === "smith", lm = p.load === "landmine";
      const ankX = smith ? 215 : 206;
      const leanTop = p.style === "lowbar" ? 12 : p.style === "front" ? 4 : 7;
      const leanBot = p.style === "lowbar" ? 32 : p.style === "front" ? 12 : 19;
      const grip = t => p.style === "front" ? gripFront(t) : lm ? { ua: 30, fa: -138 } : gripBack(t);
      const top = Object.assign({ ankX, th: 8, sh: 4, torso: leanTop, head: 4 }, grip(leanTop));
      const bot = Object.assign({ ankX, th: 94, sh: -24, torso: leanBot, head: 8 }, grip(leanBot));
      let frames;
      if (p.toPress) {
        const press = Object.assign({}, top, { ua: 122, fa: 152 });
        frames = [F(0, top), F(0.3, bot), F(0.58, top), F(0.78, press), F(1, top)];
      } else frames = loop([F(0, top), F(0.5, bot)]);
      return {
        frames, rig: "side",
        scene(g) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          else if (lm) A.drawLandmine(g);
          else A.drawCage(g, { safeY: 205, jY: 118 });
        },
        props(dyn) {
          if (lm) return landmineProp(dyn);
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.sho.x + (p.style === "front" ? 13 : 5), y: pts.sho.y - 2 });
        }
      };
    }
  };

  /* ---------- SPLIT SQUAT / LUNGE ---------- */
  T.splitSquat = {
    dur: 3000,
    caption: p => p.rearOn === "bench" ? "rear foot on bench" : p.lunge ? "step back each rep" : null,
    build(p) {
      const smith = p.load === "smith";
      const ankX = 236, bench = p.rearOn === "bench";
      const rearTop = bench ? { thF: -34, shF: -100 } : { thF: -26, shF: -12 };
      const rearBot = bench ? { thF: -20, shF: -104 } : { thF: -10, shF: -46 };
      const g = t => smith ? gripBack(t) : { ua: 6, fa: 6 };
      const top = Object.assign({ ankX, th: 16, sh: 6, torso: 6, head: 3 }, rearTop, g(6));
      const bot = Object.assign({ ankX, th: 76, sh: -14, torso: 12, head: 6 }, rearBot, g(12));
      return {
        frames: loop([F(0, top), F(0.5, bot)]), rig: "side",
        scene(gr) {
          A.drawGround(gr);
          if (smith) A.drawSmith(gr, 210); else A.drawCage(gr, { safeY: 215 });
          if (bench) A.drawBench(gr, 128, 0, 76);
        },
        props(dyn) {
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.sho.x + 5, y: pts.sho.y - 2 });
        }
      };
    }
  };

  /* ---------- HINGE (RDL / deadlift / GM / pull-through / cable DL / rack pull) ---------- */
  T.hinge = {
    dur: 3200,
    caption: p => p.style === "sumo" ? "wide sumo stance" : p.fromPins ? "reset on the catches" : p.cableBehind ? "face away from the stack" : null,
    build(p) {
      const smith = p.load === "smith", cable = p.load === "cable", lm = p.load === "landmine";
      const ankX = smith ? 212 : lm ? 250 : 205;
      const deep = { knee: { torso: 55, th: 16, sh: -4 }, "mid-shin": { torso: 74, th: 22, sh: -7 }, floor: { torso: 70, th: 58, sh: -18 } }[p.rom || "mid-shin"];
      const armT = t => p.barOnBack ? gripBack(t) : { ua: p.cableBehind ? -6 : 5, fa: p.cableBehind ? -10 : 5 };
      const armB = t => p.barOnBack ? gripBack(t) : { ua: p.cableBehind ? -26 : 4, fa: p.cableBehind ? -30 : 4 };
      const top = Object.assign({ ankX, th: 7, sh: 3, torso: 3, head: 3 }, armT(3));
      const bot = Object.assign({ ankX, th: deep.th, sh: deep.sh, torso: deep.torso, head: 10 }, armB(deep.torso));
      if (p.style === "sumo") { top.thF = 16; top.shF = 8; bot.thF = deep.th + 12; bot.shF = deep.sh + 10; }
      const frames = p.fromPins ? loop([F(0, bot), F(0.5, top)]) : loop([F(0, top), F(0.5, bot)]);
      return {
        frames, rig: "side",
        scene(g, ctx) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          else if (lm) A.drawLandmine(g);
          else if (cable) ctx.mast = A.drawMast(g, p.cableBehind ? "left" : "right", A.ANCHOR_Y[p.anchor || "low"]);
          else A.drawCage(g, p.fromPins ? { safeY: 198 } : {});
        },
        props(dyn, ctx) {
          if (lm) return landmineProp(dyn);
          if (cable) {
            const up = cableProp(dyn, ctx, { att: p.cableBehind ? "rope" : "handle", px1: 7, py1: 6, px2: 7, py2: -2 });
            return pts => up(pts.hand);
          }
          const plate = A.mkPlate(dyn, 12.5);
          return pts => {
            const at = p.barOnBack ? { x: pts.sho.x + 5, y: pts.sho.y - 2 } : { x: pts.hand.x + 3, y: pts.hand.y };
            A.placeAt(plate, at);
          };
        }
      };
    }
  };

  /* ---------- HIP THRUST / GLUTE BRIDGE ---------- */
  T.hipThrust = {
    dur: 2800,
    caption: p => p.back === "floor" ? "shoulders on the floor" : "upper back on the bench",
    build(p) {
      const smith = p.load === "smith", floor = p.back === "floor";
      const shoX = 152, shoY = floor ? G - 12 : G - 49;
      const mk = (tor, th, sh, ua, fa) => ({ shoX, shoY, torso: tor, th, sh, ua, fa, head: floor ? -18 : -26 });
      const bot = mk(-121, 64, -46, 96, 44);
      const top = mk(floor ? -99 : -93, 30, -62, 102, 62);
      return {
        frames: loop([F(0, bot), F(0.42, top), F(0.6, top)]), rig: "sideFixedSho",
        scene(g) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          if (!floor) A.drawBench(g, 128, 0, 72);
        },
        props(dyn) {
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.hip.x + 4, y: pts.hip.y - 8 });
        }
      };
    }
  };

  /* ---------- BENCH PRESS family ---------- */
  T.benchPress = {
    dur: 3000,
    caption: p => p.grip === "close" ? "close grip" : p.fromPins ? "dead stop on the safeties" : p.angle > 0 ? "incline" : p.angle < 0 ? "decline" : null,
    build(p) {
      const smith = p.load === "smith";
      const ang = p.angle || 0;
      const hipX = smith ? 268 : 252, benchTop = G - 48;
      const torso = -90 + ang * 0.85;
      const base = { hipX, hipY: benchTop - 4 - (ang < 0 ? 4 : 0), torso, head: ang * 0.1, th: ang < 0 ? 88 : 72, sh: ang < 0 ? 46 : 12 };
      const bot = Object.assign({}, base, { ua: 82 - ang * 0.4, fa: 176 });
      const top = Object.assign({}, base, { ua: 168 - ang * 0.5, fa: 178 });
      const frames = p.fromPins ? [F(0, bot), F(0.14, bot), F(0.55, top), F(0.9, bot), F(1, bot)] : loop([F(0, top), F(0.5, bot)]);
      return {
        frames, rig: "side",
        scene(g) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          else A.drawCage(g, { safeY: p.fromPins ? 196 : 208, jY: 150 });
          A.drawBench(g, hipX - 34, ang, 104);
        },
        props(dyn) {
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.hand.x, y: pts.hand.y });
        }
      };
    }
  };

  /* ---------- OVERHEAD PRESS / PUSH PRESS ---------- */
  T.ohp = {
    dur: 3000,
    caption: p => p.legDrive ? "dip + drive" : p.seated ? "seated, bench upright" : null,
    build(p) {
      const smith = p.load === "smith";
      const seated = !!p.seated;
      const base = seated
        ? { hipX: smith ? 208 : 205, hipY: G - 52, th: 85, sh: 52 }
        : { ankX: smith ? 209 : 205, th: 5, sh: 2 };
      const bot = Object.assign({}, base, { torso: -3, head: -8, ua: 25, fa: -152 });
      const top = Object.assign({}, base, { torso: -5, head: 6, ua: 175, fa: 178 });
      let frames;
      if (p.legDrive) {
        const dip = Object.assign({}, bot, { th: 26, sh: -10 });
        frames = [F(0, bot), F(0.18, dip), F(0.5, top), F(0.85, bot), F(1, bot)];
      } else frames = loop([F(0, bot), F(0.5, top)]);
      return {
        frames, rig: "side",
        scene(g) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210); else A.drawCage(g, { jY: 168 });
          if (seated) A.drawBench(g, base.hipX - 26, 82, 70);
        },
        props(dyn) {
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.hand.x, y: pts.hand.y });
        }
      };
    }
  };

  /* ---------- STANDING CABLE CHEST PRESS ---------- */
  T.chestPressStand = {
    dur: 2800,
    caption: p => p.rotation ? "let the trunk rotate through" : "staggered stance, face away",
    build(p) {
      const base = { ankX: 216, th: 14, sh: 6, thF: -18, shF: -8, head: 2 };
      const back = Object.assign({}, base, { torso: 6, ua: -18, fa: 143 });
      const out = Object.assign({}, base, { torso: p.rotation ? 11 : 6, ua: 85, fa: 88 });
      if (p.singleArm) { back.uaF = -14; back.faF = -20; out.uaF = -14; out.faF = -20; }
      return {
        frames: loop([F(0, back), F(0.5, out)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y[p.anchor || "mid"]); },
        props(dyn, ctx) { const up = cableProp(dyn, ctx, {}); return pts => up(pts.hand); }
      };
    }
  };

  /* ---------- LANDMINE PRESS ---------- */
  T.landminePress = {
    dur: 2900,
    caption: p => p.kneeling ? "half-kneeling, inside knee down" : "press up and forward",
    build(p) {
      const base = p.kneeling
        ? { hipX: 236, hipY: G - 50, th: -10, sh: -86, thF: 64, shF: -22, head: 2 }
        : { ankX: 232, th: 10, sh: 4, thF: -14, shF: -6, head: 2 };
      const bot = Object.assign({}, base, { torso: p.kneeling ? 2 : 4, ua: 30, fa: -140 });
      const top = Object.assign({}, base, { torso: (p.kneeling ? 2 : 4) + 4, ua: 118, fa: 152 });
      return {
        frames: loop([F(0, bot), F(0.5, top)]), rig: "side",
        scene(g) { A.drawGround(g); A.drawLandmine(g); },
        props(dyn) { return landmineProp(dyn); }
      };
    }
  };

  /* ---------- LAT PULLDOWN ---------- */
  T.pulldown = {
    dur: 3000,
    caption: p => p.singleArm ? "single arm" : p.grip === "wide" ? "wide grip" : p.grip === "neutral" ? "neutral grip" : p.grip === "underhand" ? "underhand grip" : null,
    build(p) {
      const base = { hipX: 258, hipY: G - 50, th: 85, sh: 52, head: 4 };
      const top = Object.assign({}, base, { torso: -4, ua: 152, fa: 156 });
      const bot = Object.assign({}, base, { torso: -12, ua: -30, fa: 95 });
      if (p.singleArm) { top.uaF = -18; top.faF = -25; bot.uaF = -18; bot.faF = -25; }
      return {
        frames: loop([F(0, top), F(0.5, bot)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); A.drawBench(g, 250, 0, 62); },
        props(dyn, ctx) {
          const up = cableProp(dyn, ctx, p.singleArm ? {} : { att: "bar", barLen: p.grip === "wide" ? 30 : 16 });
          return pts => up(pts.hand);
        }
      };
    }
  };

  /* ---------- PULL-UP family (hanging) ---------- */
  T.pullup = {
    dur: 3200,
    caption: p => p.scap ? "shoulder blades only" : p.band ? "band assists the bottom" : p.grip === "under" ? "underhand grip" : p.grip === "neutral" ? "neutral grip" : "overhand grip",
    build(p) {
      const hand = { handX: 218, handY: 52 };
      const legs = { th: 10, sh: -26, head: 6 };
      const bot = Object.assign({}, hand, legs, { torso: -3, ua: 179, fa: 181 });
      const top = p.scap
        ? Object.assign({}, hand, legs, { torso: -3, ua: 174, fa: 176, head: 10 })
        : Object.assign({}, hand, legs, { torso: -8, ua: 115, fa: 250, head: 10 });
      return {
        frames: loop([F(0, bot), F(0.5, top)]), rig: "hang",
        scene(g) { A.drawGround(g); A.drawPullupBar(g); },
        props(dyn) {
          const band = p.band ? A.mkBand(dyn) : null;
          return pts => {
            if (band) band.setAttribute("d", `M 218 48 C 214 ${(pts.knee.y - 30).toFixed(1)} ${(pts.knee.x - 4).toFixed(1)} ${(pts.knee.y - 20).toFixed(1)} ${pts.knee.x.toFixed(1)} ${pts.knee.y.toFixed(1)}`);
          };
        }
      };
    }
  };

  /* ---------- ROW family ---------- */
  T.row = {
    dur: 2900,
    caption: p => ({ seated: "low row, feet on the plate", standing: "split stance", inverted: p.feetElevated ? "feet on the bench" : "heels on the floor", tbar: "T-bar handle", meadows: "outside hand on the sleeve" })[p.posture] || (p.deadStop ? "dead stop each rep" : "hinged, torso set"),
    build(p) {
      const smith = p.load === "smith", cable = p.load === "cable", lm = p.load === "landmine";
      if (p.posture === "inverted") {
        const barY = p.feetElevated ? G - 100 : G - 92;
        const legs = p.feetElevated ? { th: 96, sh: 96 } : { th: 62, sh: 40 };
        const bot = Object.assign({ handX: 210, handY: barY, torso: -52, head: -4 }, legs, { ua: 150, fa: 150 });
        const top = Object.assign({ handX: 210, handY: barY, torso: -58, head: -2 }, legs, { ua: 100, fa: 205 });
        return {
          frames: loop([F(0, bot), F(0.5, top)]), rig: "hang",
          scene(g) {
            A.drawGround(g); A.drawSmith(g, 210);
            A.el("circle", { cx: 210, cy: barY, r: 10, fill: "var(--card2)", stroke: "var(--text2)", "stroke-width": 2.5 }, g);
            if (p.feetElevated) A.drawBench(g, 316, 0, 66);
          },
          props() { return () => {}; }
        };
      }
      if (p.posture === "seated") {
        const base = { hipX: 262, hipY: G - 15, th: 84, sh: 56, head: 3 };
        const reach = Object.assign({}, base, { torso: 6, ua: 80, fa: 82 });
        const pull = Object.assign({}, base, { torso: -4, ua: -28, fa: 93 });
        return {
          frames: loop([F(0, reach), F(0.5, pull)]), rig: "side",
          scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", 176); A.drawFootplate(g, 350); },
          props(dyn, ctx) { const up = cableProp(dyn, ctx, { att: "bar" }); return pts => up(pts.hand); }
        };
      }
      if (p.posture === "standing") {
        const base = { ankX: 214, th: 12, sh: 5, thF: -16, shF: -7, head: 2 };
        const reach = Object.assign({}, base, { torso: 10, ua: 74, fa: 76 });
        const pull = Object.assign({}, base, { torso: 2, ua: -26, fa: 92 });
        return {
          frames: loop([F(0, reach), F(0.5, pull)]), rig: "side",
          scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y[p.anchor || "mid"]); },
          props(dyn, ctx) { const up = cableProp(dyn, ctx, {}); return pts => up(pts.hand); }
        };
      }
      const tor = p.posture === "tbar" ? 62 : p.deadStop ? 78 : 68;
      const ankX = smith ? 168 : lm ? 258 : 200;
      const base = { ankX, th: 24, sh: -8, torso: tor, head: 12 };
      const hang = Object.assign({}, base, { ua: 8, fa: 6 });
      const pull = Object.assign({}, base, { ua: -40, fa: 52 });
      if (p.deadStop) hang.torso = 80;
      return {
        frames: loop([F(0, hang), F(0.5, pull)]), rig: "side",
        scene(g) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          else if (lm) A.drawLandmine(g);
          else A.drawCage(g, {});
        },
        props(dyn) {
          if (lm) return landmineProp(dyn, 10);
          const plate = A.mkPlate(dyn, 12);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.hand.x, y: pts.hand.y });
        }
      };
    }
  };

  /* ---------- FACE PULL ---------- */
  T.facePull = {
    dur: 2700, caption: () => "rope, elbows high",
    build(p) {
      const base = { ankX: 208, th: 10, sh: 4, thF: -14, shF: -6, head: 0 };
      const reach = Object.assign({}, base, { torso: -2, ua: 140, fa: 142 });
      const pull = Object.assign({}, base, { torso: -6, ua: 92, fa: 155 });
      return {
        frames: loop([F(0, reach), F(0.5, pull)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); },
        props(dyn, ctx) { const up = cableProp(dyn, ctx, { att: "rope", px1: -9, py1: -7, px2: -9, py2: 7 }); return pts => up(pts.hand); }
      };
    }
  };

  /* ---------- STRAIGHT-ARM PULLDOWN ---------- */
  T.straightArm = {
    dur: 2900, caption: () => "arms long, sweep to the thighs",
    build() {
      const base = { ankX: 206, th: 12, sh: 5, head: 2 };
      const up = Object.assign({}, base, { torso: 22, ua: 132, fa: 134 });
      const dn = Object.assign({}, base, { torso: 14, ua: 14, fa: 14 });
      return {
        frames: loop([F(0, up), F(0.5, dn)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, { att: "bar" }); return pts => upd(pts.hand); }
      };
    }
  };

  /* ---------- CURL ---------- */
  T.curl = {
    dur: 2800,
    caption: p => p.att === "rope" ? "rope, thumbs up" : p.load === "cable" ? "constant tension" : "elbows pinned",
    build(p) {
      const cable = p.load === "cable";
      const base = { ankX: cable ? 236 : 206, th: 6, sh: 3, torso: 2, head: 2, ua: -8 };
      const dn = Object.assign({}, base, { fa: 6 });
      const up = Object.assign({}, base, { fa: 158 });
      return {
        frames: loop([F(0, dn), F(0.5, up)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); if (cable) ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.low); },
        props(dyn, ctx) {
          if (cable) { const upd = cableProp(dyn, ctx, { att: p.att === "rope" ? "rope" : "bar", px1: 8, py1: -6, px2: 8, py2: 4 }); return pts => upd(pts.hand); }
          const bar = A.mkBarLine(dyn, 13);
          return pts => A.placeAt(bar, pts.hand);
        }
      };
    }
  };

  /* ---------- TRICEPS group ---------- */
  T.pushdown = {
    dur: 2600, caption: p => p.att === "rope" ? "split the rope at the bottom" : "wrists locked",
    build(p) {
      const base = { ankX: 220, th: 10, sh: 4, torso: 8, head: 4, ua: 16 };
      const up = Object.assign({}, base, { fa: 96 });
      const dn = Object.assign({}, base, { fa: 6 });
      return {
        frames: loop([F(0, up), F(0.5, dn)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, { att: p.att === "rope" ? "rope" : "bar", px1: 8, py1: 5, px2: -2, py2: 9 }); return pts => upd(pts.hand); }
      };
    }
  };
  T.overheadTriceps = {
    dur: 2700, caption: () => "elbows by the ears",
    build() {
      const base = { ankX: 218, th: 12, sh: 5, thF: -12, shF: -6, torso: 12, head: -4, ua: 187 };
      const back = Object.assign({}, base, { fa: 252 });
      const ext = Object.assign({}, base, { fa: 192 });
      return {
        frames: loop([F(0, back), F(0.5, ext)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y.high); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, { att: "rope", px1: 9, py1: -4, px2: 9, py2: 4 }); return pts => upd(pts.hand); }
      };
    }
  };
  T.skullCrusher = {
    dur: 2800, caption: () => "elbows fixed, hinge at the elbow",
    build() {
      const base = { hipX: 252, hipY: G - 52, torso: -90, head: 0, th: 72, sh: 12, ua: 168 };
      const up = Object.assign({}, base, { fa: 176 });
      const dn = Object.assign({}, base, { fa: 247 });
      return {
        frames: loop([F(0, up), F(0.5, dn)]), rig: "side",
        scene(g) { A.drawGround(g); A.drawBench(g, 218, 0, 104); },
        props(dyn) { const plate = A.mkPlate(dyn, 10); return pts => A.placeAt(plate, pts.hand); }
      };
    }
  };
  T.kickback = {
    dur: 2600, caption: () => "upper arm parallel to the floor",
    build() {
      const base = { ankX: 196, th: 22, sh: -8, torso: 66, head: 10, ua: -38 };
      const dn = Object.assign({}, base, { fa: 52 });
      const ext = Object.assign({}, base, { fa: -36 });
      return {
        frames: loop([F(0, dn), F(0.5, ext)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.low); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, {}); return pts => upd(pts.hand); }
      };
    }
  };
  T.gluteKickback = {
    dur: 2800, caption: () => "squeeze back, do not arch",
    build() {
      const base = { ankX: 196, th: 6, sh: 3, torso: 14, head: 2, ua: 58, fa: 62 };
      const inpos = Object.assign({}, base, { thF: 12, shF: -4 });
      const out = Object.assign({}, base, { thF: -46, shF: -38 });
      return {
        frames: loop([F(0, inpos), F(0.5, out)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.low); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, {}); return pts => upd(pts.ankF || pts.ank); }
      };
    }
  };

  /* ---------- FLY family (front rig) ---------- */
  T.fly = {
    dur: 3000,
    caption: p => p.reverse ? "reverse crossover, arms long" : p.bench === "incline" ? "on the incline bench" : p.from === "high" ? "high to low" : "low to high",
    build(p) {
      const rev = !!p.reverse;
      let a0, a1, b0, b1;
      if (rev) { a0 = 6; a1 = 92; b0 = 10; b1 = 14; }
      else if (p.from === "high") { a0 = 112; a1 = 2; b0 = 22; b1 = 34; }
      else { a0 = 4; a1 = 96; b0 = 30; b1 = 20; }
      const mk = (abd, bend) => ({ abdL: abd, abdR: abd, bendL: bend, bendR: bend, cx: 210 });
      return {
        frames: loop([F(0, mk(a0, b0)), F(0.5, mk(a1, b1))]), rig: "front",
        scene(g, ctx) {
          A.drawGround(g);
          ctx.mastL = A.drawMast(g, "left", A.ANCHOR_Y[p.anchor || "mid"]);
          ctx.mastR = A.drawMast(g, "right", A.ANCHOR_Y[p.anchor || "mid"]);
          if (p.bench === "incline") A.drawBench(g, 210, 0, 66);
        },
        props(dyn, ctx) {
          const lineL = A.mkCable(dyn), lineR = A.mkCable(dyn);
          const tL = A.stackTracker(ctx.mastL), tR = A.stackTracker(ctx.mastR);
          return pts => {
            const hL = rev ? pts.handR : pts.handL, hR = rev ? pts.handL : pts.handR;
            lineL.setAttribute("d", A.cableD(ctx.mastL.pulley, hL));
            lineR.setAttribute("d", A.cableD(ctx.mastR.pulley, hR));
            tL(hL); tR(hR);
          };
        }
      };
    }
  };
  T.lateralRaise = {
    dur: 2700, caption: () => "lead with the elbow, soft bend",
    build() {
      const mk = abd => ({ abdR: abd, bendR: 14, abdL: 22, bendL: 58, cx: 210 });
      return {
        frames: loop([F(0, mk(8)), F(0.5, mk(93))]), rig: "front",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y.low); },
        props(dyn, ctx) {
          const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
          return pts => { line.setAttribute("d", A.cableD(ctx.mast.pulley, pts.handR)); track(pts.handR); };
        }
      };
    }
  };
  T.hipAbduction = {
    dur: 2900, caption: () => "torso tall, leg sweeps out",
    build() {
      const mk = out => ({ abdL: 16, bendL: 52, abdR: 16, bendR: 52, legOutR: out, legOutL: 7, cx: 200 });
      return {
        frames: loop([F(0, mk(8)), F(0.5, mk(52))]), rig: "front",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y.low); },
        props(dyn, ctx) {
          const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
          return pts => { line.setAttribute("d", A.cableD(ctx.mast.pulley, pts.ankR)); track(pts.ankR); };
        }
      };
    }
  };
  T.woodchop = {
    dur: 3000, caption: () => "hips lead, arms stay long",
    build(p) {
      const y = A.ANCHOR_Y[p.anchor || "mid"] + 24;
      return {
        frames: loop([F(0, { hbx: 316, hby: y, cx: 220 }), F(0.5, { hbx: 106, hby: y + 16, cx: 198 })]), rig: "front",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y[p.anchor || "mid"]); },
        props(dyn, ctx) {
          const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
          const knob = A.el("circle", { r: 3, fill: "var(--accent)" }, dyn);
          return pts => {
            line.setAttribute("d", A.cableD(ctx.mast.pulley, pts.handR));
            knob.setAttribute("cx", pts.handR.x); knob.setAttribute("cy", pts.handR.y);
            track(pts.handR);
          };
        }
      };
    }
  };
  T.landmineRotation = {
    dur: 3200, caption: () => "sweep the arc, hips pivot",
    build() {
      return {
        frames: loop([F(0, { hbx: 292, hby: 128, cx: 216 }), F(0.5, { hbx: 128, hby: 128, cx: 204 })]), rig: "front",
        scene(g) {
          A.drawGround(g);
          A.el("path", { d: `M 200 ${G + 4} l 10 -12 l 10 12 Z`, fill: "var(--muted)", opacity: 0.7 }, g);
        },
        props(dyn) {
          const bar = A.el("line", { stroke: "var(--text2)", "stroke-width": 4.5, "stroke-linecap": "round" }, dyn);
          const plate = A.mkPlate(dyn, 10);
          return pts => {
            bar.setAttribute("x1", 210); bar.setAttribute("y1", G - 6);
            bar.setAttribute("x2", pts.handR.x); bar.setAttribute("y2", pts.handR.y);
            A.placeAt(plate, pts.handR);
          };
        }
      };
    }
  };

  /* ---------- SHOULDERS / TRAPS / CALVES ---------- */
  T.frontRaise = {
    dur: 2700, caption: () => "straight arm to eye level",
    build() {
      const base = { ankX: 226, th: 8, sh: 3, torso: 3, head: 2 };
      const dn = Object.assign({}, base, { ua: 10, fa: 10 });
      const up = Object.assign({}, base, { ua: 96, fa: 96 });
      return {
        frames: loop([F(0, dn), F(0.5, up)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y.low); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, {}); return pts => upd(pts.hand); }
      };
    }
  };
  T.uprightRow = {
    dur: 2700, caption: () => "elbows lead, bar close to the body",
    build() {
      const base = { ankX: 230, th: 6, sh: 3, torso: 2, head: 2 };
      const dn = Object.assign({}, base, { ua: 8, fa: 8 });
      const up = Object.assign({}, base, { ua: -46, fa: 124 });
      return {
        frames: loop([F(0, dn), F(0.5, up)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.low); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, { att: "bar" }); return pts => upd(pts.hand); }
      };
    }
  };
  T.shrug = {
    dur: 2400, caption: () => "straight up, no rolling",
    build(p) {
      const smith = p.load === "smith";
      const base = { ankX: smith ? 212 : 206, th: 5, sh: 2, torso: 2, head: 2, ua: 3, fa: 3 };
      const dn = Object.assign({}, base, { shoLift: 0 });
      const up = Object.assign({}, base, { shoLift: 10 });
      return {
        frames: loop([F(0, dn), F(0.45, up), F(0.6, up)]), rig: "side",
        scene(g) { A.drawGround(g); if (smith) A.drawSmith(g, 210); else A.drawCage(g, {}); },
        props(dyn) {
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.hand.x, y: pts.hand.y });
        }
      };
    }
  };
  T.calfRaise = {
    dur: 2400,
    caption: p => p.seated ? "bent knee - soleus" : "full stretch, full squeeze",
    build(p) {
      const smith = p.load === "smith", cable = p.load === "cable";
      if (p.seated) {
        const base = { hipX: 196, hipY: G - 54, torso: 2, head: 2, ua: 40, fa: 55 };
        const dn = Object.assign({}, base, { th: 86, sh: 48 });
        const up = Object.assign({}, base, { th: 80, sh: 34 });
        return {
          frames: loop([F(0, dn), F(0.5, up)]), rig: "side",
          scene(g) { A.drawGround(g); if (smith) A.drawSmith(g, 210); A.drawBench(g, 182, 0, 64); },
          props(dyn) {
            const plate = A.mkPlate(dyn, 12.5);
            return pts => A.placeAt(plate, { x: smith ? 210 : pts.knee.x, y: pts.knee.y - 6 });
          }
        };
      }
      const grip = smith ? gripBack(4) : { ua: 4, fa: 4 };
      const base = Object.assign({ ankX: smith ? 213 : 208, th: 4, sh: 2, torso: 4, head: 2 }, grip);
      const dn = Object.assign({}, base, { lift: 0, heel: 0 });
      const up = Object.assign({}, base, { lift: 9, heel: 30 });
      return {
        frames: loop([F(0, dn), F(0.45, up), F(0.62, up)]), rig: "side",
        scene(g, ctx) {
          A.drawGround(g);
          if (smith) A.drawSmith(g, 210);
          else if (cable) ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.low);
        },
        props(dyn, ctx) {
          if (cable) { const upd = cableProp(dyn, ctx, {}); return pts => upd(pts.hand); }
          const plate = A.mkPlate(dyn, 12.5);
          return pts => A.placeAt(plate, { x: smith ? 210 : pts.sho.x + 5, y: pts.sho.y - 2 });
        }
      };
    }
  };

  /* ---------- CORE ---------- */
  T.crunchKneel = {
    dur: 2700, caption: () => "ribs to pelvis, hips still",
    build() {
      const base = { hipX: 212, hipY: G - 49, th: -12, sh: -95 };
      const tall = Object.assign({}, base, { torso: 8, head: 4, ua: 42, fa: -122 });
      const flex = Object.assign({}, base, { torso: 54, head: 30, ua: 88, fa: -76 });
      return {
        frames: loop([F(0, tall), F(0.5, flex)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); },
        props(dyn, ctx) {
          const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
          return pts => { line.setAttribute("d", A.cableD(ctx.mast.pulley, pts.headC)); track(pts.headC); };
        }
      };
    }
  };
  T.hangingRaise = {
    dur: 3000,
    caption: p => p.bent ? "knees to hip height" : "long legs, slow lower",
    build(p) {
      const hand = { handX: 218, handY: 52, ua: 179, fa: 181, head: 4 };
      const dn = Object.assign({}, hand, { torso: -2, th: p.bent ? 8 : 4, sh: p.bent ? -16 : 2 });
      const up = p.bent
        ? Object.assign({}, hand, { torso: 6, th: 118, sh: 24 })
        : Object.assign({}, hand, { torso: 8, th: 96, sh: 92 });
      return {
        frames: loop([F(0, dn), F(0.5, up)]), rig: "hang",
        scene(g) { A.drawGround(g); A.drawPullupBar(g); },
        props() { return () => {}; }
      };
    }
  };
  T.dip = {
    dur: 2900,
    caption: p => p.band ? "band across the handles" : "slight lean for chest",
    build(p) {
      const hand = { handX: 196, handY: 158, head: 4 };
      const top = Object.assign({}, hand, { th: -10, sh: -34, torso: 10, ua: 2, fa: 2 });
      const bot = Object.assign({}, hand, { th: -20, sh: -70, torso: 21, ua: -56, fa: 54 });
      return {
        frames: loop([F(0, top), F(0.5, bot)]), rig: "hang",
        scene(g) { A.drawGround(g); A.drawDipBars(g); },
        props(dyn) {
          const band = p.band ? A.mkBand(dyn) : null;
          return pts => { if (band) band.setAttribute("d", `M 152 164 Q ${pts.knee.x.toFixed(1)} ${(pts.knee.y + 14).toFixed(1)} 214 164`); };
        }
      };
    }
  };
  T.situp = {
    dur: 2900, caption: () => "feet hooked under the foot tube",
    build() {
      const base = { hipX: 232, hipY: G - 12, th: 142, sh: 15 };
      const dn = Object.assign({}, base, { torso: -82, head: -6, ua: -60, fa: -150 });
      const up = Object.assign({}, base, { torso: -18, head: 8, ua: 4, fa: -95 });
      return {
        frames: loop([F(0, dn), F(0.5, up)]), rig: "side",
        scene(g) { A.drawGround(g); A.drawFootplate(g, 286); },
        props() { return () => {}; }
      };
    }
  };
  T.legRaiseBench = {
    dur: 2800, caption: () => "curl the hips off the pad",
    build() {
      const base = { hipX: 252, hipY: G - 53, torso: -90, head: 0, ua: 132, fa: 220 };
      const ext = Object.assign({}, base, { th: 88, sh: 82 });
      const cur = Object.assign({}, base, { hipY: G - 60, th: 155, sh: 15 });
      return {
        frames: loop([F(0, ext), F(0.5, cur)]), rig: "side",
        scene(g) { A.drawGround(g); A.drawBench(g, 218, 0, 104); },
        props() { return () => {}; }
      };
    }
  };

  /* ---------- LYING CABLE PULLOVER ---------- */
  T.pullover = {
    dur: 3000, caption: () => "arms long, sweep to the hips",
    build() {
      const base = { hipX: 180, hipY: G - 52, torso: 90, head: 0, th: -74, sh: -14 };
      const back = Object.assign({}, base, { ua: 112, fa: 110 });
      const over = Object.assign({}, base, { ua: 182, fa: 184 });
      return {
        frames: loop([F(0, back), F(0.5, over)]), rig: "side",
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "right", A.ANCHOR_Y.high); A.drawBench(g, 208, 0, 104); },
        props(dyn, ctx) { const upd = cableProp(dyn, ctx, { att: "rope", px1: 8, py1: 6, px2: 2, py2: 9 }); return pts => upd(pts.hand); }
      };
    }
  };

  /* ---------- STATIC PAIR (anti-rotation and rotation drills) ---------- */
  T.staticPair = {
    caption: p => p.key === "pallof" ? "anti-rotation hold" : "elbow pinned at the side",
    build(p) {
      if (p.key === "pallof") {
        const mk = (ua, fa) => ({ ankX: 212, th: 8, sh: 3, thF: -12, shF: -5, torso: 2, head: 2, ua, fa });
        return {
          staticPanels: [
            { rig: "side", pose: mk(28, -128), label: "Start: hands at sternum" },
            { rig: "side", pose: mk(82, 84), label: "Press out + hold" }
          ],
          scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y[p.anchor || "mid"]); },
          props(dyn, ctx) { const upd = cableProp(dyn, ctx, {}); return pts => upd(pts.hand); }
        };
      }
      // external rotation - front view, forearm swings out from a pinned elbow
      return {
        staticPanels: [
          { rig: "front", pose: { abdL: 10, bendL: 20, abdR: 6, bendR: 92, cx: 210 }, label: "Start: forearm across belly" },
          { rig: "front", pose: { abdL: 10, bendL: 20, abdR: 6, bendR: -55, cx: 210 }, label: "Rotate out, elbow still" }
        ],
        scene(g, ctx) { A.drawGround(g); ctx.mast = A.drawMast(g, "left", A.ANCHOR_Y[p.anchor || "mid"]); },
        props(dyn, ctx) {
          const line = A.mkCable(dyn), track = A.stackTracker(ctx.mast);
          return pts => { line.setAttribute("d", A.cableD(ctx.mast.pulley, pts.handR)); track(pts.handR); };
        }
      };
    }
  };

  return T;
})();

/* ===== ANIMATION PLAYER ===================================================== */
const REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// shoulder-anchored solver (hip thrust family): shoulders fixed, hips swing
function solveFixedSho(p) {
  const A = AN;
  const sho = { x: p.shoX, y: p.shoY };
  const hip = A.add(sho, A.du(p.torso ?? -100), -A.RIG.TORSO);
  const knee = A.add(hip, A.dd(p.th ?? 50), A.RIG.TH);
  const ank = A.add(knee, A.dd(p.sh ?? -50), A.RIG.SH);
  const elb = A.add(sho, A.dd(p.ua ?? 90), A.RIG.UA);
  const hand = A.add(elb, A.dd(p.fa ?? 60), A.RIG.FA);
  return { sho, hip, knee, ank, elb, hand, headC: A.add(sho, A.du((p.torso ?? -100) + (p.head ?? 0)), A.RIG.NECK + A.RIG.HEADR) };
}

class ExAnim {
  constructor(host, ex, opts) {
    const A = AN;
    this.opts = opts || {};
    this.ex = ex;
    this.tpl = TEMPLATES[ex.anim.template];
    this.params = ex.anim.params || {};
    this.playing = false; this.slow = false; this.phase = 0; this._raf = 0; this._last = 0;
    this.onstate = null;
    if (!this.tpl) { host.textContent = ""; return; }
    this.built = this.tpl.build(this.params, ex.station);
    this.caption = this.tpl.caption ? this.tpl.caption(this.params) : null;
    this.isStatic = !!this.built.staticPanels;
    if (this.isStatic) {
      host.classList.add("anim-static");
      this.built.staticPanels.forEach((panel, i) => {
        const svg = A.el("svg", { viewBox: "0 0 420 300", class: "anim-svg", role: "img", "aria-label": ex.name + " " + panel.label }, host);
        const ctx = { params: this.params };
        const sceneG = A.el("g", {}, svg);
        this.built.scene(sceneG, ctx);
        const dynG = A.el("g", {}, svg);
        const update = this.built.props ? this.built.props(dynG, ctx) : null;
        let pts, fig;
        if (panel.rig === "front") { fig = A.makeFront(svg); pts = A.solveFront(panel.pose); A.drawFront(fig, pts); }
        else { fig = A.makeFigure(svg); pts = A.solveStand(panel.pose); A.drawFigure(fig, pts, {}); }
        if (update) update(pts, panel.pose, i);
        const lab = document.createElement("span");
        lab.className = "static-lab " + (i ? "b" : "a"); lab.textContent = panel.label;
        host.appendChild(lab);
      });
      return;
    }
    this.svg = A.el("svg", { viewBox: "0 0 420 300", class: "anim-svg", role: "img", "aria-label": ex.name + " demonstration" }, host);
    const ctx = this.ctx = { params: this.params };
    const sceneG = A.el("g", {}, this.svg);
    this.built.scene(sceneG, ctx);
    this.dynG = A.el("g", {}, this.svg);
    this.update = this.built.props ? this.built.props(this.dynG, ctx) : null;
    this.rig = this.built.rig || "side";
    this.fig = this.rig === "front" ? A.makeFront(this.svg) : A.makeFigure(this.svg);
    this.dur = this.built.dur || this.tpl.dur || 3000;
    this.renderAt(0);
    if (this.opts.autoplay && !REDUCED_MOTION) this.play();
  }
  interp(ph) {
    const fr = this.built.frames;
    let i = 0;
    while (i < fr.length - 2 && ph > fr[i + 1].t) i++;
    const a = fr[i], b = fr[i + 1];
    const span = Math.max(b.t - a.t, 1e-6);
    const lt = AN.ease(Math.min(1, Math.max(0, (ph - a.t) / span)));
    const pose = {};
    for (const k in a) { if (k === "t") continue; const av = a[k], bv = (b[k] == null ? av : b[k]); pose[k] = AN.lerp(av, bv, lt); }
    return pose;
  }
  renderAt(ph) {
    if (this.isStatic || !this.built.frames) return;
    const pose = this.interp(ph);
    let pts;
    if (this.rig === "front") {
      pts = AN.solveFront(pose);
      if (pose.hbx != null) {
        const hb = { x: pose.hbx, y: pose.hby };
        pts.handL = pts.handR = hb;
        pts.elbL = { x: (pts.shoL.x + hb.x) / 2, y: (pts.shoL.y + hb.y) / 2 + 8 };
        pts.elbR = { x: (pts.shoR.x + hb.x) / 2, y: (pts.shoR.y + hb.y) / 2 + 8 };
      }
      pts.ankR = { x: pts.hipR.x + pts.legOutR, y: AN.G - 4 };
      AN.drawFront(this.fig, pts);
    } else if (this.rig === "hang") {
      pts = AN.solveHang(pose);
      AN.drawFigure(this.fig, pts, { noFoot: false, footDir: 1 });
    } else if (this.rig === "sideFixedSho") {
      pts = solveFixedSho(pose);
      AN.drawFigure(this.fig, pts, {});
    } else {
      pts = AN.solveStand(pose);
      AN.drawFigure(this.fig, pts, { heel: pose.heel || 0 });
    }
    if (this.update) this.update(pts, pose, ph);
  }
  _tick(ts) {
    if (!this.playing) return;
    if (!this._last) this._last = ts;
    const dt = Math.min(64, ts - this._last); this._last = ts;
    this.phase = (this.phase + (dt * (this.slow ? 0.4 : 1)) / this.dur) % 1;
    this.renderAt(this.phase);
    this._raf = requestAnimationFrame(t => this._tick(t));
  }
  play() { if (this.isStatic || this.playing) return; this.playing = true; this._last = 0; this._raf = requestAnimationFrame(t => this._tick(t)); if (this.onstate) this.onstate(); }
  pause() { this.playing = false; cancelAnimationFrame(this._raf); if (this.onstate) this.onstate(); }
  toggle() { this.playing ? this.pause() : this.play(); }
  setSlow(v) { this.slow = v; if (this.onstate) this.onstate(); }
  destroy() { this.pause(); }
}
