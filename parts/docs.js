/* ============================================================================
   M1 PRO FORM GUIDE - single-file interactive reference
   Built for a RitFit M1 Pro (Smith machine + power cage + dual 2:1 cable
   stacks) in a garage. Everything lives in this one HTML file; it works
   offline from the filesystem or over a local network.

   ---------------------------------------------------------------------------
   HOW THE DATA IS ORGANIZED
   ---------------------------------------------------------------------------
   1) EXERCISES  - array of exercise objects (defined right below, split into
      EX_PART_0..EX_PART_5 purely for readability). Schema per entry:
        id          unique slug; used in URLs (#/ex/<id>) and localStorage
        name, aka   display name + alternate names (searchable)
        station     "Smith" | "Cage/Barbell" | "Cable High" | "Cable Mid" |
                    "Cable Low" | "Landmine" | "Bodyweight" | "Bench"
        attachments accessories needed, e.g. ["Rope"] ([] = none)
        primary[]   / secondary[]  muscle tags (drive filters + muscle page)
        difficulty  "Beginner" | "Intermediate" | "Advanced"
        pattern     "Squat" | "Hinge" | "Horizontal Push" | "Vertical Push" |
                    "Horizontal Pull" | "Vertical Pull" | "Rotation" |
                    "Isolation" | "Core"
        setup[]     machine setup lines (catch/carriage heights, bench angle,
                    body position relative to the frame)
        steps[]     4-7 execution steps     cues[] 3-6 short coaching lines
        mistakes[]  {m: error, fix: correction}
        breathing, tempo, reps {strength, hypertrophy}
        safety[]    lift-specific: where safety arms / spring hooks go + bail
        swaps[]     1-2 ids of same-pattern alternatives
        standards   OPTIONAL key into STANDARDS (only real barbell/compound
                    lifts have one - accessory moves omit it entirely)
        smithCaveat OPTIONAL true on Smith variants: standards render hidden/
                    grayed with the Smith-vs-free-weight warning
        anim        {template, params} - see ANIMATION TEMPLATES below

   ADDING AN EXERCISE: append an object with the schema above to any EX_PART_*
   array (EX_PART_5 is a fine home), give it a unique id, pick an existing
   anim template, and it appears everywhere automatically (search, filters,
   muscle page, builder, deep links).

   2) STANDARDS + BW_BRACKETS (further down) - strength-standard multiplier
      tables. Thresholds are BODYWEIGHT MULTIPLES (1RM lb / bodyweight lb) at
      which you ENTER [Novice, Intermediate, Advanced, Elite, (World Class)];
      rows follow BW_BRACKETS and are linearly interpolated between brackets
      (the last row also serves 260+). Separate male/female tables. For
      type:"bodyweightPlus" lifts (weighted pull-up/dip) multiples are TOTAL
      system weight (bodyweight + added) / bodyweight, and the input asks for
      ADDED weight. ADJUSTING: edit any cell; keep each row ascending
      left-to-right and columns roughly descending as bodyweight rises.
      These are population ESTIMATES blended from published tables - the UI
      labels them as such.

   3) ANIMATION TEMPLATES (TEMPLATES in the animation engine) - ~30 reusable
      motion templates keyed by movement pattern. Each returns keyframed
      poses for an articulated SVG figure (head/torso/upper arm/forearm/
      thigh/shin/foot as separate strokes) plus equipment overlays (Smith
      track, cage + safety arms, cable mast/carriage/line + moving stack,
      bench at angle, landmine pivot). Exercises reference a template plus
      params (load, anchor height, bench angle, grip, ...). ADDING A
      TEMPLATE: add TEMPLATES.myMove = {dur, caption?, build(params)} where
      build returns {frames:[{t, ...pose}], draw(refs, pts, params)}; poses
      are absolute joint angles in degrees (see solveStand/solveHang), and
      draw receives solved joint points each frame for equipment that
      follows the body (bar circles, cable lines). Exercises that resist
      animation use template "staticPair" (start/end panels instead).

   4) APP LOGIC - everything after the data: state, hash router, search/
      filters, favorites, workout builder, standards UI + 1RM calculator,
      the SVG engine, keyboard + swipe input, themes, and print frames.
      localStorage keys are prefixed "m1pfg." and the site never phones home.
   ========================================================================= */
