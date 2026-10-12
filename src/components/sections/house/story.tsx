import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function Story() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-widest text-gold">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight md:text-5xl">
              OUR STORY
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal/70">
              BHULLEA was born from a simple belief — that true progress is
              built on purity, purpose and responsible growth. A modern Indian
              house of brands, inspired by our rich heritage and driven by a
              brighter future.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg">OUR VISION</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    To create a family of world-class brands that enrich lives
                    and protect what matters most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg">OUR MISSION</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    To build with integrity, deliver exceptional quality, and
                    create long-term value for people, communities and the
                    planet.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/house/story.jpg"
                alt="Ancient Indian palace — the heritage behind BHULLEA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
