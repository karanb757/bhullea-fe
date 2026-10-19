import { Droplet, ShieldCheck, Lightbulb, Flower2, Leaf, Star } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const values = [
  { label: "Integrity", icon: ShieldCheck },
  { label: "Quality", icon: Star },
  { label: "Purity", icon: Droplet },
  { label: "Innovation", icon: Lightbulb },
  { label: "Legacy", icon: Flower2 },
  { label: "Responsibility", icon: Leaf },
];

export function ValuesStrip() {
  return (
    <Section className="bg-charcoal text-cream">
      <Container>
        <Reveal>
          <p className="text-center font-display text-xs uppercase tracking-widest text-gold">
            Our Values
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl md:text-4xl">
            OUR VALUES
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-6">
            {values.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <span className="font-display text-xs uppercase tracking-widest text-cream/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}


