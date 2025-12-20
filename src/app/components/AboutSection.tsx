"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false);

  // ESC key handler for accessibility
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-20 bg-[var(--color-paper)]"
    >
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <div className="max-w-5xl mx-auto text-left">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
          <span className="text-[0.9rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
            About The Book
          </span>
        </motion.div>

        {/* Section Title - Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-10 leading-tight text-[var(--color-brand-primary)]"
        >
          What is{" "}
          <span className="text-[var(--color-brand-accent)]">LeanSpark</span>?
        </motion.h2>

        {/* Teaser Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed mb-10"
        >
          <p className="mb-2">
            LeanSpark is a playbook for turning scarcity into strategy.
          </p>
          <p>
            It's about the entrepreneurs who didn't wait for capital, perfect timing, or Silicon Valley.
          </p>
        </motion.div>

        {/* Read More Button - Outline Style */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="group inline-flex items-center gap-3 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] rounded-full px-8 py-4 font-medium transition-all duration-500 hover:bg-[var(--color-brand-primary)] hover:text-white"
          aria-label="Read more about LeanSpark"
        >
          Read More
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Modal with Simple Fade + Scale Animation */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[var(--color-brand-primary)]/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setShowModal(false)}
              aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 flex justify-center items-center z-50 px-4 py-8">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative bg-white rounded-xl max-w-lg w-full p-10 md:p-14 border-2 border-[var(--outline-muted)]"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Corner Accents */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[var(--color-brand-accent)] opacity-50" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[var(--color-brand-accent)] opacity-50" />

                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-[var(--outline-muted)] hover:border-[var(--color-brand-primary)] transition-colors duration-300 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]"
                  aria-label="Close modal"
                >
                  <HiX className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-center"
                >
                  {/* Diamond Accent */}
                  <div className="flex justify-center mb-6">
                    <div className="w-3 h-3 border-2 border-[var(--color-brand-accent)] rotate-45" />
                  </div>

                  <h3
                    id="modal-title"
                    className="text-3xl md:text-4xl font-medium tracking-[-0.06em] mb-6 text-[var(--color-brand-primary)] leading-tight"
                  >
                    LeanSpark
                  </h3>

                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
                    LeanSpark is about rethinking innovation through constraint.
                    Drawing on years of research on{" "}
                    <span className="font-semibold text-[var(--color-brand-primary)]">
                      jugaad
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-[var(--color-brand-primary)]">
                      lean entrepreneurship
                    </span>
                    , it explores how India's entrepreneurs transform limitation
                    into launchpads — building fast, frugal, and fearless. It's
                    not a theory; it's a spark born from real journeys.
                  </p>

                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-3 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] rounded-full hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-500 font-medium"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
