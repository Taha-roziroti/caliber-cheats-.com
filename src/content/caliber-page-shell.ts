export type CaliberPageShell = {
  layout: 'product' | 'pricing' | 'article';
  schemaTypes: string[];
  checkout?: 'borderlands-3' | 'cloud-dma' | 'hwid-spoofer';
  articlePublished?: string;
  endCtaLabel?: string;
  endCtaHref?: string;
};

export const CALIBER_PAGE_SHELL: Record<string, CaliberPageShell> = {
  '/': {
    layout: 'product',
    schemaTypes: ['Product', 'Offer', 'BreadcrumbList'],
    checkout: 'borderlands-3',
    endCtaLabel: 'Explore Caliber features and continue to partner checkout when ready.',
    endCtaHref: '/go/caliber/',
  },
  '/caliber-esp/': {
    layout: 'article',
    schemaTypes: ['Article', 'BreadcrumbList'],
    articlePublished: '2026-11-11',
  },
  '/caliber-aimbot/': {
    layout: 'article',
    schemaTypes: ['Article', 'BreadcrumbList'],
    articlePublished: '2026-11-11',
  },
  '/caliber-cheats-price/': {
    layout: 'pricing',
    schemaTypes: ['Article', 'BreadcrumbList'],
    articlePublished: '2026-11-11',
    endCtaLabel: 'Confirm current pricing on partner checkout before you buy.',
    endCtaHref: '/go/caliber/',
  },
  '/caliber-cheats-review/': {
    layout: 'article',
    schemaTypes: ['Article', 'BreadcrumbList'],
    articlePublished: '2026-11-11',
  },
  '/guides/caliber-sard-anti-cheat/': {
    layout: 'article',
    schemaTypes: ['Article', 'BreadcrumbList'],
    articlePublished: '2026-11-11',
  },
};
