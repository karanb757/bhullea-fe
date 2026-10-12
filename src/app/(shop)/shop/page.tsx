import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CTAButton } from "@/components/shared/cta-button";

export const metadata = {
  title: "Shop — BHULLEA H₂O",
  description: "Shop BHULLEA H₂O premium water. Coming soon.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/hero/h2o-stream.png"
          alt="BHULLEA H₂O product"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <Reveal>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">SHOP</h1>
            <p className="mt-3 font-display text-lg text-cream/70">
              BHULLEA H₂O — Premium Water
            </p>
          </Reveal>
        </div>
      </section>

      {/* Coming soon */}
      <Section className="bg-cream text-charcoal">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="font-display text-xs uppercase tracking-widest text-gold">
                Coming Soon
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight">
                Our store is on its way.
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/60">
                We&apos;re putting the finishing touches on the BHULLEA H₂O shop.
                In the meantime, explore more about our water.
              </p>
              <CTAButton href="/h2o" className="mt-8">
                Explore H₂O
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
