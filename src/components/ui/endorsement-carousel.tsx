"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types =====
export interface Endorsement {
  name: string;
  designation: string;
  quote: string;
  profileImage?: string;
}

interface CarouselProps {
  items: React.ReactElement<{
    endorsement: Endorsement;
    index: number;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Carousel Component =====
const EndorsementCarousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 230 : 384;
      const gap = typeof window !== "undefined" && window.innerWidth < 768 ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
          )}
        />
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-3",
            "max-w-7xl mx-auto"
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={`card-${index}`}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {React.cloneElement(item, {
                onCardClose: () => handleCardClose(index),
              })}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4 pr-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center disabled:opacity-50 hover:bg-[#1e2d73] transition-colors duration-200"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center disabled:opacity-50 hover:bg-[#1e2d73] transition-colors duration-200"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

// ===== Endorsement Card Component =====
const EndorsementCard = ({
  endorsement,
  index,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop",
}: {
  endorsement: Endorsement;
  index: number;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  // Generate initials for placeholder
  const initials = endorsement.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] h-full z-[60] p-4 md:p-10 rounded-3xl relative md:mt-10 overflow-y-auto"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-[var(--color-brand-primary)]"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-white absolute" />
              </button>
              <p className="px-0 md:px-20 text-[var(--color-text-secondary)] text-lg font-light underline underline-offset-8 lowercase">
                {endorsement.designation}
              </p>
              <p className="px-0 md:px-20 text-2xl md:text-4xl font-normal italic text-[var(--color-brand-primary)] mt-4 uppercase">
                {endorsement.name.toUpperCase()}.
              </p>
              <div className="py-8 text-[var(--color-brand-primary)] px-0 md:px-20 text-2xl md:text-3xl lowercase font-light leading-snug tracking-wide">
                <Quote className="h-6 w-6 text-[var(--color-brand-primary)]/50 mb-4" />
                {endorsement.quote}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.button
        onClick={handleExpand}
        className="text-left"
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 3,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div
          className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md`}
        >
          {/* Background texture */}
          <div className="absolute opacity-30" style={{ inset: "-1px 0 0" }}>
            <div className="absolute inset-0">
              <Image
                className="block w-full h-full object-center object-cover"
                src={backgroundImage}
                alt="Background layer"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-80 overflow-hidden rounded-full border-[3px] border-solid border-[rgba(59,59,59,0.6)] flex-none relative z-10">
            {endorsement.profileImage ? (
              <Image
                className="transition duration-300 object-cover grayscale sepia-[0.3]"
                src={endorsement.profileImage}
                width={150}
                height={150}
                loading="lazy"
                alt={endorsement.name}
              />
            ) : (
              <div className="w-full h-full bg-[var(--color-brand-primary)] flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                {initials}
              </div>
            )}
          </div>

          {/* Quote */}
          <p className="text-[rgba(31,27,29,0.7)] text-xl md:text-2xl font-normal text-center [text-wrap:balance] mt-6 px-6 lowercase relative z-10 leading-relaxed">
            {endorsement.quote.length > 120
              ? `${endorsement.quote.slice(0, 120)}...`
              : endorsement.quote}
          </p>

          {/* Name */}
          <p className="text-[rgba(31,27,29,0.7)] text-xl md:text-2xl font-light italic text-center mt-6 uppercase relative z-10">
            {endorsement.name.toUpperCase()}.
          </p>

          {/* Designation */}
          <p className="text-[rgba(31,27,29,0.7)] text-sm md:text-base font-light italic text-center mt-2 lowercase underline underline-offset-8 decoration-1 relative z-10 px-4">
            {endorsement.designation.length > 40
              ? `${endorsement.designation.slice(0, 40)}...`
              : endorsement.designation.toLowerCase()}
          </p>
        </div>
      </motion.button>
    </>
  );
};

export { EndorsementCarousel, EndorsementCard };
