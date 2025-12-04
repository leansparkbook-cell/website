"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 px-6 lg:px-20 pt-32 pb-20 max-w-7xl mx-auto relative">
      {/* Left Side - Text Content */}
      <motion.div
        variants={leftContentVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-xl text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
          Where{" "}
          <span className="text-[var(--color-accent)] relative inline-block">
            Constraints
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
          </span>{" "}
          Ignite Creativity
        </h1>

        <div className="space-y-3 mb-10">
          <p className="text-base md:text-lg text-[var(--color-text)] font-semibold leading-relaxed">
            By{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              Jaideep Prabhu
            </span>
            ,{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              Mukesh Sud
            </span>{" "}
            &{" "}
            <span className="text-[var(--color-accent)] font-semibold">
              Priyank Narayan
            </span>
          </p>
          <p className="text-sm md:text-base text-[var(--color-text)] font-semibold">
            Coming{" "}
            <span className="text-[var(--color-accent)] italic">January 2026</span>
            {" "}at{" "}
            <a
              href="https://jaipurliteraturefestival.org?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] italic hover:underline transition-all duration-200"
            >
              Jaipur Literature Festival
            </a>
          </p>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="group relative px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
          aria-label="Join the LeanSpark movement"
        >
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
            Join the Movement
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </span>
          <span className="absolute inset-0 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.button>
      </motion.div>

      {/* Right Side - Book Placeholder */}
      <motion.div
        variants={rightContentVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex justify-center items-center"
      >
        <motion.div
          className="relative w-72 h-[420px] rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-[#fff9f4] via-[#f7f2ea] to-[#ede4d9]"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Placeholder content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
              <motion.div
                className="w-8 h-8 rounded-full bg-[var(--color-accent)]/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <p className="text-[var(--color-muted)] text-sm font-medium">
              Book Cover
            </p>
            <p className="text-[var(--color-muted)] text-xs mt-1">
              Coming Soon
            </p>
          </div>

          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_20px,var(--color-accent)_20px,var(--color-accent)_21px),repeating-linear-gradient(90deg,transparent,transparent_20px,var(--color-accent)_20px,var(--color-accent)_21px)]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-32 left-10 w-2 h-2 rounded-full bg-[var(--color-accent)] hidden lg:block"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-3 h-3 rounded-full bg-[var(--color-accent)] hidden lg:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
