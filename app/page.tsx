"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Truck, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import SeamLine from "@/components/SeamLine";
import ProductCard from "@/components/ProductCard";
import FallbackImage from "@/components/FallbackImage";
import HeroAura from "@/components/HeroAura";
import { products, categories } from "@/lib/products";

const services = [
  "Customised Hoodies",
  "Customised Sweatshirts",
  "Male & Female Suits",
  "Customised Polos",
];

const perks = [
  { icon: ShieldCheck, title: "Premium Quality", text: "Heavyweight fabrics, reinforced stitching, built to outlast trends." },
  { icon: Layers, title: "Curated Collection", text: "Small, considered drops instead of mass-produced runs." },
  { icon: Truck, title: "Fast Delivery", text: "Dispatched from Owerri with tracked delivery across Nigeria." },
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <HeroAura />

      {/* SERVICES MARQUEE */}
      <div className="overflow-hidden border-y border-ink/10 bg-white py-4">
        <div className="flex w-max animate-marquee gap-16 motion-reduce:animate-none">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-16 font-display text-xl tracking-wide text-ink/50">
              {s}
              <span className="h-1 w-1 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORY STRIP */}
      <section className="bg-white py-24 lg:py-32 border-b border-ink/5">
        <div className="container-ta">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">Shop by category</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl tracking-wide text-ink sm:text-5xl">
              Four categories. One standard.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat} delay={i * 0.08}>
                <Link href={`/shop?category=${cat}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <FallbackImage
                      src={`/images/category-${cat.toLowerCase()}.jpg`}
                      alt={cat}
                      gradient="from-charcoal2 via-charcoal to-ink"
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-2xl tracking-wide text-ivory">{cat}</p>
                      <span className="mt-1 inline-flex items-center gap-1 font-body text-xs text-gold-light opacity-0 transition-opacity group-hover:opacity-100">
                        Shop now <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container-ta">
        <SeamLine />
      </div>

      {/* BOTTOM SECTIONS WRAPPER (BEST SELLERS, PERKS, CTA) */}
      <div className="relative overflow-hidden bg-white">
        <FallbackImage
          src="/images/kit-3-oversized.jpg"
          alt=""
          gradient="from-transparent to-transparent"
          className="absolute inset-0 opacity-15"
        />

        {/* FEATURED PRODUCTS (Best sellers) */}
        <section className="relative py-24 lg:py-32">
          <div className="container-ta">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <Reveal>
                <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">
                  Best sellers
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link href="/shop" className="group inline-flex items-center gap-2 font-body text-sm text-gold-dim hover:text-gold">
                  View all products
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
              {featured.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} light={true} />
              ))}
            </div>
          </div>
        </section>

        <div className="container-ta relative">
          <SeamLine />
        </div>

        {/* PERKS */}
        <section className="relative py-20 lg:py-24">
          <div className="container-ta grid grid-cols-1 gap-10 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.1}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold-dim">
                  <perk.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wide text-ink">{perk.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{perk.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="container-ta relative">
          <SeamLine />
        </div>

        {/* CTA */}
        <section className="relative py-24 lg:py-32">
          <div className="container-ta relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <Reveal className="max-w-xl">
              <h2 className="text-balance font-display text-4xl tracking-wide text-ink sm:text-5xl">
                Order now. Wear your aura by the weekend.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                Order now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
