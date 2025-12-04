"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const authors = [
  {
    name: "Jaideep Prabhu",
    title: "Professor of Marketing, Cambridge University",
    img: "/images/jaideep.svg",
  },
  {
    name: "Mukesh Sud",
    title: "Professor of Entrepreneurship, IIM Ahmedabad",
    img: "/images/mukesh.svg",
  },
  {
    name: "Priyank Narayan",
    title: "Director, Centre for Entrepreneurship, Ashoka University",
    img: "/images/priyank.svg",
  },
];

export default function AuthorsSection() {
  return (
    <section
      id="authors"
      className="relative py-24 px-6 md:px-20 bg-[var(--color-paper)] border-t border-gray-100/50"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-serif mb-4 leading-tight"
        >
          Meet the <span className="text-[var(--color-accent)]">Authors</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-[var(--color-text)]/70 mb-16 max-w-2xl mx-auto"
        >
          Leading voices in innovation, entrepreneurship, and frugal strategy
        </motion.p>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {authors.map((author, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + idx * 0.15,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Image Frame */}
              <div className="relative w-48 h-48 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={author.img}
                    alt={author.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    priority={idx === 0}
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Decorative accent ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/30"
                  initial={false}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Author Name */}
              <motion.h3
                className="font-serif text-2xl md:text-3xl text-[var(--color-text)] mb-3 leading-tight"
                whileHover={{ color: "var(--color-accent)" }}
                transition={{ duration: 0.3 }}
              >
                {author.name}
              </motion.h3>

              {/* Author Title/Bio */}
              <p className="text-[var(--color-text)]/70 max-w-xs leading-relaxed text-sm md:text-base px-2">
                {author.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
