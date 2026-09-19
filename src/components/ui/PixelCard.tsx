"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
}

export function PixelCard({
  children,
  className = "",
  gridSize = 24,
  pixelColor = "#10B981"
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pixels, setPixels] = useState<{ id: number; x: number; y: number; alpha: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / gridSize) * gridSize;
    const y = Math.floor((e.clientY - rect.top) / gridSize) * gridSize;

    setPixels((prev) => {
      const exists = prev.some((p) => p.x === x && p.y === y);
      if (exists) return prev;
      return [...prev.slice(-25), { id: Date.now() + Math.random(), x, y, alpha: 0.85 }];
    });
  };

  useEffect(() => {
    if (pixels.length === 0) return;
    const interval = setInterval(() => {
      setPixels((prev) =>
        prev
          .map((p) => ({ ...p, alpha: p.alpha - 0.12 }))
          .filter((p) => p.alpha > 0.05)
      );
    }, 45);
    return () => clearInterval(interval);
  }, [pixels]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPixels([]);
      }}
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${className}`}
    >
      {/* Interactive Pixel Canvas Overlay */}
      {isHovered && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {pixels.map((p) => (
            <div
              key={p.id}
              style={{
                left: p.x,
                top: p.y,
                width: gridSize,
                height: gridSize,
                backgroundColor: pixelColor,
                opacity: p.alpha
              }}
              className="absolute rounded-xs shadow-xs"
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
