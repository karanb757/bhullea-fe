import Image from "next/image";
import { PhilosophyList } from "@/components/sections/philosophy/philosophy-list";
import { Reveal } from "@/components/shared/reveal";

export const metadata = {
  title: "Our Philosophy — BHULLEA",
  description:
    "Guided by timeless values. Driven by a brighter future. The five pillars that define the House of BHULLEA.",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/philosophy/hero.jpg"
          alt="Sunlit forest representing purity and purpose"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/75" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <Reveal>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              OUR PHILOSOPHY
            </h1>
            <p className="mt-3 font-display text-lg text-cream/70 md:text-xl">
              Guided by timeless values.
              <br />
              Driven by a brighter future.
            </p>
          </Reveal>
        </div>
      </section>

      <PhilosophyList />
    </>
  );
}
