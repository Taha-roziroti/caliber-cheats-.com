import { checkoutPath } from '../config/checkout';
import {
  BL3_CHECKOUT,
  bl3ProductOffers,
  cloudDmaOffer,
  CLOUD_DMA_CHECKOUT,
  hwidSpooferOffer,
  HWID_SPOOFER_CHECKOUT,
} from '../data/borderlands3Site';
import { PRODUCT_ID, SITE_URL } from '../data/site';
import { CALIBER_IMAGE } from '../data/caliberMedia';
import {
  breadcrumbSchema,
  guideArticleSchema,
  productSchema,
  webPageSchema,
  type BreadcrumbItem,
} from './schema';

export function breadcrumbsForRoute(route: string): BreadcrumbItem[] {
  if (route === '/') return [{ name: 'Home', path: '/' }];
  if (route === '/caliber-esp/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Caliber ESP', path: '/caliber-esp/' },
    ];
  }
  if (route === '/caliber-aimbot/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Caliber aimbot', path: '/caliber-aimbot/' },
    ];
  }
  if (route === '/caliber-cheats-price/' || route === '/pricing/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Caliber pricing', path: '/caliber-cheats-price/' },
    ];
  }
  if (route === '/caliber-cheats-review/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Caliber review', path: '/caliber-cheats-review/' },
    ];
  }
  if (route === '/guides/caliber-sard-anti-cheat/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/guides/caliber-sard-anti-cheat/' },
      { name: 'SARD anti-cheat', path: '/guides/caliber-sard-anti-cheat/' },
    ];
  }
  if (route === '/cloud-dma/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Cloud DMA', path: '/cloud-dma/' },
    ];
  }
  if (route === '/hwid-spoofer/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'HWID Spoofer', path: '/hwid-spoofer/' },
    ];
  }
  if (route === '/guides/cloud-dma-setup/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Cloud DMA', path: '/cloud-dma/' },
      { name: 'Setup guide', path: '/guides/cloud-dma-setup/' },
    ];
  }
  if (route === '/guides/borderlands-3-cheat-system-requirements/') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/caliber-cheats-price/' },
      { name: 'Legacy requirements', path: '/guides/borderlands-3-cheat-system-requirements/' },
    ];
  }
  return [{ name: 'Home', path: '/' }];
}

export function jsonLdForContentPage(input: {
  route: string;
  seoTitle: string;
  metaDescription: string;
  schemaTypes: string[];
  articlePublished?: string;
}): Record<string, unknown>[] {
  const breadcrumbs = breadcrumbsForRoute(input.route);
  const blocks: Record<string, unknown>[] = [];

  if (input.schemaTypes.includes('Product')) {
    if (input.route === '/') {
      blocks.push(
        productSchema({
          name: 'Caliber Cheats for PC',
          description: input.metaDescription,
          url: '/',
          offerUrl: BL3_CHECKOUT,
          sku: 'caliber-cheats',
          image: CALIBER_IMAGE.heroBanner,
          productId: PRODUCT_ID,
          offers: [...bl3ProductOffers],
          affiliateCheckout: true,
        }),
      );
    } else if (input.route === '/cloud-dma/') {
      blocks.push(
        productSchema({
          name: 'Cloud DMA for Game Cheats',
          description: input.metaDescription,
          url: '/cloud-dma/',
          offerUrl: CLOUD_DMA_CHECKOUT,
          sku: 'cloud-dma-license',
          productId: `${SITE_URL}/cloud-dma/#product`,
          offers: [
            {
              name: cloudDmaOffer.name,
              priceUsd: cloudDmaOffer.priceUsd,
              url: CLOUD_DMA_CHECKOUT,
            },
          ],
          affiliateCheckout: true,
        }),
      );
    } else if (input.route === '/hwid-spoofer/') {
      blocks.push(
        productSchema({
          name: 'HWID Spoofer',
          description: input.metaDescription,
          url: '/hwid-spoofer/',
          offerUrl: HWID_SPOOFER_CHECKOUT,
          sku: 'hwid-spoofer',
          productId: `${SITE_URL}/hwid-spoofer/#product`,
          offers: [
            {
              name: hwidSpooferOffer.name,
              priceUsd: hwidSpooferOffer.priceUsd,
              url: HWID_SPOOFER_CHECKOUT,
            },
          ],
          affiliateCheckout: true,
        }),
      );
    }
  }

  if (input.schemaTypes.includes('WebPage')) {
    blocks.push(
      webPageSchema({
        name: input.seoTitle,
        description: input.metaDescription,
        url: input.route,
      }),
    );
  }

  if (input.schemaTypes.includes('Article') && input.articlePublished) {
    blocks.push(
      guideArticleSchema({
        name: input.seoTitle,
        description: input.metaDescription,
        url: input.route,
        datePublished: input.articlePublished,
      }),
    );
  }

  if (input.schemaTypes.includes('BreadcrumbList')) {
    blocks.push(breadcrumbSchema(breadcrumbs));
  }

  return blocks;
}

export function defaultEndCtaHref(
  route: string,
  checkout?: 'borderlands-3' | 'cloud-dma' | 'hwid-spoofer',
): string {
  if (checkout === 'cloud-dma') return checkoutPath('cloudDma');
  if (checkout === 'hwid-spoofer') return checkoutPath('hwidSpoofer');
  if (checkout === 'borderlands-3') return checkoutPath('caliber');
  if (route === '/caliber-cheats-price/' || route === '/pricing/') return checkoutPath('caliber');
  if (route === '/cloud-dma/') return checkoutPath('cloudDma');
  if (route === '/hwid-spoofer/') return checkoutPath('hwidSpoofer');
  return checkoutPath('caliber');
}
