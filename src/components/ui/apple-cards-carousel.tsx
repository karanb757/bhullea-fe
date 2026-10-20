"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card {
  category?: string;
  title: string;
  src: string;
  content: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

export const AppleCardsCarousel = ({
  cards,
  containerClassName,
}: {
  cards: Card[];
  containerClassName?: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className="relative w-full">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:pb-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="shrink-0 w-full md:w-1/3 lg:w-1/4"
              onClick={() => setExpandedIndex(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer group">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
                  {card.category && (
                    <p className="text-xs md:text-sm font-semibold text-gold mb-2">
                      {card.category}
                    </p>
                  )}
                  <h3 className="text-lg md:text-2xl font-heading font-bold">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Expanded Modal */}
      {expandedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedIndex(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-charcoal rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={cards[expandedIndex].src}
                  alt={cards[expandedIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-charcoal"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 text-cream">
                {cards[expandedIndex].category && (
                  <p className="text-sm font-semibold text-gold mb-2">
                    {cards[expandedIndex].category}
                  </p>
                )}
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {cards[expandedIndex].title}
                </h2>
                <div className="text-base md:text-lg leading-relaxed text-cream/80 mb-6">
                  {cards[expandedIndex].content}
                </div>
                {cards[expandedIndex].ctaText && (
                  <button className="bg-gold hover:bg-gold/90 text-charcoal px-6 py-3 rounded-lg font-semibold transition-colors">
                    {cards[expandedIndex].ctaText}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
