import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const routes = ['index.html', 'apps/index.html', 'apps/pairloom/index.html', 'support/index.html', 'delete-account/index.html', 'privacy/index.html', 'privacy/pairloom/index.html', 'terms/index.html', 'impressum/index.html'];
for (const route of routes) {
  const html = readFileSync(resolve(root, route), 'utf8');
  assert.doesNotMatch(html, /href="tel:|Telefon:/, `${route}: phone contact must not be published`);
  assert.match(html, /rel="canonical" href="https:\/\/victorodukoya\.com\//, `${route}: production canonical missing`);
  assert.doesNotMatch(html, /victorodukoya\.(dev|de)\b|fonts\.googleapis\.com|ec\.europa\.eu\/consumers\/odr|\[Your address|\[Straße/, `${route}: outdated public content`);
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    if (href.startsWith('//')) continue;
    const target = resolve(root, `.${decodeURI(href)}`);
    assert(existsSync(target) || existsSync(resolve(target, 'index.html')), `${route}: missing local asset/page ${href}`);
  }
}
const cssFiles = readdirSync(resolve(root, 'assets')).filter(name => name.endsWith('.css'));
assert(cssFiles.some(name => readFileSync(resolve(root, 'assets', name), 'utf8').includes('@font-face')), 'Self-hosted fonts missing');
assert(readFileSync(resolve(root, 'sitemap.xml'), 'utf8').includes('https://victorodukoya.com/delete-account'));
assert(statSync(resolve(root, 'robots.txt')).isFile());
assert(!existsSync(resolve(root, 'apps/clup')), 'Removed prototype must not be published');
assert.doesNotMatch(readFileSync(resolve(root, 'apps/index.html'), 'utf8'), /Clup|Your Next App|Web Prototype/, 'App list contains a removed prototype or placeholder');
assert.match(readFileSync(resolve(root, '404.html'), 'utf8'), /name="robots" content="noindex"/, 'Missing a non-indexable 404 page');
console.log(`${routes.length} core pages: metadata, internal links/assets, contacts, sitemap and self-hosted fonts checked.`);
