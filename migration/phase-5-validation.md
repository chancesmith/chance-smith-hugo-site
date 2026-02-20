# Phase 5 Validation (SEO, analytics, and sitemap)

Date: 2026-02-16

## Checks run

1. Hugo build succeeds with Phase 5 changes:

   - Command: `~/go/bin/hugo --cleanDestinationDir`
   - Result: success

2. Required routes still render output files:

   - Checked:
     - `/` -> `public/index.html`
     - `/archive/` -> `public/archive/index.html`
     - sample posts:
       - `/practice-empathy/` -> `public/practice-empathy/index.html`
       - `/2019-03-20-good-semantic-markup/` -> `public/2019-03-20-good-semantic-markup/index.html`
   - Result: all present

3. SEO and analytics head tags render as expected:

   - Checked generated HTML for:
     - `<meta property="og:title">`
     - `<meta property="og:description">`
     - `<meta name="twitter:card">`
     - `<meta name="twitter:creator">`
   - Checked GA script/config includes:
     - `https://www.googletagmanager.com/gtag/js?id=G-FD4ZXPSLB6`
     - `gtag('config', 'G-FD4ZXPSLB6')`
   - Result: present on home and sample post pages

4. Sitemap output is enabled and valid for parity scope:

   - Checked: `public/sitemap.xml` exists
   - Verified includes:
     - `https://chancesmith.io/archive/`
     - `https://chancesmith.io/practice-empathy/`
   - Verified excludes:
     - `_drafts` routes
     - `_ready` routes

5. Blog post URL parity remains unchanged:

   - Command sequence:
     - `~/go/bin/hugo list all --source /workspace > /tmp/hugo-list-phase5.csv`
     - compared `section == blog` + `kind == page` routes to `migration/phase-1-route-inventory.json`
   - Result: `expected=160 got=160 missing=0 extra=0`

6. Previous/next pagination links still render on sample posts:

   - `/practice-empathy/` contains both `rel="prev"` and `rel="next"`
   - `/2019-03-20-good-semantic-markup/` contains both `rel="prev"` and `rel="next"`

7. Redirect rules file unchanged:

   - Command: `git diff -- static/_redirects`
   - Result: no diff

## Notes / known follow-up

- Cloud environment did not have `hugo` on PATH; validation used `~/go/bin/hugo` after installing via `go install`.
- Phase 5 used GA4 measurement ID `G-FD4ZXPSLB6` per request.
