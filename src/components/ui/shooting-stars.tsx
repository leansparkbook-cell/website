"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  if (typeof window === "undefined") return { x: 0, y: 0, angle: 45 };

  // Bias towards top and right edges for a more natural "falling" feel
  const side = Math.random() < 0.7 ? (Math.random() < 0.5 ? 0 : 1) : (Math.random() < 0.5 ? 2 : 3);
  const offset = Math.random() * (side % 2 === 0 ? window.innerWidth : window.innerHeight);

  switch (side) {
    case 0: // Top edge - falling diagonally down-right
      return { x: offset, y: -10, angle: 35 + Math.random() * 20 };
    case 1: // Right edge - falling diagonally down-left
      return { x: window.innerWidth + 10, y: offset * 0.6, angle: 145 + Math.random() * 20 };
    case 2: // Bottom edge (rare)
      return { x: offset, y: window.innerHeight + 10, angle: 215 + Math.random() * 20 };
    case 3: // Left edge
      return { x: -10, y: offset * 0.4, angle: 325 + Math.random() * 20 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 4,
  maxSpeed = 12,
  minDelay = 2500,
  maxDelay = 6000,
  starColor = "#C4A962",
  trailColor = "#26388D",
  starWidth = 80,
  starHeight = 1.5,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const createStar = useCallback(() => {
    const { x, y, angle } = getRandomStartPoint();
    const newStar: ShootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    };
    setStar(newStar);

    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    timeoutRef.current = setTimeout(createStar, randomDelay);
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    // Initial delay before first star
    const initialDelay = Math.random() * 2000 + 500;
    timeoutRef.current = setTimeout(createStar, initialDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [createStar]);

  useEffect(() => {
    if (!star) return;

    const moveStar = () => {
      setStar((prevStar) => {
        if (!prevStar) return null;

        const newX =
          prevStar.x +
          prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
        const newY =
          prevStar.y +
          prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
        const newDistance = prevStar.distance + prevStar.speed;
        // Gentle scale increase for trail effect
        const newScale = 1 + newDistance / 200;

        // Check if star is out of bounds
        if (
          typeof window !== "undefined" &&
          (newX < -100 ||
            newX > window.innerWidth + 100 ||
            newY < -100 ||
            newY > window.innerHeight + 100)
        ) {
          return null;
        }

        return {
          ...prevStar,
          x: newX,
          y: newY,
          distance: newDistance,
          scale: newScale,
        };
      });
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  // Generate unique gradient ID to avoid conflicts
  const gradientId = `shooting-star-gradient-${starColor.replace("#", "")}`;

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}
      style={{ opacity: 0.75 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={trailColor} stopOpacity={0} />
          <stop offset="50%" stopColor={trailColor} stopOpacity={0.4} />
          <stop offset="100%" stopColor={starColor} stopOpacity={1} />
        </linearGradient>
        {/* Enhanced glow filter for premium feel */}
        <filter id="shooting-star-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Extra glow for the star head */}
        <filter id="star-head-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {star && (
        <g filter="url(#shooting-star-glow)">
          <rect
            key={star.id}
            x={star.x}
            y={star.y}
            width={starWidth * star.scale}
            height={starHeight}
            fill={`url(#${gradientId})`}
            rx={starHeight / 2}
            ry={starHeight / 2}
            transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
          />
          {/* Bright glowing head of the shooting star */}
          <circle
            cx={star.x + (starWidth * star.scale) * Math.cos((star.angle * Math.PI) / 180)}
            cy={star.y + (starWidth * star.scale) * Math.sin((star.angle * Math.PI) / 180)}
            r={3}
            fill={starColor}
            opacity={1}
            filter="url(#star-head-glow)"
          />
        </g>
      )}
    </svg>
  );
};
