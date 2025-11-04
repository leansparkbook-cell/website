import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${spectral.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
