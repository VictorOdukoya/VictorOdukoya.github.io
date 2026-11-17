# Victor Odukoya — Developer Website

Personal developer website and app information pages, built with Astro and Tailwind CSS.

## Local development

Requires Node.js 24.

```sh
npm ci
npm run dev
```

## Build and release

- Cloudflare Pages project: `victorodukoya-website`
- Production branch: `codex/website-production`
- Build output: `dist/`

Cloudflare runs linting, tests, the static build, and generated-site checks before publishing. Configuration and release notes are in [DOMAIN_SETUP.md](./DOMAIN_SETUP.md).

## Pages

- `/` — developer home
- `/apps/` — app directory
- `/apps/pair-journey/` — Pair Journey information
- `/privacy/` — general privacy information
- `/privacy/pair-journey/` — Pair Journey privacy policy
- `/terms/` — pre-release terms and purchase information
- `/support/` — support contact
- `/delete-account/` — account and data deletion
- `/impressum/` — legal notice

## Adding an app

Add the app to `src/pages/apps/index.astro`, create its detail page under `src/pages/apps/`, and add its privacy information under `src/pages/privacy/` before release.

© 2026 Victor Odukoya. All rights reserved.
