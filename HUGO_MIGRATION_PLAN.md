# Hugo Migration Plan (from current Gatsby setup)

## Goal

Move this site from Gatsby to Hugo with minimal complexity while preserving:

- Existing blog URLs
- Existing top-level page URLs
- Existing content and markdown links
- Existing redirect behavior (`static/_redirects`)

This plan favors a "same content, simpler stack" migration, not a redesign.

## Current state snapshot (what exists today)

### Runtime and tooling

- Gatsby `^4.25.7`, React `^17`
- Build scripts in `package.json`: `gatsby develop`, `gatsby build`, `gatsby serve`
- Netlify currently builds and hosts this blog
- No CI workflow files in repo

### Content model

- Blog content source: `content/blog` (configured in `gatsby-config.js`)
- Blog posts: **160 markdown files** in mixed formats:
  - `content/blog/<slug>/index.md`
  - `content/blog/<date>-<slug>.md`
  - `content/blog/<date>-<slug>.markdown`
- Frontmatter commonly includes:
  - `title`
  - `date`
  - `tags` (string or list)
  - `layout: post` (legacy key, optional for Hugo)

### URL behavior in Gatsby

`gatsby-node.js` builds post pages using `createFilePath`, so post URLs are path-derived:

- `content/blog/practice-empathy/index.md` -> `/practice-empathy/`
- `content/blog/autonomy.md` -> `/autonomy/`
- `content/blog/2020-02-03-simple-git-team-workflow.markdown` -> `/2020-02-03-simple-git-team-workflow/`

### Templates and pages

- Blog post template: `src/templates/blog-post.js`
  - title, author line, body HTML, previous/next links
- Home page: `src/pages/index.js`
  - hero text + latest 3 post excerpts
- Archive page: `src/pages/archive.js`
  - full post list with dates
- Additional static pages in `src/pages`:
  - `/about/`
  - `/coaching/`
  - `/glossary/`
  - `/hire-me-kit/`
  - `/level-up-mastermind/`
  - `/pair-coding/`
  - `/projects/`
  - `/uses/`
  - `/workshop-javascript/`
  - `/404/`

### Site-level behavior

- SEO meta via `react-helmet` component (`src/components/seo.js`)
- Google Analytics via `gatsby-plugin-google-gtag` (`G-386642925`)
- Sitemap via `gatsby-plugin-sitemap`
- Netlify plugin + static redirects in `static/_redirects`
- PWA-related plugins (manifest/offline) enabled in Gatsby

### Known migration risks found in current content

1. Some markdown links likely contain typos:
   - `/focus-closer-to-zero` (post folder is `focus-get-closer-to-zero`)
   - `/work-out-load` (likely `/work-out-loud`)
2. Several legacy posts reference `/content/images/...` assets, but `content/images` is not present in repo.
3. Some page assets referenced in React appear missing in repo:
   - `/chancesmith_s.png`
   - `Hire-Me-Kit-Cover.png`

These risks already exist today and should be tracked during migration.

## Keep-it-simple migration strategy

1. Build Hugo templates that match current behavior first.
2. Keep markdown where it is during first pass.
3. Preserve URLs with explicit permalink strategy (avoid "close enough" routing).
4. Delay visual redesign and advanced features until after parity.

## Target Hugo architecture

Suggested structure:

- `hugo.toml` (site config)
- `content/blog/**` (reuse existing posts)
- `content/<page>.md` for former React static pages
- `layouts/`
  - `_default/baseof.html`
  - `_default/single.html`
  - `_default/list.html`
  - `index.html`
  - `404.html`
  - `partials/seo.html`
  - `partials/header.html`
  - `partials/footer.html`
- `assets/` (optional if using Hugo Pipes)
- `static/` (carry over `_redirects`, `robots.txt`, images)

## Route mapping plan

| Current Gatsby route | Hugo target | Notes |
|---|---|---|
| `/` | `/` | Keep hero + latest 3 post excerpts |
| `/archive/` | `/archive/` | Use custom list page |
| `/<post-slug>/` | `/<post-slug>/` | Must remain identical |
| `/about/` | `/about/` | Move to markdown content page |
| `/coaching/` | `/coaching/` | Move to markdown content page |
| `/glossary/` | `/glossary/` | Convert React glossary component to markdown sections/anchors |
| `/hire-me-kit/` | `/hire-me-kit/` | Convert to content page, preserve CTA links |
| `/level-up-mastermind/` | `/level-up-mastermind/` | Convert to content page |
| `/pair-coding/` | `/pair-coding/` | Convert to content page |
| `/projects/` | `/projects/` | Convert to content page or data-driven partial |
| `/uses/` | `/uses/` | Convert to content page |
| `/workshop-javascript/` | `/workshop-javascript/` | Convert to content page |
| `/404/` | `/404.html` | Hugo custom 404 template |

Keep redirects from `static/_redirects` exactly as-is on first pass.

## Phased execution checklist

### Phase 1 - Baseline and parity guardrails

- [x] Capture current route inventory (all posts + static pages)
- [x] Build a URL parity checklist file for verification

Phase 1 outputs:

- `migration/phase-1-route-inventory.json` (172 total routes: 12 static pages, 160 post routes)
- `migration/phase-1-url-parity-checklist.md` (checkbox verification list for all current routes)

