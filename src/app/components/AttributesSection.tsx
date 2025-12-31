"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const attributes = [
  {
    number: "01",
    title: "Lean Execution",
    description:
      "LeanSpark solutions are grounded in structured experimentation, iterative testing and continuous learning.",
  },
  {
    number: "02",
    title: "Purposeful Simplicity",
    description:
      "LeanSpark solutions prioritize essential features and eliminate unnecessary complexity, without compromising value or scalability.",
  },
  {
    number: "03",
    title: "Adaptive Scalability",
    description:
      "Solutions are designed to evolve and scale across diverse environments by flexibly adapting to new constraints or needs.",
  },
  {
    number: "04",
    title: "Systemic Sustainability",
    description:
      "LeanSpark ideas are powerful because they address root causes, minimize waste and create enduring value.",
  },
];

// Individual sticky card component
function StickyCard({
  attr,
  index,
  totalCards,
}: {
  attr: (typeof attributes)[0];
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle scale down as card gets covered by next card
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.95]);
  const brightness = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);

  return (
    <div
      ref={cardRef}
      className="sticky top-8 md:top-12 h-[60vh] md:h-[50vh] flex items-start pt-4"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="w-full"
        style={{
          scale,
          filter: `brightness(${brightness})`,
        }}
      >
        <div className="relative bg-white rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.15)] border border-[var(--color-border)] overflow-hidden min-h-[300px] md:min-h-[340px]">
          {/* Large watermark number */}
          <span
            className="absolute -top-6 -right-2 md:-top-10 md:-right-4 text-[160px] md:text-[200px] lg:text-[260px] font-bold leading-none select-none text-[var(--color-brand-primary)] opacity-[0.035]"
            style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
          >
            {attr.number}
          </span>

          {/* Content container */}
          <div className="relative z-10 max-w-2xl">
            {/* Counter badge - Delve.co inspired */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-accent)] mb-8 md:mb-10">
              <span className="text-[0.8125rem] font-semibold tracking-wide text-[var(--color-brand-accent)]">
                {attr.number}
              </span>
              <span className="text-[0.75rem] text-[var(--color-text-muted)] font-medium">
                /
              </span>
              <span className="text-[0.75rem] text-[var(--color-text-muted)] font-medium">
                {String(totalCards).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-4 md:mb-6 leading-[1.15]"
              style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
            >
              {attr.title}
            </h3>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] leading-[1.85] text-base md:text-lg max-w-xl">
              {attr.description}
            </p>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-3 h-3 rotate-45 bg-[var(--color-brand-accent)] opacity-60" />
            <div className="absolute bottom-4 right-10 md:bottom-6 md:right-14 w-2 h-2 rotate-45 border border-[var(--color-brand-primary)] opacity-30" />
          </div>

          {/* Left accent bar */}
          <div className="absolute top-8 md:top-12 left-0 w-1 h-16 md:h-20 bg-[var(--color-brand-accent)] rounded-r-full" />
        </div>
      </motion.div>
    </div>
  );
}

export default function AttributesSection() {
  return (
    <section className="relative bg-[var(--color-paper-warm)]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent z-10" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="attr-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-[var(--color-brand-primary)]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#attr-grid)" />
        </svg>
      </div>

      {/* Section Header - NOT sticky, scrolls away naturally */}
      <div className="relative z-0 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
              <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
                Core Principles
              </span>
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            </div>

            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-[var(--color-brand-primary)]"
              style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
            >
              The Four Key Attributes
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Sticky Card Stack */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {attributes.map((attr, index) => (
          <StickyCard
            key={attr.number}
            attr={attr}
            index={index}
            totalCards={attributes.length}
          />
        ))}
      </div>

      {/* Bottom spacer and decorative element */}
      <div className="relative py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <div className="w-2 h-2 rotate-45 bg-[var(--color-brand-primary)]" />
            <div className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
