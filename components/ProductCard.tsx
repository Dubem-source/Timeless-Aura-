"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatNaira } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import FallbackImage from "@/components/FallbackImage";

export default function ProductCard({
  product,
  index = 0,
  light = false,
}: {
  product: Product;
  index?: number;
  light?: boolean;
}) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <FallbackImage
            src={product.image}
            alt={product.name}
            gradient={product.gradient}
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 font-body text-[0.65rem] uppercase tracking-widest3 text-ink">
              New
            </span>
          )}
          {product.compareAt && (
            <span className="absolute right-3 top-3 rounded-full bg-ivory px-3 py-1 font-body text-[0.65rem] uppercase tracking-widest3 text-ink">
              Sale
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.sizes[1] ?? product.sizes[0], product.colors[0].name, 1);
            }}
            className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-300 hover:bg-gold group-hover:translate-y-0 group-hover:opacity-100"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className={`font-body text-[0.65rem] uppercase tracking-widest3 ${light ? "text-ink/40" : "text-ivory/40"}`}>
            {product.category}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className={`mt-1 font-display text-xl tracking-wide transition-colors ${light ? "text-ink hover:text-gold-dim" : "text-ivory hover:text-gold"}`}>
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="shrink-0 text-right">
          <p className={`font-body text-sm ${light ? "text-gold-dim font-bold" : "text-gold-light"}`}>{formatNaira(product.price)}</p>
          {product.compareAt && (
            <p className={`font-body text-xs line-through ${light ? "text-ink/35" : "text-ivory/35"}`}>
              {formatNaira(product.compareAt)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
