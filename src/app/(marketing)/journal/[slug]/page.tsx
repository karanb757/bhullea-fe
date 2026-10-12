import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";

// Static post data — replace with MDX/gray-matter when content is ready
const posts: Record<
  string,
  { title: string; category: string; image: string; body: string; readingTime: string }
> = {
  "story-behind-bhullea": {
    title: "The Story Behind BHULLEA",
    category: "Behind the Brand",
    image: "/images/journal/story.jpg",
    readingTime: "4 min read",
    body: `BHULLEA was born from a simple belief — that true progress is built on purity, purpose and responsible growth. A modern Indian house of brands, inspired by our rich heritage and driven by a brighter future.\n\nWe began with water because water is life. It is purity in its most essential form. BHULLEA H₂O is our first chapter — a promise to deliver something pure, something meaningful, something built to last.\n\nThis is just the beginning.`,
  },
  "why-clean-water-matters": {
    title: "Why Clean Water Matters",
    category: "Water & Wellness",
    image: "/images/journal/clean-water.jpg",
    readingTime: "3 min read",
    body: `Access to clean water is one of the most fundamental human rights — yet millions across India still lack it. At BHULLEA, we believe that premium water shouldn't mean compromise on purpose.\n\nEvery bottle of BHULLEA H₂O is a step toward a cleaner, healthier tomorrow — for you, and for the communities we serve.`,
  },
  "a-more-responsible-tomorrow": {
    title: "A More Responsible Tomorrow",
    category: "Sustainability",
    image: "/images/journal/sustainability.jpg",
    readingTime: "5 min read",
    body: `Responsibility isn't a value we wear on our sleeve — it is built into every decision we make. From our sourcing to our packaging, we are committed to minimising our footprint and maximising our impact on the planet.`,
  },
  "building-for-generations": {
    title: "Building for Generations",
    category: "Founder Notes",
    image: "/images/journal/founder.jpg",
    readingTime: "3 min read",
    body: `A personal note from our founder: We didn't start BHULLEA to build a company. We started it to build a legacy — one that our children and grandchildren can be proud of. Every brand we create, every product we launch, is a brick in that foundation.`,
  },
  "our-journey-begins": {
    title: "Our Journey Begins",
    category: "Company Updates",
    image: "/images/journal/journey.jpg",
    readingTime: "2 min read",
    body: `Today marks a milestone in the story of BHULLEA. We are proud to announce the launch of our flagship brand, BHULLEA H₂O — premium water, crafted with purity and rooted in legacy. This is the first of many chapters.`,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} — BHULLEA Journal` : "Journal — BHULLEA",
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream text-charcoal">
        <p className="font-heading text-3xl">Post not found.</p>
        <Link href="/journal" className="mt-6 font-display text-sm text-gold underline">
          ← Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/75" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 pt-40 lg:px-10">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-widest text-gold">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="mt-3 font-heading text-4xl leading-tight md:text-6xl">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-20 text-charcoal">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Link
              href="/journal"
              className="mb-10 inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-charcoal/50 transition hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Journal
            </Link>
            <Reveal>
              <div className="prose prose-lg prose-stone max-w-none">
                {post.body.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-5 leading-relaxed text-charcoal/75">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
