// Meet planner settings. Edit numbers here, save, and reload the page.
// All percentages are whole numbers (88 means 88%).

window.CONFIG = {
  // Weights round to the nearest this many kg.
  roundingKg: 2.5,

  // A later attempt must be at least this much heavier than the one before.
  minJumpKg: 2.5,

  kgToLb: 2.20462,

  // Attempt options, as a percent of the training max.
  attemptOptions: ["Safe", "Moderate", "Hard"],
  attempts: [
    { name: "Opener", pct: [88, 91, 93] },
    { name: "2nd",    pct: [95, 97, 99] },
    { name: "3rd",    pct: [100, 102, 104] }
  ],

  // Lifts shown on the page, in order. "key" matches the keys in athletes.js.
  lifts: [
    { key: "squat",    name: "Squat", short: "SQ" },
    // "others" are related lists logged under a different exercise name.
    // Sets can be moved between a lift and its other list on the page.
    { key: "bench",    name: "Comp bench", short: "BP", others: [{ key: "tngBench", name: "Touch-and-go bench" }] },
    { key: "deadlift", name: "Deadlift", short: "DL" }
  ],

  // Warm-ups, as a percent of the selected opener.
  // barReps: reps with the empty bar first. Use 0 to skip the empty bar.
  warmups: {
    squat: {
      barReps: 5,
      steps: [
        { pct: 47, reps: 5 },
        { pct: 63, reps: 3 },
        { pct: 78, reps: 2 },
        { pct: 88, reps: 1 },
        { pct: 94, reps: 1 }
      ],
      note: ""
    },
    bench: {
      barReps: 10,
      steps: [
        { pct: 52, reps: 5 },
        { pct: 70, reps: 3 },
        { pct: 82, reps: 2 },
        { pct: 91, reps: 1 }
      ],
      note: "Pause every rep. Last warm-up to meet commands."
    },
    deadlift: {
      barReps: 0,
      steps: [
        { pct: 45, reps: 5 },
        { pct: 67, reps: 3 },
        { pct: 82, reps: 1 },
        { pct: 93, reps: 1 }
      ],
      note: ""
    }
  },

  warmupTimingNote: "Finish last warm-up roughly 6 to 10 lifters before you're called.",

  // Meet day mode pacing. "Out" = lifters left before the opener.
  // Last warm-up is due at lastWarmupOut, each earlier set warmupSpacing sooner.
  meetDay: {
    lastWarmupOut: 8,
    warmupSpacing: 5,
    minutesPerAttempt: 1
  },

  // Plate math. Collars count toward the weight on the bar.
  // If the warm-up room uses spring clips, set collarKgEach to 0.
  plates: {
    barKg: 20,
    collarKgEach: 2.5,
    availableKg: [25, 20, 15, 10, 5, 2.5, 1.25]
  }
};
