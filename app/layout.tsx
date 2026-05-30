import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mabubakr.dev"),
  title: "Mohammad Abubakr — Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Software Engineer building and scaling systems to 100K+ daily users. React, TypeScript, Next.js, Node.js, AWS.",
  keywords: [
    "Mohammad Abubakr",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
  ],
  openGraph: {
    title: "Mohammad Abubakr — Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Software Engineer with 5+ years building scalable systems. 100K+ daily users · $500K+ revenue · React / Next / Node / AWS.",
    url: "https://mabubakr.dev",
    siteName: "mabubakr.dev",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Abubakr — Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Software Engineer · React / Next / Node / AWS · mabubakr.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased paper-grain">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
