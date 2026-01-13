"use client";

import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CursorSpark from "../../components/CursorSpark";
import { FiPlay, FiExternalLink } from "react-icons/fi";

// Organic scattered dots - hand-placed for natural feel
const scatteredDots = [
  { x: 5, y: 8, size: 4, opacity: 0.08 },
  { x: 12, y: 22, size: 6, opacity: 0.05 },
  { x: 8, y: 45, size: 3, opacity: 0.1 },
  { x: 3, y: 67, size: 5, opacity: 0.06 },
  { x: 15, y: 85, size: 4, opacity: 0.08 },
  { x: 22, y: 12, size: 3, opacity: 0.07 },
  { x: 28, y: 38, size: 7, opacity: 0.04 },
  { x: 18, y: 58, size: 4, opacity: 0.09 },
  { x: 25, y: 78, size: 5, opacity: 0.06 },
  { x: 35, y: 5, size: 4, opacity: 0.07 },
  { x: 42, y: 28, size: 6, opacity: 0.05 },
  { x: 38, y: 52, size: 3, opacity: 0.1 },
  { x: 45, y: 72, size: 5, opacity: 0.06 },
  { x: 32, y: 92, size: 4, opacity: 0.08 },
  { x: 55, y: 15, size: 5, opacity: 0.06 },
  { x: 62, y: 35, size: 4, opacity: 0.08 },
  { x: 58, y: 62, size: 6, opacity: 0.05 },
  { x: 52, y: 82, size: 3, opacity: 0.09 },
  { x: 68, y: 8, size: 4, opacity: 0.07 },
  { x: 75, y: 25, size: 5, opacity: 0.06 },
  { x: 72, y: 48, size: 7, opacity: 0.04 },
  { x: 65, y: 68, size: 4, opacity: 0.08 },
  { x: 78, y: 88, size: 5, opacity: 0.06 },
  { x: 85, y: 18, size: 3, opacity: 0.1 },
  { x: 92, y: 42, size: 6, opacity: 0.05 },
  { x: 88, y: 65, size: 4, opacity: 0.08 },
  { x: 95, y: 85, size: 5, opacity: 0.06 },
  { x: 82, y: 55, size: 4, opacity: 0.07 },
];

const videos = [
  {
    id: "RSaIOCHbuYw",
    title: "The Lean Startup Summary",
    url: "https://youtu.be/RSaIOCHbuYw",
    type: "video",
  },
  {
    id: "FhMeREHoDxQ",
    title: "How Does a Lean Startup Work",
    url: "https://youtu.be/FhMeREHoDxQ",
    type: "video",
  },
  {
    id: "s2HCrhNVfak",
    title: "Lean Six Sigma",
    url: "https://youtu.be/s2HCrhNVfak",
    type: "video",
  },
  {
    id: "GB4ngAQTsf8",
    title: "What is Jugaad Innovation?",
    url: "https://youtube.com/shorts/GB4ngAQTsf8",
    type: "short",
  },
  {
    id: "65RaXaU3WTc",
    title: "What is an Example of Jugaad Innovation?",
    url: "https://youtube.com/shorts/65RaXaU3WTc",
    type: "short",
  },
  {
    id: "xUyP3NanALY",
    title: "India's Jugaad Innovation Secret",
    url: "https://youtube.com/shorts/xUyP3NanALY",
    type: "short",
  },
];

export default function VideosPage() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[var(--color-paper-warm)] overflow-hidden">
        {/* Organic Scattered Dots Background */}
        <div className="absolute inset-0 pointer-events-none">
          {scatteredDots.map((dot, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: dot.opacity }}
              transition={{
                delay: i * 0.02,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute rounded-full bg-[var(--color-brand-primary)]"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: dot.size,
                height: dot.size,
              }}
            />
          ))}
        </div>

        {/* Subtle Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-[var(--color-brand-primary)]/[0.02] blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-accent)]/[0.015] blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-brand-gold)]/[0.02] blur-3xl pointer-events-none" />

        {/* Floating Decorative Accents */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-20 h-20 pointer-events-none hidden lg:block"
        >
          <div className="w-full h-full border border-[var(--color-brand-primary)]/[0.08] rounded-full" />
          <div className="absolute inset-2 border border-dashed border-[var(--color-brand-gold)]/[0.12] rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[12%] w-16 h-16 pointer-events-none hidden lg:block"
        >
          <div className="w-full h-full border border-[var(--color-brand-accent)]/[0.1] rounded-lg rotate-45" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 left-[8%] w-3 h-3 bg-[var(--color-brand-gold)] rounded-full pointer-events-none"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-[10%] w-4 h-4 bg-[var(--color-brand-primary)] rounded-full pointer-events-none"
        />

        {/* Decorative Lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[18%] left-[5%] w-24 h-px bg-gradient-to-r from-[var(--color-brand-primary)]/20 to-transparent origin-left pointer-events-none hidden md:block"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[22%] right-[5%] w-32 h-px bg-gradient-to-l from-[var(--color-brand-accent)]/15 to-transparent origin-right pointer-events-none hidden md:block"
        />

        {/* Elegant Double Border Frame */}
        <div className="absolute inset-6 md:inset-10 lg:inset-16 pointer-events-none">
          {/* Outer border */}
          <div className="absolute inset-0 border border-[var(--color-brand-primary)]/[0.06] rounded-3xl" />
          {/* Inner border with offset */}
          <div className="absolute inset-3 border border-[var(--color-brand-primary)]/[0.04] rounded-2xl" />
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-[var(--color-brand-primary)]/20 rounded-tl-3xl" />
          <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-[var(--color-brand-primary)]/20 rounded-tr-3xl" />
          <div className="absolute -bottom-px -left-px w-12 h-12 border-b-2 border-l-2 border-[var(--color-brand-primary)]/20 rounded-bl-3xl" />
          <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-[var(--color-brand-primary)]/20 rounded-br-3xl" />
        </div>

        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
              <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
                Media
              </span>
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            </div>

            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-4">
              Featured Videos
            </h1>
            <p className="text-[1.125rem] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Explore our curated collection of videos on lean methodology, frugal innovation, and jugaad thinking.
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group block"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group-hover:-translate-y-2">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-[var(--color-brand-primary)]/5">
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--color-brand-primary)]/0 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <FiPlay className="w-7 h-7 text-[var(--color-brand-primary)] ml-1" />
                      </div>
                    </div>

                    {/* Type Badge */}
                    {video.type === "short" && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--color-brand-accent)] text-white text-[0.6875rem] font-semibold tracking-wide uppercase">
                        Short
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[1rem] font-semibold text-[var(--color-brand-primary)] leading-snug group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
                        {video.title}
                      </h3>
                      <FiExternalLink className="w-4 h-4 text-[var(--color-text-tertiary)] flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
      </section>

      <Footer />
    </main>
  );
}
