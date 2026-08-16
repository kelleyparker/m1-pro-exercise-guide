// M1 Pro Form Guide - exercise data (part 3: cable high + cable mid)
const EX_PART_3 = [
  {
    id: "cbl-lat-pulldown-wide",
    name: "Lat Pulldown (Wide Grip)",
    aka: ["Wide-Grip Pulldown"],
    station: "Cable High",
    attachments: ["Lat bar"],
    primary: ["Lats"],
    secondary: ["Upper Back", "Biceps", "Rear Delts", "Forearms"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pulldown", params: { grip: "wide", anchor: "high" } },
    setup: [
      "Clip the lat bar to the high pulley at the dedicated lat pulldown station.",
      "Brace your thighs under the pads, or set the bench under the pulley and sit tall.",
      "Grip the bar about 1.5x shoulder width, palms away.",
      "Sit down with the arms long overhead so the stack is lifted and the cable is taut before the first rep."
    ],
    steps: [
      "Start from a full hang: arms straight, shoulder blades reaching up.",
      "Pull the shoulder blades down first, then drive the elbows down and out.",
      "Bring the bar to the top of the chest with a slight 10-15 degree lean back.",
      "Squeeze the lats for a beat with the chest tall.",
      "Let the bar rise on a slow arm extension until the shoulders reach fully up again."
    ],
    cues: [
      "Blades down before elbows bend.",
      "Elbows to the back pockets.",
      "Chest up to meet the bar.",
      "Long stretch at the top, no slack."
    ],
    mistakes: [
      { m: "Leaning way back and rowing the bar to the belly.", fix: "Keep the lean at 10-15 degrees and pull the bar to the collarbones - the torso angle stays fixed for the whole set." },
      { m: "Pulling the bar behind the neck.", fix: "Pull to the front of the chest; behind-the-neck cranks the shoulders for no extra lat work." },
      { m: "Cutting the top short so the arms never straighten.", fix: "Finish each rep with elbows straight and the shoulder blades gliding up - the stretch is half the exercise." },
      { m: "Wrists curling in to finish the pull.", fix: "Hands are hooks; end the rep with the elbows, not a wrist curl." }
    ],
    breathing: "Exhale as you pull the bar to your chest, inhale on the controlled ride back up.",
    tempo: "1-1-3 - pull in one second, squeeze one, three seconds back up.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "No safeties needed - release the bar and the stack simply sets back down.",
      "Lock your thighs under the pads before the first rep so the weight cannot lift you off the seat.",
      "When the set ends, stand up with control and guide the bar back overhead before letting go."
    ],
    swaps: ["pull-up", "cbl-lat-pulldown-neutral"]
  },
  {
    id: "cbl-lat-pulldown-neutral",
    name: "Lat Pulldown (Neutral Grip)",
    aka: ["Neutral-Grip Pulldown"],
    station: "Cable High",
    attachments: ["Two D-handles"],
    primary: ["Lats"],
    secondary: ["Biceps", "Upper Back", "Forearms"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pulldown", params: { grip: "neutral", anchor: "high" } },
    setup: [
      "Clip both D-handles to the high pulley at the lat pulldown station for a shoulder-width neutral grip.",
      "Brace your thighs under the pads, or set the bench under the pulley.",
      "Grab a handle in each hand, palms facing each other, and sit tall with the arms long overhead."
    ],
    steps: [
      "Reach fully overhead and let the shoulder blades ride up for a deep stretch.",
      "Pull the shoulder blades down, then drive the elbows straight down toward the ribs.",
      "Bring the handles to the top of the chest, elbows tracking close to the body.",
      "Pause with the chest tall and lats tight.",
      "Extend the arms slowly all the way back to the stretched start."
    ],
    cues: [
      "Elbows track straight down.",
      "Pull to the collarbones.",
      "Reach tall between reps.",
      "Ribs down, no arch to finish."
    ],
    mistakes: [
      { m: "Shrugging the shoulders up as the handles come down.", fix: "Set the blades down and back first and keep the neck long through the pull." },
      { m: "Arching the lower back to grind out the last inches.", fix: "Lighten the stack and keep the ribs stacked over the pelvis." },
      { m: "Half-rep turnarounds with bent elbows at the top.", fix: "Straighten the arms fully every rep - the bigger overhead stretch is why this grip exists." }
    ],
    breathing: "Exhale on the pull down, inhale as the arms travel back overhead.",
    tempo: "1-1-3 - pull in one, hold one, three seconds up.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "Release the handles and the stack sets straight down - nothing to bail from.",
      "Anchor the thighs under the pads first so heavier sets cannot pull you off the seat.",
      "Guide the handles back overhead under control at the end of the set instead of letting them snap up."
    ],
    swaps: ["neutral-grip-pull-up", "cbl-lat-pulldown-wide"]
  },
  {
    id: "cbl-lat-pulldown-underhand",
    name: "Lat Pulldown (Underhand Grip)",
    aka: ["Reverse-Grip Pulldown", "Supinated Pulldown"],
    station: "Cable High",
    attachments: ["Straight bar"],
    primary: ["Lats"],
    secondary: ["Biceps", "Upper Back", "Forearms"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pulldown", params: { grip: "underhand", anchor: "high" } },
    setup: [
      "Clip the short straight bar to the high pulley at the lat pulldown station.",
      "Take a shoulder-width underhand grip, palms facing you.",
      "Brace your thighs under the pads, or set the bench under the pulley, and sit tall with the arms long."
    ],
    steps: [
      "Start stretched: arms straight, shoulder blades reaching up.",
      "Pull the bar down the front of the body toward the upper chest.",
      "Keep the elbows in front of the ribs and tucked close as they drive down.",
      "Touch the bar near the collarbones with the chest proud.",
      "Control the bar back up to a full overhead reach."
    ],
    cues: [
      "Palms up, elbows stay in front.",
      "Pull into a chest-up posture.",
      "Squeeze lats, not just biceps.",
      "Slow stretch back to the top."
    ],
    mistakes: [
      { m: "Turning the rep into a pure biceps curl.", fix: "Drive the elbows down toward the hips and think about the armpits closing - the arms just connect you to the bar." },
      { m: "Leaning back further each rep to keep the stack moving.", fix: "Pick a 10-15 degree lean and hold it; drop plates if you cannot." },
      { m: "Wrists bent backward under the underhand grip.", fix: "Keep knuckles up and wrists straight; lighten the load if they fold." }
    ],
    breathing: "Exhale driving the bar down, inhale on the way back overhead.",
    tempo: "1-1-3 - one second down, brief squeeze, three seconds back up.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "If you have to quit mid-rep, just let the bar travel back up with the arms - the stack sets itself down.",
      "Thighs stay locked under the pads so the load cannot stand you up.",
      "Elbow-tendon grumbles show up fast with underhand work - add stack plates gradually."
    ],
    swaps: ["chin-up", "cbl-lat-pulldown-wide"]
  },
  {
    id: "cbl-single-arm-pulldown",
    name: "Single-Arm Lat Pulldown",
    aka: ["One-Arm Pulldown", "Half-Kneeling Pulldown"],
    station: "Cable High",
    attachments: ["Single D-handle"],
    primary: ["Lats"],
    secondary: ["Biceps", "Upper Back", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pulldown", params: { singleArm: true, anchor: "high" } },
    setup: [
      "Set one carriage to the top position and clip on a single D-handle.",
      "Face the mast in a half-kneeling stance (or seated) far enough back that the cable is taut with the arm overhead.",
      "Grip the handle palm-in; the rotating pulley lets the wrist turn naturally through the rep.",
      "Square the hips and ribs before the first pull."
    ],
    steps: [
      "Reach long toward the pulley and let the shoulder blade glide up.",
      "Pull the shoulder blade down, then drive the elbow to the hip pocket.",
      "Finish with the hand near the shoulder and the elbow by the ribs.",
      "Hold the squeeze without twisting the torso.",
      "Return slowly to the full overhead reach and let the blade travel up again."
    ],
    cues: [
      "Elbow to the hip pocket.",
      "Let the blade ride up, then pull down.",
      "Torso square, no twist.",
      "Stretch long every rep."
    ],
    mistakes: [
      { m: "Torso rotates and side-bends to help the pull.", fix: "Lighten the stack and brace as if someone were about to push your shoulder - only the arm and blade move." },
      { m: "Short choppy reps that skip the overhead stretch.", fix: "Reach until the shoulder rises toward the ear before every pull." },
      { m: "Elbow flares out and the pull drifts across the chest.", fix: "Draw the elbow straight down the side seam of your shirt." }
    ],
    breathing: "Exhale as the elbow drives down, inhale on the long reach back up.",
    tempo: "1-1-3 - pull one second, squeeze one, three back up.",
    reps: { strength: "6-10 per side", hypertrophy: "10-15 per side" },
    safety: [
      "Release the handle and the stack just sets down - no bail plan needed.",
      "Kneel on a mat and keep the front foot planted so the pull cannot tip you forward.",
      "Match reps and load side to side; the weaker side sets the stack."
    ],
    swaps: ["cbl-lat-pulldown-neutral", "pull-up"]
  },
  {
    id: "cbl-straight-arm-pulldown",
    name: "Straight-Arm Pulldown",
    aka: ["Stiff-Arm Pulldown", "Lat Sweep"],
    station: "Cable High",
    attachments: ["Straight bar"],
    primary: ["Lats"],
    secondary: ["Triceps", "Serratus", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "straightArm", params: { anchor: "high" } },
    setup: [
      "Set one carriage to the top position and clip on the short straight bar.",
      "Face the mast, grab the bar overhand about shoulder width, and step back until the stack lifts with the hands around eye level.",
      "Hinge slightly at the hips, soft knees, chest over the toes a touch.",
      "Lock a gentle bend in the elbows that will not change during the set."
    ],
    steps: [
      "Start with hands at eye level, lats stretched, ribs down.",
      "Sweep the bar down in a wide arc toward the thighs, arms nearly straight.",
      "Touch the thighs with the elbows still barely bent.",
      "Squeeze the armpits hard for a beat.",
      "Ride the bar back up the same arc until you feel the lat stretch at eye level."
    ],
    cues: [
      "Push the floor away through the bar.",
      "Elbows slightly bent, frozen there.",
      "Armpits squeeze at the bottom.",
      "Ribs stay down, no back arch."
    ],
    mistakes: [
      { m: "Elbows bend on the way down, turning it into a pushdown.", fix: "Pick the elbow angle at setup and freeze it; only the shoulders move." },
      { m: "Torso bobs up and down to pump the weight.", fix: "Set the hinge angle once; if you need body swing the stack is too heavy." },
      { m: "Stopping the arc at the hips without a squeeze.", fix: "Finish with the bar brushing the thighs and a deliberate one-second lat contraction." }
    ],
    breathing: "Exhale through the downward sweep, inhale as the bar rises to the stretch.",
    tempo: "2-1-3 - two seconds down, one squeeze, three up.",
    reps: { strength: "8-10 (loads stay moderate)", hypertrophy: "12-15" },
    safety: [
      "Nothing to bail: release the bar and the stack sets down in front of you.",
      "Step toward the mast to slacken the cable before letting the bar rise past your face at the end of a set.",
      "Shoulders should feel stretch, not pinch, at the top - shorten the arc if they complain."
    ],
    swaps: ["cbl-pullover", "cbl-lat-pulldown-wide"]
  },
  {
    id: "cbl-crossover-high-low",
    name: "High-to-Low Cable Crossover Fly",
    aka: ["Cable Crossover", "High Cable Fly"],
    station: "Cable High",
    attachments: ["Two D-handles"],
    primary: ["Chest"],
    secondary: ["Front Delts", "Serratus"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "fly", params: { from: "high", anchor: "high" } },
    setup: [
      "Set both carriages to the top position and clip a D-handle to each side.",
      "Stand centered between the two masts with one handle in each hand.",
      "Take a staggered stance, lean the torso slightly forward, and step forward until both stacks are lifted.",
      "Start with the arms wide and high, a soft fixed bend in the elbows."
    ],
    steps: [
      "Open the arms until you feel a stretch across the chest, hands about shoulder height or a bit above.",
      "Sweep both hands down and together in an arc toward the belt line.",
      "Touch the hands (or cross the wrists) below the sternum.",
      "Squeeze the chest for a full beat.",
      "Return along the same arc, opening slowly back to the stretch."
    ],
    cues: [
      "Hug a barrel, elbows fixed.",
      "Hands sweep down to the belt buckle.",
      "Squeeze, then open slow.",
      "Chest does the work, not the hands."
    ],
    mistakes: [
      { m: "Elbows bend and extend, turning the fly into a press.", fix: "Freeze the elbow angle at setup - all the motion comes from the shoulder sweeping the arm." },
      { m: "Shoulders roll forward at the squeeze.", fix: "Keep the chest proud and pinch the handles together in front of the ribs, not around them." },
      { m: "Diving into a deep stretch with a heavy stack.", fix: "Choose a stretch depth you can pause in; dropping deeper under momentum is how pecs get tweaked." }
    ],
    breathing: "Inhale as the arms open to the stretch, exhale as the hands sweep together.",
    tempo: "1-1-3 - sweep together in one, squeeze one, three seconds open.",
    reps: { strength: "8-10 (moderate loads)", hypertrophy: "12-20" },
    safety: [
      "Ease out of the stretched position rep by rep - never let the stacks yank the arms open at speed.",
      "At the end of the set, step back toward the frame to set the stacks down before releasing the handles.",
      "If your grip slips, let the arm travel with the cable instead of fighting it - the stack just sets down."
    ],
    swaps: ["cbl-fly-low-high", "cbl-chest-press"]
  },
  {
    id: "cbl-overhead-triceps",
    name: "Overhead Cable Triceps Extension",
    aka: ["Overhead Rope Extension"],
    station: "Cable High",
    attachments: ["Rope"],
    primary: ["Triceps"],
    secondary: ["Core"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "overheadTriceps", params: { anchor: "high" } },
    setup: [
      "Set the carriage to about head height and clip on the rope.",
      "Grab the rope ends, turn to face away from the mast, and bring the rope behind your head - the rotating pulley follows you around.",
      "Split the stance, hinge slightly forward, and let the cable pull the hands back behind the neck.",
      "Elbows point forward-up beside the ears, upper arms frozen."
    ],
    steps: [
      "Start with the elbows fully bent, hands behind the head, triceps stretched.",
      "Extend the forearms forward-up until the elbows are straight.",
      "Split the rope ends slightly at lockout.",
      "Hold the lockout for a beat with the ribs down.",
      "Bend the elbows slowly to lower the hands back behind the head."
    ],
    cues: [
      "Elbows by the ears, glued still.",
      "Reach for the far wall.",
      "Deep stretch behind the head.",
      "Ribs down, no low-back arch."
    ],
    mistakes: [
      { m: "Elbows flare wide and drift down, turning it into a press.", fix: "Keep the upper arms beside the ears; only the forearms hinge." },
      { m: "Lower back arches as the arms extend.", fix: "Tuck the ribs, squeeze the glutes, and lean the torso a touch further forward." },
      { m: "Cutting the stretch short with a heavy stack.", fix: "Lower until the hands are fully behind the head every rep - drop plates if the stretch disappears." }
    ],
    breathing: "Exhale as you extend to lockout, inhale as the hands lower behind the head.",
    tempo: "1-1-3 - extend in one, hold one, three seconds back down.",
    reps: { strength: "8-10", hypertrophy: "10-15" },
    safety: [
      "If a rep stalls, let the forearms fold back and step toward the mast - the stack sets down.",
      "Walk in toward the mast before releasing the rope so it does not snap up past your head.",
      "This loads the triceps in a long stretch - warm up with a light set before adding plates."
    ],
    swaps: ["cbl-pushdown-rope", "bb-skull-crusher"]
  },
  {
    id: "cbl-pushdown-rope",
    name: "Rope Triceps Pushdown",
    aka: ["Rope Pressdown"],
    station: "Cable High",
    attachments: ["Rope"],
    primary: ["Triceps"],
    secondary: [],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "pushdown", params: { att: "rope", anchor: "high" } },
    setup: [
      "Set the carriage just above head height and clip on the rope.",
      "Face the mast, grab the rope ends palms-in, and step back half a step so the cable is taut.",
      "Pin the elbows to your sides with the forearms up; slight forward lean, feet hip width or lightly split."
    ],
    steps: [
      "Start with the hands at chest height, elbows bent past 90 degrees.",
      "Drive the hands down until the elbows are fully straight.",
      "Split the rope ends apart beside the thighs at lockout.",
      "Squeeze the triceps for a beat.",
      "Let the forearms rise under control back to chest height without the elbows drifting forward."
    ],
    cues: [
      "Elbows pinned to your ribs.",
      "Split the rope at the bottom.",
      "Lock out hard, one beat.",
      "Forearms move, nothing else."
    ],
    mistakes: [
      { m: "Elbows drift forward and up on every rep, adding shoulder and lat.", fix: "Glue the upper arms to the ribs; if they keep moving, the stack is too heavy." },
      { m: "Leaning over the cable and pressing with bodyweight.", fix: "Stand taller and lighten the load - the triceps alone should straighten the arm." },
      { m: "Stopping short of lockout.", fix: "Finish with the elbows completely straight and the rope ends split - the last 20 degrees is the point." }
    ],
    breathing: "Exhale pressing down to lockout, inhale as the hands rise.",
    tempo: "1-1-2 - down in one, squeeze one, two seconds up.",
    reps: { strength: "8-10", hypertrophy: "10-20" },
    safety: [
      "Nothing to bail - release the rope and the stack sets straight down.",
      "Keep your face out of the cable line when you let go; step in toward the mast first.",
      "Elbow-friendly by design: add stack plates in small jumps and keep the reps smooth."
    ],
    swaps: ["cbl-pushdown-bar", "cbl-overhead-triceps"]
  },
  {
    id: "cbl-pushdown-bar",
    name: "Bar Triceps Pushdown",
    aka: ["Straight-Bar Pressdown"],
    station: "Cable High",
    attachments: ["Straight bar"],
    primary: ["Triceps"],
    secondary: ["Forearms"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "pushdown", params: { att: "bar", anchor: "high" } },
    setup: [
      "Set the carriage just above head height and clip on the short straight bar.",
      "Take a shoulder-width overhand grip, wrists neutral and locked.",
      "Step back half a step, pin the elbows at the sides, and lean slightly forward with the hips back a touch."
    ],
    steps: [
      "Start with the bar at chest height, elbows bent past 90 degrees.",
      "Press the bar down in a shallow arc until the elbows are fully straight.",
      "Hold the lockout with the wrists flat and knuckles forward.",
      "Let the bar rise with control to chest height, elbows staying pinned."
    ],
    cues: [
      "Wrists flat, knuckles forward.",
      "Elbows never leave your sides.",
      "Push the bar toward your thighs.",
      "Slow rise, no rebound at the top."
    ],
    mistakes: [
      { m: "Wrists fold back under the bar.", fix: "Lock the wrists neutral and grip the bar hard; drop a plate or two if they keep folding." },
      { m: "Shoulders shrug and elbows flare as the load rises.", fix: "Depress the shoulders and pull the elbows back to the ribs before every rep." },
      { m: "Bouncing at the top to start the next rep.", fix: "Pause a beat at chest height, then drive - momentum robs the triceps." }
    ],
    breathing: "Exhale as the bar drives down, inhale as it rises.",
    tempo: "1-1-2 - one down, one at lockout, two back up.",
    reps: { strength: "8-10", hypertrophy: "10-15" },
    safety: [
      "Bail is automatic - release the bar and the stack sets down.",
      "Step toward the mast before letting go so the bar does not spring up at your chin.",
      "The bar allows a bit more load than the rope - earn each plate with a clean lockout."
    ],
    swaps: ["cbl-pushdown-rope", "smith-close-grip-bench"]
  },
  {
    id: "cbl-crunch",
    name: "Kneeling Cable Crunch",
    aka: ["Rope Crunch"],
    station: "Cable High",
    attachments: ["Rope"],
    primary: ["Core"],
    secondary: ["Obliques"],
    difficulty: "Beginner",
    pattern: "Core",
    anim: { template: "crunchKneel", params: { anchor: "high" } },
    setup: [
      "Set the carriage to the top position and clip on the rope.",
      "Kneel on a mat facing the mast, about an arm's length back.",
      "Hold the rope ends against your temples and keep them pinned there for the whole set.",
      "Set the hips tall - they stay at this height every rep."
    ],
    steps: [
      "Start tall from the knees, spine long, ribs lifted.",
      "Crunch the ribs down toward the pelvis, rounding the upper back.",
      "Drive the elbows toward the mid-thighs.",
      "Squeeze the abs hard at the bottom for a beat.",
      "Uncurl slowly back to the tall kneeling start, feeling the abs stretch."
    ],
    cues: [
      "Ribs to pelvis, not nose to floor.",
      "Hips frozen, spine does the moving.",
      "Hands stay glued to your temples.",
      "Uncurl tall for the stretch."
    ],
    mistakes: [
      { m: "Hips rock back and forth to heave the stack.", fix: "Freeze the hip angle; if the hips move, the hip flexors are lifting the weight, not the abs." },
      { m: "Pulling the rope down with the arms.", fix: "The hands only anchor the rope to your head - the elbows travel because the spine flexes." },
      { m: "Bowing at the hips with a flat back.", fix: "Round the upper back deliberately - this is one of the few lifts where spinal flexion is the goal." }
    ],
    breathing: "Exhale hard as you crunch down, inhale as you uncurl tall.",
    tempo: "1-1-3 - crunch in one, squeeze one, three seconds tall.",
    reps: { strength: "8-12 (heavier stack)", hypertrophy: "12-20 controlled" },
    safety: [
      "Release the rope and the stack sets down - nothing overhead to manage.",
      "Kneel on a mat or pad; bare concrete ends the set before the abs do.",
      "Loaded spinal flexion is the goal here, but add plates gradually and stop if the low back, not the abs, feels it."
    ],
    swaps: ["anchored-situp", "hanging-knee-raise"]
  },
  {
    id: "cbl-pullover",
    name: "Lying Cable Pullover (Bench)",
    aka: ["Cable Pullover"],
    station: "Cable High",
    attachments: ["Bench", "Rope"],
    primary: ["Lats"],
    secondary: ["Chest", "Triceps", "Serratus"],
    difficulty: "Intermediate",
    pattern: "Vertical Pull",
    anim: { template: "pullover", params: { anchor: "high" } },
    setup: [
      "Set the carriage to the top position and clip on the rope.",
      "Place the flat bench lengthwise a couple of feet from the mast, head end toward the machine.",
      "Lie back with your head toward the mast and reach overhead to grab the rope ends palms-in.",
      "Scoot down the bench until the cable is taut with the arms stretched overhead and the elbows just slightly bent."
    ],
    steps: [
      "Start stretched: arms back overhead, lats long, feet planted.",
      "Sweep the arms in an arc up and over until the hands finish above the hips.",
      "Keep the elbow bend fixed the whole way.",
      "Squeeze the lats with the ribs held down.",
      "Ride the arc back overhead slowly into the deep stretch."
    ],
    cues: [
      "Long arms, frozen elbows.",
      "Pull with the armpits, not the hands.",
      "Ribs stay down at the stretch.",
      "Sweep to over the hips, no further."
    ],
    mistakes: [
      { m: "Elbows bend as the weight passes the face.", fix: "Lock the slight elbow bend at setup - bending turns the pullover into a triceps extension." },
      { m: "Lower back arches off the pad in the stretched position.", fix: "Plant the feet, tuck the ribs, and shorten the overhead range until the back stays quiet." },
      { m: "Rushing out of the overhead stretch.", fix: "Move slowest exactly where the pull feels deepest - the stretched arc is the money of the lift." }
    ],
    breathing: "Inhale as the arms travel back overhead, exhale sweeping up and over the chest.",
    tempo: "1-1-3 - sweep over in one, squeeze one, three seconds back.",
    reps: { strength: "8-10", hypertrophy: "10-15" },
    safety: [
      "Ease into and out of the overhead stretch - never let the stack drag the shoulders into range they did not choose.",
      "To finish, bend the elbows, sit up toward the mast, and let the stack set down before releasing the rope.",
      "Keep the bench far enough from the frame that the hands never jam into the mast overhead."
    ],
    swaps: ["cbl-straight-arm-pulldown", "cbl-lat-pulldown-wide"]
  },
  {
    id: "cbl-chest-press",
    name: "Standing Cable Chest Press",
    aka: ["Standing Cable Press"],
    station: "Cable Mid",
    attachments: ["Two D-handles"],
    primary: ["Chest"],
    secondary: ["Front Delts", "Triceps", "Core"],
    difficulty: "Beginner",
    pattern: "Horizontal Push",
    anim: { template: "chestPressStand", params: { anchor: "mid" } },
    setup: [
      "Set both carriages to shoulder height and clip a D-handle to each.",
      "Stand centered between the masts facing away from the frame, one handle per hand.",
      "Step forward into a staggered stance until both stacks lift and the handles sit at the sides of the chest.",
      "Brace the trunk - the cables will try to pull you backward the whole set."
    ],
    steps: [
      "Start with the elbows about 45 degrees from the ribs, hands beside the chest.",
      "Press both handles forward until the arms are long and the hands nearly touch.",
      "Squeeze the chest at full reach for a beat.",
      "Bend the elbows and let the hands come back beside the chest under control.",
      "Keep the torso angle identical rep to rep."
    ],
    cues: [
      "Press to a point straight ahead.",
      "Ribs down, glutes on.",
      "Hands nearly kiss at lockout.",
      "Slow return, chest stays proud."
    ],
    mistakes: [
      { m: "Leaning further forward each rep to move heavier stacks.", fix: "Pick a lean and a stagger you can hold; if the back foot slides, drop plates." },
      { m: "Elbows flare up to shoulder height.", fix: "Keep the upper arms about 45 degrees from the ribs to spare the shoulders." },
      { m: "Short reps that never reach full arm extension.", fix: "Press until the elbows straighten and the chest squeezes - the cables reward the finish." }
    ],
    breathing: "Exhale through the press, inhale as the hands return to the chest.",
    tempo: "1-1-2 - press in one, squeeze one, two seconds back.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "If the set dies mid-press, step backward toward the frame and the stacks set down.",
      "Set the stagger before lifting the stacks - getting pulled backward off balance is the main risk.",
      "Release the handles only after stepping back to slacken both cables."
    ],
    swaps: ["smith-bench-press", "cbl-single-arm-chest-press"]
  },
  {
    id: "cbl-single-arm-chest-press",
    name: "Single-Arm Cable Chest Press (With Rotation)",
    aka: ["One-Arm Cable Press"],
    station: "Cable Mid",
    attachments: ["Single D-handle"],
    primary: ["Chest"],
    secondary: ["Front Delts", "Triceps", "Obliques", "Core"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    anim: { template: "chestPressStand", params: { anchor: "mid", singleArm: true, rotation: true } },
    setup: [
      "Set one carriage to shoulder height and clip on a single D-handle.",
      "Face away from the mast with the handle at the side of the chest, cable running over the shoulder line.",
      "Stagger the stance with the opposite foot forward and step out until the stack lifts.",
      "Set the free hand on the hip or reach it forward for balance."
    ],
    steps: [
      "Start with the handle beside the chest, hips and shoulders square.",
      "Press forward and let the trunk rotate slightly through with the pressing side.",
      "Finish with the arm long and the rear hip driven a touch forward.",
      "Resist the twist on the way back - the cable wants to spin you toward the mast.",
      "Return the handle to the chest slowly and re-square before the next rep."
    ],
    cues: [
      "Press and turn through the hip.",
      "Fight the twist coming back.",
      "Back heel pivots, spine stays tall.",
      "Slow return beats a heavy stack."
    ],
    mistakes: [
      { m: "The whole body lurches forward instead of rotating.", fix: "Rotate through the hips a few inches - it is a press with a turn, not a punch and stumble." },
      { m: "Shoulder rolls forward at full reach.", fix: "Finish long but keep the chest proud; the shoulder blade glides, it does not collapse." },
      { m: "Letting the cable snap the torso back around.", fix: "Return in three slow counts - the anti-rotation work on the way back is half the exercise." }
    ],
    breathing: "Exhale as you press and rotate, inhale on the slow ride back.",
    tempo: "1-0-3 - press in one, no pause, three seconds back.",
    reps: { strength: "6-10 per side", hypertrophy: "10-15 per side" },
    safety: [
      "Bail by stepping back toward the mast - the stack sets down instantly.",
      "Keep the stance staggered and the core braced; the single cable pulls one shoulder back toward the frame all set.",
      "Trade stack plates for control - form breaks show up first as a wobbling return."
    ],
    swaps: ["cbl-chest-press", "lm-press"]
  },
  {
    id: "cbl-seated-row",
    name: "Seated Cable Row",
    aka: ["Low Row"],
    station: "Cable Mid",
    attachments: ["Straight bar", "Footplate"],
    primary: ["Lats", "Upper Back"],
    secondary: ["Biceps", "Rear Delts", "Forearms"],
    difficulty: "Beginner",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "cable", posture: "seated", anchor: "mid" } },
    setup: [
      "Set the cable to the low-row position at the base of the frame and clip on the short straight bar.",
      "Sit on the floor mat or a low bench facing the frame and brace both feet on the foot tube / footplate.",
      "Knees soft, grab the bar, and scoot back until the stack lifts with the arms long.",
      "Sit tall: chest up, shoulders stacked over the hips."
    ],
    steps: [
      "Start stretched - arms long, shoulder blades gliding forward, torso upright.",
      "Pull the bar to the belly, driving the elbows straight back past the ribs.",
      "Squeeze the shoulder blades together with the chest tall.",
      "Let the bar travel back out slowly, blades reaching forward at the end.",
      "Keep the torso within a few degrees of vertical the entire set."
    ],
    cues: [
      "Chest tall, pull to the belt.",
      "Elbows skim the ribs.",
      "Blades pinch, then reach.",
      "Arms travel, torso stays."
    ],
    mistakes: [
      { m: "Torso heaves back and forth to swing the stack.", fix: "Allow a few degrees of sway at most; if you are rowing with your lower back, drop plates." },
      { m: "Shoulders round forward under the stretch.", fix: "Let the blades glide but keep the chest lifted - stretch the lats, not the spine." },
      { m: "Pulling the bar to the chest with flared elbows.", fix: "Aim the bar at the belly button and keep the elbows brushing your sides." },
      { m: "Knees locked straight against the footplate.", fix: "Keep a soft knee bend so the hamstrings and low back stay quiet." }
    ],
    breathing: "Exhale as the bar reaches the belly, inhale on the slow reach forward.",
    tempo: "1-1-3 - pull in one, squeeze one, three seconds forward.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "To end a set, lean toward the frame and let the stack set down - never drop the bar from the rowed position.",
      "Brace the feet on the foot tube before taking the bar so the load cannot drag you forward off the seat.",
      "Keep the spine neutral under the stretch; rounding under load is the only real risk here."
    ],
    swaps: ["bb-bent-over-row", "cbl-standing-row"]
  },
  {
    id: "cbl-standing-row",
    name: "Standing Cable Row",
    aka: ["Standing Double-Cable Row"],
    station: "Cable Mid",
    attachments: ["Two D-handles"],
    primary: ["Upper Back", "Lats"],
    secondary: ["Biceps", "Rear Delts", "Core"],
    difficulty: "Beginner",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "cable", posture: "standing", anchor: "mid" } },
    setup: [
      "Set both carriages to chest height and clip a D-handle to each side.",
      "Stand centered between the masts facing the frame, one handle per hand, palms in.",
      "Step back into a split stance until both stacks lift and the arms are long.",
      "Brace the trunk and set the hips and shoulders square to the frame."
    ],
    steps: [
      "Start reaching forward, shoulder blades gliding toward the machine.",
      "Row both handles to the lower ribs, elbows driving straight back.",
      "Pinch the shoulder blades with the chest tall for a beat.",
      "Return the handles slowly to the long reach without the torso tipping forward.",
      "Stay square - do not let one hip or shoulder rotate toward the frame."
    ],
    cues: [
      "Row to the lower ribs.",
      "Square hips, square shoulders.",
      "Pinch the blades, chest proud.",
      "Reach long between reps."
    ],
    mistakes: [
      { m: "Leaning back and hanging off the cables to move the stacks.", fix: "Stand tall over the front foot; if you must lean to finish the pull, lighten both stacks." },
      { m: "Shrugging into the neck at the squeeze.", fix: "Pull the elbows back and down and keep the neck long." },
      { m: "Torso pitches forward on every return.", fix: "Brace the core and let only the shoulder blades reach - the hips stay stacked." }
    ],
    breathing: "Exhale on the row, inhale as the arms reach back out.",
    tempo: "1-1-3 - row in one, squeeze one, three seconds out.",
    reps: { strength: "6-10", hypertrophy: "10-15" },
    safety: [
      "Bail is simple: step toward the frame and the stacks set down.",
      "Set the split stance before lifting the stacks so the first rep cannot pull you onto your toes.",
      "Release the handles only once both cables are slack."
    ],
    swaps: ["cbl-seated-row", "lm-row"]
  },
  {
    id: "cbl-rear-delt-fly",
    name: "Cable Rear-Delt Fly (Reverse Crossover)",
    aka: ["Reverse Cable Crossover"],
    station: "Cable Mid",
    attachments: ["Two D-handles"],
    primary: ["Rear Delts"],
    secondary: ["Upper Back", "Traps", "Rotator Cuff"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "fly", params: { from: "mid", reverse: true, anchor: "mid" } },
    setup: [
      "Set both carriages to upper-chest height and clip on the two D-handles.",
      "Stand centered between the masts facing the frame and cross the cables: grab the left handle with the right hand and the right handle with the left.",
      "Step back until the stacks lift with the arms crossed in front of the chest.",
      "Soft elbows, tall posture, feet hip width or lightly split."
    ],
    steps: [
      "Start with the wrists crossed in front of the chest, cables forming an X.",
      "Sweep the arms apart and back until the hands pass the shoulder line.",
      "Keep the elbows nearly straight and at shoulder height through the arc.",
      "Squeeze the rear delts for a beat, chest still tall.",
      "Let the arms re-cross slowly in front of you."
    ],
    cues: [
      "Pull the X apart.",
      "Lead with the pinkies.",
      "Arms long, elbows barely bent.",
      "Reach wide, not back into a row."
    ],
    mistakes: [
      { m: "Elbows bend and the movement collapses into a row.", fix: "Keep the arms nearly straight - the hands travel a wide arc, not toward the ribs." },
      { m: "Heaving back with the torso to move the stacks.", fix: "The rear delts move tiny loads; drop plates until the torso stays still." },
      { m: "Hands finish low behind the hips.", fix: "Track the hands at shoulder height the whole arc - down-and-back turns it into a lat pull." }
    ],
    breathing: "Exhale sweeping the arms apart, inhale as they re-cross.",
    tempo: "1-1-3 - apart in one, hold one, three seconds re-crossing.",
    reps: { strength: "8-10 (loads stay light)", hypertrophy: "12-20" },
    safety: [
      "If you need out mid-set, let the arms re-cross and step toward the frame - the stacks set down.",
      "Keep a slight elbow bend so the stretched crossed position never levers a locked-out shoulder.",
      "Slacken both cables before unclipping the handles."
    ],
    swaps: ["cbl-face-pull", "cbl-standing-row"]
  },
  {
    id: "cbl-woodchop",
    name: "Cable Woodchop (Horizontal)",
    aka: ["Horizontal Chop", "Cable Rotation"],
    station: "Cable Mid",
    attachments: ["Single D-handle"],
    primary: ["Obliques", "Core"],
    secondary: ["Glutes", "Serratus"],
    difficulty: "Intermediate",
    pattern: "Rotation",
    anim: { template: "woodchop", params: { anchor: "mid" } },
    setup: [
      "Set one carriage to chest height and clip on a single D-handle.",
      "Stand side-on to the mast, feet a bit wider than shoulders, an arm's length plus a step away.",
      "Hold the handle with both hands stacked, arms long toward the pulley - it rotates freely to track the arc.",
      "Soften the knees and brace before the first sweep."
    ],
    steps: [
      "Start with the hands toward the mast, trunk coiled that way.",
      "Turn the hips first, then the trunk, sweeping the handle horizontally across the body.",
      "Let the back heel pivot as the hips lead the turn.",
      "Finish with the hands past the far shoulder, arms still long.",
      "Reverse under control, resisting the pull back toward the mast."
    ],
    cues: [
      "Hips lead, hands follow.",
      "Arms long like a gate swinging.",
      "Pivot the back heel.",
      "Slow return - do not get yanked."
    ],
    mistakes: [
      { m: "Arms bend and swing while the hips stay still.", fix: "It is a trunk rotation, not an arm swipe - turn the belt buckle and let long arms carry the handle." },
      { m: "Standing tall and twisting only through the lower back.", fix: "Bend the knees, pivot the rear foot, and share the turn across hips and trunk." },
      { m: "Letting the cable whip you back to the start.", fix: "Return in three slow counts - the eccentric fights the twist and builds the control." }
    ],
    breathing: "Exhale through the chop, inhale as you rotate back toward the mast.",
    tempo: "1-0-3 - sweep across in one, three seconds back.",
    reps: { strength: "6-8 per side", hypertrophy: "10-15 per side" },
    safety: [
      "Step toward the mast at any point and the stack sets down - that is the whole bail plan.",
      "Keep the load modest; a smooth fast arc beats a grinding heavy twist.",
      "Clear the swing path first - the handle sweeps a wide arc through the garage."
    ],
    swaps: ["lm-rotation", "cbl-pallof-press"]
  },
  {
    id: "cbl-pallof-press",
    name: "Pallof Press",
    aka: ["Anti-Rotation Press"],
    station: "Cable Mid",
    attachments: ["Single D-handle"],
    primary: ["Core", "Obliques"],
    secondary: ["Serratus"],
    difficulty: "Beginner",
    pattern: "Rotation",
    anim: { template: "staticPair", params: { key: "pallof", anchor: "mid" } },
    setup: [
      "Set one carriage to chest height and clip on a single D-handle.",
      "Stand side-on to the mast and hold the handle with both hands against the sternum.",
      "Step sideways away from the frame until the stack lifts and the cable pulls firmly across you.",
      "Feet shoulder width, knees soft, shoulders and hips square to the front."
    ],
    steps: [
      "Brace with the handle pinned to the sternum.",
      "Press the hands straight out to full arm's length in front of the chest.",
      "Hold there - the cable is trying to twist you toward the machine; do not let it.",
      "Keep the hips and shoulders square for the full hold.",
      "Pull the hands back to the sternum with the same control."
    ],
    cues: [
      "Press out, stay square.",
      "Belt buckle faces forward.",
      "The cable twists, you refuse.",
      "Breathe while you hold."
    ],
    mistakes: [
      { m: "Torso rotates toward the mast as the arms extend.", fix: "That twist is exactly what you are training against - lighten the stack until you can press out dead square." },
      { m: "Leaning away from the machine instead of bracing.", fix: "Stay stacked over your own feet; resist with the trunk, not by hanging your bodyweight." },
      { m: "Holding the breath for the whole set.", fix: "Keep a hard brace but breathe shallowly behind it - the hold should outlast one gulp of air." }
    ],
    breathing: "Exhale as you press out, then keep breathing shallowly behind the brace during the hold.",
    tempo: "1-3-1 - press out in one, hold three or more, one back.",
    reps: { strength: "6-8 per side (3-5 second holds)", hypertrophy: "10-15 per side" },
    safety: [
      "Bail by stepping toward the mast - the stack sets down and the twist disappears.",
      "This is a light-load drill; if the arms shake before the core does, take plates off.",
      "Keep the knees soft so a hard tug cannot pull you sideways off balance."
    ],
    swaps: ["cbl-woodchop", "lm-rotation"]
  },
  {
    id: "cbl-external-rotation",
    name: "Cable External Rotation",
    aka: ["Standing Cable ER"],
    station: "Cable Mid",
    attachments: ["Single D-handle"],
    primary: ["Rotator Cuff"],
    secondary: ["Rear Delts"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "staticPair", params: { key: "extRotation", anchor: "mid" } },
    setup: [
      "Set the carriage to standing elbow height and clip on a single D-handle.",
      "Stand side-on with the working arm on the side away from the mast, so the cable crosses your body.",
      "Pin the working elbow to your side, bent 90 degrees, forearm pointing at the machine.",
      "Step away until the stack lifts; a folded towel between elbow and ribs helps keep the elbow glued."
    ],
    steps: [
      "Start with the forearm across the belly, pointing toward the mast.",
      "Rotate the forearm outward in an arc, elbow staying pinned to the ribs.",
      "Stop when the forearm points forward or slightly past, before the shoulder rolls.",
      "Hold the end range for a beat.",
      "Rotate back across the body slowly against the cable."
    ],
    cues: [
      "Elbow glued to your side.",
      "Turn the forearm like a gate.",
      "Wrist stays flat, knuckles lead.",
      "Slow in both directions."
    ],
    mistakes: [
      { m: "Elbow drifts away from the ribs and the whole arm swings.", fix: "Squeeze the towel between elbow and side; only the forearm rotates." },
      { m: "Loading it like a real lift.", fix: "The cuff is small - use one of the lightest stack settings and chase smooth reps, not plates." },
      { m: "Wrist cocks back to fake extra range.", fix: "Keep the wrist neutral and stop where the shoulder itself stops rotating." }
    ],
    breathing: "Exhale rotating out, inhale on the slow return across the body.",
    tempo: "2-1-2 - two out, hold one, two back.",
    reps: { strength: "10-12 per side (stay light)", hypertrophy: "12-20 per side" },
    safety: [
      "Release the handle and the stack sets down - no bail needed.",
      "Warm-up territory: this should never approach grinding effort.",
      "If the shoulder pinches anywhere in the arc, shrink the range and lighten the load."
    ],
    swaps: ["cbl-face-pull", "cbl-rear-delt-fly"]
  }
];
