/**
 * Full-site SEO audit (cursor-seo-audit-prompt). Frozen after pass 3 — bugfixes only.
 * Usage: npm run audit [-- --skip-build]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PATH_REDIRECTS } from './redirects.mjs';

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(projectRoot);

const SITE_HOST = 'caliber-cheats.com';
const SITE_URL = `https://${SITE_HOST}`;
const dist = path.join(projectRoot, 'dist');
const skipBuild = process.argv.includes('--skip-build');

/** Pages that must pass full title/description/h1 checks (indexable + key supporting). */
const STRICT_ROUTES = new Set([
  '/',
  '/caliber-esp/',
  '/caliber-aimbot/',
  '/caliber-cheats-price/',
  '/caliber-cheats-review/',
  '/guides/caliber-sard-anti-cheat/',
  '/faq/',
  '/cloud-dma/',
  '/hwid-spoofer/',
  '/guides/cloud-dma-setup/',
  '/about/',
  '/privacy/',
  '/terms/',
  '/support/',
]);

const ASSET_EXT = /\.(xml|webp|png|svg|ico|jpg|jpeg|webmanifest|css|js|txt|woff2?|map)$/i;

const redirectsText = fs.readFileSync(path.join(projectRoot, 'public', '_redirects'), 'utf8');

function isCloudflareRedirectSource(pathname) {
  const bare = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  for (const line of redirectsText.split('\n')) {
    const from = line.trim().split(/\s+/)[0];
    if (!from || from.startsWith('#')) continue;
    if (from === pathname || from === bare) return true;
  }
  return false;
}

const errors = {
  build: [],
  links: [],
  technical: [],
  hygiene: [],
  images: [],
  spelling: [],
};

function fail(category, message) {
  errors[category].push(message);
}

function walkHtmlFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function routeFromFile(file) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404.html';
  const dir = rel.replace(/index\.html$/, '');
  return dir.endsWith('/') ? dir : `${dir}/`;
}

