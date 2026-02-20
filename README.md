# Chance Smith Blog (Hugo)

This site is built with Hugo and Markdown content.

## Requirements

- [Hugo](https://gohugo.io/installation/) available on your PATH
- Node.js (only used for helper scripts in `scripts/`)

## Local development

```sh
npm run develop
```

Hugo dev server defaults to `http://localhost:1313`.

## Build and serve

```sh
npm run build
npm run serve
```

`npm run build` outputs the production site to `public/`.

## Route inventory helper

Generate parity artifacts used by migration checks:

```sh
npm run routes:inventory
```

This refreshes:

- `migration/phase-1-route-inventory.json`
- `migration/phase-1-url-parity-checklist.md`

## Content and template structure

- `content/blog/` - blog posts
- `content/*.md` - static pages
- `layouts/` - Hugo templates
- `static/` - passthrough static files (including `_redirects` and CSS)

## Deployment notes

Netlify should build with Hugo and publish the `public` directory.
