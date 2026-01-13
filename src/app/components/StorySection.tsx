"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[var(--color-paper-warm)] overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
              Authors
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-4">
            Our Story
          </h2>
          <p className="text-[1.125rem] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            The journey behind the book and the ideas that shaped it.
          </p>
        </motion.div>

        {/* Opening statement */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl font-medium leading-[1.4] tracking-[-0.02em] text-[var(--color-brand-primary)] text-center">
            It all started, as many good things do, with a{" "}
            <span className="relative inline-block">
              question
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[var(--color-brand-accent)]/30 origin-left"
              />
            </span>
            .
          </p>
        </motion.div>

        {/* The Question - Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-[var(--color-paper-warm)] rounded-3xl p-10 md:p-14 lg:p-16">
            {/* Quote marks */}
            <span className="absolute top-6 left-8 text-[100px] leading-none text-[var(--color-brand-primary)]/[0.06] font-serif select-none">
              "
            </span>
            <span className="absolute bottom-6 right-8 text-[100px] leading-none text-[var(--color-brand-primary)]/[0.06] font-serif select-none rotate-180">
              "
            </span>

            {/* Quote content */}
            <blockquote className="relative text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-relaxed tracking-[-0.01em] text-[var(--color-brand-primary)] text-center italic">
              What happens when ingenuity meets constraint, not in a lab or a boardroom, but in the chaos of real life?
            </blockquote>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--color-brand-accent)]/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--color-brand-accent)]/20" />
          </div>
        </motion.div>

        {/* Story paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Author names styled */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--color-brand-primary)]">Jaideep</span>,{" "}
            <span className="font-semibold text-[var(--color-brand-primary)]">Priyank</span>, and{" "}
            <span className="font-semibold text-[var(--color-brand-primary)]">Mukesh</span>{" "}
            were just three inquisitive minds pondering the same question, crossing paths at conferences and in classrooms and airports.
          </p>

          {/* Heathrow story - highlighted */}
          <div className="relative pl-6 border-l-2 border-[var(--color-brand-accent)]/30">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              By chance, Mukesh bumped into Jaideep at{" "}
              <span className="font-medium text-[var(--color-brand-primary)]">Heathrow airport</span>{" "}
              as they were boarding a plane to India.
            </p>
          </div>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Priyank was at{" "}
            <span className="font-medium text-[var(--color-brand-primary)]">Ashoka University</span>, building one of India's most vibrant entrepreneurship programmes, constantly on the hunt for frameworks that students could not just understand but{" "}
            <em>use</em>.
          </p>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Before long, the three of them were co-teaching a course on frugal innovation at Ashoka University.
          </p>

          {/* Final statement - emphasized */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-xl md:text-2xl font-medium text-[var(--color-brand-primary)] leading-relaxed text-center">
              This book is as much a product of our personal journey and friendship as it is of academic research and classroom debate.
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
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

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
