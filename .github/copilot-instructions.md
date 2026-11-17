# Website project instructions

## Current product and hosting

- This repository contains Victor Odukoya's public developer website and the Pair Journey app pages.
- The app's user-facing name is **Pair Journey**. The site does not retain old product routes or compatibility redirects.
- The custom domain is served by the Cloudflare Pages project `victorodukoya-website`, using the `codex/website-production` branch.
- GitHub Pages also serves the generated `docs/` directory from `master`.

## Source layout

- Astro file-based routes are in `src/pages/`.
- Shared layouts are in `src/layouts/`; components are in `src/components/`.
- Static source assets are in `public/`.
- `docs/` is generated output. Update source files, then rebuild; never hand-edit generated HTML or asset files.

## Important routes

- `/apps` and `/apps/pair-journey`
- `/privacy` and `/privacy/pair-journey`
- `/terms`, `/support`, `/delete-account`, and `/impressum`

## Commands

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The production build writes to `docs/`. Keep privacy and legal statements consistent with the current app configuration and clearly distinguish planned features from live services.
