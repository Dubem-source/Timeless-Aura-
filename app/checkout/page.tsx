"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatNaira } from "@/lib/format";

const WHATSAPP_NUMBER = "2348123627541";

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  function buildWhatsAppMessage() {
    const itemLines = lines
      .map(
        (l) =>
          `• ${l.name} (${l.color}, Size ${l.size}) x${l.quantity} — ${formatNaira(l.price * l.quantity)}`
      )
      .join("\n");

    const message = `New order from Timeless Aura website\n\nName: ${name}\nPhone: ${phone}\nDelivery address: ${address}\n\nItems:\n${itemLines}\n\nSubtotal: ${formatNaira(subtotal)}${
      notes ? `\n\nNotes: ${notes}` : ""
    }`;

    return encodeURIComponent(message);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSubmitted(true);
    clearCart();
  }

  if (lines.length === 0 && !submitted) {
    return (
      <section className="bg-ink pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="container-ta flex flex-col items-center gap-5 py-16 text-center">
          <ShoppingBag className="h-12 w-12 text-ivory/20" strokeWidth={1.5} />
          <h1 className="font-display text-3xl tracking-wide text-ivory">Your bag is empty</h1>
          <p className="max-w-xs font-body text-sm text-ivory/50">
            Add something to your bag before checking out.
          </p>
          <Link href="/shop" className="rounded-full bg-gold px-7 py-4 font-body text-sm text-ink hover:bg-gold-light">
            Browse the shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-ta">
        <p className="font-body text-xs uppercase tracking-widest2 text-gold">Checkout</p>
        <h1 className="mt-3 font-display text-4xl tracking-wide text-ivory sm:text-5xl">
          Complete your order
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-ivory/10 bg-charcoal p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h2 className="mt-6 font-display text-2xl tracking-wide text-ivory">
                  Order sent to WhatsApp
                </h2>
                <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-ivory/60">
                  We&apos;ve opened WhatsApp with your order details pre-filled.
                  Send the message and our team will confirm pricing,
                  delivery time and payment details directly with you.
                </p>
                <Link href="/shop" className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 font-body text-sm text-ink hover:bg-gold-light">
                  Continue shopping
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-ivory/10 bg-charcoal p-6 sm:p-8"
              >
                <label className="flex flex-col gap-2">
                  <span className="font-body text-xs uppercase tracking-wide text-ivory/45">Full name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Emmanuel Chidubem"
                    className="rounded-lg border border-ivory/15 bg-ink px-4 py-3 font-body text-sm text-ivory outline-none focus-visible:border-gold"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-body text-xs uppercase tracking-wide text-ivory/45">Phone / WhatsApp</span>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="0803 000 0000"
                    className="rounded-lg border border-ivory/15 bg-ink px-4 py-3 font-body text-sm text-ivory outline-none focus-visible:border-gold"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-body text-xs uppercase tracking-wide text-ivory/45">Delivery address</span>
                  <textarea
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    placeholder="Hostel / street, campus or city, state"
                    className="resize-none rounded-lg border border-ivory/15 bg-ink px-4 py-3 font-body text-sm text-ivory outline-none focus-visible:border-gold"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-body text-xs uppercase tracking-wide text-ivory/45">Order notes (optional)</span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Customisation requests, preferred delivery day, etc."
                    className="resize-none rounded-lg border border-ivory/15 bg-ink px-4 py-3 font-body text-sm text-ivory outline-none focus-visible:border-gold"
                  />
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send order via WhatsApp
                </button>
                <p className="text-center font-body text-xs text-ivory/40">
                  No online payment yet — orders are confirmed and paid for
                  directly with our team on WhatsApp.
                </p>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="h-fit rounded-2xl border border-ivory/10 bg-charcoal p-8">
            <h2 className="font-display text-xl tracking-wide text-ivory">Order Summary</h2>
            <ul className="mt-6 space-y-4">
              {lines.map((line) => (
                <li key={`${line.productId}-${line.size}-${line.color}`} className="flex justify-between font-body text-sm text-ivory/60">
                  <span>
                    {line.name} <span className="text-ivory/35">x{line.quantity}</span>
                  </span>
                  <span className="text-ivory">{formatNaira(line.price * line.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between border-t border-ivory/10 pt-6 font-body text-base">
              <span className="text-ivory">Total</span>
              <span className="font-display text-2xl tracking-wide text-gold-light">
                {formatNaira(subtotal)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
