"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatNaira } from "@/lib/format";
import FallbackImage from "@/components/FallbackImage";

export default function CartDrawer() {
  const { lines, isDrawerOpen, closeDrawer, updateQuantity, removeLine, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-charcoal"
          >
            <div className="flex items-center justify-between border-b border-ivory/10 px-6 py-5">
              <h2 className="font-display text-xl tracking-widest3 text-ivory">
                Your Bag {lines.length > 0 && `(${lines.length})`}
              </h2>
              <button onClick={closeDrawer} aria-label="Close cart" className="p-1 text-ivory/70 hover:text-ivory">
                <X className="h-5 w-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-ivory/20" strokeWidth={1.5} />
                <p className="font-body text-sm text-ivory/50">Your bag is empty.</p>
                <Link
                  href="/shop"
                  onClick={closeDrawer}
                  className="rounded-full bg-gold px-6 py-3 font-body text-sm text-ink"
                >
                  Start shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <ul className="space-y-6">
                    {lines.map((line) => (
                      <li key={`${line.productId}-${line.size}-${line.color}`} className="flex gap-4">
                        <FallbackImage
                          src={line.image}
                          alt={line.name}
                          gradient={line.gradient}
                          className="h-24 w-20 shrink-0 rounded-lg"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="font-body text-sm text-ivory">{line.name}</p>
                            <p className="mt-0.5 font-body text-xs text-ivory/45">
                              {line.color} · Size {line.size}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 rounded-full border border-ivory/15 px-2 py-1">
                              <button
                                onClick={() => updateQuantity(line.productId, line.size, line.color, line.quantity - 1)}
                                className="p-1 text-ivory/70 hover:text-gold"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="font-body text-xs text-ivory">{line.quantity}</span>
                              <button
                                onClick={() => updateQuantity(line.productId, line.size, line.color, line.quantity + 1)}
                                className="p-1 text-ivory/70 hover:text-gold"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="font-body text-sm text-gold-light">
                              {formatNaira(line.price * line.quantity)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeLine(line.productId, line.size, line.color)}
                          className="self-start p-1 text-ivory/30 hover:text-ivory"
                          aria-label={`Remove ${line.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ivory/10 px-6 py-6">
                  <div className="flex items-center justify-between font-body text-sm text-ivory/70">
                    <span>Subtotal</span>
                    <span className="font-display text-lg tracking-wide text-ivory">
                      {formatNaira(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs text-ivory/40">
                    Shipping and delivery calculated at checkout.
                  </p>
                  <Link
                    href="/checkout"
                    onClick={closeDrawer}
                    className="mt-5 flex w-full items-center justify-center rounded-full bg-gold py-4 font-body text-sm text-ink transition-colors hover:bg-gold-light"
                  >
                    Proceed to checkout
                  </Link>
                  <Link
                    href="/cart"
                    onClick={closeDrawer}
                    className="mt-3 flex w-full items-center justify-center rounded-full border border-ivory/15 py-4 font-body text-sm text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    View full bag
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
