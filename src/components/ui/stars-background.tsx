"use client";

import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  color: string;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
  /** Primary star color - defaults to brand blue */
  primaryColor?: string;
  /** Secondary star color - defaults to brand gold */
  secondaryColor?: string;
  /** Base opacity for stars (0-1) - lower for light backgrounds */
  baseOpacity?: number;
  /** Minimum star radius in pixels */
  minRadius?: number;
  /** Maximum star radius in pixels */
  maxRadius?: number;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00006,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.3,
  maxTwinkleSpeed = 0.8,
  className,
  primaryColor = "#26388D",
  secondaryColor = "#C4A962",
  baseOpacity = 0.12,
  minRadius = 0.4,
  maxRadius = 1.2,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;

        // 70% primary color, 30% secondary (gold) for elegant mix
        const color = Math.random() < 0.7 ? primaryColor : secondaryColor;

        // Vary opacity slightly per star for depth
        const opacityVariation = 0.6 + Math.random() * 0.4;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: minRadius + Math.random() * (maxRadius - minRadius),
          opacity: baseOpacity * opacityVariation,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
          color,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
      primaryColor,
      secondaryColor,
      baseOpacity,
      minRadius,
      maxRadius,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        // Use device pixel ratio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    const currentCanvas = canvasRef.current;
    if (currentCanvas) {
      resizeObserver.observe(currentCanvas);
    }

    return () => {
      if (currentCanvas) {
        resizeObserver.unobserve(currentCanvas);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const startTime = Date.now();

    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 38, g: 56, b: 141 }; // Fallback to brand primary
    };

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // Calculate current opacity with smooth twinkle
        let currentOpacity = star.opacity;
        if (star.twinkleSpeed !== null) {
          // Use sine wave for smooth, gentle twinkle
          const twinkleFactor =
            0.5 + Math.sin((elapsed * 0.001) / star.twinkleSpeed) * 0.5;
          // Subtle twinkle range: 60% to 100% of base opacity
          currentOpacity = star.opacity * (0.6 + twinkleFactor * 0.4);
        }

        const rgb = hexToRgb(star.color);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity})`;
        ctx.fill();

        // Add enhanced glow for larger stars (premium touch)
        if (star.radius > 0.7) {
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 4
          );
          gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity * 0.5})`);
          gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity * 0.2})`);
          gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0 pointer-events-none", className)}
    />
  );
};
