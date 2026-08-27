"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  const isLightHero =
    pathname === "/" || pathname === "/shop" || pathname === "/about" || pathname === "/contact";
  const isDarkNav = (isLightHero && !scrolled && !open) || open;

  const textCol = isDarkNav ? "text-ink" : "text-ivory";
  const linkCol = (href: string) => {
    const isActive =
      href === "/"
        ? pathname === "/"
        : href === "/shop"
        ? pathname.startsWith("/shop") || pathname.startsWith("/product")
        : pathname.startsWith(href);

    if (isActive) return "text-gold";
    return isDarkNav ? "text-ink/75 hover:text-ink" : "text-ivory/80 hover:text-gold";
  };
  const cartBtnClass = isDarkNav
    ? "border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
    : "border-ivory/15 text-ivory hover:border-gold hover:text-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "bg-white border-b border-ink/10"
          : scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(246,242,233,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-ta flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 shrink-0">
            <Image src="/images/logo/logo.png" alt="Timeless Aura logo" fill className="object-contain" priority />
          </div>
          <span className={`font-display text-2xl tracking-widest3 transition-colors duration-500 ${textCol}`}>
            TIMELESS AURA
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm uppercase tracking-wide transition-colors duration-500 ${linkCol(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openDrawer}
            className={`relative flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm transition-all duration-500 ${cartBtnClass}`}
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 font-body text-[0.65rem] font-semibold text-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openDrawer}
            className={`relative p-2 transition-colors duration-500 ${textCol}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-6 w-6" strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 font-body text-[0.6rem] font-semibold text-ink">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`p-2 transition-colors duration-500 ${textCol}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-white lg:hidden"
          >
            <div className="container-ta flex flex-col gap-1 py-6">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href === "/shop"
                    ? pathname.startsWith("/shop") || pathname.startsWith("/product")
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 font-display text-2xl transition-colors ${
                      isActive ? "text-gold" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
