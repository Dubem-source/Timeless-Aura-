# Image slots

Every image on the site falls back to a brand gradient until you add a
real photo — nothing breaks if a file is missing. Drop files into the
paths below using the exact names.

## Sourcing (since I can't legally embed stock/Pinterest photos for you)

Free sources that fit this dark, oversized-streetwear look:
- **Pexels** (pexels.com) — search "black hoodie model studio",
  "streetwear editorial dark", "oversized jacket portrait"
- **Unsplash** (unsplash.com) — search "streetwear model black
  background", "dark fashion editorial", "urban fashion portrait"
- **Pinterest** — great for mood/reference, but download only images
  that are explicitly marked reusable, or better: use Pinterest boards
  to find the *style*, then find a matching free-license shot on
  Pexels/Unsplash to actually use.

What to look for: dark or black background, low-key/moody lighting,
oversized silhouettes, minimal distracting background — this is what
makes the hero's fade-to-black work.

## Hero (new "Aura Store"-style layout)
| File | Used on | Size |
|---|---|---|
| public/images/hero-model.jpg | Home hero, centre model shot | 900 x 1400 (tall portrait, plain/dark background works best) |

## Background bands (added for a more vibrant feel)
| File | Used on | Size |
|---|---|---|
| public/images/footer-bg.jpg | Footer background | 1600 x 900, dark/moody texture or lookbook shot |
| public/images/shop-hero-bg.jpg | Shop page hero | 1600 x 700 |
| public/images/about-hero-bg.jpg | About page hero | 1600 x 700 |
| public/images/contact-hero-bg.jpg | Contact page hero | 1600 x 700 |
| public/images/cta-bg.jpg | Home page bottom CTA band | 1600 x 700 |
| public/images/about-studio.jpg | About page, mid-page band | 1600 x 900 |

## Product photos
`public/images/products/<slug>.jpg` — one per product, 1000x1250 (4:5)

- global-vision-hoodie.jpg
- crafted-in-mind-hoodie.jpg
- after-time-hoodie.jpg
- sal-in-sweatshirt.jpg
- 17-day-crew-sweatshirt.jpg
- aura-tailored-suit-male.jpg
- aura-tailored-suit-female.jpg
- crafted-in-mind-polo.jpg
- global-vision-polo.jpg

## Category strip (home page)
| File | Size |
|---|---|
| public/images/category-hoodies.jpg | 900 x 1200 (3:4) |
| public/images/category-sweatshirts.jpg | 900 x 1200 (3:4) |
| public/images/category-suits.jpg | 900 x 1200 (3:4) |
| public/images/category-polos.jpg | 900 x 1200 (3:4) |

## Logo
`public/images/logo/logo.png` is already in place (your uploaded logo).

## Adding a new image anywhere else
Use the `FallbackImage` component:
```tsx
<FallbackImage
  src="/images/your-file.jpg"
  alt="Description"
  gradient="from-charcoal2 via-charcoal to-ink"
  className="absolute inset-0" // or any sizing
/>
```
For a background band, always pair it with a dark overlay `div` on top
(see `app/shop/page.tsx` for the pattern) so text stays readable.
