/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Caliber Cheats for PC | ESP, Aimbot, Radar & Plans',
    description:
      'Caliber cheats for PC: compare listed ESP, aimbot, radar and recoil modules, review Windows requirements, and check monthly or lifetime plans.',
  },
  '/caliber-esp/': {
    title: 'Caliber ESP for PC | Player, Weapon & Radar Tools',
    description:
      'Caliber cheats ESP overview: player loadouts, weapon markers, gadget visibility and radar overlays—what the listing includes before you buy.',
  },
  '/caliber-aimbot/': {
    title: 'Caliber Aimbot for PC | Smoothing, Recoil & Assist',
    description:
      'Caliber cheats aim features explained—smoothing, auto-aim assist and separate recoil controls—with Windows and Cloud DMA requirements noted.',
  },
  '/caliber-cheats-price/': {
    title: 'Caliber Cheats Price | Monthly & Lifetime Plans',
    description:
      'Caliber cheats plans at $35 for 31 days or $150 lifetime, plus separate Cloud DMA pricing. Compare totals, requirements and checkout steps.',
  },
  '/caliber-cheats-review/': {
    title: 'Caliber Cheats Review | Features, Pricing & Setup',
    description:
      'Independent Caliber cheats review of ESP, aimbot, radar and recoil tools, plan lengths, Cloud DMA costs and Windows setup—pros and trade-offs.',
  },
  '/guides/caliber-sard-anti-cheat/': {
    title: 'Caliber SARD Anti-Cheat Guide | EAC Transition Facts',
    description:
      'Caliber cheats buyers: learn why SARD replaced Easy Anti-Cheat, what changed in October 2025, and how to verify compatibility before checkout.',
  },
  '/pricing/': {
    title: 'Caliber Cheats Price | Monthly & Lifetime Plans',
    description:
      'Caliber cheats plans at $35 for 31 days or $150 lifetime, plus separate Cloud DMA pricing. Compare totals, requirements and checkout steps.',
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
    title: 'Site Terms | Affiliate Links, Licenses & Refunds',
    description:
      'Terms and conditions for using caliber-cheats.com, following partner checkout links, and licensing third-party Caliber PC software listings.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Analytics, Cookies & Contact Data',
    description:
      'Privacy policy for caliber-cheats.com: optional analytics, cookies, support email handling, and what we do not store from partner checkout pages.',
  },
  '/about/': {
    title: 'Guides pricing for Caliber Cheats | Independent resource',
    description:
      'Guides pricing for Caliber cheats, Cloud DMA setup walkthroughs and compatibility notes—what caliber-cheats.com publishes and how checkout works.',
  },
  '/support/': {
    title: 'Caliber Support | Checkout, Cloud DMA & Licenses',
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
