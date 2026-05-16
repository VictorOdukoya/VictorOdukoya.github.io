# Victor Odukoya — Developer Website

Personal website and app showcase built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

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
| Clup Prototype | `/apps/clup/app/home` | Embedded static tennis club app prototype |
| Privacy | `/privacy` | General privacy policy |
| Privacy (Pairloom) | `/privacy/pairloom` | Pairloom-specific privacy |
| Terms | `/terms` | Terms of service |
| Support | `/support` | Contact and FAQ |
| Impressum | `/impressum` | German legal notice |

## 🎨 Features

- ✅ Dark/Light mode with system preference detection
- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized with Open Graph tags
- ✅ Accessible (WCAG 2.1 guidelines)
- ✅ Fast (static site generation)
- ✅ GitHub Pages deployment

## 🚢 Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch.

### Embedded Clup Prototype

1. Open the `clup-app` repository next to this website repo.
2. Run `npm run publish:github-pages-local` there.
3. Run `npm run build` in this repo.
4. Push this repo to `main` to publish the updated prototype under `/apps/clup/app/home`.

### Manual Setup

1. Update `astro.config.mjs` with your site URL:
   ```javascript
   site: 'https://yourusername.github.io',
   // or with custom domain:
   site: 'https://victorodukoya.dev',
   ```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

3. Push to `main` to trigger deployment

## ✏️ Customization

### Update Personal Information

1. **Footer links:** Edit `src/components/common/Footer.astro`
2. **Header navigation:** Edit `src/components/common/Header.astro`
3. **About section:** Edit `src/components/home/AboutSection.astro`
4. **Impressum:** Edit `src/pages/impressum.astro` (add your real data)

### Add New App

1. Add app to the list in `src/pages/apps/index.astro`
2. Create detail page: `src/pages/apps/[app-name].astro`
3. Add app-specific privacy policy if needed

### Update Colors

Edit `tailwind.config.mjs` to change the color palette.

## 📝 TODO Before Launch

- [ ] Replace placeholder screenshots with real ones
- [ ] Update store badge links when apps are published
- [ ] Fill in Impressum with real business information
- [ ] Add real profile photo (optional)
- [ ] Update social media links in Footer
- [ ] Configure custom domain (optional)

## 📄 License

© 2026 Victor Odukoya. All rights reserved.
