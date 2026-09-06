# Timeless Aura

Premium clothing brand storefront — frontend only, no backend
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


```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```



