"use client";

import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CursorSpark from "../../components/CursorSpark";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/gallery-1.png",
    alt: "Baithak Event",
    caption: "LeanSpark First Edition book launch at Baithak",
    category: "Events",
  },
  {
    src: "/gallery/gallery-2.jpeg",
    alt: "Authors with Guests",
    caption: "Meeting at the bookshelf with LeanSpark on display",
    category: "Authors",
  },
  {
    src: "/gallery/gallery-3.jpeg",
    alt: "At Penguin Random House",
    caption: "Authors at Penguin Random House India office",
    category: "Publisher",
  },
  {
    src: "/gallery/gallery-4.jpeg",
    alt: "In Conversation",
    caption: "Interview session discussing LeanSpark",
    category: "Interviews",
  },
  {
    src: "/gallery/gallery-5.jpeg",
    alt: "The Three Authors",
    caption: "Jaideep Prabhu, Priyank Narayan & Mukesh Sud",
    category: "Authors",
  },
  {
    src: "/gallery/gallery-6.jpeg",
    alt: "With LeanSpark",
    caption: "Fun moment with the book on display",
    category: "Behind the Scenes",
  },
  {
    src: "/gallery/gallery-7.jpeg",
    alt: "Team Photo",
    caption: "With the Penguin Random House team",
    category: "Publisher",
  },
  {
    src: "/gallery/gallery-8.jpeg",
    alt: "Authors at PRH",
    caption: "Candid moment at Penguin Random House",
    category: "Behind the Scenes",
  },
  {
    src: "/gallery/gallery-9.jpeg",
    alt: "Meeting at Publisher",
    caption: "Authors with guest at Penguin Random House",
    category: "Publisher",
  },
  {
    src: "/gallery/gallery-10.jpeg",
    alt: "Evening Gathering",
    caption: "Dinner event celebration",
    category: "Events",
  },
  {
    src: "/gallery/gallery-11.jpeg",
    alt: "Dr. Priyank Narayan",
    caption: "Dr. Priyank Narayan, Co-author of LeanSpark",
    category: "Authors",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[var(--color-paper-warm)] overflow-hidden min-h-screen">
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
          <div className="absolute inset-0 border border-[var(--color-brand-primary)]/[0.06] rounded-3xl" />
          <div className="absolute inset-3 border border-[var(--color-brand-primary)]/[0.04] rounded-2xl" />
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
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
              <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
                Media
              </span>
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            </div>

            <h1
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] text-[#BD2220] mb-4 italic"
              style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
            >
              Photo Gallery
            </h1>
            <p className="text-[1.125rem] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Moments captured from events, workshops, and behind-the-scenes of the LeanSpark journey.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-[0.875rem] font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-[var(--color-brand-primary)] text-white shadow-lg"
                    : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-brand-primary)]/5 border border-[var(--color-border)]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group-hover:-translate-y-2">
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Caption bar - slides up from bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
                    <p className="font-semibold text-[0.9375rem]" style={{ color: '#ffffff' }}>{image.alt}</p>
                    {image.caption && (
                      <p className="text-[0.8125rem] mt-0.5" style={{ color: '#ffffff' }}>{image.caption}</p>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[var(--color-text-tertiary)]">No images found in this category.</p>
            </motion.div>
          )}

          {/* Credit & Media Usage Notice */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-8 border-t border-[var(--color-border)] text-center w-full flex items-center justify-center"
          >
            <p className="text-[0.875rem]" style={{ color: '#71717A' }}>
              These pictures are available for use by the media. For high-resolution versions, please get in touch.
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
          >
            <FiX className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
          >
            <FiChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
          >
            <FiChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-black/50 rounded-xl overflow-hidden">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-lg">{filteredImages[selectedImage].alt}</p>
              {filteredImages[selectedImage].caption && (
                <p className="text-white/70 mt-1">{filteredImages[selectedImage].caption}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
