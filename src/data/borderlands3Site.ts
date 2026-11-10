import { checkoutPath } from '../config/checkout';
import { MONTHLY_ACCESS_DAYS } from './productPricing';
import { PRICE_LAST_VERIFIED } from './site';
import { caliberPricing } from '../content/caliber-pages';

export const PUBLISHER_DISCLAIMER =
  'Caliber Cheats (caliber-cheats.com) is independent and is not affiliated with, endorsed by, or sponsored by the Caliber game publisher or its licensors. "Caliber" is used only to describe software compatibility with the game.';

export const FEATURE_TOOL_DISCLAIMER =
  'Third-party tools carry enforcement risk. We do not promise undetected status, bypass any anti-cheat (including SARD), or guarantee compatibility after game updates. Verify the seller listing before purchase.';

export const ANTI_CHEAT_NOTICE =
  'Caliber moved from Easy Anti-Cheat (EOS) toward SARD (per the October 6, 2025 publisher announcement). Do not treat outdated “EAC bypass” seller claims as current without verification.';

export const HWID_COMPATIBILITY_NOTICE =
  'HWID spoofer listings on our partner site do not specifically confirm Caliber or SARD support—confirm scope with the seller before buying.';

export const CLOUD_DMA_ADDITIONAL_SERVICES = [
  {
    name: 'GREENWARD',
    summary: 'Separate service required for Cloud DMA activation and routing (purchased outside the Cloud DMA license).',
  },
  {
    name: 'Static Server',
    summary: 'Dedicated static server hosting—priced and bought separately from the Cloud DMA license.',
  },
  {
    name: 'AWS',
    summary: 'AWS resources in the Cloud DMA stack—ongoing or setup fees are not included in the $50 license.',
  },
] as const;

export const BL3_CHECKOUT = checkoutPath('caliber');
export const CLOUD_DMA_CHECKOUT = checkoutPath('cloudDma');
export const HWID_SPOOFER_CHECKOUT = checkoutPath('hwidSpoofer');

export const bl3ProductOffers = [
  {
    name: `Caliber Cheats — Monthly (${caliberPricing.caliber.monthly.duration})`,
    priceUsd: caliberPricing.caliber.monthly.price,
    url: BL3_CHECKOUT,
  },
  {
    name: `Caliber Cheats — ${caliberPricing.caliber.lifetime.duration}`,
    priceUsd: caliberPricing.caliber.lifetime.price,
    url: BL3_CHECKOUT,
  },
] as const;

export const cloudDmaOffer = {
  name: 'Cloud DMA infrastructure license (lifetime)',
  priceUsd: caliberPricing.cloudDma.lifetime.price,
  url: CLOUD_DMA_CHECKOUT,
} as const;

export const hwidSpooferOffer = {
  name: 'HWID Spoofer (lifetime)',
  priceUsd: 50,
  url: HWID_SPOOFER_CHECKOUT,
} as const;

export const bl3Features = [
  'Player ESP with loadout display',
  'Weapon and gadget ESP',
  'Radar overlay',
  'Aimbot with smoothing',
  'Auto-aim assistance and recoil control',
  'Health and armor indicators',
  'Stream-proof mode (per seller listing)',
] as const;

export const bl3ClientRequirements = [
  'Windows 10 or Windows 11 (64-bit)',
  'Cloud DMA environment required for full functionality on supported builds (separate product)',
  'Latest game client updates may change compatibility—verify before launch',
  'SARD anti-cheat is active on Caliber—no bypass claims on this site',
] as const;

export const cloudDmaRequirements = [
  'Windows 10 or Windows 11 64-bit with Hyper-V capable edition',
  'CPU virtualization enabled in firmware and Windows',
  'Minimum 8 GB RAM; 16 GB recommended for the Hyper-V guest',
  'Stable internet connection',
  'Secure Boot and Core Isolation settings compatible with Hyper-V setup',
] as const;

export const monthlyPlanCopy = {
  priceUsd: caliberPricing.caliber.monthly.price,
  durationLabel: `${MONTHLY_ACCESS_DAYS}-day access`,
  renewal: `Listed at $35 per 31-day period on our partner checkout (verified ${PRICE_LAST_VERIFIED}). Recheck before purchasing.`,
} as const;

export const lifetimePlanCopy = {
  priceUsd: caliberPricing.caliber.lifetime.price,
  durationLabel: 'Lifetime access (per seller terms)',
  renewal: `Listed at $150 one-time on our partner checkout (verified ${PRICE_LAST_VERIFIED}). Availability may change when the seller updates offers.`,
} as const;
