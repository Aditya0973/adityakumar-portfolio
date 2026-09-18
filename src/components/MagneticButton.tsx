"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { playFigmaClick, playPop } from "@/utils/soundEffects";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  pullStrength?: number;
  playSound?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  style,
  pullStrength = 0.35,
  playSound = true
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const springConfig = { damping: 15, stiffness: 250 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * pullStrength;
    const distanceY = (e.clientY - centerY) * pullStrength;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (playSound) playPop();
    if (onClick) onClick();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ x, y, ...style }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-block cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
