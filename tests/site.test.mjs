import { describe, it, expect } from 'vitest';
import { canonicalUrl, metadataUrls } from '../src/lib/site.mjs';

describe('production metadata in local and hosted previews', () => {
  it('uses the business domain for root and nested pages', () => {
    expect(canonicalUrl('/')).toBe('https://victorodukoya.com/');
    expect(canonicalUrl('/privacy/pairloom')).toBe('https://victorodukoya.com/privacy/pairloom');
  });
  it('removes tracking and fragments from a canonical', () => {
    expect(canonicalUrl('/apps/pairloom?utm_source=test#faq')).toBe('https://victorodukoya.com/apps/pairloom');
  });
  it('cannot leak a preview origin into search metadata', () => {
    expect(canonicalUrl('http://localhost:4321/support?preview=1')).toBe('https://victorodukoya.com/support');
  });
  it('resolves local images without a doubled slash', () => {
    expect(metadataUrls('/support', '/favicon.svg')).toEqual({ canonical: 'https://victorodukoya.com/support', image: 'https://victorodukoya.com/favicon.svg' });
  });
  it('preserves deliberately supplied remote image URLs', () => {
    expect(metadataUrls('/', 'https://images.example.com/logo.png').image).toBe('https://images.example.com/logo.png');
  });
  it('normalizes canonical overrides as well', () => {
    expect(metadataUrls('/preview', '/favicon.svg', '/apps/pairloom#faq').canonical).toBe('https://victorodukoya.com/apps/pairloom');
  });
});
