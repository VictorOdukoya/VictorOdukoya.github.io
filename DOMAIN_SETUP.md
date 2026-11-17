# Website hosting and release status

Last reviewed: 17 November 2026

## Current hosting

- Public site: `https://victorodukoya.com/`
- Cloudflare Pages project: `victorodukoya-website`
- Production branch: `codex/website-production`
- Build output directory: `dist`
- Node version: 24
- Build command: `npm run lint && npm test && npm run build && npm run check:site`
- Configured hostnames: `victorodukoya.com`, `www.victorodukoya.com`, and the Cloudflare Pages hostname

Cloudflare Pages builds and publishes commits from the production branch. The domain uses Cloudflare DNS; STRATO continues to provide domain registration and mailboxes. Website content is public.

## Current website scope

The site publishes the developer home page, app directory, Pair Journey product information, support contact, account deletion instructions, privacy information, terms, and legal notice. The app is pre-release. Store availability and purchase details must be updated when the app is approved for release.

Only the current canonical pages are published. Old app-specific paths are removed and do not redirect.

## Release procedure

1. Make the content or code change on a clean release branch.
2. Run the Cloudflare build command above, or push the release branch and inspect the Cloudflare build result.
3. Confirm the deployment corresponds to the intended commit.
4. Open the home page and changed routes on the public domain; check navigation, links, and HTTPS.

## Outstanding launch work

- Finalize and review the app privacy notice against the shipped SDKs, AI provider, ads, authentication, analytics, purchases, and retention behavior.
- Replace pre-release wording and store availability after both store listings are ready.
- Complete the app-store release checklist and device acceptance for the exact uploaded builds.

This document records the website hosting configuration. It is not a legal review or confirmation that the app is ready for store release.
