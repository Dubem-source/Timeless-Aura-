import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timeless Aura — Timeless Wears, Endless Aura",
  description:
    "Timeless Aura is a premium Nigerian clothing label offering customised hoodies, sweatshirts, suits and polos. Elegance in every era.",
  keywords: [
    "Nigerian clothing brand",
    "customised hoodies Nigeria",
    "Owerri fashion",
    "FUTO clothing brand",
    "premium streetwear Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${manrope.variable} ${syne.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>
          <div className="grain-overlay" />
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
