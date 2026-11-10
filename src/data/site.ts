/** Canonical SEO / site identity — single source of truth (SEO-SUPER-BOOSTER). */

import { caliberPricing } from '../content/caliber-pages';
import { CALIBER_IMAGE } from './caliberMedia';
export const SITE_HOST = 'caliber-cheats.com';
export const SITE_URL = `https://${SITE_HOST}`;

export const SITE_NAME = 'Caliber Cheats';
export const SITE_BRAND = SITE_NAME;
export const SUPPORT_EMAIL = `support@${SITE_HOST}`;

export const PRODUCT_BASE = '/';
export const TITLE_PREFIX = 'Caliber Cheats for PC';

/** Shared Product @id for home + product JSON-LD graphs. */
export const PRODUCT_ID = `${SITE_URL}/#product`;

export const SITE_PURPOSE =
  'Independent Caliber PC software information: ESP, aim assistance, radar, pricing, and setup requirements for supported Windows builds.';

/** Exactly six knowsAbout terms (structured data). */
export const SITE_ABOUT = [
  'Caliber PC software',
  'Player ESP',
  'Weapon and gadget ESP',
  'Aim assistance features',
  'Cloud DMA',
  'Windows PC compatibility',
] as const;

export const LISTED_PRICES = {
  monthlyUsd: caliberPricing.caliber.monthly.price,
  lifetimeUsd: caliberPricing.caliber.lifetime.price,
  cloudDmaLifetimeUsd: caliberPricing.cloudDma.lifetime.price,
} as const;

export const PRICE_LAST_VERIFIED = '2026-11-11';

/** Copy intent map — not rendered as keyword lists on pages. */
export const SEO_ROUTE_INTENTS: Record<string, string> = {
  '/': 'Caliber cheats, ESP, aimbot, pricing, Windows PC',
  '/caliber-esp/': 'Caliber ESP, wallhack, player ESP, weapon ESP, radar',
  '/caliber-aimbot/': 'Caliber aimbot, soft aim, recoil, aim assist',
  '/caliber-cheats-price/': 'Caliber cheats price, monthly and lifetime plans',
  '/caliber-cheats-review/': 'Caliber cheats review, feature comparison',
  '/guides/caliber-sard-anti-cheat/': 'Caliber SARD anti-cheat, EAC transition',
  '/cloud-dma/': 'Cloud DMA Hyper-V license',
  '/faq/': 'Caliber plans, Cloud DMA, compatibility',
  '/support/': 'checkout and setup support',
};

/** Primary money pages verified in CI. */
export const INDEXABLE_MONEY_ROUTES = [
  '/',
  '/caliber-esp/',
  '/caliber-aimbot/',
  '/caliber-cheats-price/',
  '/caliber-cheats-review/',
  '/guides/caliber-sard-anti-cheat/',
  '/faq/',
] as const;

/** Open Graph JPEG paths (1200×630) under /og/ */
export const OG_IMAGES: Record<string, string> = {
  '/': '/og/home.jpg',
  '/caliber-esp/': '/og/default.jpg',
  '/caliber-aimbot/': '/og/default.jpg',
  '/caliber-cheats-price/': '/og/pricing.jpg',
  '/caliber-cheats-review/': '/og/default.jpg',
  '/guides/caliber-sard-anti-cheat/': '/og/requirements.jpg',
  '/cloud-dma/': '/og/cloud-dma.jpg',
  '/hwid-spoofer/': '/og/default.jpg',
  '/guides/cloud-dma-setup/': '/og/cloud-dma-setup.jpg',
  '/faq/': '/og/faq.jpg',
  default: '/og/default.jpg',
};

export function ogImageForPath(pathname: string): string {
  const path = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
  return OG_IMAGES[path] ?? OG_IMAGES.default!;
}

/** Sitemap image entries (≥1 per indexable URL). */
export const SITEMAP_IMAGES: Record<string, { loc: string; title: string }[]> = {
  '/': [{ loc: `${SITE_URL}${CALIBER_IMAGE.heroBanner}`, title: 'Caliber Cheats tactical squad hero image' }],
  '/caliber-esp/': [{ loc: `${SITE_URL}${CALIBER_IMAGE.espWallhack}`, title: 'Caliber ESP wallhack screenshot' }],
  '/caliber-aimbot/': [{ loc: `${SITE_URL}${CALIBER_IMAGE.sniperEsp}`, title: 'Caliber aimbot scope screenshot' }],
  '/caliber-cheats-price/': [{ loc: `${SITE_URL}/og/pricing.jpg`, title: 'Caliber cheats pricing' }],
  '/caliber-cheats-review/': [{ loc: `${SITE_URL}${CALIBER_IMAGE.urbanCombat}`, title: 'Caliber feature review gameplay' }],
  '/guides/caliber-sard-anti-cheat/': [{ loc: `${SITE_URL}/og/requirements.jpg`, title: 'Caliber SARD anti-cheat guide' }],
  '/faq/': [{ loc: `${SITE_URL}/og/faq.jpg`, title: 'Caliber cheats FAQ' }],
};

/** Legacy keyword URL aliases (also in public/_redirects). */
export const KEYWORD_REDIRECTS: [string, string][] = [
  ['/pricing', '/caliber-cheats-price/'],
  ['/pricing/', '/caliber-cheats-price/'],
  ['/buy-caliber-cheats', '/'],
  ['/buy-caliber-cheats/', '/'],
  ['/caliber-hack', '/'],
  ['/caliber-hack/', '/'],
  ['/borderlands-3-cheats-price', '/caliber-cheats-price/'],
  ['/borderlands-3-cheats-price/', '/caliber-cheats-price/'],
  ['/borderlands-3-esp', '/caliber-esp/'],
  ['/borderlands-3-esp/', '/caliber-esp/'],
  ['/borderlands-3-aimbot', '/caliber-aimbot/'],
  ['/borderlands-3-aimbot/', '/caliber-aimbot/'],
  ['/buy-borderlands-3-cheats', '/'],
  ['/buy-borderlands-3-cheats/', '/'],
  ['/borderlands-3-cheats', '/'],
  ['/borderlands-3-cheats/', '/'],
  ['/cloud-dma-setup', '/guides/cloud-dma-setup/'],
  ['/cloud-dma-setup/', '/guides/cloud-dma-setup/'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/sitemap-0.xml', '/sitemap.xml'],
];
