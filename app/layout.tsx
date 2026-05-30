import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      "Senior Full-Stack Software Engineer with 5+ years of experience building scalable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased paper-grain">{children}</body>
    </html>
  );
}
