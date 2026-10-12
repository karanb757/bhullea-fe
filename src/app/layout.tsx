import type { Metadata } from "next";
import { cinzel } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body className="bg-cream font-cinzel text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
