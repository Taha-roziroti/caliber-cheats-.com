/** Last checked: November 11, 2026. Revalidate before publishing. */
export const caliberPricing = {
  caliber: {
    monthly: { duration: '31 days', price: 35, currency: 'USD' },
    lifetime: { duration: 'Lifetime', price: 150, currency: 'USD' },
  },
  cloudDma: {
    lifetime: { duration: 'Lifetime', price: 50, currency: 'USD' },
    requiredComponents: ['GREENWARD', 'Static Server', 'AWS'] as const,
  },
} as const;

export const siteDisclosure =
  'Some links on this website may be affiliate links. We may earn a commission from qualifying purchases made through these links, at no additional cost to you.';
