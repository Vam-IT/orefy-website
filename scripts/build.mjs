// Builds the website into _site: one prerendered page per language, hydrated by a small production bundle.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = path.join(ROOT, '_site');
const TOKENS = '_ds/orefy-design-system-e8d10855-3b90-4dc9-aff0-c6948544598a/tokens';
const at = (...p) => path.join(ROOT, ...p);
const write = (file, text) => {
  fs.mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true });
  fs.writeFileSync(path.join(OUT, file), text);
};
const fail = (message) => { throw new Error(message); };

// --- render module for Node
const cache = at('node_modules/.cache/render.cjs');
await esbuild.build({
  entryPoints: [at('src/document.jsx')], outfile: cache,
  bundle: true, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic', logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' },
});
process.env.NODE_ENV = 'production';
const { PAGES, renderPage } = createRequire(import.meta.url)(cache);

// --- both languages need the same structure
const shape = (v) => {
  if (Array.isArray(v)) return v.map(shape);
  if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape(v[k])]));
  return typeof v;
};
const [first, ...rest] = PAGES;
for (const page of rest) {
  for (const key of Object.keys({ ...first, ...page })) {
    if (JSON.stringify(shape(first[key])) !== JSON.stringify(shape(page[key]))) fail(`content: "${key}" differs between ${first.lang} and ${page.lang}`);
  }
}

// --- browser bundles
const { metafile } = await esbuild.build({
  entryPoints: PAGES.map((p) => at(`src/client-${p.lang}.jsx`)),
  outdir: path.join(OUT, 'build'), entryNames: '[name]-[hash]', chunkNames: 'chunk-[hash]',
  bundle: true, splitting: true, format: 'esm', minify: true, metafile: true, jsx: 'automatic',
  target: ['es2020', 'safari14'], absWorkingDir: ROOT, legalComments: 'none', logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' },
});

// --- one inline stylesheet, so nothing blocks rendering
const fonts = fs.readFileSync(at('assets/fonts/fonts.css'), 'utf8').replace(/url\('\.\//g, "url('/assets/fonts/");
const tokens = ['colors', 'typography', 'spacing', 'effects']
  .map((n) => fs.readFileSync(at(TOKENS, `${n}.css`), 'utf8').replace(/@import[^\n]+\n/g, ''));
const raw = [fonts, ...tokens, fs.readFileSync(at('src/styles.css'), 'utf8')].join('\n');
const css = (await esbuild.transform(raw, { loader: 'css', minify: true, target: ['safari14'] })).code;

// --- static files: only what the site needs
for (const f of ['imprint.html', 'privacy.html', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'llms-small.txt', 'CNAME', '.well-known', 'assets']) {
  fs.cpSync(at(f), path.join(OUT, f), { recursive: true, filter: (src) => !src.endsWith('.DS_Store') });
}
// The legal pages link the tokens by path.
fs.cpSync(at(TOKENS), path.join(OUT, TOKENS), { recursive: true });
write('.nojekyll', '');
write('Orefy Website.html', '<!DOCTYPE html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=/"><link rel="canonical" href="https://orefy.cloud/"><a href="/">orefy.cloud</a>\n');

// --- pages
for (const copy of PAGES) {
  const [file, info] = Object.entries(metafile.outputs).find(([, o]) => o.entryPoint === `src/client-${copy.lang}.jsx`);
  const url = (f) => `/${path.relative('_site', f)}`;
  const preload = info.imports.filter((i) => i.kind === 'import-statement').map((i) => url(i.path));
  write(path.join(copy.path, 'index.html'), renderPage(copy, { css, script: url(file), preload }));
}

// --- every local reference has to exist
for (const file of ['index.html', 'de/index.html', 'imprint.html', 'privacy.html']) {
  const html = fs.readFileSync(path.join(OUT, file), 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"|url\(["']?([^"')]+)/g)].map((m) => m[1] ?? m[2]);
  for (const [, set] of html.matchAll(/srcset="([^"]+)"/gi)) refs.push(...set.split(',').map((s) => s.trim().split(' ')[0]));
  for (const ref of refs) {
    if (/^([a-z]+:|#|\/\/|%23)/i.test(ref)) continue;
    let target = path.join(OUT, ref.startsWith('/') ? '' : path.dirname(file), ref.split(/[?#]/)[0]);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) fail(`${file}: missing ${ref}`);
  }
}

console.log(`built ${PAGES.map((p) => p.path).join(' and ')} into _site`);
