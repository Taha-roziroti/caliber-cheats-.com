import type { CaliberPage } from './types';
import { homePage } from './home';
import { caliberEspPage } from './caliber-esp';
import { caliberAimbotPage } from './caliber-aimbot';
import { caliberCheatsPricePage } from './caliber-cheats-price';
import { caliberCheatsReviewPage } from './caliber-cheats-review';
import { caliberSardPage } from './caliber-sard-anti-cheat';

export type { CaliberPage } from './types';
export { caliberPricing, siteDisclosure } from './pricing';

export const caliberPages: CaliberPage[] = [
  homePage,
  caliberEspPage,
  caliberAimbotPage,
  caliberCheatsPricePage,
  caliberCheatsReviewPage,
  caliberSardPage,
];

export function getCaliberPage(slug: string): CaliberPage | undefined {
  const normalized = slug.endsWith('/') || slug === '' ? slug || '/' : `${slug}/`;
  return caliberPages.find((page) => page.slug === normalized);
}
