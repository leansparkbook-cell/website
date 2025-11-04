"use client";

import { useEffect, useRef } from "react";

export default function CursorSpark() {
  const lastSparkTime = useRef(0);
  const THROTTLE_MS = 20; // Reduced from 30ms to 20ms for more responsive trail

  useEffect(() => {
    const createSpark = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastSparkTime.current < THROTTLE_MS) return;
      lastSparkTime.current = now;

      const spark = document.createElement("div");

      // Slightly larger size variation for more visibility
      const size = 5 + Math.random() * 4;

      spark.style.position = "fixed";
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.borderRadius = "50%";
      spark.style.background = "var(--color-accent)";
      spark.style.pointerEvents = "none";
      spark.style.opacity = "0.75"; // Increased from 0.6 to 0.75 for more visibility
      spark.style.zIndex = "9999";
      spark.style.transform = "translate(-50%, -50%)";
      spark.style.transition = "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"; // Slightly longer fade
      spark.style.boxShadow = "0 0 8px rgba(230, 110, 33, 0.4)"; // Subtle glow

      document.body.appendChild(spark);

      // Trigger animation
      requestAnimationFrame(() => {
        spark.style.opacity = "0";
        spark.style.transform = "translate(-50%, -50%) scale(2.5)";
      });

      // Clean up
      setTimeout(() => {
        spark.remove();
      }, 700); // Extended from 600ms to match animation duration
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
