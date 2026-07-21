# AGENTS.md

## Purpose

Personal site (chancesmith.io), Hugo + Markdown. Gatsby-to-Hugo migration is done (see `migration/phase-*-validation.md` for history). Your job: content edits, blog posts, layout/design tweaks, site maintenance. Not migration work.

## Stack facts

- Build: `hugo --gc --minify` (`npm run build`). Dev: `npm run develop` (localhost:1313, `--buildDrafts`).
- No Gatsby, no `src/` app code. Node is only for helper scripts in `scripts/`.
- Templates in `layouts/` (`_default/single.html`, `_default/list.html`, `blog/single.html`, `archive/list.html`, `index.html`, `404.html`, partials in `layouts/partials/`).
- Content in `content/`: `blog/` (posts), `_drafts/` (unpublished drafts), top-level `*.md` (static pages), `archive/`, `assets/`.
- Static passthrough in `static/`: CSS (`static/css/global.css`), images, `_redirects`, favicons.
- Deploy via Netlify (`netlify.toml` pins Hugo version).

## Non-negotiables

1. Don't break existing post URLs. Permalinks are path-derived; if ambiguous, set explicit frontmatter `url` rather than guessing.
2. Keep `static/_redirects` behavior intact unless a change is explicitly requested.
3. Don't mass-edit post bodies. Edit only what's needed.
4. No UI redesign without being asked. Reference `DESIGN.md` for the existing design system (Cohere-inspired: `--c-*` color tokens, type scale, breakpoints ≤1100px/≤700px, dark mode via `data-theme="dark"` + `localStorage`).

## Known residual issue

- Historical post markdown still contains legacy `/content/images/...` src references (from the Gatsby days). These are suppressed at render time by `layouts/_default/_markup/render-image.html` so they don't produce broken `<img>` tags in output. Source markdown itself was intentionally left alone (see phase-6 validation notes). Don't "fix" these unless asked — the render hook already handles it.

## Validation checklist for content/layout changes

- `hugo --gc --minify` builds clean.
- Home, archive, and a sample post render.
- Prev/next links on posts still work.
- `git diff -- static/_redirects` empty unless redirects were meant to change.
- If route count matters, compare against `migration/phase-1-route-inventory.json` (160 posts + 12 static pages baseline).

## Definition of done

1. Code committed.
2. Build passes locally.
3. No unintended diff in `static/_redirects` or unrelated content.
