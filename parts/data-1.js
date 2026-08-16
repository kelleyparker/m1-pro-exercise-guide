// M1 Pro Form Guide - exercise data (part 1: Smith machine)
const EX_PART_1 = [
  {
    id: "smith-low-bar-squat",
    name: "Smith Machine Low-Bar Squat",
    aka: ["Low-Bar Smith Squat"],
    station: "Smith",
    attachments: [],
    primary: ["Glutes", "Quads"],
    secondary: ["Hamstrings", "Adductors", "Lower Back", "Core"],
    difficulty: "Intermediate",
    pattern: "Squat",
    standards: "backSquat",
    smithCaveat: true,
    anim: { template: "squat", params: { load: "smith", style: "lowbar" } },
    setup: [
      "Set the bar on a catch at armpit height and the safety spotter arms one hole below your bottom-position bar height.",
      "Rack the bar 2-3 inches lower than high-bar, across the rear-delt shelf, hands wide, elbows driven back and down.",
      "Walk both feet about a full foot-length forward of the bar line, slightly wider than shoulder width, toes out 15-30 degrees.",
      "Rotate the bar to release the spring hooks and set your brace before descending."
    ],
    steps: [
      "Unhook the bar with a wrist rotation and squeeze it into the rear-delt shelf.",
      "Push the hips back as the knees bend, letting the torso lean into the bar.",
      "Ride the bar straight down until the hips reach parallel or your pain-free limit.",
      "Keep the whole foot planted and the knees tracking over the toes.",
      "Drive the hips up and forward, pushing hard through midfoot and heel.",
      "Finish the set by rotating the hooks onto the nearest catch."
    ],
    cues: [
      "Squeeze the bar into the rear-delt shelf.",
      "Hips back first, chest follows the bar.",
      "Lean is fine - the machine holds the line.",
      "Drive the hips up, not just the knees."
    ],
    mistakes: [
      { m: "Bar racked up on the neck instead of the rear-delt shelf.", fix: "Pull the elbows back and down to build a muscle shelf 2-3 inches below the traps before unracking." },
      { m: "Feet set under the bar as in the high-bar squat.", fix: "Step a full foot-length forward - low-bar needs more room for the hips to travel behind the fixed bar line." },
      { m: "Chest drops and the bar tries to roll up the back.", fix: "Keep the lats and hands tight and lift the chest as the hips rise." },
      { m: "Cutting depth because the hips get stuck behind.", fix: "Narrow the stance a touch or bring the feet back an inch until parallel feels smooth." }
    ],
    breathing: "Inhale and brace before you unhook, hold the breath through the descent and the turn, exhale hard past the sticking point.",
    tempo: "2-0-1-0 - two seconds down, no pause, strong hip drive up.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the bar's bottom position - if a rep fails, settle the bar onto them and slide out.",
      "The bail is a wrist rotation - the spring hooks grab any of the 11 catches, so practice re-hooking with an empty bar.",
      "More lean means more lower-back load - add plates only when the torso angle stays constant every rep."
    ],
    swaps: ["smith-back-squat", "bb-back-squat"]
  },
  {
    id: "smith-front-squat",
    name: "Smith Machine Front Squat",
    aka: ["Smith Front Squat"],
    station: "Smith",
    attachments: [],
    primary: ["Quads"],
    secondary: ["Glutes", "Core", "Upper Back"],
    difficulty: "Intermediate",
    pattern: "Squat",
    standards: "frontSquat",
    smithCaveat: true,
    anim: { template: "squat", params: { load: "smith", style: "front" } },
    setup: [
      "Set the bar on a catch at armpit height and the safety spotter arms one hole below your bottom-position bar height.",
      "Step under with the bar across the front delts - cross-arm rack or fingertips under the bar - elbows lifted to shoulder height.",
      "Place the feet directly under to slightly behind the bar line, shoulder width, toes out 10-20 degrees, so the torso stays tall.",
      "Rotate the bar off the hooks, stand tall, and brace before the first rep."
    ],
    steps: [
      "Unhook the bar and press the elbows high so the bar settles into the front-delt shelf.",
      "Bend the knees and drop straight down the track, torso vertical.",
      "Let the knees travel forward over the toes as the hips sink between the heels.",
      "Hit parallel or below without the elbows dropping.",
      "Drive up through the whole foot, leading with the elbows and chest.",
      "Re-hook on the nearest catch when the set ends."
    ],
    cues: [
      "Elbows high, all the way up and down.",
      "Chest to the ceiling.",
      "Sit straight down the track.",
      "Lead the drive with the elbows."
    ],
    mistakes: [
      { m: "Elbows drop and the bar rolls toward the wrists.", fix: "Raise the elbows until the upper arms are near parallel to the floor and keep them there every inch of the rep." },
      { m: "Feet set too far forward, turning it into a lean-back leg press.", fix: "Bring the heels back under the bar line so the knees can travel forward and the torso stays vertical." },
      { m: "Heels lift out of the bottom.", fix: "Widen the stance slightly or shorten the depth until the whole foot stays down." },
      { m: "Wrists aching in the fingertip rack.", fix: "Switch to the cross-arm rack - the fixed path only needs hands to steer, not to hold." }
    ],
    breathing: "Big inhale and brace at the top, hold down and through the turn, exhale as you drive past the sticking point.",
    tempo: "3-0-1-0 - three seconds down, no bounce, drive up.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the bottom bar position - if the rack position crumbles, set the bar down on them and step out.",
      "Bail plan: rotate the wrists to re-hook the spring catches at any height - rehearse it from the bottom with an empty bar.",
      "The upright torso hides a weak brace - if the upper back rounds, strip plates before chasing depth."
    ],
    swaps: ["bb-front-squat", "smith-back-squat"]
  },
  {
    id: "smith-split-squat",
    name: "Smith Machine Split Squat",
    aka: ["Static Lunge", "Smith Split Squat"],
    station: "Smith",
    attachments: [],
    primary: ["Quads", "Glutes"],
    secondary: ["Adductors", "Core"],
    difficulty: "Beginner",
    pattern: "Squat",
    anim: { template: "splitSquat", params: { load: "smith", rearOn: "floor" } },
    setup: [
      "Set the bar on a catch at armpit height with the safety spotter arms one hole below where the bar sits at the bottom of the rep.",
      "Bar across the upper traps, one foot forward of the bar line and one behind it, feet hip-width apart for balance.",
      "Slide the stance longer or shorter until the front shin stays near vertical at the bottom.",
      "Rotate the bar off the hooks and square the hips forward before the first rep."
    ],
    steps: [
      "Unhook the bar and settle into the split stance, rear heel up.",
      "Bend both knees and lower straight down the track.",
      "Touch the rear knee lightly toward the floor or your pain-free depth.",
      "Drive through the whole front foot to stand back up.",
      "Keep both feet planted for the full set, then switch legs.",
      "Re-hook on the nearest catch between legs if you need to reset."
    ],
    cues: [
      "Straight down, not forward.",
      "Front knee over the shoelaces.",
      "Hips square, torso tall.",
      "Push the floor away with the front foot."
    ],
    mistakes: [
      { m: "Stance too short - front knee shoots past the toes and the heel lifts.", fix: "Lengthen the split until the front shin stays near vertical and the heel stays down." },
      { m: "Pushing off the rear leg instead of the front.", fix: "Treat the rear leg as a kickstand - the front leg does the work." },
      { m: "Hips twisted toward the front leg.", fix: "Point both hip bones straight ahead and keep them level through the rep." }
    ],
    breathing: "Inhale on the way down, exhale as the front leg drives you up.",
    tempo: "2-0-2-0 - two seconds down, two up, no bounce off the bottom.",
    reps: { strength: "6-8 per leg", hypertrophy: "10-15 per leg" },
    safety: [
      "Spotter arms one hole below the bottom bar height - a failed rep sets down on them while you step out of the split.",
      "The bail is a wrist rotation onto the nearest of the 11 catches - rehearse it once per side with an empty bar.",
      "A sore front knee usually means a cramped stance - lengthen the split before lowering the load."
    ],
    swaps: ["smith-bulgarian-split-squat", "smith-reverse-lunge"]
  },
  {
    id: "smith-bulgarian-split-squat",
    name: "Smith Machine Bulgarian Split Squat",
    aka: ["Rear-Foot-Elevated Split Squat", "RFESS"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Adductors", "Core"],
    difficulty: "Intermediate",
    pattern: "Squat",
    anim: { template: "splitSquat", params: { load: "smith", rearOn: "bench" } },
    setup: [
      "Set the bar on a catch at armpit height and the safety spotter arms one hole below the bar's bottom position.",
      "Place the flat bench behind the bar line and set the rear foot on it laces-down.",
      "Plant the front foot far enough forward of the bar line that the knee tracks over midfoot at the bottom.",
      "Bar across the upper traps, rotate it off the hooks, and level the hips before descending."
    ],
    steps: [
      "Unhook the bar with the rear foot already set on the bench.",
      "Lower straight down until the front thigh reaches parallel or the rear knee hovers just off the floor.",
      "Keep the torso tall with a slight lean into the front hip.",
      "Drive through the whole front foot to stand.",
      "Complete all reps, re-hook, and switch legs."
    ],
    cues: [
      "All the weight lives in the front leg.",
      "Straight down the track, no drift.",
      "Soft touch at the bottom, no dive.",
      "Front heel stays glued down."
    ],
    mistakes: [
      { m: "Front foot too close, knee slamming far past the toes.", fix: "Hop the front foot forward until the shin is near vertical at depth - the fixed path makes the spot easy to repeat." },
      { m: "Bouncing the rear knee toward the floor for a stretch reflex.", fix: "Stop an inch above the floor and reverse with control." },
      { m: "Torso twisting toward the bench.", fix: "Keep both hip bones facing forward and the ribs stacked over the front thigh." },
      { m: "Loading two-leg squat weight on a one-leg lift.", fix: "Start with the empty bar - balance is easy here, but the front leg still takes nearly everything." }
    ],
    breathing: "Inhale down, short hold at the bottom, exhale on the drive up.",
    tempo: "3-0-2-0 - three seconds down, smooth two-count drive.",
    reps: { strength: "5-8 per leg", hypertrophy: "8-12 per leg" },
    safety: [
      "Spotter arms one hole below the bottom bar position - fail by settling the bar onto them, then step the rear foot off the bench.",
      "Bail plan: a quick wrist rotation re-hooks the spring catches at any height without leaving the stance.",
      "Square the bench behind the bar line before loading so the rear foot cannot slide sideways mid-set."
    ],
    swaps: ["smith-split-squat", "smith-reverse-lunge"]
  },
  {
    id: "smith-reverse-lunge",
    name: "Smith Machine Reverse Lunge",
    aka: ["Smith Step-Back Lunge"],
    station: "Smith",
    attachments: [],
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Core"],
    difficulty: "Beginner",
    pattern: "Squat",
    anim: { template: "splitSquat", params: { load: "smith", rearOn: "floor", lunge: true } },
    setup: [
      "Set the bar on a catch at armpit height with the safety spotter arms one hole below the bar height at the bottom of the lunge.",
      "Bar across the upper traps, feet hip-width, standing foot directly under to slightly ahead of the bar line.",
      "Rotate the bar off the hooks and stand tall before the first step."
    ],
    steps: [
      "Unhook the bar and brace with both feet under the hips.",
      "Step one foot straight back about a leg's length, landing on the ball of the foot.",
      "Bend both knees until the rear knee hovers just above the floor.",
      "Drive through the whole front foot and step back up to standing.",
      "Alternate legs or finish one side, then re-hook the bar on the nearest catch."
    ],
    cues: [
      "Step back, sink straight down.",
      "Front knee over the laces.",
      "Push the floor away, stand tall.",
      "Quiet landings, no crash."
    ],
    mistakes: [
      { m: "Stepping back too short, front heel popping up.", fix: "Reach the rear foot a few inches further back so the front shin stays near vertical." },
      { m: "Pushing off the rear toes to stand.", fix: "Drag the rear foot forward with zero push - the front leg does the lifting." },
      { m: "Torso pitching forward on the step back.", fix: "Sink the hips straight down the track and keep the chest tall - the fixed bar holds the balance for you." }
    ],
    breathing: "Inhale as you step back and sink, exhale driving up to standing.",
    tempo: "2-0-1-0 - controlled two-count descent, drive up in one.",
    reps: { strength: "6-8 per leg", hypertrophy: "10-15 per leg" },
    safety: [
      "Spotter arms one hole below the bar's lowest point - if a rep dies in the bottom, set the bar down and step out.",
      "The wrist-rotation bail works mid-lunge - the spring hooks grab any of the 11 catches.",
      "If balance wobbles on the step back, plant both feet, re-hook, and reset rather than fighting it under load."
    ],
    swaps: ["smith-split-squat", "smith-bulgarian-split-squat"]
  },
  {
    id: "smith-hip-thrust",
    name: "Smith Machine Hip Thrust",
    aka: ["Smith Hip Thrust"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Glutes"],
    secondary: ["Hamstrings", "Quads", "Core"],
    difficulty: "Beginner",
    pattern: "Hinge",
    standards: "hipThrust",
    smithCaveat: true,
    anim: { template: "hipThrust", params: { load: "smith", back: "bench" } },
    setup: [
      "Set the flat bench parallel to the bar line and just outside it, so the pad edge catches your shoulder blades.",
      "Put the bar on a low catch you can slide under and wrap a thick pad around it.",
      "Set the safety spotter arms just below the bar's bottom-of-rep height over your hips.",
      "Sit under the bar with the upper back on the bench edge, bar over the hip crease, feet planted hip-width."
    ],
    steps: [
      "Unhook the bar with a wrist rotation, hands wide on the bar to steer it.",
      "Tuck the chin and drive through the heels to lift the hips.",
      "Rise until the body is level from knees to shoulders, shins vertical.",
      "Squeeze the glutes at the top for a full beat without arching the back.",
      "Lower the hips with control toward the floor, then drive again.",
      "Finish by rotating the bar back onto the catch and sliding out."
    ],
    cues: [
      "Chin tucked, ribs down.",
      "Drive the heels through the floor.",
      "Full lockout, squeeze for a beat.",
      "Hips do the work, not the lower back."
    ],
    mistakes: [
      { m: "Back arches and the ribs flare at the top.", fix: "Tuck the pelvis and stop at a flat tabletop - height past that is spine, not glutes." },
      { m: "Feet too far forward, hamstrings cramping.", fix: "Pull the heels in until the shins are vertical at lockout." },
      { m: "Pushing through the toes.", fix: "Drive through the heels and keep the whole foot planted." },
      { m: "Neck craned back to watch the bar.", fix: "Keep the chin tucked and the eyes on your knees through the whole rep." }
    ],
    breathing: "Exhale hard as you drive the hips up, inhale as you lower under control.",
    tempo: "1-2-2-0 - drive up in one, two-second squeeze, two down.",
    reps: { strength: "5-8", hypertrophy: "10-15" },
    safety: [
      "Set the spotter arms just under the bar's bottom position so a failed rep settles onto steel, never onto your pelvis.",
      "Bail plan: lower the hips and rotate the bar onto the nearest catch - the spring hooks work from the bottom position.",
      "Always use the bar pad - the fixed path presses straight down on the hip crease."
    ],
    swaps: ["bb-hip-thrust", "smith-glute-bridge"]
  },
  {
    id: "smith-glute-bridge",
    name: "Smith Machine Glute Bridge",
    aka: ["Smith Glute Bridge"],
    station: "Smith",
    attachments: [],
    primary: ["Glutes"],
    secondary: ["Hamstrings", "Core"],
    difficulty: "Beginner",
    pattern: "Hinge",
    anim: { template: "hipThrust", params: { load: "smith", back: "floor" } },
    setup: [
      "Lay a mat on the floor under the bar and set the bar on the lowest catch that still lets you slide underneath.",
      "Wrap a thick pad around the bar and set the safety spotter arms in their lowest holes as a backstop under the bar path.",
      "Lie with shoulders on the mat, knees bent, feet flat hip-width, bar over the hip crease.",
      "Grip the bar wide and rotate it off the catch once the pad sits right."
    ],
    steps: [
      "Unhook the bar and press the lower back gently toward the mat.",
      "Drive through the heels to lift the hips until knees, hips, and shoulders line up.",
      "Squeeze the glutes at the top without arching the lower back.",
      "Lower with control until the hips brush the mat.",
      "Rotate the bar back onto the catch to finish."
    ],
    cues: [
      "Heels heavy, toes light.",
      "Ribs down, tail tucked.",
      "Squeeze at the top, no arch.",
      "Short range, full effort."
    ],
    mistakes: [
      { m: "Arching the lower back to gain height.", fix: "The range is short by design - stop when the body forms a straight line from knees to shoulders." },
      { m: "Feet set too far from the hips.", fix: "Walk the heels in until the shins are near vertical at the top." },
      { m: "Rushing reps and bouncing the hips off the floor.", fix: "Touch the mat quietly each rep and re-squeeze from a dead hip." }
    ],
    breathing: "Exhale as the hips drive up, inhale on the controlled lower.",
    tempo: "1-2-2-0 - up in one, two-second squeeze, two down.",
    reps: { strength: "6-10", hypertrophy: "12-20" },
    safety: [
      "Unrack from the catch closest to your lying hip height - the bail is a small wrist rotation back onto that same catch.",
      "Keep the safety spotter arms in their lowest holes as a backstop in case a hook misses the catch.",
      "Pad the bar every time - it sits directly on the hip crease under a fixed vertical track."
    ],
    swaps: ["smith-hip-thrust", "cbl-pull-through"]
  },
  {
    id: "smith-good-morning",
    name: "Smith Machine Good Morning",
    aka: [],
    station: "Smith",
    attachments: [],
    primary: ["Hamstrings", "Glutes"],
    secondary: ["Lower Back", "Core"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "smith", barOnBack: true, kneeBend: "soft" } },
    setup: [
      "Set the bar on a catch at armpit height and the safety spotter arms one hole below where the bar sits at your deepest hinge.",
      "Bar across the upper traps as in a squat, hands wide, feet hip-width directly under the bar line.",
      "Soften the knees a few degrees and lock that bend in - it does not change during the set.",
      "Rotate the bar off the hooks and brace tall before hinging."
    ],
    steps: [
      "Unhook the bar and set the soft, fixed knee bend.",
      "Push the hips straight back as the chest tips forward.",
      "Hinge until the torso nears 45 degrees or the hamstrings stop you.",
      "Keep the back flat and the bar pulled tight to the traps.",
      "Drive the hips forward to stand tall, squeezing the glutes at the top.",
      "Re-hook the bar on the catch when the set ends."
    ],
    cues: [
      "Hips back, not down.",
      "Flat back, proud chest.",
      "Feel the hamstrings load like elastic.",
      "Stand up with the hips, not the spine."
    ],
    mistakes: [
      { m: "Rounding the upper back as the torso drops.", fix: "Stop the hinge where the back stays flat - depth grows as the hamstrings lengthen over weeks." },
      { m: "Bending the knees into a squat halfway down.", fix: "Set the soft knee bend at the top and freeze it - only the hips travel." },
      { m: "Loading it like a squat.", fix: "This is a hamstring stretch under load - the empty bar is a real working weight to start." },
      { m: "Dropping fast into the bottom.", fix: "Lower on a three count and never bounce out of the stretch." }
    ],
    breathing: "Inhale and brace at the top, hold while you hinge, exhale as the hips drive you back up.",
    tempo: "3-1-2-0 - three seconds down, one-beat pause, two up.",
    reps: { strength: "6-8 (stay conservative)", hypertrophy: "10-15" },
    safety: [
      "Spotter arms one hole below your deepest-hinge bar height - if the hamstrings or back give, settle the bar on them and slip out.",
      "Bail plan: rotate the wrists to re-hook the spring catches - practice from the bottom position with an empty bar.",
      "Keep loads modest - this lift punishes a rounded back faster than any squat."
    ],
    swaps: ["smith-rdl", "bb-rdl"]
  },
  {
    id: "smith-rdl",
    name: "Smith Machine Romanian Deadlift",
    aka: ["Smith RDL"],
    station: "Smith",
    attachments: [],
    primary: ["Hamstrings", "Glutes"],
    secondary: ["Lower Back", "Forearms", "Core"],
    difficulty: "Beginner",
    pattern: "Hinge",
    standards: "rdl",
    smithCaveat: true,
    anim: { template: "hinge", params: { load: "smith", kneeBend: "soft", rom: "mid-shin" } },
    setup: [
      "Set the bar on a catch at mid-thigh height so you grip it standing - no pull from the floor.",
      "Set the safety spotter arms just below your mid-shin turnaround as a floor for the bar.",
      "Stand with feet hip-width directly under the bar line, shins an inch from the bar.",
      "Take a double-overhand grip just outside the thighs and rotate the bar off the hooks."
    ],
    steps: [
      "Unhook the bar and stand tall with it resting on the thighs.",
      "Push the hips straight back with soft knees, sliding the bar down the thighs.",
      "Lower to mid-shin or wherever the hamstrings stop you, back flat.",
      "Pause one beat in the stretch without relaxing.",
      "Drive the hips forward to stand, dragging the bar up the legs.",
      "Re-hook on the mid-thigh catch to end the set."
    ],
    cues: [
      "Paint the legs with the bar.",
      "Hips back like closing a car door.",
      "Soft knees, frozen knees.",
      "Flat back, long hamstrings."
    ],
    mistakes: [
      { m: "Bar drifting forward off the thighs.", fix: "Stand closer so the shins nearly touch the bar and drag it down the legs the whole way." },
      { m: "Squatting the weight down with a big knee bend.", fix: "Freeze a soft knee bend and send the hips straight back instead." },
      { m: "Rounding the lower back to reach mid-shin.", fix: "End the range where the back stays flat - the stretch, not the depth, is the target." },
      { m: "Looking up and craning the neck at the bottom.", fix: "Keep the chin neutral - the eyes follow the floor a few feet ahead as you hinge." }
    ],
    breathing: "Inhale at the top, hold through the descent and the stretch, exhale as the hips snap forward.",
    tempo: "3-1-1-0 - three seconds down, pause in the stretch, up in one.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Spotter arms just below your lowest bar point - if grip or position fails, settle the bar straight onto them.",
      "The spring hooks re-rack at any of the 11 catches - a wrist rotation ends the set from any height.",
      "If the back rounds before mid-shin, shorten the range - honest depth beats a loaded slump."
    ],
    swaps: ["bb-rdl", "smith-good-morning"]
  },
  {
    id: "smith-rack-pull",
    name: "Smith Machine Rack Pull",
    aka: ["Smith Pin Pull", "Partial Deadlift"],
    station: "Smith",
    attachments: [],
    primary: ["Glutes", "Hamstrings"],
    secondary: ["Traps", "Upper Back", "Lower Back", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "smith", kneeBend: "bent", rom: "knee", fromPins: true } },
    setup: [
      "Set the bar on the catch just below kneecap height - the catches, not your hands, hold the bar between reps.",
      "Stand with feet hip-width, shins nearly touching the bar, toes a hair behind the bar line.",
      "Hinge down and take a double-overhand grip just outside the legs.",
      "Flatten the back and pull the slack out of the arms before the first pull."
    ],
    steps: [
      "Brace, then drive the floor away and stand tall with the bar.",
      "Lock out with the glutes squeezed and the shoulders down - no lean-back.",
      "Lower the bar with control back to the catches.",
      "Let it settle completely - full stop, no touch-and-go bounce.",
      "Re-brace and pull the next rep from a dead bar."
    ],
    cues: [
      "Push the floor, do not yank the bar.",
      "Chest up before the pull.",
      "Stand tall, squeeze, no lean-back.",
      "Dead stop every rep."
    ],
    mistakes: [
      { m: "Bouncing the bar off the catches for rhythm.", fix: "Kill each rep dead on the steel and reset the brace - the dead start is the point." },
      { m: "Rounding the upper back as the plates pile on.", fix: "Lift the chest and set the lats before every pull - if the shape fails, the load is dishonest." },
      { m: "Hitching the lockout into a back extension.", fix: "Finish hips-through with a glute squeeze, shoulders stacked over the hips." },
      { m: "Starting from a mid-thigh catch, cutting the range to nothing.", fix: "Keep the start catch just below the knee - higher catches turn it into a shrug." }
    ],
    breathing: "Inhale and brace at the dead bar, exhale through the lockout, breathe again before the next pull.",
    tempo: "1-0-2-1 - pull in one, two down, one-beat dead reset.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "The bar starts and ends on the catch just below the knee - there is no lower to fall, so the bail is simply setting it down.",
      "This lift takes big loads - add plates in small jumps and stop the set when the lockout needs a hitch.",
      "Keep the shins brushing the bar so the fixed path pulls through the hips, not out in front."
    ],
    swaps: ["bb-rack-pull", "smith-deadlift"]
  },
  {
    id: "smith-deadlift",
    name: "Smith Machine Deadlift (From Low Catches)",
    aka: ["Smith Deadlift"],
    station: "Smith",
    attachments: [],
    primary: ["Glutes", "Hamstrings", "Quads"],
    secondary: ["Lower Back", "Traps", "Forearms", "Core"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    standards: "deadlift",
    smithCaveat: true,
    anim: { template: "hinge", params: { load: "smith", kneeBend: "bent", rom: "floor" } },
    setup: [
      "Set the bar on the lowest catch - that is the floor for every rep.",
      "Stand with feet hip-width and the shins an inch behind the bar line so the fixed vertical path grazes the legs instead of grinding them.",
      "Hinge down, grip double-overhand just outside the knees, and flatten the back.",
      "Pull the slack out until the arms are long and tight before driving."
    ],
    steps: [
      "Brace hard against a full breath at the bottom.",
      "Push the floor away, keeping the bar close to the shins and thighs.",
      "Stand to full lockout, hips and knees finishing together.",
      "Lower with control - hips back first, then knees.",
      "Set the bar dead on the low catch and re-brace.",
      "Pull every rep from that dead stop."
    ],
    cues: [
      "Wedge the hips, chest tall.",
      "Push the floor, do not lift the bar.",
      "Bar close all the way.",
      "Dead stop, re-brace, go again."
    ],
    mistakes: [
      { m: "Hips shooting up first, turning the pull into a stiff-leg.", fix: "Drive the chest and hips up at the same rate - think of pressing the floor down." },
      { m: "Bar grinding up the shins.", fix: "Slide both feet back half an inch - with a fixed path your stance moves, not the bar." },
      { m: "Bouncing reps off the catch.", fix: "Let the bar settle silent and dead, then re-brace and pull." },
      { m: "Rounding the lower back at the start.", fix: "Begin one catch higher until you can set a flat back, then earn the lowest catch over weeks." }
    ],
    breathing: "Big inhale and brace at the dead bar, hold through the pull, exhale at lockout, reset the breath every rep.",
    tempo: "1-0-2-1 - pull in one, lower in two, dead reset on the catch.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "The bar starts and ends dead on the lowest catch - a failed pull just sets back down onto it.",
      "Bail plan: rotate the wrists and the spring hooks grab the nearest catch at any point in the pull.",
      "If the bottom position rounds your back, start one catch higher - the 11 heights exist for exactly this."
    ],
    swaps: ["bb-conventional-deadlift", "smith-rdl"]
  },
  {
    id: "smith-bench-press",
    name: "Smith Machine Bench Press",
    aka: ["Smith Bench"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Chest"],
    secondary: ["Triceps", "Front Delts"],
    difficulty: "Beginner",
    pattern: "Horizontal Push",
    standards: "benchPress",
    smithCaveat: true,
    anim: { template: "benchPress", params: { load: "smith", angle: 0 } },
    setup: [
      "Slide the flat bench under the bar until the bar line crosses your mid-chest when lying down.",
      "Set the bar on a catch you can unrack with a slight elbow bend, and the safety spotter arms one hole below your chest-touch height.",
      "Lie with the eyes roughly under the bar, feet flat on the floor, shoulder blades pinched down and back.",
      "Grip just outside shoulder width and rotate the bar off the hooks."
    ],
    steps: [
      "Unrack with a wrist rotation and hold the bar over the chest, arms long.",
      "Lower under control until the bar touches mid-chest.",
      "Keep the forearms vertical and the elbows about 45 degrees from the ribs.",
      "Press straight up to lockout without bouncing.",
      "Finish the set by rotating the bar back onto a catch."
    ],
    cues: [
      "Pinch the shoulder blades into the pad.",
      "Elbows about 45 degrees, not flared.",
      "Touch, do not bounce.",
      "Push yourself away from the bar."
    ],
    mistakes: [
      { m: "Bench set so the bar lands on the neck or belly.", fix: "Move the bench until the bar touches mid-chest - the fixed path makes the touch point a setup choice, not a skill." },
      { m: "Shoulders shrugged loose off the pad.", fix: "Pinch the blades down and back before unracking and keep them pinned all set." },
      { m: "Bouncing the bar off the ribs.", fix: "Touch on a one-count and press - the machine hides momentum a free bar would expose." },
      { m: "Feet dancing on the floor.", fix: "Plant both feet and push them into the floor for a stable press." }
    ],
    breathing: "Inhale on the way down, hold at the touch, exhale hard through the press.",
    tempo: "3-0-1-0 - three seconds down to a light touch, press in one.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below your chest-touch height - if a rep dies, exhale to flatten the chest and slide out.",
      "The faster bail: rotate the wrists and the spring hooks catch at any of the 11 heights - practice it with an empty bar.",
      "Never bench without the spotter arms set, even light - alone in a garage there is no hand to help."
    ],
    swaps: ["bb-bench-press", "cbl-chest-press"]
  },
  {
    id: "smith-incline-press",
    name: "Smith Machine Incline Press",
    aka: ["Smith Incline Bench"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Upper Chest"],
    secondary: ["Front Delts", "Triceps"],
    difficulty: "Beginner",
    pattern: "Horizontal Push",
    standards: "inclinePress",
    smithCaveat: true,
    anim: { template: "benchPress", params: { load: "smith", angle: 30 } },
    setup: [
      "Set the bench to 30-45 degrees of incline and slide it under the bar until the bar line meets just below your collarbones.",
      "Set the bar on a catch you can unrack with a slight elbow bend, and the safety spotter arms one hole below the chest-touch height.",
      "Lie back with the feet planted and the shoulder blades pinched down against the pad.",
      "Grip just outside shoulder width and rotate the bar off the hooks."
    ],
    steps: [
      "Unrack and hold the bar above the upper chest, arms long.",
      "Lower until the bar touches just below the collarbones.",
      "Keep the forearms vertical and the wrists stacked over the elbows.",
      "Press straight up to lockout without the hips leaving the seat.",
      "Rotate the hooks back onto a catch to finish."
    ],
    cues: [
      "Bar to the collarbones, not the throat.",
      "Ribs down, back on the pad.",
      "Wrists stacked over elbows.",
      "Hips stay heavy on the seat."
    ],
    mistakes: [
      { m: "Bench positioned so the bar lands at the throat.", fix: "Re-position the bench until the touch lands just below the collarbones - always test with an empty bar." },
      { m: "Arching off the pad until it becomes a flat press.", fix: "Keep the back on the pad and the ribs down - the angle is the point." },
      { m: "Elbows flared straight out to the sides.", fix: "Tuck them to about 45 degrees from the ribs so the shoulders stay stacked." },
      { m: "Butt lifting off the seat on heavy reps.", fix: "Keep the hips down and take plates off - a lifted butt flattens the incline." }
    ],
    breathing: "Inhale down to the touch, brief hold, exhale driving to lockout.",
    tempo: "3-0-1-0 - three seconds down, touch, press in one.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the touch point - a failed rep settles there while you slide down the bench and out.",
      "Bail plan: a wrist rotation re-hooks the spring catches at any bar height.",
      "Re-check the touch point with an empty bar after every bench-angle change - the fixed path does not forgive a wrong bench position."
    ],
    swaps: ["bb-incline-press", "cbl-fly-low-high"]
  },
  {
    id: "smith-decline-press",
    name: "Smith Machine Decline Press",
    aka: ["Smith Decline Bench"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Chest"],
    secondary: ["Triceps", "Front Delts"],
    difficulty: "Beginner",
    pattern: "Horizontal Push",
    anim: { template: "benchPress", params: { load: "smith", angle: -15 } },
    setup: [
      "Set the bench to a 10-20 degree decline under the bar and hook the feet under the leg roller if your bench has one.",
      "Slide the bench until the bar line meets your lower chest.",
      "Set the bar on a catch you can reach with a slight elbow bend, and the safety spotter arms one hole below the chest-touch height.",
      "Grip just outside shoulder width, pinch the shoulder blades, and rotate the bar off the hooks."
    ],
    steps: [
      "Unrack and stabilize the bar over the lower chest.",
      "Lower under control until the bar touches the bottom of the pecs.",
      "Keep the forearms vertical and the elbows about 45 degrees from the ribs.",
      "Press straight up to lockout.",
      "Rotate the bar back onto a catch to finish, then sit up slowly."
    ],
    cues: [
      "Touch the lower chest, press straight up.",
      "Blades pinned, ribs proud.",
      "Short range, strict control.",
      "Legs locked under the roller."
    ],
    mistakes: [
      { m: "Unracking before the feet are hooked.", fix: "Lock the legs in first - on a decline the legs are the anchor that keeps you on the bench." },
      { m: "Bar drifting to the belly.", fix: "Slide the bench until the bar meets the bottom of the pecs - check it with an empty bar." },
      { m: "Bouncing out of the touch to move big weight.", fix: "The decline shortens the stroke - control the touch and press without bounce." },
      { m: "Sitting up fast right after re-racking.", fix: "Take a breath, then rise slowly - the head-down set can leave you lightheaded." }
    ],
    breathing: "Inhale down, exhale pressing to lockout, never hold the breath long while head-down.",
    tempo: "2-0-1-0 - two seconds down, no bounce, press away.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the touch point - head-down escapes are slow, so the arms are non-negotiable here.",
      "Bail plan: rotate the wrists to re-hook the spring catches - practice it before the first working set.",
      "Keep the feet hooked under the roller for the whole set."
    ],
    swaps: ["smith-bench-press", "dip"]
  },
  {
    id: "smith-close-grip-bench",
    name: "Smith Machine Close-Grip Bench Press",
    aka: ["Smith Close-Grip Bench"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Triceps", "Chest"],
    secondary: ["Front Delts"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    standards: "closeGripBench",
    smithCaveat: true,
    anim: { template: "benchPress", params: { load: "smith", angle: 0, grip: "close" } },
    setup: [
      "Center the flat bench under the bar so the bar line crosses the lower chest.",
      "Set the bar on a catch you can unrack with a slight elbow bend, and the safety spotter arms one hole below the chest-touch height.",
      "Grip the bar with the hands just inside shoulder width, wrists stacked straight.",
      "Pinch the shoulder blades, plant the feet, and rotate the bar off the hooks."
    ],
    steps: [
      "Unrack and hold the bar over the lower chest.",
      "Lower with the elbows tucked close to the ribs.",
      "Touch the lower chest lightly, forearms vertical.",
      "Press straight up, finishing with a hard triceps lockout.",
      "Rotate the bar back onto a catch to end the set."
    ],
    cues: [
      "Elbows brush the ribs.",
      "Wrists stacked, knuckles to the ceiling.",
      "Touch low, press straight.",
      "Squeeze the lockout every rep."
    ],
    mistakes: [
      { m: "Grip so narrow the wrists buckle inward.", fix: "Hands just inside shoulder width - narrower adds wrist pain, not triceps." },
      { m: "Elbows flaring wide, turning it into a regular bench.", fix: "Drag the elbows along the ribs on the way down." },
      { m: "Touch point drifting up toward mid-chest.", fix: "With tucked elbows the bar must land lower - re-check the bench position with an empty bar." },
      { m: "Cutting the lockout short.", fix: "The top third belongs to the triceps - finish every press completely." }
    ],
    breathing: "Inhale on the descent, exhale hard through the press and lockout.",
    tempo: "3-1-1-0 - three down, pause on the chest, press.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below your chest-touch height - fail, deflate the chest, and slide out.",
      "The spring hooks re-rack anywhere - a wrist rotation is the fastest bail, so rehearse it with an empty bar.",
      "The tucked-elbow line is weaker than your regular bench - load it 10-20 percent lighter."
    ],
    swaps: ["bb-close-grip-bench", "cbl-pushdown-rope"]
  },
  {
    id: "smith-seated-ohp",
    name: "Smith Machine Seated Overhead Press",
    aka: ["Smith Seated Shoulder Press"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Traps"],
    difficulty: "Beginner",
    pattern: "Vertical Push",
    anim: { template: "ohp", params: { load: "smith", seated: true } },
    setup: [
      "Set the bench to its most upright position, 85-90 degrees, and slide it under the bar.",
      "Position the bench so the bar path grazes just in front of your nose and lands at the upper chest.",
      "Set the bar on a catch at seated upper-chest height and the safety spotter arms one hole below it.",
      "Sit tall with the feet planted wide, upper back against the pad, grip just outside the shoulders."
    ],
    steps: [
      "Rotate the bar off the catch and set the forearms vertical under it.",
      "Press straight up the track past the face to full lockout.",
      "Shrug the shoulders slightly up at the top without leaning back.",
      "Lower with control until the bar reaches the collarbones.",
      "Pause a beat, press again, and re-hook on the catch to finish."
    ],
    cues: [
      "Ribs down, back tall on the pad.",
      "Chin back as the bar passes.",
      "Lock out and shrug the top.",
      "Lower to the collarbones, no lower."
    ],
    mistakes: [
      { m: "Bench set too far back, pressing the bar out in front.", fix: "Slide the bench until the bar grazes just ahead of the nose - test the line with an empty bar." },
      { m: "Arching off the pad into an incline press.", fix: "Keep the ribs down and the upper back glued to the pad." },
      { m: "Stopping the lowering at eye level.", fix: "Take every rep to the collarbones - the bottom half builds the shoulders." },
      { m: "Grip so wide the forearms angle in.", fix: "Hands just outside the shoulders so the forearms stay vertical." }
    ],
    breathing: "Inhale as the bar lowers, exhale pressing through the sticking point at eye level.",
    tempo: "2-0-1-0 - two seconds down to the collarbones, press in one.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the upper-chest start catch - a dead rep settles onto them, not onto you.",
      "Bail plan: rotate the wrists at any height and the spring hooks grab one of the 11 catches.",
      "Set the upright bench angle first, then check the bar line with an empty rep before loading plates."
    ],
    swaps: ["smith-standing-ohp", "bb-ohp"]
  },
  {
    id: "smith-standing-ohp",
    name: "Smith Machine Standing Overhead Press",
    aka: ["Smith Military Press"],
    station: "Smith",
    attachments: [],
    primary: ["Front Delts", "Side Delts"],
    secondary: ["Triceps", "Traps", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Push",
    standards: "overheadPress",
    smithCaveat: true,
    anim: { template: "ohp", params: { load: "smith" } },
    setup: [
      "Set the bar on a catch at standing upper-chest height and the safety spotter arms one hole below it.",
      "Stand with feet hip-width and the head slightly behind the bar line so the fixed path clears the face.",
      "Grip just outside the shoulders with the forearms vertical under the bar.",
      "Check that your lockout height clears the pull-up bar overhead before loading plates."
    ],
    steps: [
      "Rotate the bar off the catch and brace the trunk hard.",
      "Press straight up, pulling the chin back as the bar passes the face.",
      "Push the head through once the bar clears the forehead.",
      "Lock out overhead with a slight shrug at the top.",
      "Lower with control to the collarbones and pause a beat.",
      "Re-hook with a wrist rotation when the set ends."
    ],
    cues: [
      "Squeeze the glutes, ribs down.",
      "Chin back, bar up, head through.",
      "Tall body, no lean-back.",
      "Shrug the top of every rep."
    ],
    mistakes: [
      { m: "Leaning back to turn it into an incline press.", fix: "Squeeze the glutes and stack the ribs over the hips - end the set before the lean creeps in." },
      { m: "Standing with the face directly under the bar line.", fix: "Shift the whole body back an inch so the bar brushes past the nose, not into it." },
      { m: "Head staying back at lockout.", fix: "Push the head through at the top so the shoulders finish stacked under the bar." },
      { m: "Pressing with no brace, lower back arching.", fix: "Brace like a standing plank before every rep." }
    ],
    breathing: "Inhale and brace at the chest, exhale as the bar passes the forehead, breathe again at the bottom.",
    tempo: "2-0-1-0 - two seconds down, no leg drive, press in one.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below the upper-chest catch - a failed press lowers onto them without a fight.",
      "Bail plan: rotate the wrists and the spring hooks catch at any of the 11 heights, even mid-press.",
      "Confirm the locked-out bar clears the pull-up bar and any garage ceiling fixtures before the first loaded rep."
    ],
    swaps: ["bb-ohp", "smith-seated-ohp"]
  },
  {
    id: "smith-bent-over-row",
    name: "Smith Machine Bent-Over Row",
    aka: ["Smith Row"],
    station: "Smith",
    attachments: [],
    primary: ["Lats", "Upper Back"],
    secondary: ["Rear Delts", "Biceps", "Forearms", "Lower Back"],
    difficulty: "Intermediate",
    pattern: "Horizontal Pull",
    standards: "barbellRow",
    smithCaveat: true,
    anim: { template: "row", params: { load: "smith", posture: "bentover" } },
    setup: [
      "Set the bar on a low catch around knee height so you can grip it from a hinge.",
      "Stand with feet hip-width, toes just behind the bar line, and hinge to a 30-45 degree torso.",
      "Grip just outside the knees, double overhand, back flat.",
      "Rotate the bar off the catch and let it hang at arm's length below the shoulders."
    ],
    steps: [
      "Set the hinge and brace before the first pull.",
      "Drive the elbows up and back, pulling the bar to the lower ribs.",
      "Squeeze the shoulder blades together for a beat at the top.",
      "Lower under control until the arms are long.",
      "Hold the torso angle constant for the whole set.",
      "Re-hook the bar on the low catch to finish."
    ],
    cues: [
      "Elbows to the back pockets.",
      "Bar to the lower ribs.",
      "Torso frozen, only the arms travel.",
      "Squeeze the blades, then lower slow."
    ],
    mistakes: [
      { m: "Standing up a little more every rep.", fix: "Pick a torso angle that matches the fixed bar path and freeze it - if you must heave, the bar is too heavy." },
      { m: "Yanking with the biceps, elbows flaring wide.", fix: "Lead with the elbows and drag them along the ribs." },
      { m: "Rounding the lower back in the hinge.", fix: "Soften the knees and push the hips back until the back flattens." },
      { m: "Cutting the stretch short at the bottom.", fix: "Let the arms hang fully long between reps without dropping the chest." }
    ],
    breathing: "Exhale as you pull to the ribs, inhale on the controlled lower.",
    tempo: "1-1-2-0 - pull in one, one-beat squeeze, two down.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Start and end the set with the bar hooked on the knee-height catch - never finish a hinge holding a dead bar.",
      "If the lower back complains mid-set, rotate the bar onto the nearest catch and reset the hinge.",
      "The fixed path absorbs body english a free bar would punish - keep the torso angle honest."
    ],
    swaps: ["bb-bent-over-row", "cbl-seated-row"]
  },
  {
    id: "smith-inverted-row",
    name: "Inverted Row (Smith Bar)",
    aka: ["Australian Pull-Up", "Bodyweight Row"],
    station: "Smith",
    attachments: [],
    primary: ["Upper Back", "Lats"],
    secondary: ["Rear Delts", "Biceps", "Core"],
    difficulty: "Beginner",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "smith", posture: "inverted" } },
    setup: [
      "Lock the bar on a catch between hip and waist height - lower is harder, higher is easier.",
      "Tug the bar hard to confirm both spring hooks are fully seated before getting under it.",
      "Lie under the bar with the mid-chest below it, heels on the floor, legs straight.",
      "Grip just outside shoulder width, overhand, body in one straight line."
    ],
    steps: [
      "Hang at arm's length with the hips locked level.",
      "Pull the chest to the bar, elbows about 45 degrees from the ribs.",
      "Touch the bar at the mid-chest and squeeze the blades.",
      "Lower under control to a full hang.",
      "Keep the body plank-straight from heels to head every rep."
    ],
    cues: [
      "Plank first, pull second.",
      "Chest to the bar, not chin.",
      "Hips up, glutes tight.",
      "Full hang at the bottom."
    ],
    mistakes: [
      { m: "Hips sagging into a banana shape.", fix: "Squeeze the glutes and brace the core - if the plank fails before the back, raise the bar a catch." },
      { m: "Chin poking forward to fake the touch.", fix: "Lead with the chest and keep the head neutral." },
      { m: "Half-range reps with bent elbows at the bottom.", fix: "Straighten the arms fully each rep - the stretch is half the exercise." },
      { m: "Bar set so low the first rep stalls.", fix: "Raise the bar one or two catches - a higher body angle scales the load down." }
    ],
    breathing: "Exhale as you pull to the bar, inhale lowering to the hang.",
    tempo: "1-1-2-0 - pull in one, hold one, two down.",
    reps: { strength: "5-8 (pause at the bar)", hypertrophy: "8-15" },
    safety: [
      "Before hanging your bodyweight, rotate the hooks fully onto the catch and give the bar a hard test tug.",
      "Keep the floor beneath you clear of plates - a slipped grip means sitting down fast.",
      "Progress one catch lower at a time - each catch adds load without any plates."
    ],
    swaps: ["smith-inverted-row-elevated", "cbl-seated-row"]
  },
  {
    id: "smith-inverted-row-elevated",
    name: "Feet-Elevated Inverted Row (Smith Bar)",
    aka: ["Feet-Up Inverted Row"],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Upper Back", "Lats"],
    secondary: ["Rear Delts", "Biceps", "Core", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Horizontal Pull",
    anim: { template: "row", params: { load: "smith", posture: "inverted", feetElevated: true } },
    setup: [
      "Lock the bar on a catch around waist height and test that both spring hooks are fully seated with a hard tug.",
      "Set the flat bench about a leg's length behind the bar line and put both heels on it.",
      "Position the body so the bar sits over the mid-chest and the body hangs horizontal.",
      "Grip just outside shoulder width, overhand."
    ],
    steps: [
      "Set the plank - glutes tight, ribs down, body level from heels to head.",
      "Pull the chest to the bar with the elbows about 45 degrees out.",
      "Pause at the touch and squeeze the shoulder blades.",
      "Lower to a dead hang without the hips dropping.",
      "Reset the plank between reps if it slips."
    ],
    cues: [
      "Body like a board.",
      "Pull the bar to you, chest proud.",
      "Hips never sag.",
      "Slow lower, full hang."
    ],
    mistakes: [
      { m: "Hips piking up to shorten the lever.", fix: "Keep the body in one line - if you cannot, go back to the floor version." },
      { m: "Feet rolling off the bench edge.", fix: "Set the heels square in the middle of the pad and press them down." },
      { m: "Reps collapsing into jerks.", fix: "This is near-horizontal rowing at full bodyweight - slow down and own each inch, or raise the bar a catch." }
    ],
    breathing: "Exhale pulling to the bar, inhale on the slow lower.",
    tempo: "1-1-3-0 - pull in one, hold one, three down.",
    reps: { strength: "4-8 (pause each rep)", hypertrophy: "6-12" },
    safety: [
      "Test the spring hooks on the catch with a hard tug before hanging horizontal under the bar.",
      "Keep the floor under your torso clear - a slipped grip drops you straight down.",
      "Earn this after 12-15 clean floor reps - the horizontal body jumps the load well past the floor version."
    ],
    swaps: ["smith-inverted-row", "bb-bent-over-row"]
  },
  {
    id: "smith-shrug",
    name: "Smith Machine Shrug",
    aka: ["Smith Trap Shrug"],
    station: "Smith",
    attachments: [],
    primary: ["Traps"],
    secondary: ["Forearms"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "shrug", params: { load: "smith" } },
    setup: [
      "Set the bar on a catch at mid-thigh height so you grip it standing - no pull from the floor.",
      "Stand with feet hip-width directly under the bar line, bar brushing the thighs.",
      "Take a double-overhand grip just outside the thighs and rotate the bar off the hooks."
    ],
    steps: [
      "Stand tall with the arms long and the shoulders pulled down.",
      "Shrug the shoulders straight up toward the ears.",
      "Hold the top squeeze for two full seconds.",
      "Lower slowly to a full stretch, arms staying straight.",
      "Re-hook on the mid-thigh catch when grip or form fades."
    ],
    cues: [
      "Straight up, straight down.",
      "No rolling, no elbow bend.",
      "Two-second squeeze at the top.",
      "Long neck, shoulders to ears."
    ],
    mistakes: [
      { m: "Rolling the shoulders in circles.", fix: "The track is vertical and so is the movement - straight up, hold, straight down." },
      { m: "Bending the elbows to hitch the bar higher.", fix: "Arms are cables, not movers - keep them locked long." },
      { m: "Cutting the stretch at the bottom.", fix: "Let the shoulders drop fully between reps for the extra range." },
      { m: "Loading past your grip.", fix: "When the bar peels the fingers open, re-hook and rest - the traps outlast the hands." }
    ],
    breathing: "Exhale as you shrug up, inhale on the slow lower.",
    tempo: "1-2-2-0 - up in one, two-second hold, two down.",
    reps: { strength: "6-10", hypertrophy: "10-20" },
    safety: [
      "If grip fails mid-set, a small wrist rotation drops the spring hooks onto the nearest catch instantly.",
      "Keep the knees soft and the trunk braced - heavy shrugs still load the spine top to bottom."
    ],
    swaps: ["smith-rack-pull", "cbl-upright-row"]
  },
  {
    id: "smith-standing-calf-raise",
    name: "Smith Machine Standing Calf Raise",
    aka: ["Smith Calf Raise"],
    station: "Smith",
    attachments: [],
    primary: ["Calves"],
    secondary: [],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "calfRaise", params: { load: "smith" } },
    setup: [
      "Set the bar on a catch at armpit height as for a squat, with a plate or low block on the floor directly under the bar line.",
      "Set the safety spotter arms one hole below the bar height at your deepest heel drop.",
      "Bar across the upper traps, balls of both feet on the plate edge, heels hanging free.",
      "Rotate the bar off the hooks and stand tall."
    ],
    steps: [
      "Lower the heels toward the floor for a full stretch.",
      "Pause in the stretch without relaxing off the calves.",
      "Drive up onto the balls of the feet as high as possible.",
      "Hold the top for two seconds with the ankles steady.",
      "Lower on a slow count and repeat; re-hook to finish."
    ],
    cues: [
      "Big toe carries the push.",
      "Pause the stretch, no bounce.",
      "Tall at the top, two seconds.",
      "Knees straight, ankles quiet."
    ],
    mistakes: [
      { m: "Bouncing out of the stretch.", fix: "Dead-stop the bottom for a full second - the bounce is tendon, not muscle." },
      { m: "Rolling onto the outside of the feet at the top.", fix: "Press through the big-toe side all the way up." },
      { m: "Tiny pulses in the middle of the range.", fix: "Heels below the plate edge to full tiptoe, every single rep." },
      { m: "Knees bending to cheat the load up.", fix: "Keep the knees straight - bent knees hand the work to momentum." }
    ],
    breathing: "Exhale rising to the top, inhale lowering into the stretch.",
    tempo: "1-2-2-1 - up in one, two at the top, two down, pause the stretch.",
    reps: { strength: "8-10 (heavy, full range)", hypertrophy: "12-20" },
    safety: [
      "Spotter arms one hole below your deepest-stretch bar height - if a foot slips off the plate, the bar stops on steel.",
      "The wrist-rotation bail works here too - re-hook on the nearest catch any time balance goes.",
      "Center the plate under the bar line before loading so the balls of both feet share it evenly."
    ],
    swaps: ["cbl-calf-raise", "smith-seated-calf-raise"]
  },
  {
    id: "smith-seated-calf-raise",
    name: "Smith Machine Seated Calf Raise",
    aka: [],
    station: "Smith",
    attachments: ["Bench"],
    primary: ["Calves"],
    secondary: [],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "calfRaise", params: { load: "smith", seated: true } },
    setup: [
      "Set the flat bench under the bar so the bar line crosses your lower thighs a hand-width behind the kneecaps when seated.",
      "Wrap a thick pad around the bar and set it on the catch just above your seated thigh height.",
      "Sit with the balls of both feet on a plate or low block, knees bent 90 degrees.",
      "Pull the padded bar down onto the lower thighs and rotate it off the catch."
    ],
    steps: [
      "Sit tall with the bar padded across the lower thighs.",
      "Lower the heels toward the floor for a deep stretch.",
      "Pause the stretch for a full beat.",
      "Press the balls of the feet down to lift the bar as high as the ankles allow.",
      "Hold the top squeeze, lower slow, and rotate the bar back onto the catch to finish."
    ],
    cues: [
      "Heels down slow, way down.",
      "Squeeze the top like a tiptoe hold.",
      "The knee angle never changes.",
      "Pad tight, hands steady on the bar."
    ],
    mistakes: [
      { m: "Bar resting on the kneecaps.", fix: "Slide it back onto the meat of the lower thigh and re-check the pad." },
      { m: "Bouncing rhythm reps.", fix: "Pause a full second in the stretch - bent-knee calf work rewards slow reps." },
      { m: "Lifting the heels only an inch.", fix: "Push to the highest tiptoe you can - the range is short already, so use all of it." },
      { m: "Hips lifting off the bench to help.", fix: "Sit heavy and let the calves alone move the bar." }
    ],
    breathing: "Exhale pressing up onto the toes, inhale lowering into the stretch.",
    tempo: "1-2-3-1 - up in one, two-second squeeze, three down, pause the stretch.",
    reps: { strength: "8-10 (slow and paused)", hypertrophy: "15-20" },
    safety: [
      "The catch just above thigh height is your rack - a small wrist rotation parks the bar at any point.",
      "Keep both hands on the bar for the whole set so it cannot slide down the thighs.",
      "Use the pad every time - an unpadded bar digs into the thighs under the fixed downward track."
    ],
    swaps: ["smith-standing-calf-raise", "cbl-calf-raise"]
  }
];
