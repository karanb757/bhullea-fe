import Image from "next/image";
import { BrandsGrid } from "@/components/sections/brands/brands-grid";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export const metadata = {
  title: "Our Brands — BHULLEA",
  description:
    "A growing family of brands, built for a better tomorrow. Discover the brands under the House of BHULLEA.",
};

export default function OurBrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/brands/hero.jpg"
          alt="Panoramic Himalayan mountain range at golden sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <Reveal>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              OUR BRANDS
            </h1>
            <p className="mt-3 font-display text-lg text-cream/70 md:text-xl">
              A growing family of brands,
              <br />
              built for a better tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brands grid */}
      <Section className="bg-cream">
        <Container>
          <BrandsGrid />
        </Container>
      </Section>

      {/* Quote Banner */}
      <section className="bg-charcoal py-20 text-center text-cream">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-xl italic leading-relaxed text-cream/80 md:text-2xl">
            &ldquo;Different brands. A shared purpose.
            <br />A brighter tomorrow.&rdquo;
          </p>
        </Reveal>
      </section>
    </>
  );
}
