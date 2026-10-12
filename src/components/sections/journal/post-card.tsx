import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export interface PostCardData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readingTime: string;
}

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Reveal>
      <Link href={`/journal/${post.slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-charcoal/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <p className="font-display text-xs uppercase tracking-widest text-gold">
            {post.category}
          </p>
          <h3 className="mt-2 font-heading text-xl leading-snug text-charcoal group-hover:text-gold transition">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
            {post.excerpt}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 font-display text-xs text-charcoal/50">
            Read More <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
