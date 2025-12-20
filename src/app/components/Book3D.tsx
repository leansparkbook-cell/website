"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface Book3DProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Book3D({ src, alt, className = "" }: Book3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values (normalized to -0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring config for smooth, premium feel
  const springConfig = { stiffness: 150, damping: 20 };

  // Transform mouse position to rotation angles (±8°)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize to -0.5 to 0.5
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Book Container */}
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
