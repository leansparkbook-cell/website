"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

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
      className="relative py-24 px-6 md:px-20 bg-[var(--color-paper)] border-t border-gray-100/50"
    >
      <div className="max-w-5xl mx-auto text-left">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
        >
          What is{" "}
          <span className="text-[var(--color-accent)]">LeanSpark</span>?
        </motion.h2>

        {/* Teaser Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg md:text-xl text-[var(--color-text)]/90 max-w-3xl leading-relaxed mb-8"
        >
          LeanSpark is a book about turning scarcity into strategy. It's about
          the entrepreneurs who didn't wait for capital, perfect timing, or
          Silicon Valley.
        </motion.p>

        {/* Read More Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="group inline-flex items-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:shadow-lg"
          aria-label="Read more about LeanSpark"
        >
          Read More
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            →
          </motion.span>
        </motion.button>
      </div>

      {/* Modal with 3D Flip Animation */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowModal(false)}
              aria-hidden="true"
            />

            {/* Modal Container with Perspective */}
            <div
              className="fixed inset-0 flex justify-center items-center z-50 px-4 py-8"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-12 border border-gray-100"
                initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.5,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  aria-label="Close modal"
                >
                  <HiX className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-center"
                >
                  <h3
                    id="modal-title"
                    className="text-3xl md:text-4xl font-serif mb-6 text-[var(--color-accent)] leading-tight"
                  >
                    LeanSpark
                  </h3>

                  <p className="text-base md:text-lg text-[var(--color-text)]/90 leading-relaxed mb-8">
                    LeanSpark is about rethinking innovation through constraint.
                    Drawing on years of research on{" "}
                    <span className="font-semibold text-[var(--color-text)]">
                      jugaad
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-[var(--color-text)]">
                      lean entrepreneurship
                    </span>
                    , it explores how India's entrepreneurs transform limitation
                    into launchpads — building fast, frugal, and fearless. It's
                    not a theory; it's a spark born from real journeys.
                  </p>

                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-medium"
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
