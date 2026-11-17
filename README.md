# Victor Odukoya — Developer Website

Personal website and app showcase built with Astro 5 and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
npm run build
npm run preview
```

Astro writes the static production site to `docs/`. Source pages live in `src/pages/`; do not edit generated files in `docs/` by hand.

## Public pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Apps | `/apps` |
| Pair Journey | `/apps/pair-journey` |
| General privacy policy | `/privacy` |
| Pair Journey privacy policy | `/privacy/pair-journey` |
| Terms | `/terms` |
| Support | `/support` |
| Account deletion | `/delete-account` |
| Impressum | `/impressum` |

## Hosting and publication

- `https://victorodukoya.com` and `https://www.victorodukoya.com` are served by the Cloudflare Pages project `victorodukoya-website`, from the `codex/website-production` branch.
- `https://victorodukoya.github.io` uses the repository's GitHub Pages source, `master` branch and `/docs` directory.
- Publish updates by committing the same site snapshot to `master` and `codex/website-production`. Cloudflare Pages deploys the production branch; GitHub Pages serves the generated `docs/` tree from `master`.

## Current pre-release state

Pair Journey is not yet available in either app store. The site describes the planned launch offer and the currently intended service providers. App-specific pages and disclosures must continue to match the shipped app configuration as the release is completed.
