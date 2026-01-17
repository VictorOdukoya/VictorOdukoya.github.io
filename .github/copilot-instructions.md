# Copilot Instructions

## Project Overview

Personal developer portfolio and app showcase for Victor Odukoya. Static site built with **Astro 5 + TailwindCSS 3 + TypeScript**, deployed to **GitHub Pages** via the `docs/` folder.

## Architecture

### Layout Hierarchy

- `BaseLayout.astro` → Core HTML shell with SEO, dark mode, View Transitions
- `PageLayout.astro` → Wraps BaseLayout + Header/Footer for standard pages
- `LegalLayout.astro` → Extends BaseLayout with prose styling for legal pages (privacy, terms, impressum)

### Component Organization

```
src/components/
├── apps/       # App-specific: FeatureCard, PricingCard, FAQ, StoreBadge
├── common/     # Site-wide: Header, Footer, PageHeader
└── home/       # Homepage: Hero, FeaturedApp, AboutSection
```

### Routing Pattern

Pages use Astro's file-based routing. App-specific content nests under the parent:

- `/apps/pairloom` → `pages/apps/pairloom.astro`
- `/privacy/pairloom` → `pages/privacy/pairloom.astro`

## Key Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to ./docs for GitHub Pages
npm run preview  # Preview production build locally
```

## Styling Conventions

### Tailwind Classes

- Use `dark:` prefix for dark mode variants (class-based, not media query)
- Custom colors: `primary-*` (indigo), `accent-*` (fuchsia) defined in `tailwind.config.mjs`
- Fonts: `font-sans` (Inter), `font-display` (Space Grotesk for headings)

### Global CSS Utilities (src/styles/global.css)

- `.container-custom` → Centered max-width container with responsive padding
- `.section` → Standard section spacing
- `.gradient-bg` → Subtle gradient background
- `.btn-gradient`, `.btn-secondary` → Button styles
- `.card-glass` → Glassmorphic card with backdrop blur
- `.reveal`, `.stagger-*` → Scroll-triggered fade-in animations
- `.prose-legal` → Typography for legal documents

### Animation Pattern

Animations use `reveal` class with optional `stagger-*` delays. The intersection observer in global.css triggers `is-visible` class.

## Dark Mode

Theme toggle in Header.astro. The BaseLayout includes an inline script that runs before render to prevent flash:

```js
const theme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (theme === "dark") document.documentElement.classList.add("dark");
```

## Adding New Apps

1. Create app detail page: `src/pages/apps/[appname].astro`
2. Create app privacy policy: `src/pages/privacy/[appname].astro`
3. Add app card to `src/pages/apps/index.astro`
4. Use existing components: `FeatureCard`, `PricingCard`, `FAQ`, `StoreBadge`

Reference [pairloom.astro](src/pages/apps/pairloom.astro) for the complete app page structure with features, pricing comparison, and FAQ sections.

## Build Output

Astro outputs to `docs/` (configured in `astro.config.mjs`) for GitHub Pages compatibility. Static assets go to `docs/assets/`. Do not manually edit files in `docs/`.

## Legal Pages

All legal pages use `LegalLayout` which provides:

- Standard prose typography via `.prose-legal`
- `lastUpdated` prop for compliance tracking
- Consistent header/footer wrapping

Required pages for App Store compliance: `/privacy`, `/privacy/[app]`, `/terms`, `/impressum`