### Phase 2 - Initialize Hugo

- [x] Add Hugo config (`hugo.toml`) with site metadata from `gatsby-config.js`
- [x] Configure permalinks for blog posts to match existing URLs
- [x] Enable Goldmark and syntax highlighting defaults
- [x] Keep `static/robots.txt` and `static/_redirects`

Phase 2 outputs:

- `hugo.toml` with site metadata, blog permalink strategy, Goldmark, and syntax highlighting defaults
- Verified blog URL parity (`160/160` post routes) against `migration/phase-1-route-inventory.json`
- Added a temporary frontmatter date fallback (`:filename`, `:fileModTime`) to avoid mass-editing legacy date formats in parity phase

### Phase 3 - Blog templates

- [x] Implement base layout and typography styles
- [x] Implement single post template with previous/next navigation
- [x] Implement home template showing latest 3 posts
- [x] Implement archive page listing all posts by date desc

Phase 3 outputs:

- Added Hugo layout templates:
  - `layouts/_default/baseof.html`
  - `layouts/partials/blog-post.html`
  - `layouts/index.html`
  - `layouts/archive/list.html`
  - fallback templates for `single`, `post`, and generic `list`
- Added shared Hugo stylesheet at `static/css/global.css`
- Added `content/archive/_index.md` to preserve the `/archive/` route
- Preserved blog ordering intent without mass content edits by sorting posts with legacy frontmatter date strings (`Params.date`) in templates
- Verified blog URL parity remains `160/160` against `migration/phase-1-route-inventory.json`

### Phase 4 - Static pages migration

- [x] Convert each React page in `src/pages` to Hugo content + layout
- [x] Replace React-only components (`Product`, `GlossaryTerm`) with markdown or Hugo partials/shortcodes
- [x] Preserve anchors used by existing links (example: glossary hash links)

Phase 4 outputs:

- Added Hugo content pages for static routes:
  - `content/about.md`
  - `content/coaching.md`
  - `content/glossary.md`
  - `content/hire-me-kit.md`
  - `content/level-up-mastermind.md`
  - `content/pair-coding.md`
  - `content/projects.md`
  - `content/uses.md`
  - `content/workshop-javascript.md`
  - `content/404.md` (to preserve `/404/`)
- Added a static Netlify-compatible 404 page at `static/404.html` (to preserve `/404.html`)
- Preserved glossary hash-link compatibility by rendering explicit term anchors and alias anchors in `content/glossary.md` (for existing links like `#3Ws`, `#3ws`, `#5on2`, `#busco`, `#bus-coefficiency`, `#essential-release`, and `#surface-over-mass`)
- Updated Hugo rendering for non-blog pages:
  - `layouts/_default/single.html` now renders content without duplicating page `<h1>`
  - `layouts/_default/baseof.html` suppresses shell header title on Hugo 404 kind
- Added utility/static page styles needed for migrated content in `static/css/global.css`

### Phase 5 - SEO, analytics, and sitemap

- [x] Port default/meta tags from `src/components/seo.js`
- [x] Add GA script for `G-FD4ZXPSLB6`
- [x] Enable Hugo sitemap and verify path/output
- [x] Verify Open Graph and Twitter meta tags

Phase 5 outputs:

- Added shared SEO partial at `layouts/partials/seo.html` with:
  - page title + title template behavior
  - description fallback behavior
  - Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`)
  - Twitter tags (`twitter:card`, `twitter:creator`, `twitter:title`, `twitter:description`)
  - optional `keywords` meta output when `keywords` are provided in frontmatter
- Updated `layouts/_default/baseof.html` to render the SEO partial and Hugo's internal GA template in `<head>`
- Configured GA in `hugo.toml` via Hugo services:
  - `[services.googleAnalytics].ID = "G-FD4ZXPSLB6"`
- Explicitly set sitemap filename in `hugo.toml` (`sitemap.xml`) and verified output at `public/sitemap.xml`
- Added section-level build exclusions for migration staging content:
  - `content/_drafts/_index.md`
  - `content/_ready/_index.md`
  This keeps `_drafts` and `_ready` routes out of generated output and sitemap in parity builds.

### Phase 6 - Content and asset cleanup

- [ ] Validate internal links and fix known typos
- [ ] Decide strategy for missing legacy assets:
  - recover files, or
  - replace/remove broken references, or
  - add redirects/placeholders
- [ ] Normalize frontmatter where needed (`tags` consistency)

### Phase 7 - Cutover and cleanup

- [ ] Compare generated route list against baseline
- [ ] Run final QA for mobile and desktop
- [ ] Switch Netlify build command from Gatsby to Hugo
- [ ] Remove Gatsby dependencies/files after successful cutover

## Definition of done

Migration is complete when:

1. All current public routes resolve in Hugo.
2. Blog post URLs remain unchanged.
3. Home, archive, and post page behavior match current site intent.
4. `_redirects` behavior is preserved.
5. No critical broken internal links remain.
6. Gatsby is no longer required for build/deploy.

## Optional fast-follow improvements (after parity)

- Add RSS feed if desired
- Add image processing with Hugo Pipes
- Refine typography and design system tokens
- Add lightweight link checker in CI
