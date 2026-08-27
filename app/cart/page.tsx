"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatNaira } from "@/lib/format";
import FallbackImage from "@/components/FallbackImage";

export default function CartPage() {
  const { lines, updateQuantity, removeLine, subtotal } = useCart();

  return (
    <section className="bg-ink pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-ta">
        <p className="font-body text-xs uppercase tracking-widest2 text-gold">Your Bag</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide text-ivory sm:text-5xl">
          {lines.length > 0 ? `${lines.length} item${lines.length > 1 ? "s" : ""}` : "Your bag is empty"}
        </h1>

        {lines.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <ShoppingBag className="h-12 w-12 text-ivory/20" strokeWidth={1.5} />
            <p className="max-w-xs font-body text-sm text-ivory/50">
              You haven&apos;t added anything yet. Explore the collection to find
              your next piece.
            </p>
            <Link href="/shop" className="rounded-full bg-gold px-7 py-4 font-body text-sm text-ink hover:bg-gold-light">
              Browse the shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
            <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
              {lines.map((line) => (
                <li key={`${line.productId}-${line.size}-${line.color}`} className="flex gap-5 py-6">
                  <FallbackImage
                    src={line.image}
                    alt={line.name}
                    gradient={line.gradient}
                    className="h-28 w-24 shrink-0 rounded-lg"
                  />
                  <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                    <div>
                      <Link href={`/product/${line.slug}`} className="font-display text-xl tracking-wide text-ivory hover:text-gold">
                        {line.name}
                      </Link>
                      <p className="mt-1 font-body text-xs text-ivory/45">
                        {line.color} · Size {line.size}
                      </p>
                      <p className="mt-2 font-body text-sm text-gold-light sm:hidden">
                        {formatNaira(line.price * line.quantity)}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-8 sm:mt-0">
                      <div className="flex items-center gap-3 rounded-full border border-ivory/15 px-3 py-1.5">
                        <button onClick={() => updateQuantity(line.productId, line.size, line.color, line.quantity - 1)} className="p-1 text-ivory/70 hover:text-gold" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center font-body text-sm text-ivory">{line.quantity}</span>
                        <button onClick={() => updateQuantity(line.productId, line.size, line.color, line.quantity + 1)} className="p-1 text-ivory/70 hover:text-gold" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="hidden font-body text-sm text-gold-light sm:block">
                        {formatNaira(line.price * line.quantity)}
                      </p>
                      <button onClick={() => removeLine(line.productId, line.size, line.color)} className="p-1 text-ivory/30 hover:text-ivory" aria-label={`Remove ${line.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="h-fit rounded-2xl border border-ivory/10 bg-charcoal p-8">
              <h2 className="font-display text-xl tracking-wide text-ivory">Order Summary</h2>
              <div className="mt-6 space-y-3 font-body text-sm text-ivory/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-ivory">{formatNaira(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-ivory/50">Calculated at checkout</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between border-t border-ivory/10 pt-6 font-body text-base">
                <span className="text-ivory">Total</span>
                <span className="font-display text-2xl tracking-wide text-gold-light">
                  {formatNaira(subtotal)}
                </span>
              </div>
              <Link
                href="/checkout"
                className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                Proceed to checkout
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/shop" className="mt-3 flex w-full items-center justify-center rounded-full border border-ivory/15 py-4 font-body text-sm text-ivory hover:border-gold hover:text-gold">
                Continue shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
