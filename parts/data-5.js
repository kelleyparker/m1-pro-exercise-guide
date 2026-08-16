// M1 Pro Form Guide - exercise data (part 5: bodyweight on the frame)
const EX_PART_5 = [
  {
    id: "pull-up",
    name: "Pull-Up",
    aka: ["Overhand Pull-Up", "Pronated Pull-Up"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Lats", "Upper Back"],
    secondary: ["Biceps", "Forearms", "Rear Delts", "Core"],
    difficulty: "Intermediate",
    pattern: "Vertical Pull",
    standards: "weightedPullup",
    anim: { template: "pullup", params: { grip: "over" } },
    setup: [
      "Take an overhand grip on the 28 mm knurled section of the multi-grip bar, hands just outside shoulder width.",
      "The bar sits on top of the cage, so check the garage ceiling leaves head clearance at the chin-over-bar position.",
      "Settle into a dead hang - arms straight, feet off the floor, ankles crossed so the legs stay quiet.",
      "To load past bodyweight, hang plates from a dip belt or wear a zipped backpack - the machine has no dedicated belt, and the strength standard counts bodyweight plus what you add."
    ],
    steps: [
      "From the dead hang, pull the shoulder blades down before the elbows bend.",
      "Drive the elbows down toward your ribs and pull the chest to the bar.",
      "Finish with the chin clearly over the bar without reaching with the neck.",
      "Hold the top for a beat with the shoulder blades pinned down.",
      "Lower under control all the way back to straight arms.",
      "Re-set the hang for a moment, then start the next rep from stillness."
    ],
    cues: [
      "Shoulder blades down first, then pull.",
      "Elbows to your ribs.",
      "Chest to the bar, not chin to the sky.",
      "Full hang at the bottom, every rep.",
      "Quiet legs - no kip."
    ],
    mistakes: [
      { m: "Chin pokes over the bar while the chest stays low.", fix: "Pull the collarbones toward the bar - the neck reach robs the lats of the last few inches." },
      { m: "Half-depth reps that never return to straight arms.", fix: "Dead hang between reps; if full range kills the set, cut reps or move to the band-assisted version." },
      { m: "Kipping and leg swing through the sticking point.", fix: "Cross the ankles, squeeze the glutes, and end the set when strict reps end." },
      { m: "Shoulders shrugged to the ears in the hang.", fix: "Set the blades down and back before every pull - hang long, not slack." }
    ],
    breathing: "Exhale as you pull, inhale on the way down, and take an extra breath in the dead hang before hard reps.",
    tempo: "1-1-3-0 - pull in one, chin over for one, three seconds down.",
    reps: { strength: "3-6 (weighted once 8 are strict)", hypertrophy: "6-12" },
    safety: [
      "Dismount by lowering to a full hang and dropping with soft knees - never jump off from the top.",
      "Keep the floor under the bar clear of plates and the bench before you hang.",
      "With added weight, snug the dip belt chain or backpack straps so the load cannot swing you off line mid-rep."
    ],
    swaps: ["cbl-lat-pulldown-wide", "band-assisted-pull-up"]
  },
  {
    id: "chin-up",
    name: "Chin-Up",
    aka: ["Underhand Pull-Up", "Supinated Pull-Up"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Lats", "Biceps"],
    secondary: ["Upper Back", "Forearms", "Core"],
    difficulty: "Intermediate",
    pattern: "Vertical Pull",
    anim: { template: "pullup", params: { grip: "under" } },
    setup: [
      "Take an underhand grip on the pull-up bar, palms facing you, hands at shoulder width.",
      "Hang at full arm's length with the shoulder blades set slightly down, ankles crossed behind you.",
      "Squeeze the glutes lightly so the body hangs in one quiet line before the first pull."
    ],
    steps: [
      "Pull the shoulder blades down to start the rep.",
      "Drive the elbows down and back - the underhand grip lets the biceps work hard with the lats.",
      "Pull until the chest nears the bar and the chin is clearly over it.",
      "Hold the top for a beat without letting the shoulders roll forward.",
      "Lower under control to straight arms and re-set the hang."
    ],
    cues: [
      "Blades down, then pull.",
      "Elbows toward your back pockets.",
      "Chest to the bar.",
      "Straight arms at the bottom, every rep."
    ],
    mistakes: [
      { m: "Reps turn into a pure arm curl with the shoulders rolled forward.", fix: "Start every rep by setting the shoulder blades down - the lats lead, the biceps assist." },
      { m: "Stopping short of straight arms to spare the biceps.", fix: "Lower to a full hang with control; if the elbows complain, slow the negative and warm up first." },
      { m: "Chin thrusts over the bar while the chest falls away.", fix: "Pull the sternum toward the bar and keep the neck neutral." },
      { m: "Swinging out of the bottom to cheat the turnaround.", fix: "Pause a beat in the dead hang and pull from stillness." }
    ],
    breathing: "Exhale on the pull, inhale on the slow lower, and reset your breath in the hang between hard reps.",
    tempo: "1-1-3-0 - up in one, hold one, three seconds down.",
    reps: { strength: "4-6", hypertrophy: "6-12" },
    safety: [
      "Lower to a dead hang before dropping off, and land with soft knees.",
      "If the full underhand grip nags your wrists or elbows, move to the neutral handles instead of pushing through."
    ],
    swaps: ["cbl-lat-pulldown-underhand", "pull-up"]
  },
  {
    id: "neutral-grip-pull-up",
    name: "Neutral-Grip Pull-Up",
    aka: ["Hammer-Grip Pull-Up", "Parallel-Grip Pull-Up"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Lats"],
    secondary: ["Biceps", "Upper Back", "Forearms", "Rear Delts"],
    difficulty: "Intermediate",
    pattern: "Vertical Pull",
    anim: { template: "pullup", params: { grip: "neutral" } },
    setup: [
      "Grip the neutral handles of the multi-grip bar, palms facing each other at about shoulder width.",
      "Hang long with the shoulder blades set slightly down and the ankles crossed behind you.",
      "Center yourself between the handles so you rise straight instead of tilting to one side."
    ],
    steps: [
      "Pull the shoulder blades down, then drive the elbows straight down toward the ribs.",
      "Keep the forearms vertical as you rise between the handles.",
      "Finish with the chin over bar height and the chest tall.",
      "Pause briefly at the top without shrugging.",
      "Lower with control to a full hang before the next rep."
    ],
    cues: [
      "Palms in, elbows straight down.",
      "Chin over, chest tall.",
      "Long hang at the bottom.",
      "Rise level - no tilt."
    ],
    mistakes: [
      { m: "Elbows flare out even though the palms face in.", fix: "Pull the elbows down into your back pockets - the neutral grip works best with a vertical forearm." },
      { m: "One shoulder rises first and the body twists between the handles.", fix: "Set both hands evenly and brace the trunk so the two sides pull together." },
      { m: "Cutting the bottom short because the stretch feels intense.", fix: "Lower all the way - the loaded stretch is where the lats earn their money; shorten the set, not the rep." },
      { m: "Legs swing to help through the sticking point.", fix: "Cross the ankles, squeeze the glutes, and stop the set when strict reps stop." }
    ],
    breathing: "Exhale as you pull up, inhale on the way down, and take a settling breath in the hang when you need it.",
    tempo: "1-0-3-0 - smooth pull up, three seconds down.",
    reps: { strength: "4-6", hypertrophy: "6-12" },
    safety: [
      "Usually the most shoulder-friendly pull-up - live here if the overhand bar bothers your shoulders or wrists.",
      "Dismount from a still hang and land with soft knees."
    ],
    swaps: ["cbl-lat-pulldown-neutral", "pull-up"]
  },
  {
    id: "scapular-pull-up",
    name: "Scapular Pull-Up",
    aka: ["Scap Pull-Up", "Scap Shrug"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Traps", "Lats"],
    secondary: ["Upper Back", "Forearms"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pullup", params: { grip: "over", scap: true } },
    setup: [
      "Take an overhand pull-up grip just outside shoulder width on the multi-grip bar.",
      "Settle into a relaxed dead hang - arms straight, shoulders allowed to ride up toward the ears.",
      "Keep the legs quiet; cross the ankles if you tend to swing."
    ],
    steps: [
      "From the slack hang, pull the shoulder blades down and slightly together.",
      "Let the chest rise a few inches - the elbows stay completely straight.",
      "Hold the tall-chest position for a full second or two.",
      "Release with control back into the full hang.",
      "Repeat without letting any swing build between reps."
    ],
    cues: [
      "Arms straight the whole time.",
      "Pull the shoulders away from the ears.",
      "A few inches of rise is the rep.",
      "Own the top - hold it."
    ],
    mistakes: [
      { m: "Elbows bend and it becomes a tiny pull-up.", fix: "Lock the elbows straight - the rep lives entirely in the shoulder blades." },
      { m: "No visible movement because the hang never fully relaxes.", fix: "Let the shoulders ride up to the ears at the bottom, then pull them down - full slack, full rep." },
      { m: "Swing builds and momentum starts doing the lifting.", fix: "Wait until the body is still, brace the trunk, and keep every rep deliberate." }
    ],
    breathing: "Exhale as you pull the blades down, inhale as you release back to the hang.",
    tempo: "1-2-1-0 - pull down in one, hold two, release in one.",
    reps: { strength: "6-10 (a control drill - quality first)", hypertrophy: "10-15" },
    safety: [
      "Grip fatigue ends this move first - drop and rest rather than letting the fingers peel open mid-hang.",
      "Dismount with soft knees from a still hang, not mid-swing."
    ],
    swaps: ["band-assisted-pull-up", "cbl-straight-arm-pulldown"]
  },
  {
    id: "band-assisted-pull-up",
    name: "Band-Assisted Pull-Up",
    aka: ["Banded Pull-Up"],
    station: "Bodyweight",
    attachments: ["Band"],
    primary: ["Lats", "Upper Back"],
    secondary: ["Biceps", "Forearms", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Pull",
    anim: { template: "pullup", params: { grip: "over", band: true } },
    setup: [
      "Loop a band over the middle of the pull-up bar (or between the band pegs) and cinch it through itself.",
      "Pull the band down and set one foot in the loop for more help, or a knee for less; cross the free leg behind.",
      "Take an overhand grip just outside shoulder width and ease your weight down until the band is loaded.",
      "Come to a still hang with arms straight before the first rep."
    ],
    steps: [
      "Pull the shoulder blades down, then drive the elbows toward your ribs.",
      "Pull until the chin clearly clears the bar.",
      "Remember the band helps most at the bottom - you must finish the top yourself.",
      "Lower with control all the way to straight arms.",
      "Pause in the bottom hang, kill any bounce, and pull again."
    ],
    cues: [
      "Blades down first.",
      "The top is all you - finish it.",
      "Chin over, chest up.",
      "No bouncing out of the band."
    ],
    mistakes: [
      { m: "Bouncing out of the bottom off the band's stretch.", fix: "Pause for a beat at straight arms - a dead start each rep is what builds the real pull-up." },
      { m: "Staying on the same band for months.", fix: "When 8-10 reps are clean, move to a thinner band or mix in single strict reps without one." },
      { m: "The chin never clears the bar because the band did the easy half.", fix: "The assistance fades near the top - grind the last few inches, that is the part you are training." }
    ],
    breathing: "Exhale as you pull, inhale as the band lowers you back to the hang.",
    tempo: "1-1-3-0 - pull in one, hold one, three seconds down.",
    reps: { strength: "5-8 (progress by thinning the band)", hypertrophy: "8-12" },
    safety: [
      "Seat the band across the midfoot or behind the knee - a loop that slips off snaps up hard.",
      "To dismount, come to a still hang, put the free foot on the floor, then ease out of the loop - never jump out of a loaded band.",
      "Inspect the band for nicks before each session and retire one that is fraying."
    ],
    swaps: ["cbl-lat-pulldown-wide", "scapular-pull-up"]
  },
  {
    id: "dip",
    name: "Dip (Dip Handles)",
    aka: ["Parallel Dip", "Chest Dip"],
    station: "Bodyweight",
    attachments: ["Dip handles"],
    primary: ["Chest", "Triceps"],
    secondary: ["Front Delts", "Serratus", "Core"],
    difficulty: "Intermediate",
    pattern: "Vertical Push",
    standards: "weightedDip",
    anim: { template: "dip", params: {} },
    setup: [
      "Mount the dip handles on the cage uprights at just above standing elbow height.",
      "Set both handles at the same hole and lock them fully - push and shake each one before you load it.",
      "Take the handles, press to straight arms, and cross the ankles behind you with the knees slightly bent.",
      "Add weight with a dip belt or a loaded backpack once strict sets pass ten - the machine has no dedicated belt, and the strength standard counts bodyweight plus the added load."
    ],
    steps: [
      "From the top support, tip the torso slightly forward for chest emphasis, or stay vertical for triceps.",
      "Bend the elbows and lower until the upper arms are about parallel to the floor.",
      "Keep the elbows tracking back over the wrists, not flared out wide.",
      "Press back to straight arms without the shoulders rolling forward.",
      "Lock out fully, re-set the shoulder blades down, and repeat."
    ],
    cues: [
      "Shoulders down, chest proud.",
      "Elbows back, not out.",
      "Lean forward for chest, vertical for triceps.",
      "Upper arms to parallel, then drive.",
      "Push the handles through the floor."
    ],
    mistakes: [
      { m: "Cutting depth to a half-bend of the elbows.", fix: "Lower until the upper arms are near parallel; if you cannot own that depth, use the band-assisted version." },
      { m: "Sinking far past parallel with the shoulders rolled up and forward.", fix: "Stop at parallel and keep the shoulder blades set down - depth past your control buys nothing." },
      { m: "Shoulders shrug toward the ears at the bottom.", fix: "Actively push the handles down away from you and keep the neck long." },
      { m: "Kicking the legs to bounce out of the hole.", fix: "Quiet legs, ankles crossed; pause a beat at the bottom if momentum keeps sneaking in." }
    ],
    breathing: "Inhale on the way down, exhale hard as you press back to lockout.",
    tempo: "2-1-1-0 - two down, pause one in the hole, drive up in one.",
    reps: { strength: "4-6 (weighted once 10 are strict)", hypertrophy: "8-12" },
    safety: [
      "Even and locked is non-negotiable - re-check both handle pins every time you move them.",
      "Bail plan: your feet are only inches from the floor - if a rep stalls, simply put them down.",
      "With a dip belt or backpack, step into the support position gently rather than jumping up with plates swinging."
    ],
    swaps: ["bb-close-grip-bench", "band-assisted-dip"]
  },
  {
    id: "band-assisted-dip",
    name: "Band-Assisted Dip",
    aka: ["Banded Dip"],
    station: "Bodyweight",
    attachments: ["Dip handles", "Band"],
    primary: ["Chest", "Triceps"],
    secondary: ["Front Delts", "Core"],
    difficulty: "Beginner",
    pattern: "Vertical Push",
    anim: { template: "dip", params: { band: true } },
    setup: [
      "Mount the dip handles on the uprights at just above standing elbow height; set them even and lock both before loading.",
      "Stretch a band across the two handles so it spans the gap between them.",
      "Press to straight arms on the handles, then set one knee at a time into the band, ankles crossed behind you.",
      "Ease down until the band takes some weight - it will help most at the very bottom."
    ],
    steps: [
      "From straight arms, tip slightly forward and bend the elbows.",
      "Lower until the upper arms are near parallel - the band picks up more weight as you sink.",
      "Keep the knees pressing evenly into the band so it cannot shift.",
      "Press back up; the top half feels heavier as the band slackens, so finish the lockout yourself.",
      "Lock out fully with the shoulders down and repeat."
    ],
    cues: [
      "Elbows back, chest proud.",
      "The lockout is all you.",
      "Knees heavy and even in the band.",
      "Control down, drive up."
    ],
    mistakes: [
      { m: "Bouncing off the band at the bottom.", fix: "Treat the band as a spotter, not a trampoline - pause a beat at the deepest point." },
      { m: "Shallow reps despite the assistance.", fix: "The band is strongest exactly where you are weakest - use it to earn full parallel depth every rep." },
      { m: "One knee slips and the band twangs sideways.", fix: "Center both knees before the first rep and keep the pressure even through the set." },
      { m: "Never progressing off the band.", fix: "When 10-12 reps are clean, switch to a thinner band, then try small sets of unassisted dips." }
    ],
    breathing: "Inhale down, exhale as you press to lockout.",
    tempo: "2-1-1-0 - two down, brief pause, press up in one.",
    reps: { strength: "5-8 (thin the band as you improve)", hypertrophy: "8-15" },
    safety: [
      "Before kneeling in, confirm both handles are pinned at the same height and locked, and the band is fully seated on each handle.",
      "Get in and out one knee at a time from the straight-arm support - a loaded band snaps back if you jump off it.",
      "Inspect the band for nicks before each session."
    ],
    swaps: ["smith-close-grip-bench", "cbl-pushdown-rope"]
  },
  {
    id: "hanging-knee-raise",
    name: "Hanging Knee Raise",
    aka: ["Hanging Knee Tuck"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Core", "Hip Flexors"],
    secondary: ["Obliques", "Forearms"],
    difficulty: "Beginner",
    pattern: "Core",
    anim: { template: "hangingRaise", params: { bent: true } },
    setup: [
      "Hang from the pull-up bar with an overhand grip about shoulder width.",
      "Set the shoulder blades slightly down so you hang long but not slack.",
      "Come to a complete stop before the first rep - stillness is the start position."
    ],
    steps: [
      "Draw the knees up together toward hip height or a bit higher.",
      "At the top, tilt the pelvis under - roll the tailbone forward so the lower abs finish the rep.",
      "Hold the top for a beat without any swing.",
      "Lower the legs slowly until they hang straight down.",
      "Pause until all sway dies, then raise again."
    ],
    cues: [
      "Curl the hips under at the top.",
      "Lower slow - no pendulum.",
      "Dead-still hang between reps.",
      "Ribs down, no arch at the bottom."
    ],
    mistakes: [
      { m: "Legs swing forward and back like a pendulum.", fix: "Lower in three slow counts and let the body go still before the next rep - momentum steals the work." },
      { m: "Knees rise but the pelvis never tilts.", fix: "The abs only fully join when the hips curl under - lift the knees, then roll the tailbone forward." },
      { m: "Lower back arches hard as the legs drop.", fix: "Brace the trunk and stop the lowering just before the arch starts; shorten the range until you control it." },
      { m: "Grip gives out before the abs do.", fix: "Do these early in the session or split them into shorter sets - a slipping grip ends good core work." }
    ],
    breathing: "Exhale as the knees rise and the pelvis curls under, inhale on the slow lower.",
    tempo: "1-1-3-0 - up in one, hold one, three down.",
    reps: { strength: "8-12 controlled", hypertrophy: "12-20" },
    safety: [
      "Kill the swing between reps - a swinging hang turns core work into momentum and yanks at the shoulders.",
      "Dismount from a still hang with soft knees, not mid-rep."
    ],
    swaps: ["bench-reverse-crunch", "cbl-crunch"]
  },
  {
    id: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    aka: ["Hanging Straight-Leg Raise"],
    station: "Bodyweight",
    attachments: [],
    primary: ["Core", "Hip Flexors"],
    secondary: ["Obliques", "Forearms", "Lats"],
    difficulty: "Intermediate",
    pattern: "Core",
    anim: { template: "hangingRaise", params: {} },
    setup: [
      "Hang from the pull-up bar with an overhand grip, shoulder blades set slightly down.",
      "Straighten the knees and point the toes - the long lever is the exercise.",
      "Brace the trunk with the ribs down and wait until you are completely still."
    ],
    steps: [
      "Raise the straight legs together until they reach horizontal or above.",
      "As they pass horizontal, curl the pelvis under so the abs, not just the hip flexors, finish the lift.",
      "Hold the top position for a beat.",
      "Lower the legs in three slow counts without letting the back arch.",
      "Wait for stillness at the bottom, then go again."
    ],
    cues: [
      "Long legs, slow lower.",
      "Curl the hips at the top.",
      "No swing - freeze between reps.",
      "Ribs down before you lift."
    ],
    mistakes: [
      { m: "Knees bend more and more as the set goes on.", fix: "Keep the knee angle fixed - if the legs must bend to reach horizontal, do knee raises and earn the longer lever." },
      { m: "Reps become a swing driven off the shoulders.", fix: "Three-count lowering and a dead-still pause at the bottom; if you cannot stop the sway, the reps do not count." },
      { m: "Legs stop well below horizontal.", fix: "Range is the standard here - slow down and finish the lift, or step back to the knee raise." },
      { m: "Back arches and the ribs flare during the lower.", fix: "Keep a thread of exhale going on the way down and stop the descent before the arch begins." }
    ],
    breathing: "Exhale hard as the legs rise, then keep the trunk braced and inhale slowly as they lower.",
    tempo: "2-1-3-0 - two up, hold one, three down.",
    reps: { strength: "5-8 strict", hypertrophy: "8-15" },
    safety: [
      "Anti-swing rule: come to a full stop between reps rather than riding momentum into the next one.",
      "Grip usually fails before the abs - dismount from a still hang with soft knees instead of grinding a slipping hand."
    ],
    swaps: ["hanging-knee-raise", "cbl-crunch"]
  }
];
