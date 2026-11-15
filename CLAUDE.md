# MASS meet day planner (meet-planner repo)

Powerlifting meet planner for MASS Strength. `index.html` plus
`data/athletes.js`, `data/config.js`, and `sw.js` (offline cache), served via
GitHub Pages from github.com/KTKB2026/meet-planner. Same pattern as the OLY
app in `~/code/emily-meetday`.

Public repo rules: first names only, no bodyweights, no contact info, no
flags, no athlete notes in any committed file. Private data lives in
`data/private.js` (gitignored, Mac only). Before every push, grep the staged
files for surnames and note text.

Workflow rules:
- main is the live branch; Pages serves it. Never build directly on main.
- Build on a feature branch, verify, merge to main, tag (v1, v2, ...), push
  main and the tag.
- Bump the `CACHE` name in `sw.js` on every deploy.
- Never push `local-history-private`. It holds pre-publish history with
  private notes in it.

Athletes are data. Adding one never needs a code change. Training maxes are
Kyle's to set: propose with `approved: false`, wait for his yes.

Global rules: `~/.claude/CLAUDE.md`.
