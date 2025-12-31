"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(38,56,141,0.06)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-[2rem] md:text-[2.25rem] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
              LEANSPARK
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ml-4 px-6 py-2.5 rounded-full text-[0.9375rem] font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-[#BD2220] rounded-full" />
              <span className="absolute inset-0 bg-[#a01d1b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                Pre-Order
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-28 px-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-2xl font-semibold text-[var(--color-brand-primary)] tracking-[-0.02em] border-b border-[var(--color-border)] hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-8 py-4 px-8 bg-[#BD2220] text-white text-lg font-semibold rounded-full hover:bg-[#a01d1b] transition-colors duration-300"
                >
                  Pre-Order Now
                  <FiArrowUpRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
