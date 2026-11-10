import type { CaliberPage } from '../content/caliber-pages';
import { PLACEHOLDER_IMAGE } from './placeholders';

const base = '/images/caliber';

/** First-party Caliber screenshots (exclude non-Caliber assets). */
export const CALIBER_IMAGE = {
  /** Primary homepage / OG marketing hero */
  heroBanner: `${base}/caliber-hero-banner.webp`,
  heroSquad: `${base}/caliber-hero-squad.webp`,
  snowCombat: `${base}/caliber-snow-combat.webp`,
  espWallhack: `${base}/caliber-esp-wallhack.webp`,
  sniperEsp: `${base}/caliber-sniper-esp.webp`,
  playerEspUrban: `${base}/caliber-player-esp-urban.webp`,
  urbanCombat: `${base}/caliber-urban-combat.webp`,
  supplyInteraction: `${base}/caliber-supply-interaction.webp`,
  blogOverview: `${base}/caliber-blog-overview.webp`,
} as const;

/** Page slug → image src list (paired with `imageAltText` on each CaliberPage). */
export const CALIBER_PAGE_IMAGES: Record<string, readonly string[]> = {
  '/': [
    CALIBER_IMAGE.heroBanner,
    CALIBER_IMAGE.playerEspUrban,
    CALIBER_IMAGE.urbanCombat,
    CALIBER_IMAGE.sniperEsp,
  ],
  '/caliber-esp/': [
    CALIBER_IMAGE.espWallhack,
    CALIBER_IMAGE.playerEspUrban,
    CALIBER_IMAGE.urbanCombat,
    CALIBER_IMAGE.snowCombat,
  ],
  '/caliber-aimbot/': [
    CALIBER_IMAGE.sniperEsp,
    CALIBER_IMAGE.espWallhack,
    CALIBER_IMAGE.supplyInteraction,
    CALIBER_IMAGE.heroSquad,
  ],
  '/caliber-cheats-price/': [
    CALIBER_IMAGE.heroSquad,
    CALIBER_IMAGE.urbanCombat,
    CALIBER_IMAGE.snowCombat,
    CALIBER_IMAGE.supplyInteraction,
  ],
  '/caliber-cheats-review/': [
    CALIBER_IMAGE.urbanCombat,
    CALIBER_IMAGE.playerEspUrban,
    CALIBER_IMAGE.sniperEsp,
    CALIBER_IMAGE.espWallhack,
  ],
  '/guides/caliber-sard-anti-cheat/': [
    CALIBER_IMAGE.urbanCombat,
    CALIBER_IMAGE.snowCombat,
    CALIBER_IMAGE.heroSquad,
    CALIBER_IMAGE.supplyInteraction,
  ],
};

export function figuresForCaliberPage(page: CaliberPage): { alt: string; src: string }[] {
  const srcs = CALIBER_PAGE_IMAGES[page.slug] ?? [];
  return page.imageAltText.map((alt, index) => ({
    alt,
    src: srcs[index] ?? PLACEHOLDER_IMAGE,
  }));
}

export const caliberHeroSlides = [
  {
    src: CALIBER_IMAGE.heroBanner,
    alt: 'Four tactical Caliber operators in combat gear with NVGs and assault rifles on a cinematic battlefield',
    caption: 'Caliber Cheats',
    captionDesc: 'Listed ESP, aimbot, and radar modules for Windows PC.',
  },
  {
    src: CALIBER_IMAGE.espWallhack,
    alt: 'Caliber ESP screenshot showing player visibility through walls with snaplines',
    caption: 'Player ESP',
    captionDesc: 'Wallhack-style overlays and distance readouts on supported builds.',
  },
  {
    src: CALIBER_IMAGE.playerEspUrban,
    alt: 'Caliber player ESP highlighting operators in an urban map',
    caption: 'Loadout ESP',
    captionDesc: 'Teammate and threat awareness in TerraGroup-style urban zones.',
  },
  {
    src: CALIBER_IMAGE.sniperEsp,
    alt: 'Caliber aimbot and ESP through sniper scope with enemy boxes',
    caption: 'Aim assistance',
    captionDesc: 'Scoped view with listed aim and ESP markers.',
  },
  {
    src: CALIBER_IMAGE.snowCombat,
    alt: 'Caliber tactical gameplay on a snow-covered industrial map',
    caption: 'Radar & HUD',
    captionDesc: 'Match awareness with compass, objectives, and squad status.',
  },
  {
    src: CALIBER_IMAGE.urbanCombat,
    alt: 'Caliber cheats gameplay in a corporate urban combat zone',
    caption: 'Full feature set',
    captionDesc: 'Tactical third-person Caliber matches on Windows PC.',
  },
] as const;
