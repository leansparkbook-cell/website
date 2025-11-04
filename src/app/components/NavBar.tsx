"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Authors", "Media"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-text)] tracking-tight"
        >
          Lean<span className="text-[var(--color-accent)]">Spark</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-8 items-center"
        >
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
          <button
            className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
            aria-label="Pre-order LeanSpark"
          >
            Pre-Order
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--color-text)] text-3xl"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <button
                className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pre-Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
