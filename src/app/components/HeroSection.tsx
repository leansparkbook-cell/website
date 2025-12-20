"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Book3D from "./Book3D";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 px-6 lg:px-24 pt-32 pb-24 max-w-[1400px] mx-auto">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-primary) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex-1 max-w-2xl text-left"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-12 h-[2px] bg-[var(--color-brand-accent)]" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
            Coming January 2026
          </span>
        </div>

        {/* Headline - Geist for modern impact */}
        <h1 className="text-[var(--color-brand-primary)] font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.06em] mb-8">
          <span className="block whitespace-nowrap">
            <EncryptedText
              text="Where Constraints"
              encryptedClassName="text-neutral-400"
              revealedClassName="text-[var(--color-brand-primary)]"
              revealDelayMs={50}
            />
          </span>
          <span className="block whitespace-nowrap">
            <EncryptedText
              text="Ignite Creativity"
              encryptedClassName="text-neutral-400"
              revealedClassName="text-[var(--color-brand-accent)]"
              revealDelayMs={50}
            />
          </span>
        </h1>

        {/* Author Byline */}
        <p className="text-sm text-[var(--color-text-secondary)] my-12 max-w-lg leading-relaxed font-medium tracking-[0.1em] uppercase">
          By Jaideep Prabhu, Priyank Narayan & Mukesh Sud
        </p>

        {/* CTA Button - Premium Interaction */}
        <motion.a
          href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            boxShadow: "0 20px 40px -12px rgba(26, 46, 64, 0.25)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium text-base tracking-wide overflow-hidden"
          style={{ backgroundColor: 'transparent' }}
        >
          {/* Background fill animation */}
          <span className="absolute inset-0 border-2 border-[var(--color-brand-primary)] rounded-full" />
          <span className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

          {/* Text content */}
          <span className="relative z-10 text-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300 delay-100">
            Pre-Order Now
          </span>

          {/* Arrow with enhanced animation */}
          <span className="relative z-10 flex items-center justify-center w-5 h-5 text-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300 delay-100">
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </span>
        </motion.a>
      </motion.div>

      {/* Right Side - Hero Visual & JLF Partner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="flex-1 flex flex-col justify-center items-center"
      >
        {/* 3D Interactive Book */}
        <Book3D
          src="/hero-gem.svg"
          alt="LeanSpark - Where Constraints Ignite Creativity"
          className="w-[220px] md:w-[280px] lg:w-[340px]"
        />
      </motion.div>
    </section>
  );
}
