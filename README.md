# MASS meet day planner

One page per powerlifter: trends, training maxes, attempt options, warm-ups,
meet week plan, flags, and a print sheet for the handler.

## How to open it

- On a phone: go to https://ktkb2026.github.io/meet-planner/ and add it to the
  home screen (iPhone: Safari, Share, Add to Home Screen. Android: Chrome,
  three dots, Add to Home screen). After the first load it opens with no
  signal.
- On Kyle's Mac: double-click `index.html`. This copy also shows the private
  flags and notes.

## Public and private

The GitHub repo and the phone page are public. Rules for anything in
`data/athletes.js`: first names only, no bodyweights, no contact info, no
flags, no athlete notes.

Flags, full names, and the athletes' own log notes go in `data/private.js`.
That file is in `.gitignore`, stays on Kyle's Mac, and is never uploaded. It
is not backed up by GitHub, so keep a copy if it matters.

## Updating the live page

1. Make the change on a new branch (not `main`). `main` is the live page.
2. Check it locally.
3. Bump the `CACHE` name in `sw.js` (v1, v2, ...) so phones pick it up.
4. Merge to `main`, tag the version, push `main` and the tag.

Never push the `local-history-private` branch. It holds the early history
from before the private file existed.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The page. Layout and math. You should not need to edit it. |
| `data/athletes.js` | One block per athlete. Public. This is the file you edit most. |
| `data/private.js` | Flags, full names, athlete notes. Mac only, never uploaded. |
| `sw.js` | Saves the app on the phone for offline use. |
| `data/config.js` | Percentages, rounding, warm-up steps, plate rules. |

## Add an athlete

1. Open `data/athletes.js`.
2. Copy one athlete's whole block, from the opening `{` to the closing `}`.
3. Paste it after the last block. Put a comma between the two blocks.
4. Change the values. Rules:
   - `id`: lowercase first name, no spaces. Must be different for every athlete.
   - `name`: first name only. The full name goes in `private.js`.
   - All weights in kg. Dates as `"YYYY-MM-DD"`.
   - Unknown meet detail: leave it as `""`. The page shows `[Insert ...]`.
   - `historyStart`: sets logged before this date are not charted.
   - `trainingMaxes`: `approved: false` until Kyle approves. Then set
     `approved: true` and `approvedOn` to the date.
   - `priorBests`: one per lift, shown as the dashed line.
   - `log`: one line per top set. `kg` and `reps` are the top set (`reps` is
     what the estimated max uses, so for "last set to 8" use 8). `text` is
     what was done. Leave `note` as `""` here. The athlete's own words go in
     `private.js` under `notes`, keyed `"list|date"`.
   - `log.tngBench`: touch-and-go bench. Listed under the bench chart.
   - `flags`: leave as `[]` here. Flags go in `private.js`. `type` is Injury,
     Fatigue, Mental, or Open question.
   - `meetWeek`: one line per day.
5. Add a block with the same `id` to `data/private.js` for the full name,
   flags, and notes.
6. Save and reload the page. The new name shows in the dropdown.
7. To get it on the phone, follow "Updating the live page."

If the page says it could not load the data, there is a typo in the file.
Usual causes: a missing comma between blocks, or a missing quote.

## Change percentages

Open `data/config.js`. Percentages are whole numbers (88 means 88%).

- Attempt options: `attempts`. Each row is Safe, Moderate, Hard as a percent
  of the training max.
- Warm-ups: `warmups`. Each step is a percent of the selected opener and a
  rep count. `barReps: 0` skips the empty bar.
- Rounding: `roundingKg` (2.5).
- Smallest jump between attempts: `minJumpKg` (2.5).
- Plates: `plates`. `collarKgEach` is 2.5 for comp collars. Set it to 0 if the
  warm-up room uses spring clips. `availableKg` is the plates on hand.

Save and reload.

## How the page works

- Training max edits, attempt picks, and meet day marks save on the device
  you made them on. They do not sync between laptop and phone, and they do not
  change `athletes.js`. To make a training max permanent, change it in
  `athletes.js`.
- If two options round to the same weight, they show as one button
  ("Moderate / Hard: 60").
- A pick turns red if it is not at least 2.5 kg over the attempt before it.
- A set logged under the wrong exercise name can be moved. Under the bench
  chart, each set has a link: "Count as Comp bench" or "Move to Touch-and-go
  bench". Moved sets get a "Moved" tag and an Undo link. The chart and lists
  update right away.
- Each training max shows the heaviest logged single for that lift. If it is
  above the training max, a "Use" link sets the training max to it. The page
  never changes a training max on its own.
- Moves save on the device, like picks. To make one permanent, cut the line
  from one list in `athletes.js` and paste it into the other.
- To let another lift have a second list, add `others` to that lift in
  `config.js` (see Comp bench) and add a list with the same key to `log`.
- Estimated max is Epley: load × (1 + reps / 30). Singles count as the load.
- Meet day mode (button at the top): switches to a dark card built like
  Susan's Worlds card. Tap a lifter's name at the top to switch lifters. Tap
  "Plan view" to go back. It has:
  - Session clock and time since the last warm-up set.
  - Lifters-till-up counter that tells you when each warm-up is due.
  - Live board: paste the LiftingCast board link once.
  - Flight plan: fills in counts and estimated opener times.
  - Attempts: type any weight, or tap one of the small Safe / Moderate / Hard
    numbers under it. Tap the pill for good, miss, or clear.
  - Notes box for each lift. The same notes show in the plan view and on the
    print sheet.
  - Warm-up flow, subtotals between lifts, and the chase calc.
- Meet day attempts start from the plan picks. To bake set attempts for a
  lifter, add `attempts: { squat: [a, b, c], bench: [a, b, c], deadlift:
  [a, b, c] }` to their block in `athletes.js`. "from plan" on a lift reloads
  them.
- A lifter with a set attempt sheet gets `attemptSheet` in their block: for
  each lift, three rows (opener, 2nd, 3rd) of `[Safe, Moderate, Hard]`. It
  replaces the percentage options for that lifter. See Aiden.
- Meet day pacing numbers are in `config.js` under `meetDay`.
- Print handler sheet: one page with attempts and warm-ups. Flags and the
  athlete's notes are left off the sheet on purpose.
