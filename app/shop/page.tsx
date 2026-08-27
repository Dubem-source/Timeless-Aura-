import SeamLine from "@/components/SeamLine";
import ShopClient from "@/components/ShopClient";
import FallbackImage from "@/components/FallbackImage";

export const metadata = {
  title: "Shop — Timeless Aura",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-10 pt-36 lg:pb-14 lg:pt-44">
        <FallbackImage
          src="/images/products/Fashion.jpg"
          alt="The Collection"
          gradient="from-transparent to-transparent"
          className="absolute inset-0 opacity-15 invert"
        />
        <div className="container-ta relative">
          <p className="font-body text-xs uppercase tracking-widest2 text-gold-dim">The Collection</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-5xl tracking-wide text-ink sm:text-6xl">
            Curated pieces. Built to last eras.
          </h1>
          <SeamLine className="mt-10" />
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="container-ta">
          <ShopClient initialCategory={category} />
        </div>
      </section>
    </>
  );
}
