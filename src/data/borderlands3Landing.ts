import type { ProductSlide } from './products';
import {
  BL3_CHECKOUT,
  CLOUD_DMA_CHECKOUT,
  HWID_SPOOFER_CHECKOUT,
} from './borderlands3Site';
import type { IconName } from '../components/icons/types';
import { caliberHeroSlides } from './caliberMedia';

export interface LandingCatalogProduct {
  slug: string;
  label: string;
  title: string;
  href: string;
  buyUrl: string;
  features: string[];
  more: number;
  icon: IconName;
  badge?: string;
  variant?: 'essential' | 'popular' | 'limited';
}

export const borderlandsHeroSlides: ProductSlide[] = [...caliberHeroSlides];

export const borderlandsLandingProducts: LandingCatalogProduct[] = [
  {
    slug: 'borderlands-3',
    label: 'Main plan',
    title: 'Caliber Cheats',
    href: '/caliber-cheats-price/',
    buyUrl: BL3_CHECKOUT,
    badge: 'Popular',
    variant: 'popular',
    icon: 'coreProduct',
    features: [
      'Player ESP',
      'Weapon & gadget ESP',
      'Aimbot & smoothing',
      'Radar overlay',
      'Recoil control',
      'Stream-proof mode',
    ],
    more: 4,
  },
  {
    slug: 'hwid-spoofer',
    label: 'Utility',
    title: 'HWID Spoofer',
    href: '/hwid-spoofer/',
    buyUrl: HWID_SPOOFER_CHECKOUT,
    badge: 'Available',
    variant: 'essential',
    icon: 'shieldCheck',
    features: [
      'Hardware ID reset workflow',
      'Compatibility scan',
      'Cleanup utilities',
      'Post-spoof verification',
    ],
    more: 2,
  },
  {
    slug: 'cloud-dma',
    label: 'Infrastructure',
    title: 'Cloud DMA license',
    href: '/cloud-dma/',
    buyUrl: CLOUD_DMA_CHECKOUT,
    badge: 'Available',
    variant: 'essential',
    icon: 'reqCpu',
    features: [
      'Hyper-V environment',
      'Single-PC setup',
      'Windows 10 & 11',
      'Lifetime license',
    ],
    more: 1,
  },
];

export const borderlandsGuideCards = [
  {
    title: 'Caliber cheats price',
    desc: 'Monthly ($35) and lifetime ($150) plans — verified Nov 11, 2026; recheck before checkout.',
    href: '/caliber-cheats-price/',
    readLabel: 'Open monthly vs lifetime page',
  },
  {
    title: 'Caliber ESP features',
    desc: 'Player, weapon, gadget ESP, and radar on one page for related feature searches.',
    href: '/caliber-esp/',
    readLabel: 'Walk through ESP layers',
  },
  {
    title: 'Caliber SARD anti-cheat',
    desc: 'Why EAC bypass claims may be outdated after the October 2025 announcement.',
    href: '/guides/caliber-sard-anti-cheat/',
    readLabel: 'Follow the SARD timeline',
  },
] as const;
