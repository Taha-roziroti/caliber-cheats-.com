import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const replacements = [
  [/Borderlands 3 Cheats/g, 'Site Template'],
  [/borderlands3cheats\.com/g, 'example.com'],
  [/Borderlands 3/g, 'Primary product'],
  [/borderlands 3/gi, 'primary product'],
  [/Gearbox|2K/g, 'the publisher'],
  [/Pandora/g, 'the game world'],
  [/Dota 2/g, 'Secondary product'],
  [/Dota players/g, 'Community members'],
  [/dotacheats\.com/g, 'example.com'],
  [/DotaCheats/g, 'Site Template'],
  [/dota cheats/gi, 'product utilities'],
  [/dota 2 cheats/gi, 'secondary product tools'],
  [/VAC/g, 'Anti-cheat'],
  [/Valve/g, 'Platform vendor'],
  [/Invoker|Lion|PA /g, 'Hero '],
];

function applyFile(relPath) {
  const file = path.join(root, relPath);
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [pattern, value] of replacements) {
    next = next.replace(pattern, value);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    console.log('Updated', relPath);
  }
}

const targets = [
  'src/i18n/en.ts',
  'src/config/pageSeo.ts',
  'src/data/faq.ts',
  'src/utils/contentPageJsonLd.ts',
  'src/utils/schema.ts',
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/components/HomeGuidesSection.astro',
  'src/pages/index.astro',
  'src/pages/support.astro',
  'src/pages/faq.astro',
  'src/pages/go/index.astro',
  'src/pages/404.astro',
  'src/components/ProductsSection.astro',
  'src/components/content/ContentPage.astro',
  'public/favicon.svg',
  'public/logo.svg',
  'public/site.webmanifest',
  'public/robots.txt',
  'public/_redirects',
  'scripts/verify-seo.mjs',
  'scripts/generate-sitemaps.mjs',
  'scripts/verify-redirects.mjs',
  'scripts/redirects.mjs',
  'scripts/serve.mjs',
  'scripts/indexnow.mjs',
  'astro.config.mjs',
  'src/data/products.ts',
  'src/data/borderlands3Landing.ts',
  'src/components/borderlands3/CheckoutProductPicker.astro',
  'src/config/checkout.ts',
  'src/config/checkout-redirects.mjs',
];

for (const rel of targets) applyFile(rel);
