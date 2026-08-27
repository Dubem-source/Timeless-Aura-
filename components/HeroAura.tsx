"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PuraRecycleMark = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-12 h-12 text-ink"
    stroke="currentColor"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="6" width="88" height="88" rx="16" strokeWidth="6" />
    <path d="M 22 45 A 28 28 0 0 1 78 45" />
    <path d="M 72 38 L 78 45 L 71 51" fill="none" />
    <path d="M 78 55 A 28 28 0 0 1 22 55" />
    <path d="M 28 62 L 22 55 L 29 49" fill="none" />
    <text
      x="50"
      y="59"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      className="font-sans font-black text-[30px]"
    >
      プラ
    </text>
  </svg>
);

export default function HeroAura() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 lg:pb-0 lg:pt-0 lg:-mt-32">
      {/* Main container */}
      <div className="container-ta relative flex flex-col items-center gap-8 lg:block lg:h-[92vh] lg:min-h-[780px]">

        {/* Giant Backdrop Text (overlaying the model) */}
        <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
          <div className="relative w-full h-full">
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-[35%] -translate-y-1/2 font-syne font-extrabold text-[12vw] leading-none tracking-tighter text-ink mix-blend-multiply"
            >
              Aura
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-[35%] -translate-y-1/2 font-syne font-extrabold text-[12vw] leading-none tracking-tighter text-ink mix-blend-multiply"
            >
              store
            </motion.h1>
          </div>
        </div>

        {/* Mobile Giant Backdrop Text */}
        <div className="w-full pointer-events-none z-20 lg:hidden text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-syne font-extrabold text-[13vw] leading-none tracking-tighter text-ink flex justify-center gap-4"
          >
            <span>Aura</span>
            <span className="opacity-40">store</span>
          </motion.h1>
        </div>

        {/* Centered Model Image (Under the overlay text) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-sm aspect-[3/4] sm:max-w-md lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-[52%] lg:-translate-x-1/2 lg:w-[420px] lg:h-[720px] lg:max-w-none lg:aspect-auto"
        >
          <div className="relative w-full h-full rounded-[2.5rem] shadow-2xl shadow-black/5 border border-ink/5 overflow-hidden bg-white">
            <Image
              src="/images/products/download.jpg"
              alt="Timeless Aura street-wear model wearing signature outerwear"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Tagline & Japanese Symbol (Bottom-Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-30 w-full max-w-sm self-start flex flex-col items-start lg:absolute lg:bottom-12 lg:left-12 lg:max-w-[320px]"
        >
          <div className="mb-6">
            <PuraRecycleMark />
          </div>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-ink leading-tight tracking-tight">
            Clothes without excess. Only style.
          </h2>
          <p className="mt-4 font-body text-xs sm:text-sm leading-relaxed text-ink/70 font-semibold uppercase tracking-wider">
            Modern silhouettes, natural fabrics, and honest design. For those who choose simplicity and quality.
          </p>
        </motion.div>

        {/* Product Preview Card & CTA Button (Bottom-Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-30 w-full max-w-sm self-end flex flex-col items-center gap-5 lg:absolute lg:bottom-12 lg:right-12 lg:items-end lg:max-w-[260px]"
        >
          {/* Card Container */}
          <div className="w-full border border-ink/10 rounded-[2.5rem] bg-[#F5F5F5] p-4 flex flex-col gap-4 shadow-sm">
            <div className="relative aspect-square w-full overflow-hidden rounded-[1.8rem] border border-ink/5 bg-white">
              <Image
                src="/images/products/skeleton-puffer.jpg"
                alt="Featured Skeleton Puffer Jacket"
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-cover"
              />
            </div>
            <span className="text-center font-body text-sm font-extrabold tracking-widest text-ink/90">
              2026
            </span>
          </div>

          {/* New Collection Pill Button */}
          <Link
            href="/shop"
            className="group flex items-center gap-2 rounded-full border border-ink px-6 py-3 font-body text-xs font-bold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-ink hover:text-[#F2F2F2]"
          >
            <span>new collection</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
