"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Quote } from "lucide-react";

interface Endorsement {
  name: string;
  designation: string;
  quote: string;
  image: string;
}

const endorsements: Endorsement[] = [
  {
    name: "SANJEEV BHIKCHANDANI",
    designation: "Founder, Naukri.com; Founder and Trustee, Ashoka University",
    quote:
      "LeanSpark applies to my day but is living, resource-aware endeavors with purposeful use towards to show the frugal innovators on offers guidance on transition from makeshift solutions to innovative approaches. It captures the spirit of Real India.",
    image: "/SANJAY.jpg",
  },
  {
    name: "R.A. MASHELKAR",
    designation: "Padma Vibhushan, FRS; Foreign Associate, National Academy of Engineering & World Academy of Art & Science",
    quote:
      "India's journey to becoming a $5 trillion economy is fueled by youth and talent, and offers a powerful framework for policymakers, professionals in business, for whom the future of how India can transform its global role into force for good.",
    image: "/RAMAK.jpg",
  },
  {
    name: "PRAMATH RAJ SINHA",
    designation: "Chairman of the Board of Trustees, Ashoka University; Founding Dean, Indian School of Business",
    quote:
      "LeanSpark resonates with individuals, consumers and global corporations. It starts with a mindset of achieving more using less—a value-adding framework which incorporates purposeful impact, scaling projects and proven tech. India's legacy of frugal innovation with cutting-edge technology.",
    image: "/PRS.jpg",
  },
];

function FlipCard({ endorsement, index }: { endorsement: Endorsement; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-[460px] md:h-[520px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-500">
            {/* Image */}
            <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-white">
              <Image
                src={endorsement.image}
                alt={endorsement.name}
                fill
                className={`object-cover transition-all duration-700 hover:scale-105 ${
                  endorsement.image === "/SANJAY.jpg"
                    ? "scale-[1.15] object-[center_10%]"
                    : endorsement.image === "/PRS.jpg"
                    ? "scale-[1.07] object-[center_16%]"
                    : endorsement.image === "/RAMAK.jpg"
                    ? "object-[center_10%]"
                    : "object-top"
                }`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/5 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 md:p-8">
              {/* Quote Icon */}
              <div className="absolute -top-5 right-6 w-10 h-10 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" fill="white" />
              </div>

              <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold tracking-[-0.02em] text-[var(--color-brand-primary)] mb-2 leading-tight">
                {endorsement.name}
              </h3>

              <p className="text-[0.8125rem] text-black/60 leading-relaxed">
                {endorsement.designation}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-brand-accent)]">
                <span>Hover to Read</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative h-full bg-gradient-to-br from-[#1a1a2e] via-[#26388D] to-[#1f2d5c] rounded-2xl overflow-hidden border-2 border-[var(--color-brand-accent)] shadow-[0_20px_50px_rgba(38,56,141,0.4)]">
            {/* Subtle Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col p-6 md:p-8">
              {/* Quote Icon */}
              <div className="mb-5">
                <Quote className="w-11 h-11 text-[var(--color-brand-accent)] opacity-60" fill="currentColor" />
              </div>

              {/* Quote Text */}
              <div className="flex-1 flex items-center">
                <p className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.65] font-normal" style={{ color: '#ffffff' }}>
                  <span className="text-[var(--color-brand-accent)] text-[1.5rem] leading-none mr-1">"</span>
                  {endorsement.quote}
                  <span className="text-[var(--color-brand-accent)] text-[1.5rem] leading-none ml-1">"</span>
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t-2 border-[var(--color-brand-accent)]/30">
                <p className="text-[0.9375rem] font-bold mb-2 tracking-[-0.01em]" style={{ color: '#ffffff' }}>
                  — {endorsement.name}
                </p>
                <p className="text-[0.8125rem] leading-snug font-medium" style={{ color: '#ffffff' }}>
                  {endorsement.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EndorsementsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[var(--color-brand-accent)]"
            />
            <span className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
              Praise for the Book
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[var(--color-brand-accent)]"
            />
          </div>

          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-[var(--color-brand-primary)] mb-6">
            Endorsements
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            What leading voices in business, academia, and innovation are saying about{" "}
            <span className="font-semibold text-[var(--color-brand-accent)]">LeanSpark</span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {endorsements.map((endorsement, index) => (
            <FlipCard key={endorsement.name} endorsement={endorsement} index={index} />
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rotate-45 bg-[var(--color-brand-primary)]" />
            <div className="w-3 h-3 rotate-45 border-2 border-[var(--color-brand-accent)]" />
            <div className="w-2 h-2 rotate-45 bg-[var(--color-brand-primary)]" />
          </div>
        </motion.div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
