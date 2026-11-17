# Website plan and release checklist

The site is a public developer website with an app directory and product information for Pair Journey. Cloudflare Pages hosts the production site at `victorodukoya.com`.

## Published routes

- `/` — developer home
- `/apps/` — app directory
- `/apps/pair-journey/` — product information
- `/privacy/` and `/privacy/pair-journey/` — privacy information
- `/terms/` — terms and purchase information
- `/support/` — support contact
- `/delete-account/` — account and server-side data deletion
- `/impressum/` — legal notice

## Website release checklist

- [x] Cloudflare Pages production project and custom domain configured
- [x] Old product paths and unrelated prototype removed
- [x] Contact and navigation links use current pages
- [ ] Recheck public HTTPS pages after the current deployment
- [ ] Review app privacy and terms against the final shipped behavior
- [ ] Replace pre-release availability language after store approval
- [ ] Add store links and final product screenshots after approval

## App release checklist

The app is not yet publicly released. Before release, complete the app-specific store, privacy, advertising, purchase, account-deletion, age-rating, and exact-build checks. Keep the detailed status in the app repository's release checklist.
