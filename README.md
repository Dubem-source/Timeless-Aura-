# Timeless Aura

Premium Nigerian clothing brand storefront — frontend only, no backend
connected yet. Built with **Next.js 16** (App Router, Turbopack),
**React 19**, TypeScript and Tailwind CSS, with Framer Motion for
animation. Icons via lucide-react.

## Requirements

- **Node.js 20.9+** (Next.js 16's minimum supported version)
- npm 10+

## Stack & features

- Product catalog (`lib/products.ts`) — 9 products across Hoodies,
  Sweatshirts, Suits and Polos
- Shop page with category filtering (`/shop?category=Hoodies`)
- Product detail pages with size/colour selection (`/product/[slug]`)
- Full cart (slide-in drawer + `/cart` page), persisted to
  `localStorage` so it survives page reloads
- Checkout (`/checkout`) that hands off the order to WhatsApp with a
  pre-filled message — no payment backend required to launch
- About and Contact pages, each with a full-bleed background image band
- Brand colours and logo matched to your uploaded logo/flyer

## Before you deploy

1. Add real product and background photos — see
   `public/images/README.md` for exact filenames, sizes and sourcing
   guidance. Until then, every image slot shows a brand gradient
   placeholder.
2. Update the WhatsApp number in `app/checkout/page.tsx` and
   `app/contact/page.tsx` (currently `2348123627541`) if it changes.
3. Update social links in `components/Footer.tsx`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Deploying to Vercel

Push this folder to a GitHub repo and import it in Vercel — no
environment variables are required since there's no backend yet. When
you're ready to connect real payments/inventory, the cart context in
`lib/cart-context.tsx` is the single place to wire up an API call
before checkout.

## Notes on the Next.js 16 upgrade

- `params` and `searchParams` in `app/shop/page.tsx` and
  `app/product/[slug]/page.tsx` are now `Promise`s and must be
  `await`ed — this is a hard requirement in Next.js 16, not optional.
- Turbopack is now the default bundler for `next dev` and
  `next build` — no flags needed, and no custom webpack config was in
  this project so there's nothing to migrate.
- `next lint` was removed in Next.js 16. Linting now runs through
  ESLint directly via `eslint.config.mjs` (flat config) — this is why
  `npm run lint` now runs `eslint .` instead of `next lint`.
- lucide-react's stable v1 release removed all brand/logo icons
  (Instagram, Facebook, Twitter/X, etc.) to avoid trademark issues.
  Social links in the footer and contact page now use generic icons
  (Camera, Globe, Hash) paired with text labels instead.

