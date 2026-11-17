# Victor Odukoya Developer Website — Implementation Plan

**Project:** Personal developer website with app showcase  
**Tech Stack:** Astro 5 + Tailwind CSS 3 + TypeScript
**Hosting:** Cloudflare Pages for `victorodukoya.com`; GitHub Pages mirror from `master/docs`
**Created:** January 16, 2026

**Current release state — November 17, 2026:** The website presents Pair Journey and its planned offer (free local learning with ads; Pro planned at €3.99/month in Germany with 150 AI requests per UTC month; no annual launch plan). The website is pre-release and public. Current routes are `/apps/pair-journey` and `/privacy/pair-journey`; retired app routes and prototype content were removed, with no replacement redirects. Privacy and terms pages describe planned service behavior; keep them aligned with the final app configuration before store release. The local static build succeeded. Release tests remain scheduled for the final app verification phase. The outdated EU ODR-platform link was removed under [Regulation (EU) 2024/3228](https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng).

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Information Architecture](#2-information-architecture)
3. [Design System](#3-design-system)
4. [Page Specifications](#4-page-specifications)
5. [Components](#5-components)
6. [Technical Setup](#6-technical-setup)
7. [Content Strategy](#7-content-strategy)
8. [SEO & Performance](#8-seo--performance)
9. [Accessibility](#9-accessibility)
10. [Implementation Phases](#10-implementation-phases)

---

## 1. Project Overview

### Goals

- **Primary:** Provide legal pages (Privacy, Terms, Impressum) required for App Store/Play Store
- **Secondary:** Showcase Pair Journey and future apps professionally
- **Tertiary:** Establish personal brand as indie developer

### Target Audience

1. **App Store reviewers** — Need legal compliance
2. **Potential users** — Want to learn about the app before downloading
3. **Future employers/clients** — May discover through app credits

### Success Metrics

- [ ] All legal pages accessible and valid
- [ ] Mobile-first, responsive design
- [ ] Lighthouse score > 95 (Performance, Accessibility, SEO)
- [ ] Dark/Light mode support
- [ ] < 100KB initial page load

---

## 2. Information Architecture

### Site Map

```
victorodukoya.com
│
├── / (Home)
│   ├── Hero Section (Developer intro)
│   ├── Featured App (Pair Journey highlight)
│   ├── About Section (Brief bio)
│   └── Footer (Links, Copyright)
│
├── /apps (App Directory)
│   ├── App Grid/List
│   └── Filter by platform (future)
│
├── /apps/pair-journey (Pair Journey Landing)
│   ├── Hero with App Icon & Badges
│   ├── Screenshot Carousel
│   ├── Features Grid
│   ├── Pricing Comparison
│   ├── FAQ Accordion
│   └── Download CTA
│
├── /privacy (General Privacy Policy)
│   └── Links to app-specific policies
│
├── /privacy/pair-journey (Pair Journey Privacy Policy)
│   └── Full GDPR-compliant policy
│
├── /terms (Terms of Service)
│   └── General terms for all apps
│
├── /support (Support & Contact)
│   ├── FAQ
│   ├── Contact Form or Email
│   └── App-specific support sections
│
└── /impressum (German Legal Notice)
    └── Required business information
```

### URL Strategy

| Page | URL | Notes |
|------|-----|-------|
| Home | `/` | Main landing |
| Apps | `/apps` | Directory |
| Pair Journey | `/apps/pair-journey` | App detail |
| Privacy | `/privacy` | General |
| Pair Journey Privacy | `/privacy/pair-journey` | App-specific |
| Terms | `/terms` | All apps |
| Support | `/support` | Contact |
| Impressum | `/impressum` | German legal |

---

## 3. Design System

### Brand Identity

**Developer Brand:** Victor Odukoya — Clean, modern, trustworthy

**Pair Journey Brand:** Educational, fun, engaging

### Color Palette

```css
/* Primary Colors - Matching Pair Journey */
--color-primary-50: #eef2ff;
--color-primary-100: #e0e7ff;
--color-primary-200: #c7d2fe;
--color-primary-300: #a5b4fc;
--color-primary-400: #818cf8;
--color-primary-500: #6366f1;  /* Main Primary */
--color-primary-600: #4f46e5;
--color-primary-700: #4338ca;
--color-primary-800: #3730a3;
--color-primary-900: #312e81;

/* Secondary Colors */
--color-secondary-500: #8b5cf6;  /* Violet */

/* Success/Accent */
--color-success-500: #22c55e;

/* Neutral Colors */
--color-gray-50: #f8fafc;
--color-gray-100: #f1f5f9;
--color-gray-200: #e2e8f0;
--color-gray-300: #cbd5e1;
--color-gray-400: #94a3b8;
--color-gray-500: #64748b;
--color-gray-600: #475569;
--color-gray-700: #334155;
--color-gray-800: #1e293b;
--color-gray-900: #0f172a;
--color-gray-950: #020617;

/* Semantic Colors */
--color-background-light: #ffffff;
--color-background-dark: #0f172a;
--color-surface-light: #f8fafc;
--color-surface-dark: #1e293b;
--color-text-light: #1e293b;
--color-text-dark: #f8fafc;
--color-text-muted-light: #64748b;
--color-text-muted-dark: #94a3b8;
```

### Typography

```css
/* Font Stack */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Type Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System

```css
/* Based on 4px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Breakpoints

```css
--bp-sm: 640px;    /* Mobile landscape */
--bp-md: 768px;    /* Tablet */
--bp-lg: 1024px;   /* Desktop */
--bp-xl: 1280px;   /* Large desktop */
--bp-2xl: 1536px;  /* Extra large */
```

---

## 4. Page Specifications

### 4.1 Home Page (`/`)

**Purpose:** Introduce Victor as developer, showcase Pair Journey

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
│ Logo/Name          Navigation              Theme Toggle     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HERO SECTION                                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  👋 Hi, I'm Victor                                      │ │
│ │                                                         │ │
│ │  I build apps that make                                 │ │
│ │  learning fun.                                          │ │
│ │                                                         │ │
│ │  Software Developer · App Creator · Learning Enthusiast │ │
│ │                                                         │ │
│ │  [View My Apps]  [Get in Touch]                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ FEATURED APP SECTION                                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  🚀 Featured App                                        │ │
│ │                                                         │ │
│ │  ┌──────────────────────┬──────────────────────────┐   │ │
│ │  │                      │                          │   │ │
│ │  │   📱 iPhone Mockup   │  PAIR JOURNEY               │   │ │
│ │  │   with screenshot    │                          │   │ │
│ │  │                      │  Master any topic        │   │ │
│ │  │                      │  through fun pair-       │   │ │
│ │  │                      │  matching games.         │   │ │
│ │  │                      │                          │   │ │
│ │  │                      │  ✓ AI-powered catalogs   │   │ │
│ │  │                      │  ✓ 4 game modes          │   │ │
│ │  │                      │  ✓ Progress tracking     │   │ │
│ │  │                      │                          │   │ │
│ │  │                      │  [Learn More →]          │   │ │
│ │  └──────────────────────┴──────────────────────────┘   │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ABOUT SECTION (Brief)                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  👨‍💻 About Me                                           │ │
│ │                                                         │ │
│ │  I'm a software developer passionate about creating     │ │
│ │  tools that make a difference. Currently building       │ │
│ │  mobile apps that help people learn more effectively.   │ │
│ │                                                         │ │
│ │  Based in Germany 🇩🇪                                    │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
│ © 2026 Victor Odukoya                                       │
│ Impressum · Privacy · Terms                                 │
└─────────────────────────────────────────────────────────────┘
```

**Interactions:**
- Theme toggle with smooth transition
- Hover effects on buttons and cards
- Scroll animations (subtle fade-in)

---

### 4.2 Apps Page (`/apps`)

**Purpose:** List all apps (currently just Pair Journey, but scalable)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PAGE HEADER                                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  My Apps                                                │ │
│ │  Apps I've built to solve real problems.                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ APP GRID                                                    │
│ ┌─────────────────────┐  ┌─────────────────────┐           │
│ │                     │  │                     │           │
│ │  ┌───┐              │  │  ┌───┐              │           │
│ │  │ P │  Pair Journey    │  │  │ ? │  Coming Soon │           │
│ │  └───┘              │  │  └───┘              │           │
│ │                     │  │                     │           │
│ │  Learn with pairs   │  │  Your next app      │           │
│ │                     │  │  could be here      │           │
│ │  iOS · Android      │  │                     │           │
│ │                     │  │                     │           │
│ │  [View Details →]   │  │                     │           │
│ │                     │  │                     │           │
│ └─────────────────────┘  └─────────────────────┘           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Note:** "Coming Soon" card is subtle/grayed out, shows growth potential without looking empty.

---

### 4.3 Pair Journey Page (`/apps/pair-journey`)

**Purpose:** Detailed app landing page, convince users to download

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (with back to /apps link)                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ APP HERO                                                    │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  ┌────────┐                                             │ │
│ │  │  ICON  │  Pair Journey                                   │ │
│ │  └────────┘  Learn Anything with Pairs                  │ │
│ │                                                         │ │
│ │  Master any topic through fun, engaging pair-matching   │ │
│ │  games. Create custom catalogs or let AI do it for you. │ │
│ │                                                         │ │
│ │  [⬇️ App Store]  [▶️ Google Play]                        │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ SCREENSHOTS SECTION                                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  📱 See it in action                                    │ │
│ │                                                         │ │
│ │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐           │ │
│ │  │  1  │  │  2  │  │  3  │  │  4  │  │  5  │           │ │
│ │  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘           │ │
│ │                                                         │ │
│ │  < Prev                                    Next >       │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ FEATURES GRID                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  ✨ Features                                            │ │
│ │                                                         │ │
│ │  ┌────────────────┐  ┌────────────────┐                │ │
│ │  │ 🎮             │  │ 🤖             │                │ │
│ │  │ Four Game      │  │ AI-Powered     │                │ │
│ │  │ Modes          │  │ Creation       │                │ │
│ │  │                │  │                │                │ │
│ │  │ Study, Race,   │  │ Generate       │                │ │
│ │  │ Tempo, Focus   │  │ catalogs on    │                │ │
│ │  │ — pick your    │  │ any topic      │                │ │
│ │  │ pace           │  │ instantly      │                │ │
│ │  └────────────────┘  └────────────────┘                │ │
│ │                                                         │ │
│ │  ┌────────────────┐  ┌────────────────┐                │ │
│ │  │ 📊             │  │ ☁️             │                │ │
│ │  │ Progress       │  │ Cloud Sync     │                │ │
│ │  │ Tracking       │  │                │                │ │
│ │  │                │  │                │                │ │
│ │  │ XP, streaks,   │  │ Your data,     │                │ │
│ │  │ levels, and    │  │ always with    │                │ │
│ │  │ achievements   │  │ you (Pro)      │                │ │
│ │  └────────────────┘  └────────────────┘                │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PRICING SECTION                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  💎 Simple Pricing                                      │ │
│ │                                                         │ │
│ │  ┌─────────────────────┐  ┌─────────────────────┐      │ │
│ │  │                     │  │  ⭐ RECOMMENDED     │      │ │
│ │  │       FREE          │  │                     │      │ │
│ │  │                     │  │       PRO           │      │ │
│ │  │  • All game modes   │  │                     │      │ │
│ │  │  • Unlimited        │  │  Everything in      │      │ │
│ │  │    catalogs         │  │  Free, plus:        │      │ │
│ │  │  • No AI in Free    │  │                     │      │ │
│ │  │  • Ad-supported     │  │  • 150 AI requests/mo│      │ │
│ │  │                     │  │  • Cloud Sync       │      │ │
│ │  │                     │  │  • No Ads           │      │ │
│ │  │       $0            │  │                     │      │ │
│ │  │                     │  │  €3.99/mo           │      │ │
│ │  │                     │  │  no annual plan     │      │ │
│ │  │                     │  │  (planned)          │      │ │
│ │  │                     │  │                     │      │ │
│ │  └─────────────────────┘  └─────────────────────┘      │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ FAQ SECTION                                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  ❓ Frequently Asked Questions                          │ │
│ │                                                         │ │
│ │  ┌─────────────────────────────────────────────────┐   │ │
│ │  │ What is Pair Journey?                            [+] │   │ │
│ │  └─────────────────────────────────────────────────┘   │ │
│ │  ┌─────────────────────────────────────────────────┐   │ │
│ │  │ Is my data private?                          [+] │   │ │
│ │  └─────────────────────────────────────────────────┘   │ │
│ │  ┌─────────────────────────────────────────────────┐   │ │
│ │  │ Can I use it offline?                        [+] │   │ │
│ │  └─────────────────────────────────────────────────┘   │ │
│ │  ┌─────────────────────────────────────────────────┐   │ │
│ │  │ How do I cancel my subscription?             [+] │   │ │
│ │  └─────────────────────────────────────────────────┘   │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ DOWNLOAD CTA                                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  Ready to start learning?                               │ │
│ │                                                         │ │
│ │  [⬇️ App Store]  [▶️ Google Play]                        │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### 4.4 Privacy Policy (`/privacy` & `/privacy/pair-journey`)

**Purpose:** Legal compliance (GDPR, CCPA, App Store requirements)

**Structure:**
```
1. Introduction
   - Last updated date
   - Company/developer info
   
2. Information We Collect
   - Account identifiers and profile details returned by Apple or Google sign-in
   - Feature data shared when sign-in, AI, advertising, purchases, or cloud backup is used
   - Technical or diagnostic information only where an enabled service collects it
   
3. How We Use Your Information
   - Provide and improve services
   - Process subscriptions
   - Send notifications (if opted in)
   
4. Third-Party Services
   - Supabase (database, authentication, storage)
   - RevenueCat (subscription management)
   - Google AdMob (advertising for free users)
   - OpenAI GPT-6 Luna Fast (planned AI provider; hosted setup and retention not confirmed)
   
5. Data Storage and Security
   - Where data is stored (Supabase/AWS)
   - Cloud backup is not end-to-end encrypted; provider retention remains to be verified
   
6. Your Rights
   - Access your data
   - Delete your data
   - Export your data
   - Opt-out of marketing
   
7. Age and Audience
   - Initial release intended for adults aged 18 and over
   - No in-app age self-declaration; store settings remain to be confirmed
   
8. International Users
   - GDPR rights for EU users
   - CCPA rights for California users
   
9. Changes to This Policy
   - Notification process
   
10. Contact Information
    - Email for privacy inquiries
```

---

### 4.5 Terms of Service (`/terms`)

**Current planned offer (not yet live):** Free learning without AI; Pro planned at €3.99/month in Germany with 150 AI requests per UTC month; no annual plan at launch.

**Structure:**
```
1. Acceptance of Terms
2. Description of Service
3. User Accounts
4. Subscriptions and Payments
5. User Content and Catalogs
6. Prohibited Uses
7. Intellectual Property
8. Disclaimer of Warranties
9. Limitation of Liability
10. Termination
11. Governing Law
12. Changes to Terms
13. Contact Information
```

---

### 4.6 Support (`/support`)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ SUPPORT HEADER                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │  📧 Support                                             │ │
│ │                                                         │ │
│ │  Need help? I'm here for you.                           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ CONTACT OPTIONS                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  ┌─────────────────────┐  ┌─────────────────────┐      │ │
│ │  │ 📧                  │  │ ⏱️                  │      │ │
│ │  │ Email               │  │ Response Time       │      │ │
│ │  │                     │  │                     │      │ │
│ │  │ support@            │  │ Usually within      │      │ │
│ │  │ victorodukoya.com  │  │ 24-48 hours         │      │ │
│ │  │                     │  │                     │      │ │
│ │  │ [Send Email]        │  │                     │      │ │
│ │  └─────────────────────┘  └─────────────────────┘      │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ COMMON QUESTIONS                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │  Common Questions                                       │ │
│ │                                                         │ │
│ │  [Accordion FAQ items]                                  │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### 4.7 Impressum (`/impressum`)

**Purpose:** German legal notice. Check the current applicability of DDG § 5 and MStV § 18 before publication.

**Required Information:**
```
IMPRESSUM

Angaben gemäß § 5 DDG

Victor Odukoya
Softwareentwicklung

[Straße und Hausnummer]
[PLZ Ort]
Deutschland

Kontakt:
E-Mail: [email]
Telefon: [optional but recommended]

Umsatzsteuer-ID:
Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
[Wenn vorhanden, sonst weglassen]

Verantwortlich für journalistisch-redaktionelle Inhalte nach § 18 Abs. 2 MStV, soweit einschlägig:
Victor Odukoya
[Adresse wie oben]

Verbraucherstreitbeilegung:
[Angaben vor Veröffentlichung anhand der für den Anbieter geltenden Pflichten prüfen]

Haftung für Inhalte:
[Standard disclaimer text]

Haftung für Links:
[Standard disclaimer text]

Urheberrecht:
[Standard copyright text]
```

---

## 5. Components

### Component Library

| Component | Description | Used On |
|-----------|-------------|---------|
| `Header` | Navigation, logo, theme toggle | All pages |
| `Footer` | Copyright, legal links | All pages |
| `ThemeToggle` | Dark/light mode switch | Header |
| `Button` | Primary, secondary, ghost variants | All pages |
| `Card` | Content container with shadow | Apps, Features |
| `AppCard` | App preview with icon, name, platforms | Apps page |
| `AppHero` | Large app presentation with badges | App detail |
| `FeatureCard` | Icon + title + description | App detail |
| `PricingCard` | Plan details with feature list | App detail |
| `FAQ` | Accordion-style Q&A | App detail, Support |
| `ScreenshotCarousel` | Swipeable image gallery | App detail |
| `StoreBadge` | App Store / Play Store buttons | Multiple |
| `PageHeader` | Title + subtitle for pages | All content pages |
| `LegalContent` | Styled legal text | Privacy, Terms |
| `ContactCard` | Email/support info | Support |

### Component Specifications

#### Button Component
```
Variants:
- Primary: Filled, primary color
- Secondary: Outlined, primary color
- Ghost: Text only, subtle hover

Sizes:
- sm: py-2 px-3 text-sm
- md: py-2.5 px-4 text-base (default)
- lg: py-3 px-6 text-lg

States:
- Default
- Hover (slight lift, darker bg)
- Active (pressed state)
- Disabled (50% opacity, no interactions)
- Loading (spinner)
```

#### Card Component
```
Variants:
- Default: White bg, subtle shadow
- Elevated: Larger shadow, slight hover lift
- Outlined: Border instead of shadow
- Interactive: Hover effects, cursor pointer

Dark mode:
- Default: gray-800 bg
- Borders: gray-700
```

---

## 6. Technical Setup

### Project Structure

```
website/
├── .github/
│   └── workflows/
│       └── check.yml            # Repository checks
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png             # Open Graph image
│   └── images/
│       ├── pair-journey/
│       │   ├── icon.png
│       │   ├── logo.svg
│       │   └── screenshots/
│       │       ├── screenshot-1.png
│       │       ├── screenshot-2.png
│       │       └── ...
│       └── profile/
│           └── victor.jpg       # Optional profile photo
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ThemeToggle.astro
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── PageHeader.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedApp.astro
│   │   │   └── AboutSection.astro
│   │   ├── apps/
│   │   │   ├── AppCard.astro
│   │   │   ├── AppHero.astro
│   │   │   ├── FeatureCard.astro
│   │   │   ├── FeatureGrid.astro
│   │   │   ├── PricingCard.astro
│   │   │   ├── PricingSection.astro
│   │   │   ├── ScreenshotCarousel.astro
│   │   │   ├── FAQ.astro
│   │   │   └── StoreBadge.astro
│   │   ├── support/
│   │   │   └── ContactCard.astro
│   │   └── legal/
│   │       └── LegalContent.astro
│   ├── content/
│   │   ├── apps/
│   │   │   └── pair-journey.md      # App content in Markdown
│   │   ├── legal/
│   │   │   ├── privacy.md
│   │   │   ├── privacy-pair-journey.md
│   │   │   └── terms.md
│   │   └── config.ts            # Content collections config
│   ├── data/
│   │   ├── apps.ts              # App data (metadata, features)
│   │   ├── faq.ts               # FAQ content
│   │   └── navigation.ts        # Nav links
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML wrapper, meta, scripts
│   │   ├── PageLayout.astro     # Standard page with header/footer
│   │   └── LegalLayout.astro    # Legal pages with TOC
│   ├── pages/
│   │   ├── index.astro
│   │   ├── apps/
│   │   │   ├── index.astro
│   │   │   └── pair-journey.astro
│   │   ├── privacy/
│   │   │   ├── index.astro
│   │   │   └── pair-journey.astro
│   │   ├── terms.astro
│   │   ├── support.astro
│   │   └── impressum.astro
│   └── styles/
│       └── global.css           # Tailwind imports + custom CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

### Dependencies

```json
{
  "dependencies": {},
  "devDependencies": {
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "sharp": "^0.33.0",
    "typescript": "^5.8.0"
  }
}
```

### Astro Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://victorodukoya.com',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
```

### Publication

- `master` builds the GitHub Pages mirror from the generated `docs/` folder.
- `codex/website-production` is the production source branch for the Cloudflare Pages project `victorodukoya-website` and the custom domain.
- Keep both branches on the same source snapshot when publishing website changes.

---

## 7. Content Strategy

### Tone of Voice

- **Professional** but approachable
- **Clear** and concise
- **Friendly** without being overly casual
- **Confident** but humble, with a focus on useful learning tools

### Key Messages

1. **Home:** "I build apps that make learning fun"
2. **Pair Journey:** "Master any topic through engaging pair-matching games"
3. **About:** "Software developer passionate about creating impactful tools"

### Content to Prepare

| Content | Status | Notes |
|---------|--------|-------|
| Hero tagline | ⬜ | Keep short, memorable |
| About bio | ⬜ | 2-3 sentences |
| Pair Journey description | ⬜ | From App Store listing |
| Feature descriptions | ⬜ | 4 main features |
| FAQ content | ⬜ | 5-8 questions |
| Privacy Policy | ✅ | Pre-release policy; update against final provider, consent, and retention configuration before store release |
| Terms of Service | ✅ | Pre-release terms; update against final products and store terms before store release |
| Impressum | ✅ | Business details are populated; no personal mobile number is shown |

---

## 8. SEO & Performance

### Meta Tags (per page)

```html
<!-- Primary -->
<title>Victor Odukoya — App Developer</title>
<meta name="description" content="..." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="/og-image.png" />
```

### Performance Goals

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |
| Lighthouse Performance | > 95 |

### Optimization Strategies

- [x] Static site generation (Astro)
- [ ] Image optimization (WebP, responsive)
- [ ] Font subsetting (Inter variable)
- [ ] Minimal JavaScript (Astro islands)
- [ ] CSS purging (Tailwind)
- [ ] Proper caching headers

---

## 9. Accessibility

### Requirements

- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] Semantic HTML
- [ ] Skip to main content link
- [ ] Reduced motion support

### Testing Tools

- axe DevTools
- Lighthouse Accessibility
- VoiceOver / NVDA manual testing

---

## 10. Implementation Phases

### Phase 1: Foundation (Day 1)
- [x] Create project plan (this document)
- [ ] Initialize Astro project
- [ ] Configure Tailwind CSS
- [ ] Set up TypeScript
- [ ] Create base layout
- [ ] Implement Header component
- [ ] Implement Footer component
- [ ] Implement ThemeToggle

### Phase 2: Core Pages (Day 1-2)
- [ ] Home page (Hero, Featured App, About)
- [ ] Apps index page
- [ ] Pair Journey detail page (without screenshots)
- [ ] Basic styling and responsiveness

### Phase 3: Legal Pages (Day 2)
- [ ] Privacy Policy (general)
- [ ] Privacy Policy (Pair Journey)
- [ ] Terms of Service
- [ ] Impressum (draft prepared; legal review remains)
- [ ] Support page

### Phase 4: Polish (Day 2-3)
- [ ] Dark mode refinement
- [ ] Animations and transitions
- [ ] Screenshot carousel (placeholder images)
- [ ] FAQ accordion
- [ ] Mobile responsiveness testing

### Phase 5: Deployment (Day 3)
- [x] Cloudflare Pages and GitHub Pages publication paths documented
- [x] Retired app paths and prototype content removed from the deployable site
- [ ] Verify the new deployment at the custom domain

### Phase 6: Post-Launch (Later)
- [ ] Add real screenshots
- [ ] Add App Store/Play Store links
- [x] Fill Impressum with business details
- [x] Connect custom domain
- [ ] Analytics (optional, privacy-friendly)

---

## Appendix: Placeholder Content

### Impressum Placeholders

```
[STREET_ADDRESS] → Your street and number
[POSTAL_CODE] → Your postal code
[CITY] → Your city
[EMAIL] → Your email
[PHONE] → Your phone (optional)
[VAT_ID] → Your VAT ID if applicable
```

### Store Badge Placeholders

Until apps are published, use:
- Text: "Coming soon to App Store"
- Text: "Coming soon to Google Play"
- Or: Generic badge images with "Coming Soon" overlay

---

## Checklist Summary

### Website state
- [x] Home page with Pair Journey highlight
- [x] Pair Journey detail page
- [x] Privacy, terms, Impressum, support, and account-deletion pages
- [x] Dark/Light mode and responsive layout
- [x] Cloudflare Pages and GitHub Pages deployment sources aligned
- [ ] Recheck public pages after deployment

### Nice to Have (Post-MVP)
- [ ] Screenshot carousel with real images
- [ ] Animations
- [ ] Blog (future)
- [ ] Newsletter signup (future)
- [ ] Analytics

---

*Last updated: November 17, 2026*
