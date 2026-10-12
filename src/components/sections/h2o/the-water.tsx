import Image from "next/image";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function TheWater() {
  return (
    <Section id="the-water" className="bg-cream text-charcoal">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/h2o/waterfall.jpg"
                alt="Crystal clear Himalayan waterfall — the source of BHULLEA H₂O"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-display text-xs uppercase tracking-widest text-gold">
              The Water
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight md:text-5xl">
              THE WATER
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal/70">
              Naturally sourced. Carefully purified. Thoughtfully bottled.
              BHULLEA H₂O is more than water — it is a promise of purity,
              crafted with modern technology and a deep respect for nature.
            </p>
            <CTAButton href="#" variant="outline" className="mt-8 border-charcoal/40 text-charcoal hover:bg-charcoal/5">
              Learn More
            </CTAButton>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
