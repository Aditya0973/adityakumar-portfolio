"use client";

import React from "react";
import { motion } from "framer-motion";

interface CometCardProps {
  children: React.ReactNode;
  className?: string;
  cometColor?: string;
}

export function CometCard({
  children,
  className = "",
  cometColor = "#10B981"
}: CometCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-[1px] group ${className}`}>
      {/* Comet Glowing Border Beam */}
      <motion.div
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg 280deg, ${cometColor} 340deg, #ffffff 360deg)`
        }}
      />

      <div className="relative h-full w-full rounded-3xl overflow-hidden z-10">
        {children}
      </div>
    </div>
  );
}
