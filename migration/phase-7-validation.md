# Phase 7 Validation (cutover and cleanup)

Date: 2026-02-20

## Checks run

1. Hugo build succeeds after cutover cleanup:

   - Command:
     - `/home/ubuntu/go/bin/hugo --source /workspace --destination /tmp/hugo-public-final --cleanDestinationDir`
   - Result: success

2. Blog route parity remains intact against baseline inventory:

   - Compared Hugo `list all` blog page routes with `migration/phase-1-route-inventory.json` (`routes.posts`)
   - Result: `expected_posts=160 actual_posts=160 missing_posts=0 extra_posts=0`

3. Required static routes are generated:

   - Checked baseline static routes from `migration/phase-1-route-inventory.json` (`routes.staticPages`) against `/tmp/hugo-public-final`
   - Result: `12/12` route files present
   - Netlify-style 404 output:
     - `404.html` present

4. Redirect rules file is unchanged:

   - Command:
     - `git diff -- static/_redirects`
   - Result: no diff

5. Legacy JS-framework build artifacts/files were removed from tracked source:

   - Removed:
     - `gatsby-browser.js`
     - `gatsby-config.js`
     - `gatsby-node.js`
     - `src/**`
     - `yarn.lock` (stale lockfile)
   - Validation command:
     - `git ls-files | rg "^(gatsby-|src/)"`
   - Result: no matches

## Notes

- Runtime/build scripts are now Hugo-only in `package.json`.
- Netlify build settings are now codified in `netlify.toml`.
- `README.md` now documents Hugo workflows.
