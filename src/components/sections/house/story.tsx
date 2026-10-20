import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function Story() {
  return (
    <>
      <Section className="bg-cream text-charcoal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <Reveal>
              <h2 className="mt-3 font-heading text-4xl leading-tight md:text-5xl">
                OUR STORY
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal text-md font-medium">
                <b>Bhullea</b> was born in <b>Shivpuri</b>, Madhya Pradesh, from a belief that
                progress does not have to mean leaving our roots behind. It can
                mean carrying them forward.
                <br />
                <br />
                Our journey begins with water, but our ambition reaches much
                further &mdash; to build products, experiences and businesses that
                combine Indian heritage with contemporary craftsmanship. We want
                to create things that people don&apos;t simply purchase. We want to
                create things they trust, remember and pass forward.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-heading text-lg">◆</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-charcoal">
                      Heritage Rooted
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Drawing from centuries of Indian wisdom and purity
                      traditions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-heading text-lg">◆</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-charcoal">
                      Natures Purity
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Premium water sourced from pristine, protected natural
                      springs
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold font-heading text-lg">◆</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-charcoal">
                      Timeless Quality
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Every drop meets the highest standards of excellence and
                      sustainability
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-4/5 overflow-hidden w-3/4 mx-auto">
                <Image
                  src="/images/house/story3.png"
                  alt="Ancient Indian palace — the heritage behind BHULLEA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/20 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-charcoal text-cream">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-gold">
                A Legacy of Excellence
              </p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl">
                Centuries of Heritage
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="border border-cream/20 p-8 rounded-lg hover:border-gold/40 transition-colors">
                <div className="text-4xl font-heading text-gold mb-4">500+</div>
                <h3 className="font-heading text-xl mb-3">
                  Years of Tradition
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Inspired by centuries-old water purification practices passed
                  down through generations
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-cream/20 p-8 rounded-lg hover:border-gold/40 transition-colors">
                <div className="text-4xl font-heading text-gold mb-4">100%</div>
                <h3 className="font-heading text-xl mb-3">Natural Source</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Pure, untouched water from protected natural springs in
                  pristine landscapes
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-cream/20 p-8 rounded-lg hover:border-gold/40 transition-colors">
                <div className="text-4xl font-heading text-gold mb-4">∞</div>
                <h3 className="font-heading text-xl mb-3">
                  Timeless Commitment
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Dedicated to preserving nature and delivering excellence for
                  generations to come
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
