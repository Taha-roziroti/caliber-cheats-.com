import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'src/data/products.ts');
let text = fs.readFileSync(file, 'utf8');

if (!text.includes('./placeholders')) {
  text = text.replace(
    "import type { IconName }",
    "import { PLACEHOLDER_IMAGE } from './placeholders';\nimport type { IconName }",
  );
}

text = text.replace(/src: `\/images\/[^`]+`/g, 'src: PLACEHOLDER_IMAGE');
text = text.replace(/src: `\\\$\{gameplay\}[^`]+`/g, 'src: PLACEHOLDER_IMAGE');
text = text.replace(/src: '\/images\/[^']+'/g, 'src: PLACEHOLDER_IMAGE');

fs.writeFileSync(file, text);
console.log('Product image paths normalized to PLACEHOLDER_IMAGE');
