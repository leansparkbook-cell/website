"use client";

import { motion } from "framer-motion";

const insightBoxes = [
  {
    number: "I",
    content:
      "The central question facing India is this: How can it raise the standard of living for over half a billion people, given such profound resource limitations?",
  },
  {
    number: "II",
    content:
      "Even as investment flows into the country, the sheer scale of capital needed for full development is staggering.",
  },
  {
    number: "III",
    content:
      "Rather than throwing money at a problem, the smart way forward is frugal.",
  },
];

export default function WhyNowSection() {
  return (
    <section
      id="why-now"
      className="relative py-32 md:py-40 px-6 lg:px-12 bg-white overflow-hidden"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--color-brand-primary)]/[0.06] rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-[var(--color-brand-primary)]/[0.04] rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[var(--color-brand-accent)] rounded-full opacity-40" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
              The Timing
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.04em] mb-10 text-[var(--color-brand-primary)]"
            style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
          >
            Why Now?
          </h2>

          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            In an age of climate crises, resource inequalities, digital
            disruption and geopolitical conflict,{" "}
            <span className="font-semibold text-[var(--color-brand-primary)]">LeanSpark</span> is a
            universal language of{" "}
            <span className="text-[#BD2220] font-semibold">
              resilient ingenuity
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insightBoxes.map((box, index) => (
            <motion.div
              key={box.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-[var(--color-paper-warm)] rounded-2xl p-8 lg:p-10 border border-[var(--color-border)] shadow-[var(--shadow-sm)] transition-all duration-500 group-hover:shadow-[var(--shadow-lg)] group-hover:-translate-y-1 group-hover:border-[#BD2220]/20">
                {/* Roman numeral header */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-4xl lg:text-5xl font-bold text-[#BD2220]"
                    style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
                  >
                    {box.number}
                  </span>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-[#BD2220]/30 to-transparent" />
                </div>

                {/* Content */}
                <p className="text-[var(--color-text-secondary)] leading-[1.8] text-[0.95rem]">
                  {box.content}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-2 right-2 w-3 h-3 rotate-45 bg-[#BD2220] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-2 h-2 rotate-45 bg-[#BD2220]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
              Innovation Under Constraint
            </span>
            <div className="w-2 h-2 rotate-45 bg-[#BD2220]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
