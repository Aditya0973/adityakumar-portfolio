"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SquigglyLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
  color?: string;
  onClick?: () => void;
}

export function SquigglyLink({
  href,
  children,
  className = "",
  activeClassName = "",
  isActive = false,
  color = "#E65100",
  onClick
}: SquigglyLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-col items-center justify-center py-1 transition-colors ${
        isActive ? activeClassName : ""
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {/* Smooth Ink-Drawn Squiggly SVG Underline with Fluid Wave Physics */}
      <span className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none overflow-hidden select-none">
        <svg
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          className="w-full h-full overflow-hidden"
        >
          <motion.path
            d="M -50,6 Q -37.5,0.5 -25,6 T 0,6 T 25,6 T 50,6 T 75,6 T 100,6 T 125,6 T 150,6"
            fill="none"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isActive
                ? {
                    pathLength: 1,
                    opacity: 1,
                    x: [0, -50]
                  }
                : isHovered
                ? {
                    pathLength: 1,
                    opacity: 1,
                    x: [0, -25]
                  }
                : {
                    pathLength: 0,
                    opacity: 0,
                    x: 0
                  }
            }
            transition={{
              x: {
                repeat: isActive ? Infinity : 0,
                ease: "linear",
                duration: 2.2
              },
              pathLength: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.2 }
            }}
          />
        </svg>
      </span>
    </Link>
  );
}

export function SquigglyText({
  children,
  className = "",
  color = "#E65100"
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none overflow-hidden select-none">
        <svg
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          className="w-full h-full overflow-hidden"
        >
          <motion.path
            d="M -50,6 Q -37.5,0.5 -25,6 T 0,6 T 25,6 T 50,6 T 75,6 T 100,6 T 125,6 T 150,6"
            fill="none"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isHovered
                ? {
                    pathLength: 1,
                    opacity: 1,
                    x: [0, -50]
                  }
                : {
                    pathLength: 0,
                    opacity: 0,
                    x: 0
                  }
            }
            transition={{
              x: {
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
                duration: 2.2
              },
              pathLength: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.2 }
            }}
          />
        </svg>
      </span>
    </span>
  );
}