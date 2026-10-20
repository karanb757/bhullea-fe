import Image from "next/image";
import { Story } from "@/components/sections/house/story";
import { VisionMission } from "@/components/sections/house/vision-mission";
import { ValuesStrip } from "@/components/sections/house/values-strip";
import { HeritageLegacy } from "@/components/sections/house/heritage-legacy";
import { Reveal } from "@/components/shared/reveal";

export const metadata = {
  title: "The House of BHULLEA",
  description:
    "A timeless vision. A brighter tomorrow. The story, vision, mission and values behind the House of BHULLEA.",
};

export default function TheHousePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[110vh] items-center overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/house/story.png"
          alt="Grand Indian palace at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 text-charcoal h-full flex items-center justify-end mb-60">
          <Reveal>
            <div className="flex flex-col items-end justify-center gap-6 md:gap-8 max-w-2xl pb-20">
              <div className="text-center">
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
                  THE HOUSE
                  <br />
                  OF BHULLEA
                </h1>
              </div>

              <div className="text-center  w-full">
                <p className="font-display text-lg sm:text-xl md:text-2xl font-medium text-center">
                  A timeless vision.
                </p>

                <p className="font-display text-lg sm:text-xl md:text-2xl font-medium text-center">
                  A brighter tomorrow.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Story />
      <VisionMission />
      <HeritageLegacy />
      <ValuesStrip />
    </>
  );
}
