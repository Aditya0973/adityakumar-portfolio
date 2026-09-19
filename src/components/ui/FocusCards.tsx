"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FocusCardProps {
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function FocusCardItem({
  index,
  hoveredIndex,
  setHoveredIndex,
  children,
  className = "",
  onClick
}: FocusCardProps) {
  const isHovered = hoveredIndex === index;
  const isBlurred = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
      animate={{
        scale: isHovered ? 1.025 : isBlurred ? 0.98 : 1,
        filter: isBlurred ? "blur(5px)" : "blur(0px)",
        opacity: isBlurred ? 0.5 : 1
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl cursor-pointer select-none transition-shadow duration-300 ${
        isHovered ? "shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-30" : "z-10"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
