# AGENTS.md

## Purpose

This repo is in the late stage of migrating from Gatsby to Hugo.
Your job as an implementation agent is to finish cleanup and cutover in small, safe steps.

Primary reference: `HUGO_MIGRATION_PLAN.md`.

## Migration principles (keep it simple)

1. Preserve behavior before improving design.
2. Preserve URLs before refactoring content.
3. Prefer boring, explicit templates over abstraction-heavy setups.
4. Make small commits with clear scope.

## Current repo facts you should assume (2026-02-18)

- Migration Phases 1-5 are completed and documented in `migration/phase-*-validation.md`.
- Baseline route inventory is `172` routes (`12` static pages + `160` posts) in `migration/phase-1-route-inventory.json`.
- Hugo parity scaffolding exists (`hugo.toml`, `layouts/`, `content/`, `static/css/global.css`).
- Gatsby stack still exists and has not been removed yet (`gatsby-config.js`, `gatsby-node.js`, `src/pages`, Gatsby scripts/dependencies in `package.json`).
- Redirect rules still exist in `static/_redirects` and are part of parity constraints.
- Static files `static/chancesmith_s.png` and `static/Hire-Me-Kit-Cover.png` exist (they are not currently missing).

## Non-negotiable requirements

1. Do not break existing blog post URLs.
2. Keep these routes working:
   - `/`
   - `/archive/`
   - post routes like `/<slug>/`
   - `/about/`, `/coaching/`, `/glossary/`, `/hire-me-kit/`, `/level-up-mastermind/`, `/pair-coding/`, `/projects/`, `/uses/`, `/workshop-javascript/`
3. Keep `static/_redirects` behavior unchanged on first pass.
4. Do not redesign UI in the parity phase.

## Remaining work (cleanup + cutover)

### Phase 6 - Content and asset cleanup (still open)

- [ ] Fix known typoed internal links:
  - `content/blog/hotels-start-at-zero/index.md`: `/focus-closer-to-zero` -> `/focus-get-closer-to-zero/`
  - `content/blog/wip/index.md`: `/work-out-load` -> `/work-out-loud/`
- [ ] Resolve legacy image references in blog content:
  - 25 posts still reference `/content/images/...`
  - 79 unique `/content/images/...` paths are currently unresolved
  - `static/content/images/` does not exist
- [ ] Fix project image path mismatches:
  - `content/projects.md` currently references `/envie.png`, `/sevco.png`, `/funfact-game.webp`, `/vtx-zoom.png`
  - matching files currently live in `static/projects/` (served as `/projects/...`)
- [ ] Re-run link validation and record results under `migration/`.

### Phase 7 - Cutover and cleanup (still open)

- [ ] Switch local build/develop scripts from Gatsby to Hugo in `package.json`.
- [ ] Update deploy configuration/settings to Hugo (Netlify build command + publish dir).
- [ ] Re-run final route parity checks against `migration/phase-1-route-inventory.json`.
- [ ] Run final QA on required routes:
  - `/`
  - `/archive/`
  - post routes like `/<slug>/`
  - `/about/`, `/coaching/`, `/glossary/`, `/hire-me-kit/`, `/level-up-mastermind/`, `/pair-coding/`, `/projects/`, `/uses/`, `/workshop-javascript/`
- [ ] Remove Gatsby files and dependencies only after successful Hugo cutover.
- [ ] Replace Gatsby starter instructions in `README.md` with Hugo usage.

## File mapping guidance

- Gatsby site metadata -> Hugo config params.
- `src/templates/blog-post.js` -> `layouts/_default/single.html` (or `layouts/blog/single.html`).
- `src/pages/index.js` -> `layouts/index.html`.
- `src/pages/archive.js` -> Hugo section/list page for archive.
- `src/components/seo.js` -> shared partial (for title, description, OG, Twitter).
- `src/styles/global.css` -> Hugo static stylesheet.

## URL safety guidance

- Existing Gatsby slugs are path-derived via `createFilePath`.
- Hugo permalink config must reproduce current URL shape exactly.
- If permalink behavior is ambiguous, use explicit frontmatter `url` values rather than guessing.

## Content safety guidance

- Keep existing markdown content as source of truth.
- Do not mass-edit post bodies unless required for broken links/assets.
- Frontmatter can be normalized carefully (`tags` format consistency), but avoid churn.

## Known issues currently tracked

- Internal links with typos:
  - `/focus-closer-to-zero`
  - `/work-out-load`
- Legacy blog image references:
  - `/content/images/...`
- Project image path mismatches in `content/projects.md`:
  - `/envie.png`
  - `/sevco.png`
  - `/funfact-game.webp`
  - `/vtx-zoom.png`

Track these as explicit migration tasks; do not ignore silently.

## Validation checklist for each iteration

- Build succeeds.
- Home page renders.
- Archive page renders.
- Sample old + new post URLs render.
- Previous/next links on posts work.
- Known broken links/assets count is not increasing (and should trend down).
- Redirects file still present and unchanged unless intentionally updated.

## Definition of done

A migration step is complete only when:

1. Code is committed.
2. Changes are pushed.
3. Route parity checks pass for the affected scope.
4. Notes are added to plan/checklist for any remaining risks.
