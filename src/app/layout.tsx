import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Urbanist - Premium geometric sans-serif
// Sleek minimalism meets bold modernism
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leansparkbook.com"),
  title: "LeanSpark — When Constraints Ignite Creativity",
  description: "A new book by Jaideep Prabhu, Mukesh Sud, and Priyank Narayan. Coming January 2026 at Jaipur Literature Festival.",
  keywords: ["LeanSpark", "innovation", "constraints", "creativity", "frugal design", "business book"],
  authors: [
    { name: "Jaideep Prabhu" },
    { name: "Mukesh Sud" },
    { name: "Priyank Narayan" }
  ],
  openGraph: {
    title: "LeanSpark — When Constraints Ignite Creativity",
    description: "A new book coming January 2026 at Jaipur Literature Festival.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeanSpark — When Constraints Ignite Creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeanSpark — When Constraints Ignite Creativity",
    description: "A new book coming January 2026 at Jaipur Literature Festival.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
