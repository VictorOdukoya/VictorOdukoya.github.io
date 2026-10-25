import type { APIRoute } from 'astro';
import { canonicalUrl } from '../lib/site.mjs';

const paths = ['/', '/apps', '/apps/pairloom', '/support', '/impressum', '/privacy', '/privacy/pairloom', '/terms', '/delete-account'];

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${canonicalUrl(path)}</loc></url>`).join('')}</urlset>`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
