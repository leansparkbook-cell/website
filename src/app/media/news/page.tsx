"use client";

import { motion } from "framer-motion";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CursorSpark from "../../components/CursorSpark";
import { FiFileText } from "react-icons/fi";

export default function NewsPage() {
  return (
    <main className="relative">
      <NavBar />
      <CursorSpark />
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <section className="relative py-24 md:py-32 px-6 lg:px-12 min-h-[60vh] flex items-center justify-center bg-[var(--color-paper-warm)]">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--color-brand-primary)]/[0.08] mb-8"
          >
            <FiFileText className="w-10 h-10 text-[var(--color-brand-primary)]" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
              News
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-4"
          >
            Work in Progress
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[1.125rem] text-[var(--color-text-secondary)] leading-relaxed"
          >
            We&apos;re curating the latest news and updates about LeanSpark.
            Check back soon for exciting announcements.
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]/20" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]/40" />
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]/60" />
          </motion.div>
        </motion.div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
      </section>

      <Footer />
    </main>
  );
}
