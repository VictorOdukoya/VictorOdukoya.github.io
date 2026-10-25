export const siteOrigin = 'https://victorodukoya.com';

/** Keep preview hostnames, query parameters and fragments out of canonical URLs. */
export function canonicalUrl(pathname) {
  const url = new URL(pathname, siteOrigin);
  url.protocol = 'https:';
  url.host = new URL(siteOrigin).host;
  url.port = '';
  url.search = '';
  url.hash = '';
  return url.href;
}

export function metadataUrls(pathname, imagePath, canonicalOverride) {
  return {
    canonical: canonicalUrl(canonicalOverride || pathname),
    image: new URL(imagePath, siteOrigin).href,
  };
}