function normalizeInternal(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return null;
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const u = new URL(href);
      if (u.hostname !== SITE_HOST && u.hostname !== `www.${SITE_HOST}`) return null;
      let p = u.pathname;
      if (p !== '/' && !p.endsWith('/') && !ASSET_EXT.test(p)) p = `${p}/`;
      return p;
    } catch {
      return null;
    }
  }
  let p = href.split(/[?#]/)[0];
  if (!p.startsWith('/')) p = `/${p}`;
  if (p !== '/' && !p.endsWith('/') && !ASSET_EXT.test(p)) p = `${p}/`;
  return p;
}

function resolveRedirectChain(pathname) {
  let p = pathname;
  for (let i = 0; i < 6; i++) {
    const bare = p.endsWith('/') && p !== '/' ? p.slice(0, -1) : p;
    const next = PATH_REDIRECTS.get(bare) ?? PATH_REDIRECTS.get(p);
    if (!next) break;
    p = next;
    if (p !== '/' && !p.endsWith('/') && !ASSET_EXT.test(p)) p = `${p}/`;
  }
  return p;
}

function distFileForRoute(route) {
  if (route === '/404.html') return path.join(dist, '404.html');
  if (route === '/') return path.join(dist, 'index.html');
  return path.join(dist, route.slice(1), 'index.html');
}

function distAssetExists(route) {
  const rel = route.startsWith('/') ? route.slice(1) : route;
  return fs.existsSync(path.join(dist, rel));
}

function isRedirectStub(html) {
  return /<title>\s*Redirecting to:/i.test(html);
}

if (!skipBuild) {
  try {
    execSync('npm run build', { stdio: 'pipe', encoding: 'utf8', maxBuffer: 25 * 1024 * 1024 });
  } catch (e) {
    fail('build', `npm run build failed:\n${e.stdout ?? ''}\n${e.stderr ?? e.message}`);
  }
} else if (!fs.existsSync(dist)) {
  fail('build', 'dist/ missing — run without --skip-build');
}

if (errors.build.length === 0) {
  for (const script of ['verify-seo.mjs', 'verify-redirects.mjs']) {
    try {
      execSync(`node scripts/${script}`, { stdio: 'pipe', encoding: 'utf8' });
    } catch (e) {
      const out = `${e.stdout ?? ''}\n${e.stderr ?? ''}`.trim();
      fail('technical', `${script} failed:\n${out}`);
    }
  }
}

const htmlFiles = walkHtmlFiles(dist);

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  const html = fs.readFileSync(file, 'utf8');
  const strict = STRICT_ROUTES.has(route);
  const stub = isRedirectStub(html);

  if (html.includes('template-site.test') || html.includes('example.com')) {
    fail('hygiene', `${route}: contains template/staging domain in output`);
  }
  if (!stub && html.includes('hreflang=')) {
    fail('technical', `${route}: hreflang tags present (site policy: en-US only, no hreflang)`);
  }

  if (strict && !stub) {
    if (!html.match(/<html[^>]*lang=["']en/i)) {
      fail('technical', `${route}: missing html lang`);
    }
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
    const desc = html.match(/name="description" content="([^"]*)"/i)?.[1] ?? '';
    if (!title) fail('technical', `${route}: missing title`);
    else if (title.length < 30 || title.length > 70) {
      fail('technical', `${route}: title length ${title.length} (allowed 30-70): ${title.slice(0, 48)}`);
    }
    if (!desc) fail('technical', `${route}: missing meta description`);
    else if (desc.length < 120 || desc.length > 165) {
      fail('technical', `${route}: description length ${desc.length} (allowed 120-165)`);
    }
    const h1s = html.match(/<h1[\s>]/gi) ?? [];
    if (h1s.length !== 1) {
      fail('technical', `${route}: expected 1 h1, found ${h1s.length}`);
    }
  }

  if (stub) continue;

  const linkAudit = strict || route === '/404.html';
  if (!linkAudit) continue;

  const bodyOnly = html.replace(/<head[\s\S]*?<\/head>/i, '');
  const links = [...bodyOnly.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  for (const href of links) {
    if (href === '#' || href.startsWith('javascript:void')) {
      fail('links', `${route}: placeholder href ${href}`);
      continue;
    }
    if (href.includes('localhost') || href.includes('template-site')) {
      fail('links', `${route}: staging URL ${href}`);
    }
    const internal = normalizeInternal(href);
    if (!internal || ASSET_EXT.test(internal)) continue;

    const final = resolveRedirectChain(internal);
    if (final !== internal) {
      fail('links', `${route}: links to redirect URL ${internal} — use ${final}`);
      continue;
    }

    const target = distFileForRoute(internal);
    if (
      !fs.existsSync(target) &&
      !distAssetExists(internal) &&
      !isCloudflareRedirectSource(internal)
    ) {
      fail('links', `${route}: broken internal page link ${href}`);
    }
  }

  if (strict) {
    const imgs = [...html.matchAll(/<img[^>]+>/gi)];
    for (const imgMatch of imgs) {
      const tag = imgMatch[0];
      const src = tag.match(/\ssrc=["']([^"']+)["']/i)?.[1];
      if (!src || src.startsWith('data:') || !src.startsWith('/')) continue;
      const local = path.join(dist, src.split('?')[0].slice(1));
      if (!fs.existsSync(local) && !src.endsWith('.svg')) {
        fail('images', `${route}: missing image ${src}`);
      }
    }
  }
}

const robots = fs.readFileSync(path.join(projectRoot, 'public', 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  fail('technical', 'robots.txt missing apex sitemap URL');
}

const sitemap = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemap)) fail('technical', 'dist/sitemap.xml missing');
else if (fs.readFileSync(sitemap, 'utf8').includes('example.com')) {
  fail('technical', 'sitemap references example.com');
}

const spellTargets = [
  'src/content/caliber-pages',
  'src/config/pageSeo.ts',
  'src/data/site.ts',
  'src/data/faq.ts',
];
try {
  execSync(`npx cspell --no-progress ${spellTargets.join(' ')}`, {
    stdio: 'pipe',
    encoding: 'utf8',
    cwd: projectRoot,
  });
} catch (e) {
  const out = `${e.stdout ?? ''}\n${e.stderr ?? ''}`.trim();
  fail('spelling', `cspell failed:\n${out.slice(0, 4000)}`);
}

const all = Object.entries(errors).flatMap(([cat, list]) => list.map((m) => ({ cat, m })));
if (all.length) {
  console.error('seo-audit FAILED\n');
  for (const cat of ['build', 'technical', 'links', 'hygiene', 'images', 'spelling']) {
    const list = errors[cat];
    if (!list.length) continue;
    console.error(`## ${cat} (${list.length})`);
    for (const m of list) console.error(`  - ${m}`);
  }
  console.error(`\nTotal: ${all.length} issue(s)`);
  process.exit(1);
}

console.log('seo-audit: OK (build, strict pages, links, hygiene, images)');
