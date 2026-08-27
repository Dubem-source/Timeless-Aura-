"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories, type Category } from "@/lib/products";

const tabs = ["All", ...categories] as const;
type Tab = (typeof tabs)[number];

export default function ShopClient({ initialCategory }: { initialCategory?: string }) {
  const initial: Tab = tabs.includes(initialCategory as Tab) ? (initialCategory as Tab) : "All";
  const [active, setActive] = useState<Tab>(initial);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`shrink-0 rounded-full border px-5 py-2.5 font-body text-sm transition-colors ${
              active === tab
                ? "border-gold bg-gold text-ink"
                : "border-ink/10 text-ink/70 hover:border-ink/40"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} index={i} light />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center font-body text-sm text-ink/40">
          No products in this category yet.
        </p>
      )}
    </div>
  );
}
