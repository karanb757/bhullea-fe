import { Droplet, Hammer, Landmark, Lightbulb, Leaf, type LucideIcon } from "lucide-react";

export const philosophyPillars: {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "Purity",
    body: "We believe in purity — in what we create, how we work, and the impact we leave behind.",
    icon: Droplet,
    image: "/images/philosophy/purity.jpg",
    imageAlt: "A single water droplet on a mountain leaf",
  },
  {
    title: "Craftsmanship",
    body: "We care about the details, because true quality is always in the details.",
    icon: Hammer,
    image: "/images/philosophy/craftsmanship.jpg",
    imageAlt: "Artisan hands working with precision",
  },
  {
    title: "Legacy",
    body: "We build for generations, not just for today.",
    icon: Landmark,
    image: "/images/philosophy/legacy.jpg",
    imageAlt: "Ancient Indian heritage monument",
  },
  {
    title: "Innovation",
    body: "We embrace modern ideas to create a better, healthier and more sustainable tomorrow.",
    icon: Lightbulb,
    image: "/images/philosophy/innovation.jpg",
    imageAlt: "Green seedling in hands symbolising growth",
  },
  {
    title: "Responsibility",
    body: "We are committed to people, communities and the environment.",
    icon: Leaf,
    image: "/images/philosophy/responsibility.jpg",
    imageAlt: "Young plant growing in sunlit forest",
  },
];
