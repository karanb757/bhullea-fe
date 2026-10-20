import { Droplet, ShieldCheck, Lightbulb, Flower2, Leaf, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const values = [
  {
    label: "Purity",
    icon: Droplet,
    description: "Water in its most pristine form"
  },
  {
    label: "Integrity",
    icon: ShieldCheck,
    description: "Honest, transparent practices"
  },
  {
    label: "Heritage",
    icon: Flower2,
    description: "Rooted in timeless tradition"
  },
  {
    label: "Innovation",
    icon: Lightbulb,
    description: "Modern excellence standards"
  },
  {
    label: "Responsibility",
    icon: Leaf,
    description: "Caring for our planet"
  },
  {
    label: "Excellence",
    icon: Sparkles,
    description: "Quality in every detail"
  },
];

export function ValuesStrip() {
  return (
    <Section className="bg-charcoal text-cream">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold">
              Core Principles
            </p>
            <h2 className="mt-3 text-center font-heading text-4xl md:text-5xl">
              OUR VALUES
            </h2>
            <p className="mt-4 text-center text-cream/60 max-w-2xl mx-auto">
              Every value guides our commitment to delivering premium water that honors heritage while securing a sustainable future
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
            {values.map(({ label, icon: Icon, description }) => (
              <div
                key={label}
                className="group p-6 rounded-lg border border-cream/10 hover:border-gold/40 transition-all duration-300 hover:bg-gold/5"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <Icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="font-heading text-sm md:text-base uppercase tracking-widest text-cream font-semibold">
                    {label}
                  </span>
                  <p className="text-xs text-cream/50 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}


