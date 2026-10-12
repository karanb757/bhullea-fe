import Image from "next/image";
import { PostGrid } from "@/components/sections/journal/post-grid";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { type PostCardData } from "@/components/sections/journal/post-card";

export const metadata = {
  title: "Journal — BHULLEA",
  description: "Stories, ideas and insights from the House of BHULLEA.",
};

// Static seed posts — replace with MDX/CMS data when ready
const posts: PostCardData[] = [
  {
    slug: "story-behind-bhullea",
    title: "The Story Behind BHULLEA",
    excerpt: "Our values and why we began this journey.",
    category: "Behind the Brand",
    image: "/images/journal/story.png",
    readingTime: "4 min read",
  },
  {
    slug: "why-clean-water-matters",
    title: "Why Clean Water Matters",
    excerpt: "Exploring the role of pure water in a healthier life.",
    category: "Water & Wellness",
    image: "/images/journal/clean-water.png",
    readingTime: "3 min read",
  },
  {
    slug: "a-more-responsible-tomorrow",
    title: "A More Responsible Tomorrow",
    excerpt: "Our approach to sustainability and a cleaner planet.",
    category: "Sustainability",
    image: "/images/journal/sustainability.png",
    readingTime: "5 min read",
  },
  {
    slug: "building-for-generations",
    title: "Building for Generations",
    excerpt: "A personal note from our founder.",
    category: "Founder Notes",
    image: "/images/journal/founder.png",
    readingTime: "3 min read",
  },
  {
    slug: "our-journey-begins",
    title: "Our Journey Begins",
    excerpt: "Milestones, announcements and what's next.",
    category: "Company Updates",
    image: "/images/journal/journey.png",
    readingTime: "2 min read",
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-charcoal text-center text-cream">
        <Image
          src="/images/journal/hero.png"
          alt="Scenic Himalayan valley — storytelling from the House of BHULLEA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-40">
          <Reveal>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              JOURNAL
            </h1>
            <p className="mt-4 font-display text-lg text-cream/70 md:text-xl">
              Stories, ideas and insights
              <br />
              from the House of BHULLEA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <Section className="bg-cream">
        <Container>
          <PostGrid posts={posts} />
        </Container>
      </Section>
    </>
  );
}
