import Link from "next/link";
import Image from "next/image";
import { Camera, Globe, Hash, MessageCircle, MapPin, Phone } from "lucide-react";
import FallbackImage from "@/components/FallbackImage";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink text-ivory">
      <FallbackImage
        src="/images/footer-bg.jpg"
        alt=""
        gradient="from-charcoal2 via-charcoal to-ink"
        className="absolute inset-0 opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink/80" />

      <div className="container-ta relative grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:py-24">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 shrink-0">
              <Image src="/images/logo/logo.png" alt="Timeless Aura logo" fill className="object-contain" />
            </div>
            <span className="font-display text-xl tracking-widest3">TIMELESS AURA</span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/50">
            Timeless wears, endless aura. Elevate your style with quality
            outfits that reflect your confidence and personality.
          </p>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-light">Shop</p>
          <ul className="mt-5 space-y-3 font-body text-sm text-ivory/60">
            <li><Link href="/shop" className="hover:text-ivory">All Products</Link></li>
            <li><Link href="/shop?category=Hoodies" className="hover:text-ivory">Hoodies</Link></li>
            <li><Link href="/shop?category=Suits" className="hover:text-ivory">Suits</Link></li>
            <li><Link href="/shop?category=Polos" className="hover:text-ivory">Polos</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-light">Follow</p>
          <ul className="mt-5 space-y-3 font-body text-sm text-ivory/60">
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Camera className="h-4 w-4" /> Instagram</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Globe className="h-4 w-4" /> Facebook</a></li>
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Hash className="h-4 w-4" /> X (Twitter)</a></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-light">Visit</p>
          <ul className="mt-5 space-y-3 font-body text-sm text-ivory/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Eziobodo, FUTO, Owerri
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              0812 362 7541
            </li>
            <li>
              <a
                href="https://wa.me/2348123627541"
                className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-gold-light hover:bg-gold/20"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-ta flex flex-col items-center justify-between gap-3 py-6 font-body text-xs text-ivory/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Timeless Aura. All rights reserved.</p>
          <p className="italic">Elegance in every Era.</p>
        </div>
      </div>
    </footer>
  );
}
