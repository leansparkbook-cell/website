"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Book3D from "./Book3D";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* === BACKGROUND LAYERS (full viewport width) === */}

      {/* Layer 1: Brand grid pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(38, 56, 141, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(38, 56, 141, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Layer 1b: Halftone dot texture - adds tactile depth */}
      <div
        className="absolute inset-0 -z-[9]"
        style={{
          backgroundImage: `radial-gradient(rgba(38, 56, 141, 0.10) 1.25px, transparent 1.25px)`,
          backgroundSize: '22px 22px'
        }}
      />

      {/* Layer 1c: Soft brand glow - lifts the page off flat white */}
      <div
        className="absolute inset-0 -z-[8] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 45% at 75% 32%, rgba(196, 169, 98, 0.14), transparent 70%),
            radial-gradient(ellipse 55% 50% at 18% 72%, rgba(38, 56, 141, 0.09), transparent 70%)
          `
        }}
      />

      {/* Layer 1d: Edge fade - keeps texture in the center, softens edges */}
      <div
        className="absolute inset-0 -z-[7] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 92% 78% at 50% 45%, transparent 42%, var(--color-brand-bg) 92%)
          `
        }}
      />

      {/* Layer 2: Twinkling stars background - elegant brand-colored particles */}
      <div className="absolute inset-0 -z-[5]">
        <StarsBackground
          starDensity={0.00009}
          primaryColor="#26388D"
          secondaryColor="#C4A962"
          baseOpacity={0.22}
          minRadius={0.5}
          maxRadius={1.4}
          minTwinkleSpeed={0.35}
          maxTwinkleSpeed={0.9}
          twinkleProbability={0.85}
        />
      </div>

      {/* Layer 3: Shooting stars - elegant gold trails with blue glow */}
      <div className="absolute inset-0 z-0">
        <ShootingStars
          starColor="#C4A962"
          trailColor="#26388D"
          minSpeed={6}
          maxSpeed={14}
          minDelay={2500}
          maxDelay={4000}
          starWidth={90}
          starHeight={2}
        />
      </div>

      {/* === BRAND DECORATIVE ELEMENTS (subtle, brand colours only) === */}

      {/* Editorial corner frame — thin blue hairlines with gold accent corners */}
      <div
        className="pointer-events-none absolute inset-x-6 lg:inset-x-10 top-28 bottom-10 z-[1] hidden lg:block"
        aria-hidden="true"
      >
        <span className="absolute -top-px -left-px h-10 w-10 border-t border-l border-[var(--color-brand-primary)]/25" />
        <span className="absolute -top-px -right-px h-10 w-10 border-t border-r border-[var(--color-brand-primary)]/25" />
        <span className="absolute -bottom-px -left-px h-10 w-10 border-b border-l border-[var(--color-brand-primary)]/25" />
        <span className="absolute -bottom-px -right-px h-10 w-10 border-b border-r border-[var(--color-brand-primary)]/25" />
        <span className="absolute -top-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-[var(--color-brand-gold)]/70" />
        <span className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-[var(--color-brand-gold)]/70" />
      </div>

      {/* Floating geometric accents — a gold ring and a slow-spinning blue square */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[20%] right-[9%] z-[1] hidden lg:block"
      >
        <div className="h-16 w-16 rounded-full border border-[var(--color-brand-gold)]/35" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0], rotate: [45, 57, 45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-[20%] left-[6%] z-[1] hidden lg:block"
      >
        <div className="h-5 w-5 border border-[var(--color-brand-primary)]/30" />
      </motion.div>

      {/* Scroll cue — minimal label with a travelling accent line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-primary)]/50">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-[var(--color-brand-primary)]/15">
          <motion.span
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-[var(--color-brand-accent)]"
          />
        </span>
      </motion.div>

      {/* === CONTENT CONTAINER (constrained width) === */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 px-6 lg:px-12 pt-32 pb-24 max-w-[1280px] mx-auto">

        {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex-1 max-w-2xl text-left"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-10 h-[2px] bg-[var(--color-brand-accent)]" />
          <span className="text-[0.8125rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand-primary)]">
            January 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.035em] mb-8"
          style={{ color: "#BD2220" }}
        >
          <span className="block">When Constraints</span>
          <span className="block">Ignite Creativity</span>
        </motion.h1>

        {/* Authors */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[0.8125rem] text-[var(--color-text-tertiary)] mb-10 font-medium tracking-[0.06em] uppercase"
        >
          By Jaideep Prabhu, Priyank Narayan & Mukesh Sud
        </motion.p>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{
            y: -3,
            boxShadow: "0 16px 32px -8px rgba(38, 56, 141, 0.25)",
          }}
          whileTap={{ scale: 0.98 }}
          href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#BD2220] text-white rounded-full font-semibold text-[0.9375rem] tracking-[-0.01em] transition-all duration-300 hover:bg-[#a01d1b]"
        >
          Order Now
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </span>
        </motion.a>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-3 mt-10 pt-8 border-t border-[var(--color-border)]"
        >
          <span className="text-[0.75rem] text-[var(--color-text-muted)] font-medium tracking-wide uppercase">
            Published by Penguin Random House
          </span>
        </motion.div>
      </motion.div>

      {/* Right Side - Hero Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex-1 flex flex-col justify-center items-center"
      >
        <Book3D
          src="/hero-gem.svg"
          alt="LeanSpark - When Constraints Ignite Creativity"
          className="w-[240px] md:w-[300px] lg:w-[380px]"
        />
      </motion.div>
      </section>
    </div>
  );
}
