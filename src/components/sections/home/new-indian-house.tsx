import { Reveal } from "@/components/shared/reveal";
import { ValueIconRow } from "@/components/shared/value-icon-row";
import { FirstChapterBanner } from "./first-chapter-banner";

export function NewIndianHouse() {
  return (
    <section className="bg-cream px-6 py-10 lg:px-10">
      <div className="px-0 md:px-12 lg:px-12 xl:px-12 ">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.15em] md:text-4xl">
            A New Indian House
            <br />
            For a Brighter Tomorrow
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-display text-lg leading-relaxed text-ink/70">
            BHULLEA is a house of brands rooted in purity, craftsmanship and a deeper responsibility — to people, to
            nature and to generations yet to come.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <FirstChapterBanner />
        </Reveal>
      </div>
    </section>
  );
}