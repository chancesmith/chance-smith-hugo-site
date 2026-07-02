# Chance Smith Blog (Hugo)

Built with Hugo and Markdown.

## Requirements

- Hugo (see `Brewfile`)
- Node.js (only for helper scripts in `scripts/`)

## Local setup

```sh
brew bundle        # installs Hugo
npm run develop    # starts dev server at http://localhost:1313
```

## Build

```sh
npm run build      # outputs production site to public/
npm run serve      # serve the built output locally
```

## Route inventory helper

```sh
npm run routes:inventory
```

Refreshes:

- `migration/phase-1-route-inventory.json`
- `migration/phase-1-url-parity-checklist.md`

## Structure

- `content/blog/` — blog posts
- `content/*.md` — static pages
- `layouts/` — Hugo templates
- `static/` — passthrough files (CSS, `_redirects`)

## Deployment

Netlify reads `netlify.toml` and pins the Hugo version automatically. No manual configuration needed.
