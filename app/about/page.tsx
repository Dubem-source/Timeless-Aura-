"use client";

import { Sparkles, Scissors, Clock3, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SeamLine from "@/components/SeamLine";
import FallbackImage from "@/components/FallbackImage";

const values = [
  { icon: Scissors, title: "Made to measure", text: "Every customised piece is cut and finished with the wearer in mind, not a generic size chart." },
  { icon: Sparkles, title: "Quality over hype", text: "We choose heavier fabrics and cleaner finishing over chasing every passing trend." },
  { icon: Clock3, title: "Timeless first", text: "Our designs are built to outlast a single season — pieces you'll still reach for in five years." },
  { icon: Users, title: "Community rooted", text: "Started at FUTO, Eziobodo, styling students and young professionals across Owerri and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-36 lg:pb-24 lg:pt-44">
        <FallbackImage
          src="/images/about-hero-bg.jpg"
          alt=""
          gradient="from-transparent to-transparent"
          className="absolute inset-0 opacity-20"
        />
        <div className="container-ta relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Reveal>
              <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">About Us</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance font-display text-5xl tracking-wide text-ink sm:text-6xl">
                TIMELESS WEARS.
                <br />
                ENDLESS AURA.
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="font-body text-base leading-relaxed text-ink/70">
              Timeless Aura started in Eziobodo, at the edge of FUTO&apos;s campus,
              with a simple idea: Nigerian streetwear doesn&apos;t have to choose
              between comfort and craft. Every hoodie, sweatshirt, suit and
              polo we release is built around that idea — quality outfits
              that reflect your confidence and personality, made to outlast
              the trend cycle around them.
            </p>
          </Reveal>
        </div>
        <div className="container-ta">
          <SeamLine className="mt-14" />
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-ta">
          <Reveal>
            <FallbackImage
              src="/images/hero-model.jpg"
              alt="Timeless Aura studio in Eziobodo, Owerri"
              gradient="from-charcoal2 via-charcoal to-ink"
              className="aspect-[16/9] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-24 lg:py-32 border-t border-ink/5">
        <div className="container-ta">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">What we stand for</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl tracking-wide text-ink sm:text-5xl">
              Four principles behind every stitch.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold-dim">
                  <v.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wide text-ink">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
