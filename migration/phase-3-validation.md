# Phase 3 Validation (blog templates)

Date: 2026-02-15

## Checks run

1. Hugo build succeeds with Phase 3 templates:

   - Command: `/home/ubuntu/go/bin/hugo --source /workspace --destination /tmp/hugo-public-phase3`
   - Result: success (no template lookup warnings)

2. Required Phase 3 routes generate output files:

   - Checked:
     - `/` -> `/tmp/hugo-public-phase3/index.html`
     - `/archive/` -> `/tmp/hugo-public-phase3/archive/index.html`
     - sample posts:
       - `/practice-empathy/`
       - `/2020-02-03-simple-git-team-workflow/`
   - Result: all present

3. Blog URL parity remains unchanged:

   - Command:
     - `/home/ubuntu/go/bin/hugo list all --source /workspace > /tmp/hugo-list-phase3.csv`
     - compared `section == blog` permalinks against `migration/phase-1-route-inventory.json`
   - Result: `expected=160 got=160 missing=0 extra=0`

4. Post previous/next navigation works on sample pages:

   - `/out-of-the-box-interview/` includes previous link to older post and no newer link (newest edge case)
   - `/2012-07-23-this-new-blog-the-seal-breaker/` includes newer link and no previous link (oldest edge case)
   - `/practice-empathy/` includes both previous and next links

## Notes / known follow-up

- Legacy date strings are in `YYYY-MM-DDTHHZ` format, which Hugo cannot parse directly as page dates. To avoid content churn in parity phase, Phase 3 templates sort by `Params.date` (string-safe for this format) and normalize the display date in archive output.
- Static React routes (`/about/`, `/coaching/`, etc.) are still Phase 4 work.
- Known missing asset from existing site state remains: `/chancesmith_s.png` (tracked for content/asset cleanup phase).
