"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Link from "next/link";

const footerLinks = [
  { name: "The Book", href: "#about" },
  { name: "Authors", href: "#authors" },
  { name: "Why Now?", href: "#why-now" },
  { name: "Contests", href: "#contests" },
];

const authorLinks = [
  { name: "Jaideep Prabhu", href: "https://www.linkedin.com/in/jaideep-prabhu-b592881/" },
  { name: "Priyank Narayan", href: "https://www.linkedin.com/in/priyanknarayan/" },
  { name: "Mukesh Sud", href: "https://www.linkedin.com/in/mukesh-sud-0157791/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-brand-primary)] text-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Main Footer Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12">

        {/* Top Section - CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/60 mb-6">
            Available January 2026
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.06em] mb-8">
            Ready to Ignite Your Creativity?
          </h2>

          {/* Pre-order CTA */}
          <motion.a
            href="https://www.amazon.in/LeanSpark-Frugal-Design-Global-Impact/dp/0143480618"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-base tracking-wide overflow-hidden"
          >
            <span className="absolute inset-0 border-2 border-white/30 rounded-full" />
            <span className="absolute inset-0 bg-white rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            <span className="relative z-10 text-white group-hover:text-[var(--color-brand-primary)] transition-colors duration-300 delay-100">
              Pre-Order Now
            </span>
            <FiArrowUpRight className="relative z-10 w-5 h-5 text-white group-hover:text-[var(--color-brand-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 delay-100" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold uppercase tracking-[0.02em]">
                LeanSpark
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              A playbook for turning scarcity into strategy. Where constraints ignite creativity.
            </p>

            {/* Diamond accent */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-2 h-2 border border-[var(--color-brand-gold)] rotate-45 opacity-60" />
              <span className="text-xs text-white/40 tracking-[0.15em] uppercase">
                Penguin Random House
              </span>
            </div>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[var(--color-brand-gold)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Authors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              The Authors
            </h3>
            <ul className="space-y-4">
              {authorLinks.map((author) => (
                <li key={author.name}>
                  <a
                    href={author.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[var(--color-brand-gold)] transition-all duration-300" />
                    {author.name}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="mailto:avnie.g@gmail.com"
                className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <FiMail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40 tracking-wide">
              © {currentYear} LeanSpark. All rights reserved.
            </p>

            {/* JLF Badge */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40">Official Launch Partner</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-xs font-medium text-white/60">JLF 2026</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-brand-accent)] via-[var(--color-brand-gold)] to-[var(--color-brand-accent)]" />
    </footer>
  );
}
