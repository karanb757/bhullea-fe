import Image from "next/image";
import { philosophyPillars } from "@/data/philosophy";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function PhilosophyList() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <div className="space-y-0 divide-y divide-charcoal/10">
          {philosophyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isEven = i % 2 === 1;
            return (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div
                  className={`grid gap-8 py-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                    isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={isEven ? "lg:[direction:ltr]" : ""}>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`flex items-start gap-5 ${isEven ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-display text-xs uppercase tracking-widest text-gold">
                        0{i + 1}
                      </span>
                      <h3 className="mt-1 font-heading text-3xl">{pillar.title.toUpperCase()}</h3>
                      <p className="mt-4 leading-relaxed text-charcoal/70">{pillar.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
