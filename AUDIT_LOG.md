# SEO Audit Log — caliber-cheats.com

## Decisions
- **hreflang removed** — `cursor-seo-audit-prompt.md` requires en-US only; `BaseLayout` + `verify-seo.mjs` updated (conflicts with older SEO-SUPER-BOOSTER hreflang note; playbook to sync later).
- **Internal URLs** — Link directly to `/caliber-cheats-price/` instead of redirecting `/pricing/`.
- **Placeholders** — `template-site.test` / `example.com` replaced with `caliber-cheats.com` in shipped copy.
- **Blocked** — Formal primary keyword map per page not supplied by user; using `SEO_ROUTE_INTENTS` in `src/data/site.ts` until list provided.

## Pass 0 (baseline)
- Created `scripts/seo-audit.mjs`, `npm run audit`.
- Known issues before fixes: hreflang, `/pricing/` internal links, template domains in i18n/products/faq, 404 meta example.com.

## Pass 1 — 2026-11-11
- **Fixed:** hreflang removed; `lang="en-US"`; verify-seo aligned; template domains; meta lengths on strict routes; cloud-dma / hwid / setup content pages; 404 canonical + CTAs; audit script (strict routes, assets, `_redirects` go links, head vs body links).
- **Evidence:** `npm run audit` OK ×3 (build + 2× `--skip-build`, no code changes between runs 2–3).
- **Remaining (judgment / pass 2+):** cspell in audit, per-page REVIEW TABLE, Lighthouse, Playwright spacing shots, keyword map from user, Dota legacy pages (noindex, not in strict set).

## REVIEW TABLE
| Page | Spelling | Spacing | Images/alt | Relevancy | Status | Notes |
|------|----------|---------|------------|-----------|--------|-------|
| `/` | pending | pending | pending | pending | pending | pass 1 |
| `/caliber-esp/` | pending | pending | pending | pending | pending | |
| `/caliber-aimbot/` | pending | pending | pending | pending | pending | |
| `/caliber-cheats-price/` | pending | pending | pending | pending | pending | |
| `/caliber-cheats-review/` | pending | pending | pending | pending | pending | |
| `/guides/caliber-sard-anti-cheat/` | pending | pending | pending | pending | pending | |
| `/faq/` | pending | pending | pending | pending | pending | |
