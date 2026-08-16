// M1 Pro Form Guide - exercise data (part 4: cable low + landmine/T-bar)
const EX_PART_4 = [
  {
    id: "cbl-fly-low-high",
    name: "Low-to-High Cable Fly",
    aka: ["Low Cable Crossover", "Upper-Chest Fly"],
    station: "Cable Low",
    attachments: ["Two D-handles"],
    primary: ["Upper Chest"],
    secondary: ["Chest", "Front Delts", "Serratus"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "fly", params: { from: "low", anchor: "low" } },
    setup: [
      "Set both cable carriages to the bottom position and clip a D-handle to each side.",
      "Stand centered between the masts facing away from the frame, one handle in each hand.",
      "Step forward until both stacks lift off and the cables pull down-and-back on your arms.",
      "Take a staggered stance, set a slight bend in the elbows, palms facing forward."
    ],
    steps: [
      "Start with the arms long and low at your sides, cables taut.",
      "Sweep both handles forward and up in wide arcs, like scooping.",
      "Bring the hands together at eye level in front of your face.",
      "Squeeze the upper chest for a beat with the handles nearly touching.",
      "Lower back along the same arc until you feel a stretch across the front of the shoulders."
    ],
    cues: [
      "Scoop up and together, arms stay long.",
      "Elbows slightly bent and frozen - no pressing.",
      "Finish with the hands at eye level.",
      "Squeeze the upper chest, not the shoulders.",
      "Control the stretch on the way down."
    ],
    mistakes: [
      { m: "Elbows bend and straighten, turning the fly into a press.", fix: "Set a slight elbow bend before rep one and freeze it - only the shoulder moves." },
      { m: "Standing too close to the frame so tension disappears at the bottom.", fix: "Step further forward until the cables stay taut through the whole stretch." },
      { m: "Shrugging the handles up with the traps.", fix: "Keep the shoulders pulled down and think of hugging a beach ball upward." },
      { m: "Torso rocks backward to swing the weight up.", fix: "Lighten both stacks and keep the ribs stacked over the hips." }
    ],
    breathing: "Exhale as the handles sweep up and together, inhale as you lower into the stretch.",
    tempo: "2-1-3 - two up, squeeze one, three seconds back down.",
    reps: { strength: "8-10 (stays a feel move)", hypertrophy: "12-20" },
    safety: [
      "No safeties needed - if you lose the handles, the stacks simply set back down.",
      "Do not chase a deep stretch with heavy plates; the bottom position loads the front of the shoulder.",
      "Keep the staggered stance so the rearward pull cannot tip you back."
    ],
    swaps: ["incline-cable-fly", "cbl-crossover-high-low"]
  },
  {
    id: "cbl-curl",
    name: "Cable Curl (Bar)",
    aka: ["Cable Bar Curl", "Standing Cable Curl"],
    station: "Cable Low",
    attachments: ["Straight bar"],
    primary: ["Biceps"],
    secondary: ["Forearms"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "curl", params: { load: "cable", anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the straight bar.",
      "Face the mast and take an underhand, shoulder-width grip on the bar.",
      "Step back about a foot so the stack lifts off and the cable pulls down and slightly forward.",
      "Stand tall with soft knees and the elbows pinned to your sides."
    ],
    steps: [
      "Start with the arms fully straight and the cable taut against your thighs.",
      "Curl the bar in a smooth arc toward your collarbones.",
      "Keep the elbows pinned at your sides as the bar rises.",
      "Squeeze the biceps hard at the top for a beat.",
      "Lower with control until the elbows are completely straight."
    ],
    cues: [
      "Elbows glued to your ribs.",
      "Curl to the collarbones, not the chin.",
      "Wrists stay flat, no rolling.",
      "Full straight arm at the bottom every rep."
    ],
    mistakes: [
      { m: "Elbows drift forward and the shoulders lift the bar.", fix: "Pin the upper arms vertical - if the elbows move, the weight is too heavy." },
      { m: "Leaning back to finish the curl.", fix: "Brace the core and keep the ribs stacked; take plates off if the lean returns." },
      { m: "Cutting the bottom short to keep the set easy.", fix: "Straighten the arms completely - the cable keeps tension even at full extension." },
      { m: "Wrists curl toward you at the top.", fix: "Hold the wrists neutral and let the biceps, not the forearms, finish the rep." }
    ],
    breathing: "Exhale as you curl up, inhale on the slow lower.",
    tempo: "1-1-3 - curl up in one, squeeze one, three down.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "No safeties needed - straighten the arms, step toward the mast, and the stack sets down.",
      "The constant tension is deceptive; pick a load you can lower for three full seconds on the last rep."
    ],
    swaps: ["bb-curl", "cbl-hammer-curl"]
  },
  {
    id: "cbl-hammer-curl",
    name: "Rope Hammer Curl",
    aka: ["Cable Rope Curl", "Neutral-Grip Cable Curl"],
    station: "Cable Low",
    attachments: ["Rope"],
    primary: ["Biceps", "Forearms"],
    secondary: [],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "curl", params: { load: "cable", att: "rope", anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the rope.",
      "Face the mast and grip the rope ends with thumbs up, palms facing each other.",
      "Step back a foot so the stack lifts off, elbows pinned at your sides.",
      "Stand tall with a soft knee bend and a braced trunk."
    ],
    steps: [
      "Start with the arms long and the rope taut.",
      "Curl both rope ends up toward your shoulders without turning the palms.",
      "Keep the thumbs pointing up through the entire arc.",
      "Squeeze at the top with the knuckles near shoulder height.",
      "Lower under control to fully straight arms."
    ],
    cues: [
      "Thumbs up the whole rep.",
      "Elbows pinned, never drifting forward.",
      "Curl the rope, do not swing it.",
      "Long arms at the bottom, full squeeze up top."
    ],
    mistakes: [
      { m: "Elbows slide forward so the shoulders finish the rep.", fix: "Freeze the upper arms vertical and stop the curl a little lower if needed." },
      { m: "Body rocks to start each rep.", fix: "Brace before you curl and let the arms alone break the weight off the stack." },
      { m: "Palms rotate upward, turning it into a regular curl.", fix: "Hold the neutral thumbs-up grip - that is what loads the brachialis and forearms." }
    ],
    breathing: "Exhale up, inhale for the three-second lower.",
    tempo: "1-0-3 - one up, no pause, three down.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "No safeties needed - the stack sets down the moment you straighten your arms.",
      "If the wrists ache, lighten the load - the neutral grip should feel strong, not strained."
    ],
    swaps: ["cbl-curl", "bb-curl"]
  },
  {
    id: "cbl-front-raise",
    name: "Cable Front Raise",
    aka: ["Single-Arm Cable Front Raise"],
    station: "Cable Low",
    attachments: ["Single D-handle"],
    primary: ["Front Delts"],
    secondary: ["Upper Chest", "Serratus"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "frontRaise", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on a single D-handle.",
      "Face away from the mast holding the handle in the working hand, cable running beside your hip (or between your legs).",
      "Step forward until the stack lifts off, so the cable pulls down-and-back on the arm.",
      "Stand tall in a slight split stance with the free hand on your hip."
    ],
    steps: [
      "Start with the working arm long, handle at thigh height, palm down.",
      "Raise the straight arm forward and up to eye level.",
      "Keep a small fixed bend in the elbow the whole way.",
      "Pause briefly at the top without shrugging.",
      "Lower on the same path until the arm hangs long again."
    ],
    cues: [
      "Raise to eye level, no higher.",
      "Lead with the knuckles, not the shrug.",
      "Long arm, tiny elbow bend, frozen.",
      "Ribs down - no leaning back."
    ],
    mistakes: [
      { m: "Leaning back to lever the arm up.", fix: "Brace the trunk and stagger the stance; lighten the stack if the lean returns." },
      { m: "Shrugging the shoulder toward the ear as the arm rises.", fix: "Set the shoulder blade down first, then raise - the traps stay quiet." },
      { m: "Swinging through the bottom for momentum.", fix: "Pause a beat with the arm hanging long before every rep." }
    ],
    breathing: "Exhale as the arm rises, inhale on the way down.",
    tempo: "2-1-2 - two up, hold one at eye level, two down.",
    reps: { strength: "8-10 (light by nature)", hypertrophy: "12-20 per arm" },
    safety: [
      "No safeties needed - releasing the handle just sets the stack down.",
      "Front delts need very little load here; if the torso moves, the weight is wrong."
    ],
    swaps: ["smith-seated-ohp", "lm-half-kneeling-press"]
  },
  {
    id: "cbl-lateral-raise",
    name: "Cable Lateral Raise",
    aka: ["Cable Side Raise", "Cross-Body Lateral Raise"],
    station: "Cable Low",
    attachments: ["Single D-handle"],
    primary: ["Side Delts"],
    secondary: ["Traps", "Serratus"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "lateralRaise", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on a single D-handle.",
      "Stand side-on to the mast and take the handle in the far hand, so the cable crosses in front of your body.",
      "Step away until the stack lifts off; steady yourself on the frame with the near hand.",
      "Start with the working arm long, handle in front of the opposite hip."
    ],
    steps: [
      "Brace, then sweep the arm out and up, leading with the elbow.",
      "Keep a slight fixed elbow bend and the palm facing the floor.",
      "Stop with the hand at shoulder height, no shrug.",
      "Hold one beat with the arm level.",
      "Lower on the same arc with control; switch sides after the set."
    ],
    cues: [
      "Lead with the elbow, hand follows.",
      "Stop at shoulder height.",
      "Long arm, quiet traps.",
      "Let the cable stretch the start, no swinging."
    ],
    mistakes: [
      { m: "Shrugging as the arm rises.", fix: "Take a few plates off the stack and set the shoulder blade down before each rep." },
      { m: "Elbow bends more as the set gets hard.", fix: "Freeze the elbow angle - shortening the arm is a cheat that shrinks the lever." },
      { m: "Leaning hard away from the mast to lift the weight.", fix: "Stay tall - a slight tilt is fine, a lean is momentum." },
      { m: "Cutting the bottom of the rep short.", fix: "Let the handle travel back across your body each rep - the cross-body stretch is why the cable beats a dumbbell here." }
    ],
    breathing: "Exhale on the way up, inhale on the way down.",
    tempo: "2-1-3 - two up, one at the top, three down.",
    reps: { strength: "8-10 (light by design)", hypertrophy: "12-20 per arm" },
    safety: [
      "No safeties needed - lower the handle and the stack settles.",
      "Side delts respond to control, not load; if the torso sways, take plates off."
    ],
    swaps: ["cbl-upright-row", "cbl-front-raise"]
  },
  {
    id: "cbl-upright-row",
    name: "Cable Upright Row",
    aka: ["Straight-Bar Upright Row"],
    station: "Cable Low",
    attachments: ["Straight bar"],
    primary: ["Side Delts", "Traps"],
    secondary: ["Biceps", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Isolation",
    anim: { template: "uprightRow", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the straight bar.",
      "Face the mast and grip the bar overhand, hands about shoulder-width apart.",
      "Step back half a foot so the stack lifts off and the bar hangs at your thighs.",
      "Stand tall, brace, shoulders set down."
    ],
    steps: [
      "Pull the bar straight up the front of your body.",
      "Lead with the elbows - they stay higher than the wrists the whole way.",
      "Stop when the bar reaches your sternum (lower if the shoulders complain).",
      "Pause a beat with the elbows wide.",
      "Lower with control back to long arms at the thighs."
    ],
    cues: [
      "Elbows lead, wrists follow.",
      "Bar rides close to the body.",
      "Sternum height, no higher.",
      "Down slow - no crashing the stack."
    ],
    mistakes: [
      { m: "Pulling to the chin with the wrists curled above the elbows.", fix: "Stop at the sternum and keep the elbows above the wrists - height comes from the elbows, not the hands." },
      { m: "Rocking back and heaving the bar up.", fix: "Lighten the load and pull under strict control; the cable rewards smoothness." },
      { m: "Grip so narrow the shoulders pinch.", fix: "Widen to shoulder width or a touch beyond and re-test the range." },
      { m: "Bar drifts away from the body on the way up.", fix: "Drag it up your shirt - the closer the bar, the safer the shoulder path." }
    ],
    breathing: "Exhale as you pull to the sternum, inhale on the lower.",
    tempo: "1-1-2 - pull in one, hold one, two down.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "No safeties needed - straighten the arms and the stack sets down.",
      "Impingement is the risk here: shorten the pull the moment the shoulders pinch, and keep loads modest.",
      "If sternum height always pinches, clip on the two D-handles instead so the wrists can rotate free."
    ],
    swaps: ["cbl-lateral-raise", "smith-shrug"]
  },
  {
    id: "cbl-kickback",
    name: "Cable Triceps Kickback",
    aka: ["Cable Kickback", "Single-Arm Triceps Kickback"],
    station: "Cable Low",
    attachments: [],
    primary: ["Triceps"],
    secondary: ["Rear Delts"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "kickback", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position - no attachment; you grip the cable end just above the ball stop.",
      "Face the mast in a staggered stance and take the cable end in the working hand.",
      "Hinge the torso to near parallel and brace the free hand on your front thigh or the frame.",
      "Pin the working elbow high beside your ribs so the upper arm sits parallel to the floor."
    ],
    steps: [
      "Start with the elbow bent to 90 degrees, forearm hanging toward the mast.",
      "Extend the forearm straight back until the arm is fully locked out.",
      "Keep the upper arm frozen level with the floor the whole time.",
      "Squeeze the triceps for a full beat at lockout.",
      "Bend the elbow back to 90 degrees under control without letting the upper arm drop."
    ],
    cues: [
      "Upper arm frozen, only the forearm moves.",
      "Lock it out - the top is the exercise.",
      "Elbow stays high beside your ribs.",
      "Quiet torso, no bouncing."
    ],
    mistakes: [
      { m: "Upper arm drops as the weight extends back.", fix: "Row the elbow up first and keep it level; lighten the stack if it sags." },
      { m: "Swinging the weight back with the shoulder.", fix: "Treat the elbow as a hinge bolted in place - extension only." },
      { m: "Stopping short of lockout.", fix: "The triceps earn the rep in the last few inches - finish every rep straight." }
    ],
    breathing: "Exhale as you extend back, inhale as the forearm returns.",
    tempo: "1-1-2 - extend in one, squeeze one, two back.",
    reps: { strength: "8-10 (light by nature)", hypertrophy: "12-20 per arm" },
    safety: [
      "No safeties needed - relax the arm and the stack settles.",
      "Load for a crisp lockout squeeze - if the upper arm drops, take plates off."
    ],
    swaps: ["cbl-pushdown-rope", "cbl-overhead-triceps"]
  },
  {
    id: "cbl-glute-kickback",
    name: "Cable Glute Kickback",
    aka: ["Cable Hip Extension", "Standing Glute Kickback"],
    station: "Cable Low",
    attachments: ["Ankle strap"],
    primary: ["Glutes"],
    secondary: ["Hamstrings", "Core"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "gluteKickback", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the ankle strap.",
      "Strap the working ankle (a D-handle looped over the midfoot also works).",
      "Face the mast and hold the upright with both hands, hips square to the machine.",
      "Step back slightly and hinge the torso a few degrees forward."
    ],
    steps: [
      "Shift your weight onto the standing leg, knee soft.",
      "Drive the strapped leg straight back and slightly up, heel leading.",
      "Squeeze the glute at full hip extension - stop before the lower back arches.",
      "Return with control until the working knee drifts just past the standing leg.",
      "Finish the set, then move the strap to the other ankle."
    ],
    cues: [
      "Push through the heel, not the toes.",
      "Squeeze the glute, not the lower back.",
      "Hips stay square to the mast.",
      "Ribs down - no arching at the top."
    ],
    mistakes: [
      { m: "Arching the lower back to fake a bigger kickback.", fix: "Brace the core and stop at true hip extension - the range is shorter than you think." },
      { m: "Hips rotate open as the leg swings back.", fix: "Keep both hip bones pointed at the mast; slow down and shorten the arc." },
      { m: "Swinging the leg for momentum.", fix: "Pause a beat at the top and control the return - the cable never goes slack." },
      { m: "Bending and straightening the knee like a donkey kick.", fix: "Keep the knee nearly straight so the hip, not the quad, moves the load." }
    ],
    breathing: "Exhale as the leg drives back, inhale as it returns.",
    tempo: "1-1-3 - back in one, squeeze one, three returning.",
    reps: { strength: "8-10 (stays light)", hypertrophy: "12-20 per leg" },
    safety: [
      "No safeties needed - the stack sets down whenever you relax the leg.",
      "Check the strap is snug before loading; a loose strap can peel off mid-rep.",
      "Hold the upright the whole set - single-leg balance plus cable pull is a trip hazard in a garage."
    ],
    swaps: ["cbl-pull-through", "smith-glute-bridge"]
  },
  {
    id: "cbl-pull-through",
    name: "Cable Pull-Through",
    aka: ["Rope Pull-Through", "Cable Hip Hinge"],
    station: "Cable Low",
    attachments: ["Rope"],
    primary: ["Glutes", "Hamstrings"],
    secondary: ["Lower Back", "Core"],
    difficulty: "Beginner",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "cable", cableBehind: true, kneeBend: "soft", rom: "knee", anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the rope.",
      "Face away from the mast, straddle the cable, and reach back between your legs to grab the rope ends.",
      "Walk out two or three steps until the stack lifts and the cable pulls straight back between your legs.",
      "Set the feet shoulder width, knees soft, chest proud."
    ],
    steps: [
      "Hinge at the hips, pushing them straight back toward the mast.",
      "Let the rope ride back between your legs, arms just hanging like hooks.",
      "Feel the hamstrings load as the torso tips toward parallel.",
      "Snap the hips forward and stand tall, squeezing the glutes hard.",
      "Finish upright with the ribs down - do not lean back."
    ],
    cues: [
      "Hips back, not down.",
      "Arms hang - hips do everything.",
      "Snap through, squeeze at the top.",
      "Shins vertical, knees soft.",
      "Tall finish, no back lean."
    ],
    mistakes: [
      { m: "Squatting the movement with a big knee bend.", fix: "Keep the shins vertical and push the hips back - the stretch belongs in the hamstrings." },
      { m: "Leaning back at the top to feel finished.", fix: "Stand plumb and squeeze the glutes; the hip snap ends at neutral, not beyond it." },
      { m: "Standing too close to the mast so tension dies at lockout.", fix: "Walk out further - the cable should still pull on you when you stand tall." },
      { m: "Rounding the back to chase depth.", fix: "Hinge only as far as a flat back allows; more depth comes with hamstring flexibility." }
    ],
    breathing: "Inhale as the hips ride back, exhale as you snap through to standing.",
    tempo: "2-0-1 - two seconds back, no pause, drive through.",
    reps: { strength: "8-10 (loads stay light)", hypertrophy: "12-20" },
    safety: [
      "No bail needed - walk back toward the mast to set the stack down, then release the rope.",
      "The cable tugs you backward all set; keep your weight mid-foot so a rep cannot pull you off balance."
    ],
    swaps: ["smith-hip-thrust", "cbl-deadlift"]
  },
  {
    id: "cbl-hip-abduction",
    name: "Standing Cable Hip Abduction",
    aka: ["Cable Side Leg Raise"],
    station: "Cable Low",
    attachments: ["Ankle strap"],
    primary: ["Glutes"],
    secondary: ["Core", "Obliques"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "hipAbduction", params: { anchor: "low" } },
    setup: [
      "Set one cable carriage to the bottom position and clip on the ankle strap.",
      "Stand side-on to the mast and strap the ankle farther from the machine.",
      "The cable should cross in front of your standing leg; hold the frame with the near hand.",
      "Step away until the stack lifts and stand tall on the inside leg."
    ],
    steps: [
      "Shift your weight fully onto the standing leg, knee soft.",
      "Sweep the strapped leg straight out to the side, toes facing forward.",
      "Lift only as high as the hip allows without leaning away.",
      "Pause a beat at the top.",
      "Return under control, letting the leg travel just across the standing leg for a stretch.",
      "Finish the set, turn around, and switch legs."
    ],
    cues: [
      "Torso tall, no side lean.",
      "Toes forward the whole sweep.",
      "Sweep out, not forward.",
      "Small range, big control."
    ],
    mistakes: [
      { m: "Leaning hard over the standing leg to hoist the working leg higher.", fix: "Stay vertical - abduction range is modest, and extra height is just a lean." },
      { m: "Toes rotate up and the leg drifts forward.", fix: "Keep the kneecap and toes facing forward so the outer glute, not the hip flexor, works." },
      { m: "Swinging the leg with momentum.", fix: "Pause at the top and take three seconds back across the midline." }
    ],
    breathing: "Exhale as the leg sweeps out, inhale as it returns.",
    tempo: "1-1-3 - out in one, hold one, three back.",
    reps: { strength: "8-10 (light by design)", hypertrophy: "12-20 per leg" },
    safety: [
      "No safeties needed - relax the leg and the stack sets down.",
      "Keep a hand on the frame; the cross-body pull loves to tip you toward the mast.",
      "Snug the strap before every set so it cannot slide off mid-sweep."
    ],
    swaps: ["cbl-glute-kickback", "smith-glute-bridge"]
  },
  {
    id: "cbl-deadlift",
    name: "Cable Deadlift",
    aka: ["Dual-Handle Cable Deadlift"],
    station: "Cable Low",
    attachments: ["Two D-handles"],
    primary: ["Glutes", "Hamstrings"],
    secondary: ["Quads", "Lower Back", "Traps", "Forearms"],
    difficulty: "Beginner",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "cable", kneeBend: "bent", rom: "floor", anchor: "low" } },
    setup: [
      "Set both cable carriages to the bottom position and clip a D-handle to each.",
      "Stand centered between the masts so one cable runs to each side of you.",
      "Squat-hinge down and take a handle in each hand at arm's length beside your shins.",
      "Flatten the back and brace - the cables pull down and slightly outward."
    ],
    steps: [
      "Stand up by driving the floor away, hips and shoulders rising together.",
      "Keep the handles hanging long at your sides through the whole pull.",
      "Finish tall - hips locked out, ribs down, no lean back.",
      "Hinge and bend the knees to lower the handles back down your sides.",
      "Touch the bottom position lightly, re-brace, and repeat without going slack."
    ],
    cues: [
      "Push the floor away.",
      "Chest tall, flat back.",
      "Hips and shoulders rise together.",
      "Stand all the way up, squeeze the glutes.",
      "Constant tension - no resting at the bottom."
    ],
    mistakes: [
      { m: "Hips shoot up first and the back does the lift.", fix: "Sit the hips lower at setup and lead the stand with the chest." },
      { m: "Rounding the lower back at the bottom.", fix: "Shorten the range - stop where the back stays flat; the cables do not demand floor depth." },
      { m: "Leaning back at lockout.", fix: "Finish plumb and squeeze the glutes at neutral - past vertical is just spine loading." },
      { m: "Treating it like a max-effort barbell pull.", fix: "The stacks run out fast - use this to groove the hinge for reps, then load the barbell version." }
    ],
    breathing: "Big breath and brace at the bottom, exhale through the top half, re-breathe each rep.",
    tempo: "1-0-3 - stand in one, no pause, three down.",
    reps: { strength: "8-10 (stacks run out fast)", hypertrophy: "12-20" },
    safety: [
      "No safeties needed - set the handles down at the bottom and the stacks settle.",
      "Stay centered between the masts so both sides pull evenly.",
      "This is a grooving tool, not a test; when 20 smooth reps feel easy, move to the barbell deadlift."
    ],
    swaps: ["bb-conventional-deadlift", "smith-deadlift"]
  },
  {
    id: "cbl-calf-raise",
    name: "Cable Standing Calf Raise",
    aka: ["Cable Calf Raise"],
    station: "Cable Low",
    attachments: ["Two D-handles"],
    primary: ["Calves"],
    secondary: [],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "calfRaise", params: { load: "cable", anchor: "low" } },
    setup: [
      "Set both cable carriages to the bottom position and clip a D-handle to each.",
      "Lay a sturdy plate on the floor centered between the masts.",
      "Hold one handle in each hand at your sides, then set the balls of your feet on the plate edge, heels hanging off.",
      "Stand tall - the cables pull down at your sides like heavy shopping bags."
    ],
    steps: [
      "Rise onto the balls of your feet as high as you can.",
      "Pause a full second at the very top.",
      "Lower slowly until the heels sink below the plate edge for a stretch.",
      "Hold the bottom stretch a beat - no bouncing.",
      "Drive back up through the big toes."
    ],
    cues: [
      "All the way up, pause at the top.",
      "Slow into the deep stretch.",
      "No bouncing out of the bottom.",
      "Big-toe side does the pushing."
    ],
    mistakes: [
      { m: "Bouncing reps out of the ankle stretch.", fix: "Dead-stop the bottom for a beat - the calf grows from the stretch, not the bounce." },
      { m: "Cutting the range to half-pumps.", fix: "Full pause at the top and heels below the plate edge on every rep." },
      { m: "Knees bend to help push the weight up.", fix: "Keep the legs straight so the calves, not the quads, move the load." }
    ],
    breathing: "Exhale up, inhale as the heels sink into the stretch.",
    tempo: "1-2-3 - up one, hold two at the top, three down.",
    reps: { strength: "10-15 (light by design)", hypertrophy: "15-25" },
    safety: [
      "No safeties needed - step off the plate and lower the handles to the floor.",
      "Stand centered so the two cables steady you evenly instead of tipping you toward one mast.",
      "Use a plate with a flat, grippy face so the balls of your feet cannot slip off mid-rep."
    ],
    swaps: ["smith-standing-calf-raise", "smith-seated-calf-raise"]
  },
  {
    id: "lm-press",
    name: "Landmine Press (Standing)",
    aka: ["Standing Landmine Shoulder Press", "Angled Barbell Press"],
    station: "Landmine",
    attachments: [],
    primary: ["Front Delts", "Upper Chest"],
    secondary: ["Triceps", "Serratus", "Core"],
    difficulty: "Intermediate",
    pattern: "Vertical Push",
    anim: { template: "landminePress", params: {} },
    setup: [
      "Seat one end of the barbell fully into the landmine pivot at the base of the frame and load plates on the free sleeve.",
      "Stand facing the pivot in a staggered stance, the foot under the working arm a half-step back.",
      "Clean the sleeve end to the working shoulder, hand cupping the very end of the bar.",
      "Brace tall - ribs down, glutes tight - before the first press."
    ],
    steps: [
      "Press the sleeve up-and-forward along its arc, not straight up.",
      "Reach long at the top and let the shoulder blade glide forward.",
      "Finish with the arm long and the body plumb.",
      "Lower the bar back to the front of the shoulder under control.",
      "Re-brace and repeat; switch arms at the end of the set."
    ],
    cues: [
      "Press up the arc, not straight up.",
      "Reach long at the top.",
      "Ribs down, glutes squeezed.",
      "Lean into the arc slightly."
    ],
    mistakes: [
      { m: "Trying to press the bar straight up like an overhead press.", fix: "The pivot forces an arc - drive up-and-forward and let the bar path come to you." },
      { m: "Arching the lower back as the bar rises.", fix: "Squeeze the glutes and keep the ribs stacked; the forward arc lets you stay vertical, so use it." },
      { m: "Standing square and getting bumped off balance.", fix: "Stagger the stance so the press line runs between your feet." },
      { m: "Holding the bar mid-sleeve with plates crowding the hand.", fix: "Cup the very end of the sleeve and keep loads modest - the plates sit close to your hand." }
    ],
    breathing: "Inhale with the bar at the shoulder, exhale as you press up the arc.",
    tempo: "1-0-2 - press in one, no pause, two down.",
    reps: { strength: "5-8", hypertrophy: "8-12 per arm" },
    safety: [
      "Check the bar end is seated fully in the landmine pivot before loading - a half-seated bar can jump out.",
      "Load modestly; the plates ride just behind your hand, so a grinding rep puts steel next to your face.",
      "Set the bar down by lowering the sleeve to the floor with both hands - never drop it in a garage.",
      "The arc tops out well below the ceiling, making this the overhead press to pick when clearance is tight."
    ],
    swaps: ["lm-half-kneeling-press", "bb-ohp"]
  },
  {
    id: "lm-half-kneeling-press",
    name: "Half-Kneeling Landmine Press",
    aka: ["Kneeling Landmine Press"],
    station: "Landmine",
    attachments: [],
    primary: ["Front Delts"],
    secondary: ["Upper Chest", "Triceps", "Serratus", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Push",
    anim: { template: "landminePress", params: { kneeling: true } },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame and load light plates on the free sleeve.",
      "Face the pivot in a half-kneeling stance: the knee under the working arm is down, the outside foot planted flat.",
      "Hold the very end of the sleeve at the working shoulder, hips and shoulders square.",
      "Squeeze the down-leg glute so the hips stand tall and the ribs stay stacked."
    ],
    steps: [
      "Brace, then press the sleeve up-and-forward along its arc.",
      "Reach long at the top without leaning back.",
      "Lower the bar to the front of the shoulder with control.",
      "Keep the hips dead still - all the motion is at the shoulder.",
      "Finish the reps, then switch the kneeling knee and the pressing arm together."
    ],
    cues: [
      "Knee-down side does the pressing.",
      "Glute tight, ribs down.",
      "Press up the arc, reach long.",
      "Nothing moves but the arm."
    ],
    mistakes: [
      { m: "Leaning back to sneak under the bar.", fix: "Squeeze the rear glute harder and keep the tailbone tucked - the arc goes forward, follow it." },
      { m: "Kneeling on the opposite side from the pressing arm.", fix: "Kneel on the same side you press with - the mismatched setup lets the torso rotate." },
      { m: "Short-stroking the bottom of the press.", fix: "Lower until the sleeve end touches the front of the shoulder every rep." }
    ],
    breathing: "Inhale with the bar at the shoulder, exhale through the press.",
    tempo: "1-0-2 - one up the arc, two seconds down.",
    reps: { strength: "6-8", hypertrophy: "8-12 per arm" },
    safety: [
      "Confirm the bar is seated fully in the pivot before your first press.",
      "Kneel on a mat or pad - bare garage concrete under the kneecap ends sets early.",
      "Set the sleeve down with both hands between sides; do not drop it."
    ],
    swaps: ["lm-press", "smith-seated-ohp"]
  },
  {
    id: "lm-row",
    name: "Landmine Row",
    aka: ["Bent-Over Landmine Row"],
    station: "Landmine",
    attachments: ["Single D-handle"],
    primary: ["Lats", "Upper Back"],
    secondary: ["Rear Delts", "Biceps", "Forearms", "Lower Back"],
    difficulty: "Intermediate",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "landmine", posture: "bentover" } },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame and load the free sleeve.",
      "Straddle the bar facing the pivot and hook the single D-handle under the sleeve, right behind the plates.",
      "Hinge to a 30-45 degree torso, back flat, and grip the handle with both hands (or grab the sleeve itself).",
      "Let the plates hang at arm's length below your chest."
    ],
    steps: [
      "Brace, then row the sleeve up toward your lower chest.",
      "Drive the elbows back and up past the ribs.",
      "Squeeze the shoulder blades together as the plates near your shirt.",
      "Lower under control to a full hang, arms long.",
      "Hold the hinge angle steady from first rep to last."
    ],
    cues: [
      "Hold the hinge - no standing up.",
      "Elbows drive back, not out.",
      "Pull to the lower chest.",
      "Long arms and a full stretch at the bottom."
    ],
    mistakes: [
      { m: "Standing up a little more each rep.", fix: "Set the hinge and freeze it - if the torso pumps, take a plate off." },
      { m: "Yanking with the arms while the upper back rounds.", fix: "Start each pull by pinching the shoulder blades, then let the elbows follow." },
      { m: "Half-repping the bottom.", fix: "Let the plates hang to full arm length each rep - the stretch is half the value." },
      { m: "Jerking the weight up with the hips.", fix: "Pause a beat at the dead hang, then row - the hips stay locked." }
    ],
    breathing: "Exhale as you row to the chest, inhale on the lower.",
    tempo: "1-1-2 - row in one, squeeze one, two down.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Confirm the bar end is seated in the pivot - a half-seated bar can pop loose mid-set.",
      "Load modestly: the plates sit close to your hands, and smaller-diameter plates leave more room to pull.",
      "Set the plates down on the floor to finish - do not drop the sleeve in a garage."
    ],
    swaps: ["tbar-row", "bb-bent-over-row"]
  },
  {
    id: "lm-meadows-row",
    name: "Meadows Row",
    aka: ["Perpendicular Landmine Row"],
    station: "Landmine",
    attachments: [],
    primary: ["Upper Back", "Lats"],
    secondary: ["Rear Delts", "Biceps", "Forearms", "Core"],
    difficulty: "Advanced",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "landmine", posture: "meadows" } },
    setup: [
      "Seat the bar end fully in the landmine pivot and load smaller-diameter plates on the sleeve.",
      "Stand perpendicular to the bar with the working side closest to it, feet staggered.",
      "Hinge over and take an overhand grip on the very end of the sleeve, thumb over the end cap.",
      "Brace the free forearm on the front thigh and flatten the back."
    ],
    steps: [
      "Let the bar hang long and allow the shoulder blade to slide forward for a big stretch.",
      "Row the sleeve up with a wide, flared elbow.",
      "Pull until the upper arm passes the line of your torso.",
      "Squeeze the rear delt and upper back at the top.",
      "Lower with control back into the stretch without twisting open."
    ],
    cues: [
      "Elbow wide, like starting a lawnmower.",
      "Big stretch - let the blade slide forward.",
      "Row up, not back.",
      "Hips stay square, no corkscrew."
    ],
    mistakes: [
      { m: "Torso rotates open to hoist the bar.", fix: "Keep both shoulders pointed at the floor and take weight off the sleeve." },
      { m: "Elbow tucked tight like a lat row.", fix: "Flare the elbow out toward shoulder height - the upper back and rear delt are the target." },
      { m: "Grip dies before the back does.", fix: "Use straps or chalk - the thick sleeve end taxes the hand hard." },
      { m: "Cutting the stretch short at the bottom.", fix: "Let the shoulder blade glide forward each rep before you pull." }
    ],
    breathing: "Exhale on the row, inhale as you lower into the stretch.",
    tempo: "1-1-2 - pull hard in one, squeeze one, two down.",
    reps: { strength: "6-8", hypertrophy: "8-12 per side" },
    safety: [
      "Seat the bar fully in the pivot; an angled yank on a loose bar can pop it out.",
      "Keep loads modest - the plates sit right at your hand, and smaller-diameter plates give the most range.",
      "Lower the plates to the floor between sides - never drop the sleeve on a garage slab."
    ],
    swaps: ["lm-row", "bb-bent-over-row"]
  },
  {
    id: "tbar-row",
    name: "T-Bar Row",
    aka: ["Landmine T-Bar Row"],
    station: "Landmine",
    attachments: ["T-bar handle"],
    primary: ["Upper Back", "Lats"],
    secondary: ["Rear Delts", "Biceps", "Lower Back", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "landmine", posture: "tbar" } },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame and load the free sleeve.",
      "Hook the T-bar handle under the sleeve, snug up against the plates.",
      "Straddle the bar facing the pivot and hinge to about 45 degrees, back flat.",
      "Take the neutral grips with arms long and the plates hanging below your chest."
    ],
    steps: [
      "Brace hard, then pull the handle toward your lower chest.",
      "Drive the elbows back along your ribs, shoulder blades pinching.",
      "Pull until the plates nearly meet your torso.",
      "Lower with control to full arm length, holding the hinge.",
      "Re-tension the lats before the next pull - no slack yanks."
    ],
    cues: [
      "Hold the 45-degree hinge all set.",
      "Elbows drive back, chest stays proud.",
      "Pull with the blades first, arms second.",
      "Full hang at the bottom, no half reps."
    ],
    mistakes: [
      { m: "Torso rises with every rep until the row becomes a shrug.", fix: "Freeze the hinge; if you cannot, strip a plate and reset." },
      { m: "Rounding the lower back in the hinge.", fix: "Push the hips back and brace before the first pull; end the set when the flat back goes." },
      { m: "Jerking the handle off the bottom.", fix: "Take the slack out, then drive - momentum steals the rep from the upper back." },
      { m: "Stacking wide plates until the range disappears.", fix: "Big plates hit your chest early - load smaller-diameter plates for a full pull." }
    ],
    breathing: "Exhale as you drive the elbows back, inhale on the lower.",
    tempo: "1-1-2 - pull in one, pinch one, two down.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Confirm the bar is seated fully in the pivot and the T-bar handle is centered under the sleeve before you hinge in.",
      "This is the heaviest of the landmine rows - keep the back flat and the load honest.",
      "Set the plates down to the floor to end the set; dropping the sleeve hammers the pivot and the garage slab."
    ],
    swaps: ["bb-bent-over-row", "lm-row"]
  },
  {
    id: "lm-rdl",
    name: "Landmine Romanian Deadlift",
    aka: ["Landmine RDL"],
    station: "Landmine",
    attachments: [],
    primary: ["Hamstrings", "Glutes"],
    secondary: ["Lower Back", "Forearms", "Core"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "landmine", kneeBend: "soft", rom: "mid-shin" } },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame and load the free sleeve.",
      "Face the pivot and hold the very end of the sleeve with both hands, one stacked over the other.",
      "Stand tall with the bar hanging at arm's length against your thighs, feet hip width.",
      "Soften the knees, set the shoulders, and brace before the first hinge."
    ],
    steps: [
      "Push the hips straight back and let the torso tip forward.",
      "Keep the bar close - the arc tries to pull you forward, so sit back harder against it.",
      "Lower to mid-shin or your hamstring limit, back flat.",
      "Drive the hips through to stand tall, squeezing the glutes.",
      "Finish plumb - no lean back at the top."
    ],
    cues: [
      "Hips back against the arc's pull.",
      "Sleeve slides down the thighs.",
      "Flat back, soft knees.",
      "Push the ground away to stand."
    ],
    mistakes: [
      { m: "Letting the arc drag you onto your toes.", fix: "Sit the hips further back and keep the weight in the heels - the pivot pulls forward, you pull back." },
      { m: "Squatting the rep with a deep knee bend.", fix: "Knees stay softly bent and still - all the travel is at the hips." },
      { m: "Rounding the back to chase the floor.", fix: "Depth ends where the flat back ends - mid-shin is plenty." },
      { m: "Standing up into a backward lean.", fix: "Finish stacked - ribs over hips - and squeeze the glutes." }
    ],
    breathing: "Inhale as you hinge down, exhale as the hips drive through.",
    tempo: "3-0-1 - three down, no pause, stand in one.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Seat the bar fully in the pivot; the hinge puts a steady outward pull on the joint.",
      "The plates sit close to your hands - load modestly and add reps before plates.",
      "Set the sleeve down on the floor when done; do not drop it."
    ],
    swaps: ["bb-rdl", "smith-rdl"]
  },
  {
    id: "lm-squat-to-press",
    name: "Landmine Squat to Press",
    aka: ["Landmine Thruster"],
    station: "Landmine",
    attachments: [],
    primary: ["Quads", "Glutes", "Front Delts"],
    secondary: ["Triceps", "Upper Chest", "Core"],
    difficulty: "Intermediate",
    pattern: "Squat",
    anim: { template: "squat", params: { load: "landmine", toPress: true } },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame and load light plates on the sleeve.",
      "Face the pivot and cup the end of the sleeve at your sternum with both hands, elbows down.",
      "Set the feet shoulder width, toes out slightly, a comfortable step back from the pivot.",
      "Brace tall before the first rep."
    ],
    steps: [
      "Squat down with the bar held at the chest, elbows inside the knees.",
      "Drive up hard out of the bottom.",
      "As you stand, press the sleeve up-and-forward along its arc in one flow.",
      "Finish with the arms long up the arc, body plumb.",
      "Pull the bar back to the sternum as you sit into the next squat."
    ],
    cues: [
      "Squat deep, press in one flow.",
      "Legs throw it, arms finish it.",
      "Press up the arc, not straight up.",
      "Ribs down at the lockout."
    ],
    mistakes: [
      { m: "Pausing at the top of the squat before pressing.", fix: "Blend them - the leg drive should flow straight into the press." },
      { m: "Pressing straight up instead of along the arc.", fix: "Drive the bar up-and-forward; the pivot decides the path, so follow it." },
      { m: "Heels lift in the squat because the bar pulls you forward.", fix: "Step back a little further from the pivot and keep the weight mid-foot." },
      { m: "Loading it like a squat instead of a press.", fix: "The press limits the weight - keep the plates light and move fast instead." }
    ],
    breathing: "Inhale on the way down, exhale hard as you drive and press.",
    tempo: "2-0-1 - two down, no pause, drive and press in one count.",
    reps: { strength: "5-8 (kept light and fast)", hypertrophy: "8-15" },
    safety: [
      "Check the bar end is seated in the pivot before the first rep.",
      "Light plates only - they ride next to your hands and the press is the weak link.",
      "If a rep dies overhead, guide the sleeve back to the chest or set it down on the floor in front of you - never dump it sideways."
    ],
    swaps: ["bb-push-press", "smith-front-squat"]
  },
  {
    id: "lm-rotation",
    name: "Landmine Rotation",
    aka: ["Landmine Twist", "Landmine 180"],
    station: "Landmine",
    attachments: [],
    primary: ["Obliques", "Core"],
    secondary: ["Front Delts", "Serratus", "Glutes"],
    difficulty: "Advanced",
    pattern: "Rotation",
    anim: { template: "landmineRotation", params: {} },
    setup: [
      "Seat the bar end fully in the landmine pivot at the base of the frame; start with an empty bar or one small plate.",
      "Face the pivot and hold the very end of the sleeve with both hands at chest height, arms long.",
      "Set the feet just wider than shoulders, knees soft, far enough back that the bar clears your body as it sweeps.",
      "Brace the trunk - the core steers this, the arms just hold on."
    ],
    steps: [
      "Sweep the bar in an arc to one side, arms staying long.",
      "Pivot the hips and the trailing foot as the bar swings.",
      "Lower the sleeve to about hip height at the side, core braced.",
      "Reverse the arc under control - never let the bar free-fall through the middle.",
      "Sweep to the other side and keep alternating with rhythm."
    ],
    cues: [
      "Arms long, hips steer.",
      "Pivot the back foot every sweep.",
      "Control the middle - no free-fall.",
      "Light bar, crisp arcs."
    ],
    mistakes: [
      { m: "Arms bend and muscle the bar around.", fix: "Keep the elbows long - rotation comes from the hips and trunk, not a curl." },
      { m: "Feet stay planted while the spine twists.", fix: "Let the trailing foot pivot so the hips turn with the bar." },
      { m: "Loading plates until the arc gets jerky.", fix: "Stay light - an empty bar is already leverage-heavy at arm's length." },
      { m: "Speeding up until the low points bounce.", fix: "Decelerate into each side and reverse smoothly - the turnaround is the exercise." }
    ],
    breathing: "Exhale as the bar sweeps down to each side, inhale through the middle.",
    tempo: "2-0-2 - two seconds down each side, smooth turnaround, no pause.",
    reps: { strength: "8-10 per side (bar stays light)", hypertrophy: "10-15 per side" },
    safety: [
      "Seat the bar fully in the pivot - side-to-side sweeps are exactly what walks a loose bar out.",
      "Empty bar first; add only small plates, and remember the load sits at arm's length from your spine.",
      "Finish in the middle and set the sleeve down on the floor - do not drop it mid-arc."
    ],
    swaps: ["cbl-woodchop", "cbl-pallof-press"]
  }
];
