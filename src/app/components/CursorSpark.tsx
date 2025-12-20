"use client";

import { useEffect, useRef } from "react";

export default function CursorSpark() {
  const lastSparkTime = useRef(0);
  const THROTTLE_MS = 35; // Increased throttle for subtler effect

  useEffect(() => {
    const createSpark = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastSparkTime.current < THROTTLE_MS) return;
      lastSparkTime.current = now;

      const spark = document.createElement("div");

      // Smaller size for subtle premium feel
      const size = 3 + Math.random() * 2;

      spark.style.position = "fixed";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.borderRadius = "50%";
      // Outlined ring instead of filled circle - using gold color
      spark.style.background = "transparent";
      spark.style.border = "1px solid var(--color-brand-gold)";
      spark.style.pointerEvents = "none";
      spark.style.opacity = "0.35"; // More subtle opacity
      spark.style.zIndex = "9999";
      spark.style.transform = "translate(-50%, -50%)";
      spark.style.transition = "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1), transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      // Subtle gold glow
      spark.style.boxShadow = "0 0 4px rgba(196, 169, 98, 0.2)";

      document.body.appendChild(spark);

      // Trigger animation - expands into outlined ring
      requestAnimationFrame(() => {
        spark.style.opacity = "0";
        spark.style.transform = "translate(-50%, -50%) scale(2)";
      });

      // Clean up
      setTimeout(() => {
        spark.remove();
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    // Add event listener with capture phase to ensure it fires
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Also listen to pointermove as a fallback
    window.addEventListener("pointermove", (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        createSpark(e.clientX, e.clientY);
      }
    }, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handleMouseMove as any);
    };
  }, []);

  return null;
}
