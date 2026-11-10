# SEO Audit Log — caliber-cheats.com

## Decisions
- **hreflang removed** — single-locale `en-US` per audit prompt; `verify-seo.mjs` enforces no hreflang.
- **Internal URLs** — Link directly to `/caliber-cheats-price/` instead of redirecting `/pricing/`.
- **Placeholders** — `template-site.test` / `example.com` removed from strict-route output.
- **Strict routes** — Scriptable meta/link/image checks apply to 14 indexable/support URLs; redirect stub pages excluded.
- **Blocked** — User-supplied primary keyword map (using `SEO_ROUTE_INTENTS`); Lighthouse 95+ (no CI runner); Playwright viewport screenshots (not installed); Dota product routes cleanup (noindex, out of strict set).

## Pass 0 (baseline)
- Created `scripts/seo-audit.mjs`, `npm run audit`.
- Baseline failures: hreflang, template domains, `/pricing/` links, short meta on utility pages.

## Pass 1 — 2026-11-11
- **Fixed:** hreflang, meta lengths, utility page copy, 404 canonical, audit link crawler, Caliber domains in copy.
- **Evidence:** `npm run audit` OK ×3.

## Pass 2 — 2026-11-11
- **Fixed:** `cspell` + `cspell.json` in audit pipeline; `Primary product` → Caliber on home/legal/footer; footer SARD link; package devDep `cspell`.
- **Evidence:** `npm run audit` OK (full build + cspell), then 2× `--skip-build`.

## Final verification (3× clean audit)
1. Pass 2 full `npm run audit` — exit 0 (includes `npm run build`, verify-seo, verify-redirects, cspell).
2–3. `--skip-build` — exit 0, no code changes between runs 2–3.

## REVIEW TABLE
| Page | Spelling | Spacing | Images/alt | Relevancy | Status | Notes |
|------|----------|---------|------------|-----------|--------|-------|
| `/` | pass | pass | pass | pass | pass | Caliber hero + content modules; alts match `caliberMedia`. |
| `/caliber-esp/` | pass | pass | pass | pass | pass | Intent: ESP; copy matches `caliber-esp.ts`. |
| `/caliber-aimbot/` | pass | pass | pass | pass | pass | Intent: aimbot; no HWID bypass claims. |
| `/caliber-cheats-price/` | pass | pass | pass | pass | pass | $35/$150 + affiliate disclosure. |
| `/caliber-cheats-review/` | pass | pass | pass | pass | pass | Comparison intent satisfied. |
| `/guides/caliber-sard-anti-cheat/` | pass | pass | pass | pass | pass | SARD/EAC educational; no bypass promise. |
| `/faq/` | pass | pass | pass | pass | pass | FAQPage JSON-LD only here; Caliber answers. |

Judgment passes: manual review of built HTML + source TS for money URLs; spacing uses existing design system (no unexplained gaps flagged). Playwright screenshots **blocked** (tooling not in repo).

## Final report summary
- **Passes completed:** 2 (+ baseline).
- **Fixed categories:** links/redirects, technical SEO, hygiene, images on strict routes, spelling (cspell on caliber content).
- **Blocked:** primary keyword spreadsheet from user; Lighthouse mobile/desktop 95+; Playwright layout screenshots; legacy Dota `/products/*` template copy (noindex).
- **Unverified:** live external affiliate URLs (network-dependent).
- **Commands:** `npm run build`, `npm run audit`, `npm run audit -- --skip-build`.
