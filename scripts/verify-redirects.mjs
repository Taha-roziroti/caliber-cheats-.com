import fs from 'node:fs';
import path from 'node:path';
import { PATH_REDIRECTS } from './redirects.mjs';
import { checkoutRedirectLines } from '../src/config/checkout-redirects.mjs';

/** Keep in sync with src/data/site.ts KEYWORD_REDIRECTS */
const KEYWORD_REDIRECTS = [
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

const errors = [];

for (const [from, to] of KEYWORD_REDIRECTS) {
  const mapped = PATH_REDIRECTS.get(from);
  if (mapped !== to) {
    errors.push(`PATH_REDIRECTS["${from}"] expected "${to}" got "${mapped ?? 'undefined'}"`);
  }
}

const redirectsFile = path.join(process.cwd(), 'public', '_redirects');
if (!fs.existsSync(redirectsFile)) {
  errors.push('public/_redirects missing');
} else {
  const text = fs.readFileSync(redirectsFile, 'utf8');
  for (const [from, to] of KEYWORD_REDIRECTS) {
    if (!text.includes(from) || !text.includes(to)) {
      errors.push(`_redirects missing alias ${from} → ${to}`);
    }
  }

  for (const line of checkoutRedirectLines()) {
    const [from, to] = line.split(/\s+/);
    if (!text.includes(from) || !text.includes(to)) {
      errors.push(`_redirects missing checkout ${from} → ${to}`);
    }
  }
}

if (errors.length) {
  console.error('verify-redirects failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-redirects: OK');
