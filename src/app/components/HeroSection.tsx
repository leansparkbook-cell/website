"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Book3D from "./Book3D";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 px-6 lg:px-12 pt-32 pb-24 max-w-[1280px] mx-auto overflow-hidden">
      {/* === BACKGROUND LAYERS === */}

      {/* Layer 1: Subtle dot pattern (kept as base) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
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

      {/* === CONTENT (elevated z-index to stay above backgrounds) === */}

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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg"
        >
          A groundbreaking book on frugal design and innovation. Discover how the world's most creative minds turn limitations into competitive advantages.
        </motion.p>

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
          Pre-Order Now
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
  );
}
