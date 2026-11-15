// One object per athlete. Every athlete uses the same shape.
// To add an athlete: copy a whole block, paste it after the last one
// (with a comma between), and change the values. See README.md.
//
// THIS FILE IS PUBLIC (it goes to GitHub). Rules:
// - First names only. No bodyweights, no contact info.
// - No flags and no athlete notes here. Those go in data/private.js,
//   which stays on Kyle's Mac and is never uploaded.
// - All weights in kg. Dates as "YYYY-MM-DD".
// - Leave a field as "" when you don't know it. The page shows [Insert ...].
// - log entries: kg and reps are the top set (reps = the reps used for the
//   estimated max). "text" is what was done.
// - trainingMaxes: approved stays false until Kyle says yes.

window.ATHLETES = [
  {
    id: "madeline",
    name: "Madeline",

    meet: {
      name: "MA State Championships",
      date: "2026-11-15",
      federation: "",
      weightClass: "",
      weighIn: ""
    },

    historyStart: "2026-08-04",
    historyNote: "",

    trainingMaxes: {
      squat:    { kg: 140,  approved: true, approvedOn: "2026-11-09", reason: "Made Nov 4, matches her July best" },
      bench:    { kg: 67.5, approved: true, approvedOn: "2026-11-13", reason: "Made Nov 3, competition style; up 2.5 from July" },
      deadlift: { kg: 150,  approved: true, approvedOn: "2026-11-09", reason: "Made Oct 30, up 15 from July" }
    },

    // July test week. Shown as a dashed line on each chart.
    priorBests: {
      squat:    { kg: 140, date: "2026-07-13", note: "" },
      bench:    { kg: 65,  date: "2026-07-14", note: "1-second pause" },
      deadlift: { kg: 135, date: "2026-07-16", note: "" }
    },

    log: {
      squat: [
        { date: "2026-08-04", kg: 70,    reps: 8,  text: "70 for 4×6, last set to 8", note: "" },
        { date: "2026-08-11", kg: 85,    reps: 9,  text: "85 for 4×6, last set to 9", note: "" },
        { date: "2026-08-20", kg: 90,    reps: 11, text: "90, last set to 11", note: "" },
        { date: "2026-08-27", kg: 100,   reps: 8,  text: "100, last set to 8", note: "" },
        { date: "2026-08-31", kg: 107.5, reps: 7,  text: "107.5, last set to 7", note: "" },
        { date: "2026-09-08", kg: 110,   reps: 8,  text: "110, last set to 8", note: "" },
        { date: "2026-09-16", kg: 105,   reps: 4,  text: "105 for 6×4", note: "" },
        { date: "2026-09-28", kg: 110,   reps: 4,  text: "110 for 5×4", note: "" },
        { date: "2026-10-06", kg: 112.5, reps: 5,  text: "112.5, last set to 5", note: "" },
        { date: "2026-10-13", kg: 120,   reps: 3,  text: "120×3 (effort 9/10)", note: "" },
        { date: "2026-10-21", kg: 130,   reps: 1,  text: "130×1, twice", note: "" },
        { date: "2026-10-27", kg: 135,   reps: 1,  text: "135×1, twice, then 100 for 3×3", note: "" },
        { date: "2026-11-04", kg: 140,   reps: 1,  text: "140×1, then 110 for 3×2", note: "" }
      ],

      // Comp bench (paused)
      bench: [
        { date: "2026-09-24", kg: 50,   reps: 8, text: "50, last set to 8", note: "" },
        { date: "2026-10-02", kg: 52.5, reps: 5, text: "52.5, last set to 5 (2s pause)", note: "" },
        { date: "2026-10-09", kg: 52.5, reps: 4, text: "52.5 for 5×4 (2s pause)", note: "" },
        { date: "2026-10-16", kg: 55,   reps: 3, text: "55×3 (2s pause), back-offs at 45", note: "" },
        { date: "2026-10-23", kg: 47.5, reps: 2, text: "47.5 for 5×2 (5s pause)", note: "" },
        { date: "2026-10-30", kg: 52.5, reps: 2, text: "52.5 for 5×2 (4s pause)", note: "" },
        // Logged as "bench press". Competition style, moved from touch-and-go Nov 13.
        { date: "2026-11-03", kg: 67.5, reps: 1, text: "67.5×1 (logged as bench press, competition style), then 60×2 twice", note: "" },
        { date: "2026-11-06", kg: 55,   reps: 3, text: "55×1, 55×1, 55×3 (3s pause)", note: "" }
      ],

      // Touch-and-go bench. Listed under the bench chart, not plotted.
      tngBench: [
        { date: "2026-08-05", kg: 40,   reps: 10, text: "40 for 4×6, last set to 10", note: "" },
        { date: "2026-08-12", kg: 42.5, reps: 15, text: "42.5 for 4×6, last set to 15", note: "" },
        { date: "2026-08-19", kg: 47.5, reps: 10, text: "47.5, last set to 10", note: "" },
        { date: "2026-08-28", kg: 45,   reps: 9,  text: "45, last set to 9", note: "" },
        { date: "2026-09-01", kg: 47.5, reps: 9,  text: "47.5, last set to 9", note: "" },
        { date: "2026-09-09", kg: 50,   reps: 8,  text: "50, last set to 8", note: "" },
        { date: "2026-09-17", kg: 50,   reps: 11, text: "50, last set to 11", note: "" },
        { date: "2026-09-29", kg: 50,   reps: 8,  text: "50, last set to 8", note: "" },
        { date: "2026-10-05", kg: 52.5, reps: 6,  text: "52.5, last set to 6", note: "" },
        { date: "2026-10-12", kg: 60,   reps: 3,  text: "60×3 (effort 9/10)", note: "" },
        { date: "2026-10-20", kg: 62.5, reps: 2,  text: "62.5×2", note: "" },
        { date: "2026-10-26", kg: 65,   reps: 1,  text: "65×1, twice", note: "" }
      ],

      deadlift: [
        { date: "2026-08-07", kg: 80,  reps: 14, text: "80 for 4×6, last set to 14", note: "" },
        { date: "2026-08-14", kg: 90,  reps: 14, text: "90 for 4×6, last set to 14", note: "" },
        { date: "2026-08-25", kg: 100, reps: 11, text: "100, last set to 11", note: "" },
        { date: "2026-08-29", kg: 115, reps: 5,  text: "115×5", note: "" },
        { date: "2026-09-03", kg: 105, reps: 6,  text: "105, last set to 6", note: "" },
        { date: "2026-09-11", kg: 110, reps: 6,  text: "110, last set to 6", note: "" },
        { date: "2026-09-19", kg: 110, reps: 8,  text: "110, last set to 8 (short rest)", note: "" },
        { date: "2026-10-01", kg: 115, reps: 5,  text: "115, last set to 5", note: "" },
        { date: "2026-10-09", kg: 135, reps: 4,  text: "Ramped up to 135×4", note: "" },
        { date: "2026-10-17", kg: 140, reps: 3,  text: "140×3 (effort 9/10)", note: "" },
        { date: "2026-10-24", kg: 145, reps: 1,  text: "145×1, then 125 for 3×3", note: "" },
        { date: "2026-10-30", kg: 150, reps: 1,  text: "150×1, then 125 for 3×2", note: "" },
        { date: "2026-11-07", kg: 140, reps: 1,  text: "140×1, back-offs skipped", note: "" }
      ]
    },

    // Flags live in data/private.js.
    flags: [],

    meetWeek: [
      { date: "2026-11-10", plan: "Squat up to opener for one single, then stop. If she's flat, stop at 120×1. Bench up to opener with commands, then 2×3 at 47.5." },
      { date: "2026-11-11", plan: "Off or light accessories." },
      { date: "2026-11-12", plan: "Deadlift 110×2 only. Bench 2×3 at 40, fast." },
      { date: "2026-11-13", plan: "Squat 60 to 70 for 2×3. Bench up to 47.5, 2 singles with commands." },
      { date: "2026-11-14", plan: "Off. Weigh-in per meet schedule." },
      { date: "2026-11-15", plan: "Meet." }
    ]
  },

  {
    id: "aiden",
    name: "Aiden",

    // Next meet not set yet.
    meet: {
      name: "",
      date: "",
      federation: "",
      weightClass: "",
      weighIn: ""
    },

    // Day after his last meet before this log.
    historyStart: "2026-08-23",
    historyNote: "",

    // From Nov 9, before MA State. Review once the Nov 14 results are in.
    trainingMaxes: {
      squat:    { kg: 255,   approved: true, approvedOn: "2026-11-09", reason: "255×1 on Nov 2" },
      bench:    { kg: 177.5, approved: true, approvedOn: "2026-11-09", reason: "Best meet bench, Aug 22. 170×1 on Oct 27" },
      deadlift: { kg: 240,   approved: true, approvedOn: "2026-11-09", reason: "240×1 on Oct 29, sumo" }
    },

    // Next Level Showdown, Aug 22, 2026: 245 / 177.5 / 235, total 657.5.
    priorBests: {
      squat:    { kg: 245,   date: "2026-08-22", note: "Next Level Showdown" },
      bench:    { kg: 177.5, date: "2026-08-22", note: "Next Level Showdown" },
      deadlift: { kg: 235,   date: "2026-08-22", note: "Next Level Showdown" }
    },

    log: {
      squat: [
        { date: "2026-10-12", kg: 215, reps: 3, text: "215×3", note: "" },
        { date: "2026-10-26", kg: 240, reps: 1, text: "240×1", note: "" },
        { date: "2026-11-02", kg: 255, reps: 1, text: "255×1 (effort 4 of 5)", note: "" }
      ],
      bench: [
        { date: "2026-10-13", kg: 162.5, reps: 3, text: "162.5×3 paused", note: "" },
        { date: "2026-10-27", kg: 170,   reps: 1, text: "170×1 (effort 3)", note: "" }
      ],
      tngBench: [],
      deadlift: [
        { date: "2026-10-02", kg: 200, reps: 3, text: "200×3, sumo", note: "" },
        { date: "2026-10-29", kg: 240, reps: 1, text: "240×1, sumo (effort 4 of 5)", note: "" }
      ]
    },

    flags: [],

    meetWeek: []
  }
];
