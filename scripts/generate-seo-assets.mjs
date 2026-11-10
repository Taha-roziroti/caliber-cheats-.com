import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const ogDir = path.join(root, 'public', 'og');

const outputs = [
  'default.jpg',
  'home.jpg',
  'pricing.jpg',
  'cloud-dma.jpg',
  'cloud-dma-setup.jpg',
  'requirements.jpg',
  'faq.jpg',
];

const rasterOgSources = {
  default: 'public/images/caliber/caliber-esp-wallhack-960.webp',
  home: 'public/images/caliber/caliber-hero-banner-960.webp',
  pricing: 'public/images/caliber/caliber-urban-combat-960.webp',
  requirements: 'public/images/caliber/caliber-snow-combat-960.webp',
};

fs.mkdirSync(ogDir, { recursive: true });

const baseSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <rect x="80" y="80" width="1040" height="470" rx="24" fill="#1e293b" stroke="#475569" stroke-width="3" stroke-dasharray="16 12"/>
  <text x="600" y="300" text-anchor="middle" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="42" font-weight="600">Caliber Cheats</text>
  <text x="600" y="360" text-anchor="middle" fill="#64748b" font-family="system-ui,sans-serif" font-size="22">caliber-cheats.com</text>
</svg>
`;

const svgBuffer = Buffer.from(baseSvg);

async function writeOg(file, sourceKey) {
  const out = path.join(ogDir, file);
  const relativeSource = sourceKey ? rasterOgSources[sourceKey] : null;
  const sourcePath = relativeSource ? path.join(root, relativeSource) : null;

  if (sourcePath && fs.existsSync(sourcePath)) {
    await sharp(sourcePath)
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(out);
  } else {
    await sharp(svgBuffer).jpeg({ quality: 85, mozjpeg: true }).toFile(out);
  }
  console.log(`Wrote ${path.relative(root, out)}`);
}

for (const file of outputs) {
  const key = file.replace('.jpg', '').replace(/-/g, '_');
  const sourceKey =
    file === 'default.jpg'
      ? 'default'
      : file === 'home.jpg'
        ? 'home'
        : file === 'pricing.jpg'
          ? 'pricing'
          : file === 'requirements.jpg'
            ? 'requirements'
            : null;
  await writeOg(file, sourceKey);
}

console.log('SEO OG assets complete.');
