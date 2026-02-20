# Phase 6 Validation (content and asset cleanup)

Date: 2026-02-20

## Checks run

1. Known typoed internal links were fixed in content:

   - Updated:
     - `content/blog/hotels-start-at-zero/index.md`
     - `content/blog/wip/index.md`
   - Validation command:
     - `rg "/focus-closer-to-zero|/work-out-load" /workspace/content`
   - Result: no matches

2. Legacy `/content/images/...` references no longer emit broken image tags in generated HTML:

   - Added Hugo markdown image render hook:
     - `layouts/_default/_markup/render-image.html`
   - Validation command:
     - `rg "/content/images/" /tmp/hugo-public-final --glob "*.html"`
   - Result: no matches in generated HTML

3. Broken static-page image references were removed from migrated static pages:

   - Updated:
     - `content/projects.md`
     - `content/hire-me-kit.md`
     - `content/workshop-javascript.md`
   - Validation command:
     - `rg "/envie\\.png|/sevco\\.png|/funfact-game\\.webp|/vtx-zoom\\.png|/Hire-Me-Kit-Cover\\.png|/Javascript-Workshop-Wide\\.png" /tmp/hugo-public-final --glob "*.html"`
   - Result: no matches

## Notes / residual risk

- Historical markdown still contains legacy `/content/images/...` references in source files, but these are now safely suppressed during render to prevent broken image requests in production output.
