/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Caliber Cheats for PC | ESP, Aimbot & Plans',
    description:
      'Compare the listed Caliber ESP, aim, radar and recoil features, review PC requirements, and check current plans before choosing an option.',
  },
  '/caliber-esp/': {
    title: 'Caliber ESP for PC | Player & Weapon Features',
    description:
      'See how the listed Caliber ESP, weapon markers, and radar features are described. Compare product details and check current availability.',
  },
  '/caliber-aimbot/': {
    title: 'Caliber Aimbot for PC | Aim & Recoil Features',
    description:
      'Explore the listed Caliber aimbot, smoothing, aim-assist, and recoil features. Review requirements and check current access options.',
  },
  '/caliber-cheats-price/': {
    title: 'Caliber Cheats Price | Monthly vs. Lifetime',
    description:
      'Compare the listed $35 monthly and $150 lifetime Caliber plans. Review requirements and confirm the current price before checkout.',
  },
  '/caliber-cheats-review/': {
    title: 'Caliber Cheats Review & Feature Comparison',
    description:
      'A transparent look at Caliber cheat features, pricing, and trade-offs. Compare the product details before deciding whether it fits.',
  },
  '/guides/caliber-sard-anti-cheat/': {
    title: 'Caliber SARD Anti-Cheat: Current Overview',
    description:
      'Learn why Caliber moved from Easy Anti-Cheat to SARD, what the official update confirms, and what to ask before buying third-party tools.',
  },
  '/pricing/': {
    title: 'Caliber Cheats Price | Monthly vs. Lifetime',
    description:
      'Compare the listed $35 monthly and $150 lifetime Caliber plans. Review requirements and confirm the current price before checkout.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA — single-PC Hyper-V lifetime license',
    description:
      'Cloud DMA Hyper-V license for a single-PC setup: Windows 10/11, listed $50 lifetime pricing, and how it fits the Caliber product stack.',
  },
  '/hwid-spoofer/': {
    title: 'HWID Spoofer — utility listing (confirm game support)',
    description:
      'HWID spoofer information from our partner listing. Caliber/SARD support is not confirmed on this site—verify with the seller.',
  },
  '/guides/cloud-dma-setup/': {
    title: 'DMA setup guide — Hyper-V, RAM & CPU virtualization',
    description:
      'Step-by-step Cloud DMA setup for Hyper-V on Windows 10/11: enable virtualization, RAM and CPU sizing, and optional static server or AWS add-ons.',
  },
  '/faq/': {
    title: 'Caliber cheats FAQ — plans, Cloud DMA, compatibility',
    description:
      'FAQ on Caliber ESP and aim plans, $35 monthly and $150 lifetime pricing, Cloud DMA Hyper-V requirements, Windows 10/11 support, and checkout delivery.',
  },
  '/terms/': {
    title: 'Terms — affiliate site, licenses, and refunds',
    description:
      'Terms and conditions for using caliber-cheats.com, following partner checkout links, and licensing third-party Caliber PC software listings.',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & contact data',
    description:
      'Privacy policy for caliber-cheats.com: optional analytics, cookies, support email handling, and what we do not store from partner checkout pages.',
  },
  '/about/': {
    title: 'About Caliber Cheats — independent affiliate resource',
    description:
      'Independent Caliber product guides, pricing summaries, and compatibility notes at caliber-cheats.com.',
  },
  '/support/': {
    title: 'Support — checkout and listing questions',
    description:
      'Contact support for Caliber listing questions, Cloud DMA setup, and partner checkout issues. Include your order email and Windows version.',
  },
  '/blog/': {
    title: 'Blog — Caliber and setup notes',
    description: 'Articles and placeholder posts on the caliber-cheats.com blog.',
  },
  '/forum/': {
    title: 'Community forum',
    description: 'Discussion threads on caliber-cheats.com.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
