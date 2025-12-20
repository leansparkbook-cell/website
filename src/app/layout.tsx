import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Oswald } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

// Geist for headlines - modern, clean typography
const geist = GeistSans;

export const metadata: Metadata = {
  title: "LeanSpark — Where Constraints Ignite Creativity",
  description: "A new book by Jaideep Prabhu, Mukesh Sud, and Priyank Narayan. Coming January 2026 at Jaipur Literature Festival.",
  keywords: ["LeanSpark", "innovation", "constraints", "creativity", "book"],
  authors: [
    { name: "Jaideep Prabhu" },
    { name: "Mukesh Sud" },
    { name: "Priyank Narayan" }
  ],
  openGraph: {
    title: "LeanSpark — Where Constraints Ignite Creativity",
    description: "A new book coming January 2026 at Jaipur Literature Festival.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${display.variable} ${geist.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
