import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const source = path.join(publicDir, 'brand', 'caliber-mark.jpg');

if (!fs.existsSync(source)) {
  console.error(`Brand source missing: ${source}`);
  process.exit(1);
}

const meta = await sharp(source).metadata();
const emblemSide = meta.height ?? 120;
const cropWidth = Math.min(emblemSide, meta.width ?? emblemSide);

/** Square crop of the circular Caliber mark (left of the wordmark). */
function emblemSource() {
  return sharp(source).extract({
    left: 0,
    top: 0,
    width: cropWidth,
    height: emblemSide,
  });
}

const ICON_BG = { r: 255, g: 255, b: 255, alpha: 1 };

function squarePng(size) {
  return emblemSource()
    .resize(size, size, {
      fit: 'contain',
      background: ICON_BG,
    })
    .png();
}

await squarePng(180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
await squarePng(32).toFile(path.join(publicDir, 'favicon-32.png'));
await squarePng(16).toFile(path.join(publicDir, 'favicon-16.png'));
await squarePng(32).toFile(path.join(publicDir, 'favicon.ico'));

const png32 = await squarePng(32).toBuffer();
const base64 = png32.toString('base64');
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Caliber Cheats">
  <image href="data:image/png;base64,${base64}" width="32" height="32"/>
</svg>
`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');

console.log('Brand icons generated from public/brand/caliber-mark.jpg');
