// M1 Pro Form Guide - exercise data (part 2: free barbell in the cage + bench/accessory)
const EX_PART_2 = [
  {
    id: "bb-back-squat",
    name: "Barbell Back Squat",
    aka: ["Back Squat", "High-Bar Squat"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Adductors", "Core", "Lower Back"],
    difficulty: "Intermediate",
    pattern: "Squat",
    standards: "backSquat",
    anim: { template: "squat", params: { load: "bar" } },
    setup: [
      "Set the J-hooks at armpit height so a slight dip puts the bar on your traps and one leg drive clears the hooks.",
      "Set the safety spotter arms one hole below where the bar sits at the very bottom of your squat - check with the empty bar first.",
      "Grip just outside shoulder width, duck under, and pin the bar across your upper traps with a big chest.",
      "Stand the bar up, take two short steps back, and set feet shoulder width, toes out 10-20 degrees, still centered over the safety arms."
    ],
    steps: [
      "Big breath into the belt line and brace hard.",
      "Bend hips and knees together and sit down between your heels.",
      "Keep the bar over midfoot - chest tall, elbows pulled down.",
      "Reach parallel or your best pain-free depth without losing the brace.",
      "Drive the whole foot into the floor and stand up.",
      "Re-brace at the top of every rep; walk forward and set the bar back on the J-hooks to finish."
    ],
    cues: [
      "Brace before you step back.",
      "Bar over midfoot the whole rep.",
      "Knees out over the toes.",
      "Spread the floor, stand up hard.",
      "Squeeze the bar, keep the back tight."
    ],
    mistakes: [
      { m: "Long, wandering walkout that drifts off the safety arms.", fix: "Two short steps back, feet set, done - stay centered in the cage." },
      { m: "Knees caving in as you drive up.", fix: "Push the knees out over the little toes; drop load until they hold on every rep." },
      { m: "Hips shoot up first and the bar tips you forward.", fix: "Lead with the chest out of the hole - hips and shoulders rise at the same rate." },
      { m: "Depth shrinks as the plates go on.", fix: "Film a side angle or use the safety arms as a depth gauge; count only honest reps." }
    ],
    breathing: "Inhale and brace at the top, hold through the descent and the turn, exhale hard past the sticking point.",
    tempo: "3-0-1-0 - three seconds down, no pause, drive up.",
    reps: { strength: "3-6", hypertrophy: "6-12" },
    safety: [
      "Safety spotter arms one hole below your bottom-position bar height, so full-depth reps never touch but a failed rep lands on steel.",
      "Bail plan: sink down, lower the bar onto the arms, and slide out from under it - never dump a bar backward in a garage.",
      "If you have to heave or tiptoe at the unrack, move the J-hooks one hole - the unrack should cost nothing."
    ],
    swaps: ["smith-back-squat", "bb-front-squat"]
  },
  {
    id: "bb-front-squat",
    name: "Barbell Front Squat",
    aka: ["Front Squat", "Clean-Grip Front Squat"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Quads"],
    secondary: ["Glutes", "Core", "Upper Back"],
    difficulty: "Advanced",
    pattern: "Squat",
    standards: "frontSquat",
    anim: { template: "squat", params: { load: "bar", style: "front" } },
    setup: [
      "Set the J-hooks at collarbone height so a slight dip seats the bar in the front-delt shelf and standing clears the hooks.",
      "Set the safety spotter arms one hole below the bar height at the bottom of your front squat - verify with the empty bar.",
      "Clean grip: fingertips under the bar just outside the shoulders, elbows driven high; use a cross-arm rack if the wrists complain.",
      "Stand tall, take two short steps back, feet shoulder width with toes out slightly."
    ],
    steps: [
      "Brace with the elbows high and unrack with a slight dip.",
      "Step back, set the stance, and re-lift the elbows.",
      "Sit straight down between the heels with the torso tall.",
      "Reach full depth - the upright torso rewards going below parallel.",
      "Drive up through the whole foot, leading with the elbows.",
      "Walk in and settle the bar back onto the J-hooks."
    ],
    cues: [
      "Elbows high, up and over.",
      "The shoulders carry, the hands just steer.",
      "Grow tall as you sit down.",
      "Lead out of the hole with the elbows."
    ],
    mistakes: [
      { m: "Elbows drop and the bar rolls onto the wrists.", fix: "Re-drive the elbows up between reps; mobilize lats and triceps if you cannot hold the shelf." },
      { m: "Gripping the bar deep in the palms and squeezing.", fix: "Open to a fingertip rack - the shoulders carry the bar, not the wrists." },
      { m: "Hips shoot back like a back squat and the bar drifts forward.", fix: "Sit straight down between the heels and keep the torso near vertical." },
      { m: "Upper back rounds at depth.", fix: "Lighter bar, pause in the bottom, and fight for a proud chest the whole rep." }
    ],
    breathing: "Inhale and brace standing tall, hold down and through the turn, exhale past the sticking point - top up air only at the top.",
    tempo: "3-0-1-0 - three seconds down, no bounce, drive up.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "Safety arms one hole below your bottom-position bar height - a lost bar gets set down on them, never chased.",
      "Bail plan: sink until the bar settles on the arms, drop the elbows, and back out from under it - do not dump it forward onto open floor.",
      "When the elbows sag and the bar starts rolling, the set is over - rack it before the wrists pay."
    ],
    swaps: ["smith-front-squat", "bb-back-squat"]
  },
  {
    id: "bb-conventional-deadlift",
    name: "Conventional Deadlift",
    aka: ["Deadlift", "Conventional Pull"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Glutes", "Hamstrings", "Lower Back"],
    secondary: ["Quads", "Traps", "Forearms", "Core"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    standards: "deadlift",
    anim: { template: "hinge", params: { load: "bar", kneeBend: "bent", rom: "floor" } },
    setup: [
      "Pull on flat floor in front of the cage with the safety spotter arms swung clear so a rep can never clip them.",
      "Bar over midfoot, about an inch off the shins, hip-width stance, toes near straight ahead.",
      "Hands just outside the knees, double overhand until grip fails, then mixed grip or straps.",
      "Push the hips back and hinge down to the bar; shins come forward to touch it as you set."
    ],
    steps: [
      "Wedge the hips down and pull the slack out until the bar clicks against the plates.",
      "Big breath, brace, chest proud, lats pinning the bar close.",
      "Push the floor away - the bar travels straight up the shins.",
      "Stand tall at lockout: hips through, shoulders back, no lean-back.",
      "Push the hips back and lower the bar down the thighs.",
      "Reset the wedge and the brace on the floor before every rep."
    ],
    cues: [
      "Slack out of the bar first.",
      "Push the floor, do not jerk the bar.",
      "Bar drags up the legs.",
      "Hips through at the top.",
      "Long arms - they are just hooks."
    ],
    mistakes: [
      { m: "Hips start too low, turning the pull into a bad squat.", fix: "Set the hips where the shins touch the bar and the shoulder blades sit over it." },
      { m: "Bar drifts away from the shins off the floor.", fix: "Squeeze the lats - think about protecting your armpits - and drag the bar up the legs." },
      { m: "Back rounds as the plates get heavy.", fix: "Re-brace from a dead stop every rep and end the set when the chest cannot stay proud." },
      { m: "Hyperextending and leaning back at lockout.", fix: "Finish with squeezed glutes and stacked ribs - standing tall is the whole job." }
    ],
    breathing: "Inhale and brace hard before the bar leaves the floor, hold through lockout, exhale and re-breathe on the floor each rep.",
    tempo: "1-0-2-1 - crisp pull, two seconds down, dead-stop reset.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "Swing the safety arms clear and pull in front of the cage - plates catching steel mid-rep is how bars get dropped.",
      "Bail plan is built in: keep the bar close and set it down - never drop from lockout onto a garage slab.",
      "This lift punishes ego fastest - when you cannot brace without the back rounding, the bar is too heavy."
    ],
    swaps: ["bb-sumo-deadlift", "smith-deadlift"]
  },
  {
    id: "bb-sumo-deadlift",
    name: "Sumo Deadlift",
    aka: ["Sumo Pull"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Glutes", "Adductors"],
    secondary: ["Quads", "Hamstrings", "Traps", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    standards: "sumoDeadlift",
    anim: { template: "hinge", params: { load: "bar", kneeBend: "bent", rom: "floor", style: "sumo" } },
    setup: [
      "Set up on the floor in front of the cage with the safety spotter arms swung clear and room for the wide stance.",
      "Feet well outside shoulder width, toes out 30-45 degrees, shins vertical when you reach the bar.",
      "Hands inside the knees at about shoulder width, bar over midfoot and brushing the shins.",
      "Drop the hips and lift the chest so the torso sits noticeably more upright than a conventional pull."
    ],
    steps: [
      "Wedge in: knees tracking over the toes, chest proud, slack pulled out of the bar.",
      "Brace and drive the feet out and down like spreading the floor apart.",
      "Stand up, keeping the bar dragging lightly up the legs.",
      "Lock out with the glutes squeezed and the knees straight.",
      "Lower by pushing the hips back, then bending the knees; reset dead on the floor each rep."
    ],
    cues: [
      "Spread the floor apart.",
      "Knees out over the toes.",
      "Chest up, hips wedge down.",
      "Patient off the floor, fast at the top."
    ],
    mistakes: [
      { m: "Knees cave inward as the bar breaks the floor.", fix: "Drive the knees out over the toes and open the hips; lighten the bar until they hold." },
      { m: "Hips rise first and it becomes a stiff-leg pull.", fix: "Wedge the hips down, pull the slack out, and let chest and hips rise together." },
      { m: "Setting up with the bar off the shins.", fix: "Start with the bar over midfoot brushing the legs - sumo has zero room for drift." }
    ],
    breathing: "Big inhale and brace in the wedge, hold to lockout, exhale and take a fresh breath on the floor every rep.",
    tempo: "1-0-2-1 - smooth off the floor, two down, dead-stop reset.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "Swing the safety arms clear and check your wide stance clears the cage uprights before the first pull.",
      "Set the bar down under control on a miss - never fight a grinder with a rounding back or drop from lockout on concrete.",
      "The wide-stance groin work is unforgiving cold - warm up the adductors before the heavy singles."
    ],
    swaps: ["bb-conventional-deadlift", "cbl-pull-through"]
  },
  {
    id: "bb-rdl",
    name: "Barbell Romanian Deadlift",
    aka: ["RDL", "Romanian Deadlift"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Hamstrings", "Glutes"],
    secondary: ["Lower Back", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    standards: "rdl",
    anim: { template: "hinge", params: { load: "bar", kneeBend: "soft", rom: "mid-shin" } },
    setup: [
      "Set the J-hooks at mid-thigh height so you take the bar standing instead of deadlifting every set off the floor.",
      "Set the safety spotter arms just below your mid-shin turnaround so a lost bar has somewhere to land.",
      "Grip shoulder width, double overhand; add straps when grip gives out before the hamstrings.",
      "Unrack with a slight dip, step back once, feet hip width, knees soft."
    ],
    steps: [
      "Push the hips straight back and let the torso tip forward.",
      "Slide the bar down the thighs with the lats holding it close.",
      "Keep the soft knee angle fixed - the hips do all the traveling.",
      "Stop at mid-shin or wherever the hamstrings hit their limit with a flat back.",
      "Drive the hips forward and stand tall; squeeze the glutes, no lean-back."
    ],
    cues: [
      "Hips back, not down.",
      "Bar shaves the thighs.",
      "Soft knees, set once, keep them.",
      "Hamstrings load like springs.",
      "Stand up with the hips, not the back."
    ],
    mistakes: [
      { m: "Bar swings forward away from the legs.", fix: "Pull the bar into the thighs with the lats for the entire descent." },
      { m: "Knees keep bending on the way down, turning it into a squat.", fix: "Pick a soft knee angle at the top and freeze it for the whole rep." },
      { m: "Chasing depth by rounding the lower back.", fix: "End the descent where the hamstrings stop you - for most lifters that is near mid-shin." },
      { m: "Rushing the lowering phase.", fix: "Three seconds down; the eccentric is the exercise." }
    ],
    breathing: "Inhale at the top, hold and brace through the hinge down and up, exhale as you stand tall.",
    tempo: "3-1-1-0 - three down, one-second stretch, stand smooth.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Take the bar from J-hooks at mid-thigh and return it there - do not burn the set wrestling it off the floor.",
      "Safety arms just below the turnaround: if grip or back position fails, lower the bar onto them and let go.",
      "Straps beat a mixed grip here - this is a hamstring lift, not a grip test."
    ],
    swaps: ["smith-rdl", "lm-rdl"]
  },
  {
    id: "bb-rack-pull",
    name: "Barbell Rack Pull (From Safeties)",
    aka: ["Rack Pull", "Partial Deadlift"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Glutes", "Lower Back"],
    secondary: ["Traps", "Hamstrings", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    anim: { template: "hinge", params: { load: "bar", kneeBend: "bent", rom: "knee", fromPins: true } },
    setup: [
      "Set both safety spotter arms level, just below kneecap height, and rest the bar on them inside the cage.",
      "Stance and grip match your conventional deadlift: hip width, hands just outside the knees.",
      "Wedge in with the bar touching the legs and the shoulder blades stacked over it.",
      "Plate size does not matter here - the arms set the height, so load whatever adds up."
    ],
    steps: [
      "Brace and pull the slack out until the bar is tight against the arms.",
      "Push the floor away and drag the bar up the thighs.",
      "Lock out hard: hips through, glutes squeezed, shoulders back.",
      "Lower under control and set the bar dead on the arms.",
      "Re-wedge and re-brace before every pull - no touch-and-go off the steel."
    ],
    cues: [
      "Crush the slack before you pull.",
      "Bar glued to the legs.",
      "Finish with the glutes, not the spine.",
      "Dead stop, full reset, every rep."
    ],
    mistakes: [
      { m: "Bouncing the bar off the safety arms for rhythm reps.", fix: "Let the bar settle completely, re-brace, then pull - the dead stop is the point." },
      { m: "Leaning back hard at lockout.", fix: "Stand tall with squeezed glutes; ribs stay stacked over the hips." },
      { m: "Yanking with a loose back because the load is big.", fix: "Same discipline as a floor pull - wedge, slack out, then drive." },
      { m: "Arms set at mid-thigh so every rep is a shrug with legs.", fix: "Keep the start just below the knee so real hinge work stays in the lift." }
    ],
    breathing: "Full breath and brace before each pull, hold to lockout, exhale as the bar settles back on the arms.",
    tempo: "1-0-2-1 - crisp pull, two down, settle dead on the arms.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "The safety arms are both the start and the catch - set them level just below the kneecaps and confirm both sides sit in matching holes.",
      "Bail plan is the lift itself: set the bar down on the arms at any point and step away.",
      "Rack pulls invite huge loads - add small jumps and stop the day lockout needs a lean-back."
    ],
    swaps: ["bb-conventional-deadlift", "smith-rack-pull"]
  },
  {
    id: "bb-hip-thrust",
    name: "Barbell Hip Thrust",
    aka: ["Hip Thrust"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Glutes"],
    secondary: ["Hamstrings", "Quads", "Core"],
    difficulty: "Intermediate",
    pattern: "Hinge",
    standards: "hipThrust",
    anim: { template: "hipThrust", params: { load: "bar", back: "bench" } },
    setup: [
      "Set the bench flat and brace its far side against a cage upright so it cannot slide during the set.",
      "Sit on the floor with your mid-back against the pad and roll the loaded bar over your legs into the hip crease - full-size plates give the clearance.",
      "Center a thick pad on the bar across the hip bones.",
      "Plant the feet hip width, heels close enough that the shins finish vertical at the top, shoulder blades hooked on the pad edge."
    ],
    steps: [
      "Brace, tuck the chin, and drive hard through the heels.",
      "Lift the hips until thighs and torso make one level line, shins vertical.",
      "Squeeze the glutes for a full second at the top with the ribs down.",
      "Lower under control until the plates kiss the floor without losing tension.",
      "Repeat without rocking the bench or bouncing the plates off the slab."
    ],
    cues: [
      "Drive the heels through the floor.",
      "Chin tucked, ribs down.",
      "Full glute squeeze at the top.",
      "Finish flat like a tabletop."
    ],
    mistakes: [
      { m: "Arching the lower back to buy extra height.", fix: "Tuck the pelvis and stop when thighs and torso are level - height past that is spine, not glutes." },
      { m: "Pushing through the toes with the feet tucked too close.", fix: "Walk the heels out until the shins are vertical at lockout." },
      { m: "Neck cranked back with eyes on the ceiling.", fix: "Keep the chin tucked and eyes on your knees for the whole set." },
      { m: "Bench skates or tips mid-set.", fix: "Re-brace the bench squarely against the cage upright before every set." }
    ],
    breathing: "Exhale as you drive the hips up, hold and squeeze at the top, inhale on the way down.",
    tempo: "1-2-2-0 - up in one, two-second squeeze, two down.",
    reps: { strength: "5-8", hypertrophy: "8-15" },
    safety: [
      "Swing the safety arms clear of the bar path before you set up so the plates never catch them at the bottom.",
      "Bail plan: lower the hips to the floor and roll the bar forward off the lap - never try to sit up under load.",
      "Always pad the bar - bare knurling on the hip crease ends sets early.",
      "Brace the bench against a cage upright, not against clutter that can shift."
    ],
    swaps: ["smith-hip-thrust", "cbl-pull-through"]
  },
  {
    id: "bb-ohp",
    name: "Barbell Overhead Press",
    aka: ["OHP", "Military Press", "Standing Press"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Front Delts", "Triceps"],
    secondary: ["Side Delts", "Upper Chest", "Core", "Serratus"],
    difficulty: "Intermediate",
    pattern: "Vertical Push",
    standards: "overheadPress",
    anim: { template: "ohp", params: { load: "bar" } },
    setup: [
      "Set the J-hooks at upper-chest height so a slight dip tucks you under the bar and standing up clears the hooks.",
      "Before loading, press the empty bar overhead where you plan to stand - lockout must clear both the pull-up bar on the cage and the garage ceiling.",
      "Grip just outside shoulder width, bar on the front delts, elbows slightly ahead of the bar, wrists stacked.",
      "Unrack, step back until the lockout path is clear of the cage top, feet hip width, glutes squeezed."
    ],
    steps: [
      "Brace the glutes and trunk hard - the body is the bench.",
      "Tuck the chin and press the bar straight up past the face.",
      "Push the head through once the bar clears the forehead.",
      "Lock out with the biceps by the ears, bar stacked over shoulders and hips.",
      "Lower under control back to the front delts and re-brace.",
      "Finish the set by walking the bar back into the J-hooks."
    ],
    cues: [
      "Squeeze the glutes like a plank.",
      "Chin back, bar goes straight up.",
      "Head through the window at the top.",
      "Ribs down - do not lean back."
    ],
    mistakes: [
      { m: "Leaning back and turning it into an incline press.", fix: "Squeeze the glutes and tuck the ribs; if the lean keeps returning, the bar is too heavy." },
      { m: "Pressing forward around the face in an arc.", fix: "Pull the chin back and press straight up - the shortest path is a vertical line." },
      { m: "Soft lockout with the bar hanging out front.", fix: "Push the head through so the bar finishes stacked over shoulders and hips." },
      { m: "Elbows flared straight out to the sides.", fix: "Keep the forearms vertical with the elbows slightly ahead of the bar at the start." }
    ],
    breathing: "Big breath and brace before each press, hold while the bar travels, exhale at lockout or on the way down.",
    tempo: "1-0-2-0 - drive up in one, two seconds down, no bounce.",
    reps: { strength: "3-6", hypertrophy: "6-10" },
    safety: [
      "J-hooks at upper-chest height are home base - return a grinding rep to the shoulders and walk it in; never chase a failing bar overhead.",
      "Bail plan: lower to the front rack under control, then into the hooks - a barbell never gets dumped in a garage.",
      "Confirm lockout clears the pull-up bar and ceiling with an empty bar before plates go on."
    ],
    swaps: ["smith-standing-ohp", "lm-press"]
  },
  {
    id: "bb-push-press",
    name: "Barbell Push Press",
    aka: ["Push Press"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Front Delts", "Triceps"],
    secondary: ["Quads", "Glutes", "Core", "Side Delts"],
    difficulty: "Advanced",
    pattern: "Vertical Push",
    anim: { template: "ohp", params: { load: "bar", legDrive: true } },
    setup: [
      "Set the J-hooks at upper-chest height and unrack into a solid front rack with a slight dip, then step back.",
      "Check clearance with the empty bar first - an explosive lockout rises fast and must clear the pull-up bar and the garage ceiling with room to spare.",
      "Feet between hip and shoulder width, whole foot planted, elbows slightly ahead of the bar."
    ],
    steps: [
      "Brace hard and stand tall.",
      "Dip: bend the knees a few inches with the torso dead vertical, heels down.",
      "Drive: snap the hips and knees straight to launch the bar off the shoulders.",
      "Punch: press to lockout as the bar leaves the shoulders and push the head through.",
      "Absorb the bar back onto the shoulders with a small knee bend, reset, repeat."
    ],
    cues: [
      "Dip shallow, torso vertical.",
      "Legs throw it, arms finish it.",
      "Punch to lockout, biceps by the ears.",
      "Catch soft, reset, go again."
    ],
    mistakes: [
      { m: "Dipping forward onto the toes so the bar loops out front.", fix: "Sit the dip straight down with the heels planted - the bar must travel vertically." },
      { m: "Slow, deep dip that kills the bounce.", fix: "Quick and shallow - a few inches down, immediately back up." },
      { m: "Legs finish but the arms never lock out.", fix: "Own the finish: aggressive press-out to locked elbows or the rep does not count." },
      { m: "Catching the returning bar with straight knees.", fix: "Re-bend the knees as the bar lands on the shoulders every rep." }
    ],
    breathing: "Breathe and brace before the dip, hold through drive and lockout, exhale as the bar settles back on the shoulders.",
    tempo: "X-0-2-0 - explosive drive up, two seconds back to the shoulders.",
    reps: { strength: "3-5", hypertrophy: "6-8 (power fades past 8)" },
    safety: [
      "J-hooks at upper-chest height for the unrack and the return; step back far enough that lockout clears the pull-up bar.",
      "Verify ceiling clearance with the empty bar before loading - leg drive sends this higher and faster than a strict press.",
      "Missed-rep plan: catch the bar on the shoulders, ride it down with the knees, walk it into the hooks - never toss a bar away in a garage."
    ],
    swaps: ["bb-ohp", "lm-press"]
  },
  {
    id: "bb-bench-press",
    name: "Barbell Bench Press (In Cage)",
    aka: ["Bench Press", "Flat Bench"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Chest", "Triceps"],
    secondary: ["Front Delts"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    standards: "benchPress",
    anim: { template: "benchPress", params: { load: "bar", angle: 0 } },
    setup: [
      "Slide the adjustable bench flat into the cage and line up so your eyes sit just behind the bar when you lie down.",
      "Set the safety spotter arms one hole below where the bar sits when it touches your chest - lie down with the empty bar and confirm reps clear them.",
      "Set the J-hooks so the unrack is a short press-out with nearly straight arms, not a shoulder shrug off the pad.",
      "Grip so the forearms are vertical at the chest - about 1.5x shoulder width - feet planted, shoulder blades pinched."
    ],
    steps: [
      "Set the arch: blades pinched and driven into the pad, feet rooted.",
      "Unrack and bring the bar out over the shoulders.",
      "Lower to the mid-chest with the elbows about 45 degrees from the ribs.",
      "Touch light - no bounce.",
      "Press up and slightly back to lockout over the shoulders.",
      "To finish, guide the bar back until it taps the uprights, then down into the J-hooks."
    ],
    cues: [
      "Pinch the blades, bend the bar.",
      "Elbows about 45, wrists stacked.",
      "Meet the bar with a big chest.",
      "Press up and back over the shoulders.",
      "Feet quiet, glutes on the bench."
    ],
    mistakes: [
      { m: "Elbows flared to 90 degrees off the ribs.", fix: "Tuck to about 45 degrees so the shoulders stay packed and happy." },
      { m: "Bouncing the bar off the chest.", fix: "Control the last inch into a light touch - the rebound robs the chest and rattles the ribs." },
      { m: "Butt lifting off the bench on heavy reps.", fix: "Set the feet wider and keep the glutes down - a bridged rep is a missed rep." },
      { m: "Unracking with bent arms from hooks set too low.", fix: "Raise the J-hooks until the unrack is a short press-out over the eyes." }
    ],
    breathing: "Inhale at the top, hold through the descent and the touch, exhale hard through the press.",
    tempo: "2-1-1-0 - two down, one-second pause on the chest, drive up.",
    reps: { strength: "3-6", hypertrophy: "6-12" },
    safety: [
      "Safety arms one hole below your chest-touch bar height - fail a rep, flatten the arch, and the bar settles on steel above your ribs.",
      "Bail plan: lower to the chest, deflate, let the arms take the bar, then slide down the bench out from under it.",
      "Never bench in the cage without the arms set - training alone, they are the spotter.",
      "Collars on both sleeves; tilting plates off a stuck bar does not work inside a cage."
    ],
    swaps: ["smith-bench-press", "cbl-chest-press"]
  },
  {
    id: "bb-incline-press",
    name: "Barbell Incline Press (In Cage)",
    aka: ["Incline Bench Press"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Upper Chest", "Front Delts"],
    secondary: ["Triceps"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    standards: "inclinePress",
    anim: { template: "benchPress", params: { load: "bar", angle: 30 } },
    setup: [
      "Set the adjustable bench to 30-45 degrees of incline and center it in the cage so the bar unracks over your eyes.",
      "Set the safety spotter arms one hole below the bar's bottom position - lie back with the empty bar to find it, since the incline raises the touch point.",
      "Set the J-hooks so the unrack is a short press-out that does not unseat your shoulder blades.",
      "Hips wedged into the seat, blades pinched, feet planted wide."
    ],
    steps: [
      "Unrack and stack the bar over the shoulder joint.",
      "Lower to just below the collarbones, elbows about 45-60 degrees from the ribs.",
      "Touch light - no bounce off the upper chest.",
      "Press up and slightly back to lockout over the shoulders.",
      "Keep the ribs down; do not arch it into a flat bench.",
      "Rack by finding the uprights first, then settling into the J-hooks."
    ],
    cues: [
      "Touch just below the collarbones.",
      "Wrists stacked over the elbows.",
      "Blades pinned to the pad.",
      "Press up and slightly back."
    ],
    mistakes: [
      { m: "Bar touching too low on the chest.", fix: "Touch just under the collarbones - low touches on an incline dump strain into the shoulders." },
      { m: "Over-arching until it becomes a flat press.", fix: "Ribs stay down against the pad; let the bench angle do its job." },
      { m: "Hips sliding down the pad mid-set.", fix: "Wedge the hips into the seat and re-set them before every unrack." },
      { m: "Elbows flared to 90 degrees.", fix: "Tuck slightly so the forearms stay vertical at the touch." }
    ],
    breathing: "Inhale at lockout, hold down to the touch, exhale driving up.",
    tempo: "2-1-1-0 - two down, brief pause at the collarbones, press.",
    reps: { strength: "4-6", hypertrophy: "6-12" },
    safety: [
      "Safety arms one hole below the bottom bar path, verified lying back with an empty bar before loading.",
      "Bail plan: bar to the upper chest, flatten out, let it settle on the arms, slide down the bench and out.",
      "Keep the J-hooks close enough to re-rack blind - a long reach-back from an incline unseats the shoulders."
    ],
    swaps: ["smith-incline-press", "incline-cable-fly"]
  },
  {
    id: "bb-close-grip-bench",
    name: "Barbell Close-Grip Bench Press",
    aka: ["Close-Grip Bench", "CGBP"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Triceps", "Chest"],
    secondary: ["Front Delts"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    standards: "closeGripBench",
    anim: { template: "benchPress", params: { load: "bar", angle: 0, grip: "close" } },
    setup: [
      "Flat bench in the cage, set up exactly like your regular bench: eyes just behind the bar, blades pinched, feet planted.",
      "Safety spotter arms one hole below your chest-touch bar height, checked with the empty bar lying down.",
      "J-hooks reachable with a short, nearly straight-arm press-out.",
      "Hands just inside shoulder width - not touching - wrists stacked over the forearms."
    ],
    steps: [
      "Unrack and bring the bar over the shoulders.",
      "Lower to the lower chest with the elbows tucked close to the ribs.",
      "Keep the wrists dead straight - the narrow grip magnifies any bend.",
      "Touch without bouncing, then press to lockout.",
      "Finish every rep with full elbow extension - the top third is the triceps' payoff."
    ],
    cues: [
      "Elbows brush the ribs.",
      "Wrists stacked, knuckles to the ceiling.",
      "Touch low, press back.",
      "Finish every lockout hard."
    ],
    mistakes: [
      { m: "Grip so narrow the wrists buckle inward.", fix: "Hands just inside shoulder width - close grip means a few inches in, not thumbs touching." },
      { m: "Elbows flare halfway up the press.", fix: "Lighten the bar and keep the elbows brushing the ribs all the way to lockout." },
      { m: "Cutting the lockout short.", fix: "Fully straighten the elbows every rep - that last third is why you picked this variation." },
      { m: "Bar drifting toward the face at the top.", fix: "Press up and slightly back so the bar finishes stacked over the shoulder joint." }
    ],
    breathing: "Inhale at the top, hold to the touch, exhale through the press-out.",
    tempo: "2-0-1-0 - two seconds down, smooth touch, press.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Same cage setup as flat bench: safety arms one hole below chest-touch height, J-hooks a short press-out away.",
      "Bail plan: bar to the chest, flatten the arch, settle it on the arms, slide out down the bench.",
      "Fatigued triceps fail suddenly at lockout - keep a rep in the tank when training alone."
    ],
    swaps: ["smith-close-grip-bench", "dip"]
  },
  {
    id: "bb-pin-press",
    name: "Barbell Pin Press (From Safeties)",
    aka: ["Pin Press", "Dead Bench"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Chest", "Triceps"],
    secondary: ["Front Delts"],
    difficulty: "Intermediate",
    pattern: "Horizontal Push",
    anim: { template: "benchPress", params: { load: "bar", angle: 0, fromPins: true } },
    setup: [
      "Flat bench in the cage; set the safety spotter arms so the bar rests 1-3 inches above your chest at your normal touch point.",
      "Lie back and check with the empty bar: it should sit dead on the arms, lined up over the lower chest.",
      "Load the bar where it rests on the arms - no unrack, no walkout, no J-hooks needed.",
      "Take your regular bench grip and pinch the shoulder blades even though the bar starts on steel."
    ],
    steps: [
      "Wedge under the bar: blades pinched, feet rooted, slight arch held.",
      "Brace, then press from the dead stop - no dip, no rebound.",
      "Drive to full lockout over the shoulders.",
      "Lower under control and let the bar settle completely on the arms.",
      "Let the bar go quiet - a full beat - before the next press."
    ],
    cues: [
      "Get tight before you press, not after.",
      "Squeeze the bar off the arms.",
      "No bounce - let the bar die.",
      "Push yourself into the bench."
    ],
    mistakes: [
      { m: "Sinking the chest to meet the bar and bouncing out of the bottom.", fix: "Hold the arch fixed and press from a true dead stop - the silence between reps is the exercise." },
      { m: "Losing upper-back tightness while the bar rests.", fix: "Stay wedged with the blades pinched for the whole set, even between reps." },
      { m: "Arms set so high it is only a lockout stub.", fix: "Start 1-3 inches off the chest, or deliberately match the height to your sticking point." }
    ],
    breathing: "Inhale and brace while the bar rests on the arms, press and exhale through lockout - fresh breath every rep.",
    tempo: "2-2-1-0 - two down, two-second dead stop on the arms, press.",
    reps: { strength: "3-5", hypertrophy: "6-10" },
    safety: [
      "The bar lives on the safety arms - confirm both arms sit level in matching holes before a single plate goes on.",
      "This is the safest solo press on the machine: a failed rep is already resting on the arms - just slide down the bench and out.",
      "Re-check arm height any time you change benches or bar position; 1-3 inches off the chest is the target."
    ],
    swaps: ["bb-bench-press", "smith-bench-press"]
  },
  {
    id: "bb-bent-over-row",
    name: "Barbell Bent-Over Row",
    aka: ["Barbell Row", "Bent-Over Row"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Lats", "Upper Back"],
    secondary: ["Rear Delts", "Biceps", "Lower Back", "Forearms"],
    difficulty: "Intermediate",
    pattern: "Horizontal Pull",
    standards: "barbellRow",
    anim: { template: "row", params: { load: "bar", posture: "bentover" } },
    setup: [
      "Row in front of the cage with the safety arms swung clear, or take the bar from J-hooks at mid-thigh and step back.",
      "Overhand grip a touch wider than shoulder width.",
      "Hinge until the torso is 30-45 degrees above horizontal, knees soft, bar hanging under the shoulders.",
      "Flat back, braced trunk - this hinge is your position for the whole set."
    ],
    steps: [
      "Pull the bar to the lower ribs with the elbows driving back, not out.",
      "Squeeze the shoulder blades together for a beat at the top.",
      "Lower to a full hang without the torso rising.",
      "Keep the hinge angle frozen rep to rep.",
      "Allow a touch of hip drive only on the last heavy reps, never from rep one.",
      "Stand up with the bar and set it down or re-rack when the set ends."
    ],
    cues: [
      "Chest down, hinge locked.",
      "Pull to the belly, not the chest.",
      "Elbows drive back past the ribs.",
      "Long arms at the bottom."
    ],
    mistakes: [
      { m: "Torso rises a little more every rep until it is a shrug.", fix: "Pick the hinge angle before the set and freeze it; if it keeps climbing, strip plates." },
      { m: "Yanking with the arms and bouncing at the hips.", fix: "Pause a beat at the bottom, then pull with the elbows - the back moves the bar." },
      { m: "Lower back rounding at the hang.", fix: "Re-brace, push the hips back, and keep the knees soft so the hamstrings give you room." },
      { m: "Half reps that never reach the body.", fix: "Lighter bar and touch the lower ribs every rep." }
    ],
    breathing: "Brace at the hang, exhale as you pull to the ribs, inhale on the lowering without standing up.",
    tempo: "1-1-2-0 - pull in one, squeeze one, two down.",
    reps: { strength: "5-8", hypertrophy: "8-12" },
    safety: [
      "Swing the safety arms clear so the plates cannot clip them at the hang.",
      "The lower back holds an isometric hinge all set - end it when the torso starts creeping upright.",
      "Set the bar down with a hinge, not a tired rounded back."
    ],
    swaps: ["bb-pendlay-row", "smith-bent-over-row"]
  },
  {
    id: "bb-pendlay-row",
    name: "Pendlay Row",
    aka: ["Dead-Stop Row"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Upper Back", "Lats"],
    secondary: ["Rear Delts", "Biceps", "Lower Back"],
    difficulty: "Advanced",
    pattern: "Horizontal Pull",
    standards: "barbellRow",
    anim: { template: "row", params: { load: "bar", posture: "bentover", deadStop: true } },
    setup: [
      "Bar on the floor in front of the cage with the safety arms swung clear; full-size plates put it at mid-shin height.",
      "Hinge until the torso is parallel to the floor, hips high, knees soft.",
      "Overhand grip slightly wider than your bent-over row, shoulders directly over the bar.",
      "Flatten and brace the back before every single pull."
    ],
    steps: [
      "Take the slack out of the bar and set a flat back.",
      "Rip the bar off the floor to the lower chest in one explosive pull.",
      "Drive the elbows up and back while the torso stays parallel - zero body english.",
      "Lower fast but controlled and let the bar settle dead on the floor.",
      "Reset the back angle and the brace, then pull again - every rep starts from zero."
    ],
    cues: [
      "Flat back before every pull.",
      "Explode off the floor.",
      "Torso stays parallel - no heave.",
      "Dead stop means dead stop."
    ],
    mistakes: [
      { m: "Torso rises 20-30 degrees to help the pull.", fix: "That is a bent-over row - strip weight until the torso holds parallel." },
      { m: "Touch-and-go bouncing off the plates.", fix: "Let the bar go still on the floor; the reset is what makes it a Pendlay." },
      { m: "Pull dies below the chest.", fix: "Lighter bar - each rep reaches the lower chest crisply or it does not count." },
      { m: "Rounding into the pull off the floor.", fix: "Use the dead stop to re-flatten the back every rep - that pause exists to fix your spine." }
    ],
    breathing: "Exhale through the explosive pull, inhale and re-brace while the bar rests on the floor.",
    tempo: "X-0-1-1 - explosive pull, one down, one-second dead stop.",
    reps: { strength: "3-6", hypertrophy: "6-10" },
    safety: [
      "Swing the safety arms clear and give the plates a clean patch of floor - the bar returns to it every rep.",
      "Parallel torso is non-negotiable; when it rises, the set is over.",
      "Use full-size plates so the pull starts at mid-shin - a lower start rounds most backs."
    ],
    swaps: ["bb-bent-over-row", "lm-row"]
  },
  {
    id: "bb-curl",
    name: "Barbell Curl",
    aka: ["Standing Barbell Curl", "Biceps Curl"],
    station: "Cage/Barbell",
    attachments: [],
    primary: ["Biceps"],
    secondary: ["Forearms"],
    difficulty: "Beginner",
    pattern: "Isolation",
    anim: { template: "curl", params: { load: "bar" } },
    setup: [
      "Set the J-hooks at mid-thigh so you can take the bar standing instead of deadlifting it every set.",
      "Underhand grip at shoulder width; step back clear of the cage so the top of the curl cannot clip the uprights.",
      "Stand tall, feet hip width, elbows pinned to your sides."
    ],
    steps: [
      "Squeeze the bar and curl it in an arc toward the collarbones.",
      "Keep the elbows pinned - they neither rise nor drift behind you.",
      "Squeeze the biceps hard at the top.",
      "Lower with control until the elbows are completely straight.",
      "Come to a full stop at the bottom - no swing into the next rep."
    ],
    cues: [
      "Elbows glued to the ribs.",
      "Curl to the collarbones.",
      "Straight arms at the bottom.",
      "No hips - biceps only."
    ],
    mistakes: [
      { m: "Swinging the hips to start each rep.", fix: "Deaden the hips and pin the elbows; strip plates the moment the swing returns." },
      { m: "Cutting the bottom third of the range.", fix: "Fully straighten the elbows before every rep - the hardest part is the point." },
      { m: "Wrists curling before the elbows.", fix: "Keep the wrists neutral and quiet; knuckles stay in line with the forearms." },
      { m: "Elbows drifting forward at the top into a front raise.", fix: "Stop the curl when the forearms meet the biceps with the elbows still at your sides." }
    ],
    breathing: "Exhale as you curl up, inhale on the slow lowering.",
    tempo: "1-1-3-0 - up in one, squeeze one, three down.",
    reps: { strength: "6-8 (stays strict)", hypertrophy: "8-15" },
    safety: [
      "Curl outside the cage footprint so the bar path never meets the J-hooks or uprights.",
      "Cheated reps land on the lower back, not the biceps - keep the load honest."
    ],
    swaps: ["cbl-curl", "cbl-hammer-curl"]
  },
  {
    id: "bb-skull-crusher",
    name: "Barbell Skull Crusher",
    aka: ["Lying Triceps Extension"],
    station: "Cage/Barbell",
    attachments: ["Bench"],
    primary: ["Triceps"],
    secondary: [],
    difficulty: "Intermediate",
    pattern: "Isolation",
    anim: { template: "skullCrusher", params: {} },
    setup: [
      "Set the flat bench in the cage with your head toward the uprights and the J-hooks low, so the bar sits within easy reach above your face.",
      "Grip the bar just inside shoulder width, overhand.",
      "Unrack to arm's length over the upper chest, then tilt the arms a few degrees back toward your head.",
      "Feet planted, ribs down - the body stays quiet while the elbows work."
    ],
    steps: [
      "Bend only at the elbows and lower the bar toward the forehead or just past the crown.",
      "Keep the upper arms frozen at their slight backward tilt.",
      "Stop at the forehead, or just behind the head for a longer stretch.",
      "Extend back to lockout without letting the elbows flare or drift.",
      "Re-rack by reaching back to the J-hooks, not by sitting up with the bar."
    ],
    cues: [
      "Elbows in, pointed at the ceiling.",
      "Only the forearms move.",
      "Lower to the hairline.",
      "Slow is the whole point."
    ],
    mistakes: [
      { m: "Elbows flare wide and it becomes a close-grip press.", fix: "Lighten the bar and keep the elbows tracking straight up, inside shoulder width." },
      { m: "Upper arms swing toward the hips on the press.", fix: "Freeze the upper arms at their slight backward tilt; only the elbow opens and closes." },
      { m: "Rushing the bar down at the face.", fix: "Three seconds down, every rep - the name is a warning, not a technique." },
      { m: "Wrists cocked back under the bar.", fix: "Knuckles up, wrists neutral; drop load until they stay stacked." }
    ],
    breathing: "Inhale as the bar lowers toward the head, exhale pressing back to lockout.",
    tempo: "3-0-1-0 - three down, no pause at the face, extend.",
    reps: { strength: "8-10 (modest loads only)", hypertrophy: "10-15" },
    safety: [
      "Take the bar from low J-hooks set within reach of your face - never kick a loaded bar up from the floor while lying down.",
      "Bail plan: if the triceps give out, lower the bar past the crown of your head down to the floor - never fight a shaking lockout over your face.",
      "Modest loads with a rep in reserve; the margin for error over the face is small."
    ],
    swaps: ["cbl-overhead-triceps", "cbl-pushdown-bar"]
  },
  {
    id: "anchored-situp",
    name: "Anchored Sit-Up (Feet Under Foot Tube)",
    aka: ["Anchored Sit-Up", "Feet-Hooked Sit-Up"],
    station: "Bench",
    attachments: ["Footplate"],
    primary: ["Core"],
    secondary: ["Hip Flexors", "Obliques"],
    difficulty: "Beginner",
    pattern: "Core",
    anim: { template: "situp", params: {} },
    setup: [
      "Lie on a mat in front of the frame with your feet hooked under the foot tube / footplate at its base.",
      "Bend the knees to about 90 degrees with the heels planted.",
      "Cross the arms on the chest to start; hold them at the temples or hug a plate to progress."
    ],
    steps: [
      "Exhale and curl the ribs toward the pelvis, chin softly tucked.",
      "Keep curling until the torso is upright over the hips.",
      "Let the spine curl first - the hips only finish the movement.",
      "Lower one vertebra at a time, resisting the whole way down.",
      "Touch the shoulder blades to the mat and go again without flopping."
    ],
    cues: [
      "Curl up, do not fold up.",
      "Ribs to hips first.",
      "Slow on the way down.",
      "Light pressure under the foot tube."
    ],
    mistakes: [
      { m: "Jerking the torso up in one flat piece.", fix: "Curl the spine segment by segment - the anchor exists to allow range, not momentum." },
      { m: "Pulling on the neck with the hands.", fix: "Fingertips at the temples or arms crossed; keep a fist of space under the chin." },
      { m: "Dropping back to the mat between reps.", fix: "The lowering is half the rep - three seconds down, every time." }
    ],
    breathing: "Exhale as you curl up, inhale on the controlled lowering.",
    tempo: "1-0-3-0 - up in one, three seconds back down.",
    reps: { strength: "8-12 (hug a plate to progress)", hypertrophy: "10-20 controlled" },
    safety: [
      "Work on a mat - bare garage concrete under the spine cuts sets short.",
      "If the lower back complains, shorten the range to a crunch and rebuild from there."
    ],
    swaps: ["cbl-crunch", "bench-reverse-crunch"]
  },
  {
    id: "bench-reverse-crunch",
    name: "Bench Reverse Crunch",
    aka: ["Reverse Crunch"],
    station: "Bench",
    attachments: ["Bench"],
    primary: ["Core"],
    secondary: ["Hip Flexors", "Obliques"],
    difficulty: "Beginner",
    pattern: "Core",
    anim: { template: "legRaiseBench", params: {} },
    setup: [
      "Set the adjustable bench flat on level floor and lie face-up with the hips toward the free end.",
      "Reach overhead and grip the bench pad behind your head to anchor the torso.",
      "Start with the knees bent about 90 degrees and the shins level with the floor."
    ],
    steps: [
      "Exhale and pull the knees toward the chest.",
      "Keep curling until the hips and tailbone lift off the pad.",
      "Pause a beat with the knees over the chest.",
      "Lower the hips back to the pad, then let the legs travel out to 90 degrees.",
      "Stop the descent the moment the lower back wants to arch off the bench."
    ],
    cues: [
      "Knees to chest, hips off the pad.",
      "Curl the tailbone up.",
      "Slow legs down, no swinging.",
      "Ribs stay heavy on the bench."
    ],
    mistakes: [
      { m: "Swinging the legs for momentum.", fix: "Pause at the bottom of every rep - the knees travel because the abs curl the pelvis, not because they swing." },
      { m: "Only the knees move and the hips never lift.", fix: "The rep starts when the tailbone leaves the pad; shorten the leg lever if needed, but lift the hips." },
      { m: "Lower back arching as the legs extend.", fix: "Cut the range where the back starts peeling off the pad and earn it back gradually." }
    ],
    breathing: "Exhale as the knees pull in and the hips lift, inhale on the slow lowering.",
    tempo: "1-1-3-0 - curl up in one, hold one, three down.",
    reps: { strength: "8-12 slow", hypertrophy: "10-20 controlled" },
    safety: [
      "Check the bench sits flat and stable before loading your hips over one end.",
      "Grip the pad behind your head before the first rep - the anchor keeps the torso from tipping.",
      "If the lower back complains, keep the heels closer to the hips for a shorter lever."
    ],
    swaps: ["hanging-knee-raise", "anchored-situp"]
  },
  {
    id: "incline-cable-fly",
    name: "Incline Bench Cable Fly",
    aka: ["Low-Cable Incline Fly"],
    station: "Bench",
    attachments: ["Bench", "Two D-handles"],
    primary: ["Upper Chest"],
    secondary: ["Front Delts", "Serratus"],
    difficulty: "Intermediate",
    pattern: "Isolation",
    anim: { template: "fly", params: { from: "low", bench: "incline", anchor: "low" } },
    setup: [
      "Set both cable carriages to the lowest position and clip a D-handle to each.",
      "Center the adjustable bench between the two masts at a 30-45 degree incline so both cables pull evenly from behind and below.",
      "Sit down, bring the handles to your shoulders one at a time, then lie back.",
      "Palms facing each other, a soft bend set in the elbows."
    ],
    steps: [
      "Press both handles up to arm's length over the upper chest.",
      "Lower in a wide arc, elbow bend fixed, until you feel a strong chest stretch level with the shoulders.",
      "Sweep the handles back up and together over the upper chest.",
      "Squeeze for a beat without banging the handles together.",
      "Keep the shoulder blades set on the pad for the entire set."
    ],
    cues: [
      "Hug a barrel, do not press.",
      "Elbow bend set once, never changes.",
      "Arc to the stretch, not to pain.",
      "Meet over the upper chest."
    ],
    mistakes: [
      { m: "Bending and straightening the elbows every rep, turning it into a press.", fix: "Set a soft elbow angle at the top and lock it for the whole set." },
      { m: "Dropping too deep into the stretch under load.", fix: "Stop where the chest stretch is strong but the front of the shoulder stays quiet." },
      { m: "Shrugging as the handles come together.", fix: "Keep the shoulder blades pinned down on the pad - the arms sweep, the shoulders stay." }
    ],
    breathing: "Inhale as the handles arc out and down, exhale as you sweep them together.",
    tempo: "3-1-1-1 - three out to the stretch, sweep together, one-second squeeze.",
    reps: { strength: "8-10 (loads stay light)", hypertrophy: "12-20" },
    safety: [
      "Bring the handles to the shoulders one at a time while seated - reaching sideways for a live cable while lying back twists the shoulder.",
      "No bar to trap you: if a rep fails, let the handles travel back toward the low pulleys under control and sit up.",
      "Confirm the bench is centered between the masts so both cables load the chest evenly."
    ],
    swaps: ["cbl-fly-low-high", "bb-incline-press"]
  }
];
