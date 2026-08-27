"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, Truck, RefreshCw, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatNaira } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import FallbackImage from "@/components/FallbackImage";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product, size, color, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <section className="bg-ink pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="container-ta">
          <div className="mb-10 flex items-center gap-2 font-body text-xs text-ivory/40">
            <Link href="/shop" className="hover:text-ivory">Shop</Link>
            <ChevronRight className="h-3 w-3" />
            <span>{product.category}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ivory/70">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <FallbackImage
                src={product.image}
                alt={product.name}
                gradient={product.gradient}
                priority
                className="absolute inset-0"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" />
            </motion.div>

            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="font-body text-xs uppercase tracking-widest2 text-gold">{product.category}</p>
                <h1 className="mt-3 text-balance font-display text-4xl tracking-wide text-ivory sm:text-5xl">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-body text-xl text-gold-light">{formatNaira(product.price)}</span>
                  {product.compareAt && (
                    <span className="font-body text-sm text-ivory/35 line-through">
                      {formatNaira(product.compareAt)}
                    </span>
                  )}
                </div>
                <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-ivory/60">
                  {product.description}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-8">
                <p className="font-body text-xs uppercase tracking-wide text-ivory/45">Colour — {color}</p>
                <div className="mt-3 flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      className={`h-9 w-9 rounded-full border-2 transition-all ${
                        color === c.name ? "border-gold scale-110" : "border-ivory/20"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-8">
                <p className="font-body text-xs uppercase tracking-wide text-ivory/45">Size — {size}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-12 rounded-lg border px-4 py-2.5 font-body text-sm transition-colors ${
                        size === s
                          ? "border-gold bg-gold text-ink"
                          : "border-ivory/15 text-ivory/70 hover:border-ivory/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-4 rounded-full border border-ivory/15 px-3 py-2">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-1 text-ivory/70 hover:text-gold" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-4 text-center font-body text-sm text-ivory">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="p-1 text-ivory/70 hover:text-gold" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 rounded-full bg-gold py-4 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
                >
                  {added ? "Added to bag" : "Add to bag"}
                </button>
              </motion.div>

              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 space-y-3 border-t border-ivory/10 pt-8">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-body text-sm text-ivory/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </motion.ul>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ivory/10 pt-8">
                <div className="flex flex-col items-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  <p className="font-body text-xs text-ivory/50">Quality checked</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Truck className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  <p className="font-body text-xs text-ivory/50">Fast delivery</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <RefreshCw className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  <p className="font-body text-xs text-ivory/50">Easy exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-ivory/10 bg-ink pb-24 pt-16 lg:pb-32">
          <div className="container-ta">
            <h2 className="font-display text-3xl tracking-wide text-ivory sm:text-4xl">
              You may also like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
