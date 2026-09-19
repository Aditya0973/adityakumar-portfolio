"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function AmbientCursorGlow() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth physical spring follow
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Tight precision micro-dot
  const dotX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Background luminous aura color depending on active page (NO dark muddy shadows)
  const auraColor =
    pathname === "/behance"
      ? "radial-gradient(circle, rgba(147, 197, 253, 0.28) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%)"
      : pathname === "/github"
      ? "radial-gradient(circle, rgba(167, 243, 208, 0.30) 0%, rgba(5, 150, 105, 0.12) 40%, transparent 70%)"
      : pathname === "/crafted"
      ? "radial-gradient(circle, rgba(196, 181, 253, 0.28) 0%, rgba(91, 80, 236, 0.12) 40%, transparent 70%)"
      : "radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.3) 38%, transparent 68%)";

  return (
    <>
      {/* Soft Luminous Spotlight Aura (ALWAYS BEHIND CONTENT AT z-0 / pointer-events-none) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[460px] h-[460px] rounded-full z-0 select-none blur-3xl transition-opacity duration-300"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: auraColor
        }}
      />

      {/* Sleek Minimalist Magnetic Follower Ring (High precision, non-intrusive) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full border border-current opacity-30 z-40 select-none mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
}
