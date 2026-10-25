# Victor Odukoya — Developer Website

Personal website and app showcase built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Current domain and hosting preparation: [DOMAIN_SETUP.md](./DOMAIN_SETUP.md). Node 24, static output `dist/`.

## 🚀 Quick Start

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
website/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── apps/        # App-related components
│   │   ├── common/      # Shared components (Header, Footer)
│   │   └── home/        # Homepage components
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## 🌐 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with featured app |
| Apps | `/apps` | App directory |
| Pairloom | `/apps/pairloom` | Pairloom app detail page |
| Privacy | `/privacy` | General privacy policy |
| Privacy (Pairloom) | `/privacy/pairloom` | Pairloom-specific privacy |
| App information | `/terms` | Pre-release availability and purchase information |
| Support | `/support` | Contact and FAQ |
| Impressum | `/impressum` | German legal notice |

## 🎨 Features

- ✅ Dark/Light mode with system preference detection
- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized with Open Graph tags
- ✅ Accessible (WCAG 2.1 guidelines)
- ✅ Fast (static site generation)
- Static build for Cloudflare Pages

## 🚢 Deployment

Cloudflare Pages uses `codex/website-production`, build output `dist/`, and Node 24.
The build command runs lint, tests, the static build and generated-page checks; see [DOMAIN_SETUP.md](./DOMAIN_SETUP.md).
The retained GitHub Pages workflow is a separate legacy/manual deployment path, not the Cloudflare pipeline.

## ✏️ Customization

### Update Personal Information

1. **Footer links:** Edit `src/components/common/Footer.astro`
2. **Header navigation:** Edit `src/components/common/Header.astro`
3. **About section:** Edit `src/components/home/AboutSection.astro`
4. **Impressum:** Edit `src/pages/impressum.astro` (publish only explicitly approved contact details)

### Add New App

1. Add app to the list in `src/pages/apps/index.astro`
2. Create detail page: `src/pages/apps/[app-name].astro`
3. Add app-specific privacy policy if needed

### Update Colors

Edit `tailwind.config.mjs` to change the color palette.

## 📝 TODO Before Launch

- [ ] Replace placeholder screenshots with real ones
- [ ] Update store badge links when apps are published
- [x] Public business information approved; telephone number excluded at the owner's request
- [ ] Add real profile photo (optional)
- [ ] Update social media links in Footer
- [ ] Connect the custom domain and validate HTTPS and business e-mail

## 📄 License

© 2026 Victor Odukoya. All rights reserved.
