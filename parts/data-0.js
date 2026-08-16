// M1 Pro Form Guide - exercise data (part 0: exemplars)
const EX_PART_0 = [
  {
    id: "smith-back-squat",
    name: "Smith Machine Back Squat (High-Bar)",
    aka: ["Smith Squat"],
    station: "Smith",
    attachments: [],
    primary: ["Quads", "Glutes"],
    secondary: ["Hamstrings", "Adductors", "Core"],
    difficulty: "Beginner",
    pattern: "Squat",
    standards: "backSquat",
    smithCaveat: true,
    anim: { template: "squat", params: { load: "smith" } },
    setup: [
      "Set the bar on a catch at armpit height so you can unrack it with a slight knee bend.",
      "Set the safety spotter arms one hole below where the bar sits at the very bottom of your squat.",
      "Stand with the bar across your upper traps, feet about half a foot-length forward of the bar line, shoulder width, toes out 10-20 degrees.",
      "Rotate the bar to release the spring hooks, stand tall, and settle your stance before the first rep."
    ],
    steps: [
      "Brace your trunk and unhook the bar by rotating it off the catches.",
      "Bend at the knees and hips together and ride the bar straight down.",
      "Keep your chest tall as your hips drop between your heels.",
      "Descend until your thighs reach parallel or your best pain-free depth.",
      "Drive through the whole foot to push the floor away.",
      "Stand fully, re-brace, and repeat; rotate the hooks back onto a catch to finish."
    ],
    cues: [
      "Big breath, brace before you unhook.",
      "Chest tall, elbows pulled down under the bar.",
      "Sit straight down between your heels.",
      "Knees track over the middle of your feet.",
      "Push the floor away, exhale through the sticking point."
    ],
    mistakes: [
      { m: "Feet placed directly under the bar like a free-weight squat.", fix: "Walk both feet a half-step forward - the fixed vertical path needs your hips behind the bar so knees and back stay in line." },
      { m: "Heels lifting as you hit depth.", fix: "Move your stance slightly further forward and think about sitting back into your heels." },
      { m: "Only the knees bend, turning it into a leg-press pattern.", fix: "Break at the hips and knees at the same moment on every rep." },
      { m: "Bouncing out of the bottom.", fix: "Control the last few inches down and reverse smoothly - the machine will not save your knees from a bounce." }
    ],
    breathing: "Inhale and brace at the top, hold the breath down and through the turn, exhale hard past the sticking point on the way up.",
    tempo: "3-0-1-0 - three seconds down, no pause, drive up.",
    reps: { strength: "4-6", hypertrophy: "8-12" },
    safety: [
      "Spotter arms one hole below your bottom-position bar height - if you fail, lower the bar onto them and slide out.",
      "Know your bail before the set: a wrist rotation re-hooks the spring catches at any of the 11 heights.",
      "The fixed path hides balance errors - keep loads honest and end the set when your heels start lifting."
    ],
    swaps: ["bb-back-squat", "smith-split-squat"]
  },
  {
    id: "cbl-face-pull",
    name: "Cable Face Pull",
    aka: ["Rope Face Pull", "Rear-Delt Pull"],
    station: "Cable High",
    attachments: ["Rope"],
    primary: ["Rear Delts", "Rotator Cuff"],
    secondary: ["Traps", "Upper Back"],
    difficulty: "Beginner",
    pattern: "Horizontal Pull",
    anim: { template: "facePull", params: { anchor: "high" } },
    setup: [
      "Set one cable carriage just above head height and clip on the rope.",
      "Grab the rope ends with palms facing each other, thumbs toward you.",
      "Step back until the stack lifts off, and split your stance front-to-back for balance."
    ],
    steps: [
      "Start with arms long and shoulder blades reaching forward.",
      "Pull the rope toward the bridge of your nose with elbows high and wide.",
      "As the rope reaches your face, split the ends apart so your knuckles finish beside your ears.",
      "Squeeze the rear delts and upper back for a full beat.",
      "Return with control to a long reach, letting the shoulder blades glide forward."
    ],
    cues: [
      "Elbows high, thumbs to your ears.",
      "Pull the rope apart, not just back.",
      "Lead with the elbows, hands follow.",
      "Finish like a double-biceps pose."
    ],
    mistakes: [
      { m: "Elbows drop and the lats take over, turning it into a row.", fix: "Keep the upper arms near shoulder height for the whole pull - elbows stay as high as the hands." },
      { m: "Too much weight, leaning back to move the stack.", fix: "Drop several plates - the rear delts are small, and this is a feel exercise, not a load exercise." },
      { m: "Finishing with the hands jammed together in front of the face.", fix: "Actively split the rope ends past your ears - the external-rotation finish is the point." }
    ],
    breathing: "Exhale as you pull to the face, inhale on the slow return.",
    tempo: "1-1-3 - pull in one second, hold one, three seconds back.",
    reps: { strength: "8-10 (loads stay light)", hypertrophy: "12-20" },
    safety: [
      "No safeties needed - if you let go, the stack simply sets back down.",
      "If the rope feels short for a full split at the face, clip on the two D-handles instead."
    ],
    swaps: ["cbl-rear-delt-fly", "cbl-standing-row"]
  }
];
