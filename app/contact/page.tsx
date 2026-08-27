"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Camera, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SeamLine from "@/components/SeamLine";
import FallbackImage from "@/components/FallbackImage";

const WHATSAPP_NUMBER = "2348123627541";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Timeless Aura, my name is ${name}.\n\n${message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
      <FallbackImage
        src="/images/contact-hero-bg.jpg"
        alt=""
        gradient="from-charcoal2 via-charcoal to-ink"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/95 to-white" />
      <div className="container-ta relative">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">Get in touch</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-xl text-balance font-display text-5xl tracking-wide text-ink sm:text-6xl">
            Let&apos;s talk style.
          </h1>
        </Reveal>
        <SeamLine className="mt-10" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-ink/10 bg-[#F5F5F5] p-6 sm:p-8">
              <label className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-wide text-ink/45">Your name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm text-ink outline-none focus-visible:border-gold"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-wide text-ink/45">Message</span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us what you're looking for — custom order, sizing question, collaboration..."
                  className="resize-none rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm text-ink outline-none focus-visible:border-gold"
                />
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                <Send className="h-4 w-4" />
                Send on WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-ink/10 bg-[#F5F5F5] p-8">
                <MessageCircle className="h-6 w-6 text-gold-dim" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-xl tracking-wide text-ink">Chat with us directly</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                  Fastest way to reach the team for orders, sizing and
                  customisation requests.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-body text-sm text-ink hover:bg-gold-light"
                >
                  0812 362 7541
                </a>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-[#F5F5F5] p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dim" strokeWidth={1.75} />
                  <div>
                    <p className="font-body text-sm text-ink">Eziobodo, FUTO, Owerri</p>
                    <p className="font-body text-xs text-ink/45">Imo State, Nigeria</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-dim" strokeWidth={1.75} />
                  <p className="font-body text-sm text-ink">0812 362 7541</p>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <Camera className="mt-0.5 h-5 w-5 shrink-0 text-gold-dim" strokeWidth={1.75} />
                  <p className="font-body text-sm text-ink">@TIMELESS_AURA</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
