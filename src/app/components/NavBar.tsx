"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const navLinks = [
  { name: "Stories", href: "/stories" },
  { name: "Contests", href: "/#contests" },
];

const authorsDropdown = [
  { name: "Who Are We", href: "/#authors" },
  { name: "Our Story", href: "/authors/our-story" },
];

const mediaDropdown = [
  { name: "News", href: "/media/news" },
  { name: "Videos", href: "/media/videos" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);
  const [isMobileAuthorsOpen, setIsMobileAuthorsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mediaDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAuthorsOpen(false);
      }
      if (mediaDropdownRef.current && !mediaDropdownRef.current.contains(event.target as Node)) {
        setIsMediaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle hash navigation
  const handleHashNavigation = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.substring(2); // Remove "/#"

      if (pathname !== "/") {
        // If not on home page, use window.location for reliable navigation
        window.location.href = `/${href.substring(1)}`;
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

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
            {/* Authors Dropdown */}
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setIsAuthorsOpen(true)}
              onMouseLeave={() => setIsAuthorsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300"
                onClick={() => setIsAuthorsOpen(!isAuthorsOpen)}
              >
                Authors
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isAuthorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isAuthorsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-48 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[var(--color-border)] overflow-hidden"
                  >
                    {authorsDropdown.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleHashNavigation(e, item.href);
                          setIsAuthorsOpen(false);
                        }}
                        className="block px-4 py-3 text-[0.875rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/[0.03] transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Media Dropdown */}
            <motion.div
              ref={mediaDropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
              onMouseEnter={() => setIsMediaOpen(true)}
              onMouseLeave={() => setIsMediaOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300"
                onClick={() => setIsMediaOpen(!isMediaOpen)}
              >
                Media
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMediaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isMediaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-48 py-2 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[var(--color-border)] overflow-hidden"
                  >
                    {mediaDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMediaOpen(false)}
                        className="block px-4 py-3 text-[0.875rem] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/[0.03] transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Other nav links */}
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + idx * 0.05, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleHashNavigation(e, link.href)}
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
                {/* Authors with expandable dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0, duration: 0.4 }}
                >
                  <button
                    onClick={() => setIsMobileAuthorsOpen(!isMobileAuthorsOpen)}
                    className="flex items-center justify-between w-full py-4 text-2xl font-semibold text-[var(--color-brand-primary)] tracking-[-0.02em] border-b border-[var(--color-border)] hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                  >
                    Authors
                    <FiChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isMobileAuthorsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileAuthorsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-[var(--color-brand-primary)]/[0.02]"
                      >
                        {authorsDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              handleHashNavigation(e, item.href);
                              setIsMobileMenuOpen(false);
                              setIsMobileAuthorsOpen(false);
                            }}
                            className="block py-3 pl-6 text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] border-b border-[var(--color-border)]/50 transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Media with expandable dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.4 }}
                >
                  <button
                    onClick={() => setIsMobileMediaOpen(!isMobileMediaOpen)}
                    className="flex items-center justify-between w-full py-4 text-2xl font-semibold text-[var(--color-brand-primary)] tracking-[-0.02em] border-b border-[var(--color-border)] hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                  >
                    Media
                    <FiChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isMobileMediaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileMediaOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-[var(--color-brand-primary)]/[0.02]"
                      >
                        {mediaDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileMediaOpen(false);
                            }}
                            className="block py-3 pl-6 text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] border-b border-[var(--color-border)]/50 transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Stories */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.16, duration: 0.4 }}
                >
                  <Link
                    href="/stories"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-2xl font-semibold text-[var(--color-brand-primary)] tracking-[-0.02em] border-b border-[var(--color-border)] hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                  >
                    Stories
                  </Link>
                </motion.div>

                {/* Contests */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24, duration: 0.4 }}
                >
                  <Link
                    href="/#contests"
                    onClick={(e) => {
                      handleHashNavigation(e, "/#contests");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-4 text-2xl font-semibold text-[var(--color-brand-primary)] tracking-[-0.02em] border-b border-[var(--color-border)] hover:text-[var(--color-brand-accent)] transition-colors duration-300"
                  >
                    Contests
                  </Link>
                </motion.div>

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
