"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 bg-[var(--color-brand-bg)]">
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Logo */}
        <div className="mb-6">
          <span className="text-[1.5rem] font-display font-semibold uppercase tracking-[0.02em] text-[var(--color-brand-primary)]">
            LeanSpark
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-[var(--color-text-secondary)] mb-8 font-serif italic">
          Where Constraints Ignite Creativity
        </p>

        {/* Diamond Separator */}
        <div className="flex justify-center mb-8">
          <div className="w-2 h-2 border border-[var(--color-brand-accent)] rotate-45 opacity-40" />
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium text-[var(--color-text-secondary)] tracking-wide">
          © {currentYear} LeanSpark. All rights reserved.
        </p>

        {/* Authors */}
        <p className="text-xs font-medium text-[var(--color-text-secondary)] mt-2">
          By Jaideep Prabhu, Priyank Narayan & Mukesh Sud
        </p>
      </motion.div>
    </footer>
  );
}
