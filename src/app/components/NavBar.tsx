"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "The Book", href: "#book" },
  { name: "Authors", href: "#authors" },
  { name: "Why Now?", href: "#why-now" },
  { name: "Contests", href: "#contests" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[var(--outline-light)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo - Bold display font, prominent size */}
          <Link href="/" className="group">
            <span className="text-[2.5rem] font-display font-bold uppercase tracking-[-0.02em] text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
              LeanSpark
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-brand-accent)] group-hover:w-full transition-all duration-400" />
              </Link>
            ))}

            {/* Outline CTA Button - Premium */}
            <a
              href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(38,56,141,0.3)] transition-all duration-300"
            >
              <span className="absolute inset-0 border-2 border-[var(--color-brand-primary)] rounded-full" />
              <span className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              <span className="relative z-10 text-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-200 delay-75">
                Pre-Order
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-brand-primary)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-24 left-6 w-12 h-12 border-t-2 border-l-2 border-[var(--color-brand-accent)] opacity-30" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[var(--color-brand-accent)] opacity-30" />

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-[var(--color-brand-primary)] border-b border-[var(--outline-light)] pb-4 hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Outline CTA - Premium */}
              <a
                href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 rounded-full text-lg font-medium mt-4 text-center overflow-hidden active:scale-[0.98] transition-transform"
              >
                <span className="absolute inset-0 border-2 border-[var(--color-brand-primary)] rounded-full" />
                <span className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <span className="relative z-10 text-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-200 delay-75">
                  Pre-Order Now
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
