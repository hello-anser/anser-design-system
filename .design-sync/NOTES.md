# design-sync notes — @anser/ui

- This library was purpose-built (2026-07-13/14) from the Anser brand sources in the parent folder (`04-Brand-Anser.md`, `17-CTO-Handover-and-Quickstart.md` Part 6.1, `anser-ui-mockup.html`). The mockup is the visual target; token values come verbatim from Part 6.1.
- Build is plain `npm run build` (esbuild JS + concatenated plain CSS + tsc declarations). No monorepo, no workspace siblings. Entry for the converter: `--entry ./dist/index.js`.
- Fonts are self-hosted via `@fontsource/inter` and `@fontsource/jetbrains-mono` devDependencies; `scripts/build.mjs` copies the woff2 files into `dist/fonts/` and `src/styles/fonts.css` carries the `@font-face` rules. The converter re-homes them to `fonts/fonts.css` — the "7 dead @font-face block(s) dropped" build line is that re-homing, not a loss.
- `cardMode` overrides in config: Table/Input/Pipeline `column` (wide stories), Modal `single` + viewport (fixed-position overlay).
- Preview harness gotcha: the story wrapper carries an identity CSS `transform`, which makes it the containing block for `position: fixed` — a fixed overlay's `inset: 0` height collapses to the wrapper's. `modal.css` sets an explicit `height: 100vh` on the overlay as the fallback; any future overlay/drawer component needs the same.
- Pipeline steps need `flex: 1 0 auto` + `min-width` — with `flex: 1; min-width: 0` six steps collapse to letter-stacked slivers in a grid cell.
- No context providers needed: tokens are plain CSS on `:root`/`[data-theme]`, so `cfg.provider` stays unset. `AnserProvider` is just a themed wrapper div.
- Known render warns:
  - `[RENDER_THIN] components/overlay/Modal/Modal.html: rendered height is 0px` — benign by construction: the overlay is `position: fixed` (out of flow), so measured content height is 0 while the screenshot shows a full scrim + centered dialog. Confirmed visually 2026-07-14.

## Re-sync risks

- The preview `.tsx` files import from `@anser/ui`; the package never self-installs, so the `--entry` mapping is load-bearing on every run.
- If components are added, register them in `src/index.ts` AND give them a `docs/<Name>.md` with `category:` frontmatter — undocumented exports land in the "general" group (this bit SidebarItem/SidebarSection on the first run).
- Playwright chromium was installed 2026-07-14 into ~/.cache/ms-playwright by the `.ds-sync` staging install; the render check depends on it.
- The parent Anser folder is not a git repo; only `design-system/` is version-controlled. Brand-source drift (e.g. new palette values in the CTO handover) will not show up in this repo's diffs — check the parent docs on major re-syncs.
