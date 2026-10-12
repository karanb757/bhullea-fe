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

interface PostCardProps {
  post: PostCardData;
  size?: "large" | "small";
}

export function PostCard({ post, size = "large" }: PostCardProps) {
  const isLarge = size === "large";

  return (
    <Reveal>
      <Link
        href={`/journal/${post.slug}`}
        className="group flex flex-col h-full"
      >
        {/* Image container */}
        <div
          className={`relative overflow-hidden ${isLarge ? "aspect-15/6 rounded-xs" : "aspect-5/3 rounded-xs"} bg-charcoal/10 shrink-0`}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className={`flex-grow flex flex-col ${isLarge ? "mt-5" : "mt-3"}`}>
          {/* Category */}
          <p
            className={`font-display uppercase tracking-widest text-gold font-semibold ${isLarge ? "text-xs" : "text-xs"}`}
          >
            {post.category}
          </p>

          {/* Title */}
          <h3
            className={`leading-snug text-charcoal group-hover:text-gold transition duration-300 ${
              isLarge
                ? "font-heading mt-3 text-lg"
                : "font-heading mt-2 text-base"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt - only show on large cards */}
          {isLarge && (
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70 flex-grow">
              {post.excerpt}
            </p>
          )}

          {/* Read More link */}
          <div
            className={`${isLarge ? "mt-4 pt-3 border-t border-charcoal/10" : "mt-2"}`}
          >
            <span
              className={`inline-flex items-center gap-2 font-display uppercase tracking-widest text-charcoal group-hover:text-gold transition duration-300 ${
                isLarge ? "text-xs" : "text-xs"
              }`}
            >
              Read More
              <ArrowRight
                className={`transition-transform group-hover:translate-x-1 ${isLarge ? "h-3.5 w-3.5" : "h-3 w-3"}`}
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
