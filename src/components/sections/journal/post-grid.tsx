"use client";

import { useState } from "react";
import { PostCard, type PostCardData } from "./post-card";

const ALL = "All";

export function PostGrid({ posts }: { posts: PostCardData[] }) {
  const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);

  // Split posts: first 2 in large, rest in small
  const firstRowPosts = filtered.slice(0, 2);
  const remainingPosts = filtered.slice(2);

  return (
    <div className="w-full">
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-4 border-b border-charcoal/10 pb-8 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-display text-xs uppercase tracking-widest transition-colors duration-200 pb-2 ${
              active === cat
                ? "text-charcoal border-b-2 border-gold"
                : "text-charcoal/50 hover:text-charcoal border-b-2 border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* First Row - 2 large cards */}
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 mb-12">
        {firstRowPosts.map((post) => (
          <PostCard key={post.slug} post={post} size="large" />
        ))}
      </div>

      {/* Remaining Rows - 3 smaller cards per row */}
      {remainingPosts.length > 0 && (
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
          {remainingPosts.map((post) => (
            <PostCard key={post.slug} post={post} size="small" />
          ))}
        </div>
      )}
    </div>
  );
}