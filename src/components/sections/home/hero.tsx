import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative h-svh bg-charcoal text-cream overflow-hidden">
      <Image
        src="/images/hero/home-hero1.png"
        alt="Mountain stream at dusk with a BHULLEA H2O bottle"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute z-20 w-[50%] sm:w-[35%] md:w-[32%] lg:w-[30%] h-auto drop-shadow-2xl
                      bottom-8 lg:-bottom-10 xl:-bottom-10 right-[25%] sm:right-[8%] md:right-[10%] lg:right-[5%]
                      md:top-[45%] md:-translate-y-1/2 md:bottom-auto"
      >
        <Image
          src="/images/hero/bottle3.png"
          alt="BHULLEA H₂O Bottle"
          width={200}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-4 sm:px-6 pb-16 sm:pb-20 pt-20 sm:pt-24 md:pt-28 lg:pt-34 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <div className="w-32 sm:w-40 md:w-40 lg:w-50">
            <Image
              src="/icons/logo1.png"
              alt="BHULLEA crest"
              width={200}
              height={160}
              className="w-full h-auto"
              priority
            />
          </div>

          <h1 className="mt-3 sm:mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-[0.04em] leading-tight">
            BHULLEA
          </h1>

          <p className="mt-3 sm:mt-4 font-display text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium leading-snug px-2">
            Crafted with Purity
            <br />
            Rooted in Legacy
          </p>
        </Reveal>
      </div>

      <ChevronDown
        className="absolute bottom-4 sm:bottom-6 left-1/2 z-10 h-5 sm:h-6 w-5 sm:w-6 -translate-x-1/2 animate-bounce text-gold"
        aria-hidden
      />
    </section>
  );
}
