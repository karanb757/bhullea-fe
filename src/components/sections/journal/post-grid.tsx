"use client";

import { useState } from "react";
import { PostCard, type PostCardData } from "./post-card";

const ALL = "All";

export function PostGrid({ posts }: { posts: PostCardData[] }) {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 border-b border-charcoal/10 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-display text-xs uppercase tracking-widest transition ${
              active === cat
                ? "text-charcoal underline underline-offset-4 decoration-gold"
                : "text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
