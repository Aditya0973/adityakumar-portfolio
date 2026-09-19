"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Layers,
  PenTool,
  Sparkles,
  Terminal,
  GitBranch,
  Code,
  Cpu,
  Zap,
  Feather,
  Orbit,
  Shapes,
  Palette,
  Compass,
  Laptop
} from "lucide-react";

interface SpaceTransitionProps {
  variant: "behance" | "github" | "portfolio" | "crafted";
  duration?: number;
}

export function SpaceTransition({ variant, duration = 2800 }: SpaceTransitionProps) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-transparent select-none flex items-center justify-center pointer-events-auto"
        >
          {variant === "behance" ? (
            <BehanceLiquidWaveTransition />
          ) : variant === "github" ? (
            <GithubBinaryTransition />
          ) : variant === "crafted" ? (
            <CraftedFacetTransition />
          ) : (
            <PortfolioStudioTransition />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// -----------------------------------------------------------------------------
// 1. BEHANCE: Thick Viscous Liquid Wave Rising from Bottom to 100%
// -----------------------------------------------------------------------------
function BehanceLiquidWaveTransition() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Thick Viscous Paint Flood Starting from Bottom (105%) and Rising over 2.4s */}
      <motion.div
        initial={{ y: "105%" }}
        animate={{ y: ["105%", "65%", "25%", "0%"] }}
        transition={{
          duration: 2.4,
          ease: [0.33, 1, 0.68, 1],
          times: [0, 0.35, 0.75, 1]
        }}
        className="absolute inset-0 bg-[#0057FF] z-10 origin-bottom flex items-center justify-center"
      >
        {/* Animated Thick Viscous Wave Crest on Top of Rising Paint */}
        <motion.div
          animate={{
            x: [-60, 60, -60]
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 left-[-15%] w-[130%] h-28 pointer-events-none"
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full text-[#0057FF] fill-current drop-shadow-[0_-8px_16px_rgba(0,87,255,0.4)]"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,110 900,-30 1050,50 C1150,100 1200,30 1200,30 L1200,120 L0,120 Z" />
          </svg>
        </motion.div>

        {/* Floating Pure White Icons Inside the Blue Liquid */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="absolute top-[22%] left-[16%] text-white drop-shadow-md"
          >
            <PenTool className="w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15], rotate: [12, -12, 12] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-[26%] right-[18%] text-white drop-shadow-md"
          >
            <Box className="w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            className="absolute bottom-[24%] left-[22%] text-white drop-shadow-md"
          >
            <Layers className="w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute bottom-[26%] right-[20%] text-white drop-shadow-md"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Center Typography (ONLY Clean Text "Behance", No Logo) */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-4 px-6 text-white">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-lg"
          >
            Behance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/90"
          >
            Visual Design • 3D Turnarounds • Creative Lab
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 2. GITHUB: Fresh Lighter Emerald (#059669) Cascading Binary
// -----------------------------------------------------------------------------
function GithubBinaryTransition() {
  const streams = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: `${(i / 32) * 100}%`,
      delay: (i % 8) * 0.08,
      speed: 0.8 + (i % 5) * 0.15,
      digits: Array.from({ length: 24 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n")
    }));
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Cascading Matrix Binary Rain multiplying and flooding in Fresh Emerald (#059669) */}
      <div className="absolute inset-0 z-10 pointer-events-none font-mono font-extrabold leading-none select-none">
        {streams.map((s) => (
          <motion.div
            key={s.id}
            initial={{ y: "-100%", opacity: 0, scale: 0.9 }}
            animate={{
              y: ["-100%", "20%", "120%"],
              opacity: [0, 0.9, 1, 0.85],
              scale: [0.9, 1.2, 1.6]
            }}
            transition={{
              duration: s.speed * 1.5,
              delay: s.delay,
              repeat: 2,
              ease: "linear"
            }}
            className="absolute top-0 text-[#10B981] whitespace-pre drop-shadow-[0_0_12px_#10B981]"
            style={{
              left: s.left,
              fontSize: "clamp(14px, 2.4vw, 32px)"
            }}
          >
            {s.digits}
          </motion.div>
        ))}

        {/* Binary saturation layer in Fresh Emerald (#059669) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.85, 1] }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeIn" }}
          className="absolute inset-0 bg-[#059669]"
        />
      </div>

      {/* Floating Pure White Developer Icons (No Boxes) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          animate={{ y: [-14, 14, -14], rotate: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-[22%] left-[18%] text-white drop-shadow-md"
        >
          <Terminal className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [14, -14, 14] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="absolute top-[26%] right-[20%] text-white drop-shadow-md"
        >
          <GitBranch className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ repeat: Infinity, duration: 2.9, ease: "easeInOut" }}
          className="absolute bottom-[24%] left-[24%] text-white drop-shadow-md"
        >
          <Code className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute bottom-[26%] right-[22%] text-white drop-shadow-md"
        >
          <Cpu className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Center Typography (ONLY Clean Text "GitHub", No Logo) */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-4 px-6 text-white">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          GitHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/90"
        >
          Open Source • Full Stack Engineering • Live Contributions
        </motion.p>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 3. CRAFTED CO.: Minimal Parcel Truck & Indigo Sweep Reveal
// -----------------------------------------------------------------------------
function CraftedFacetTransition() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Indigo Curtain (#5B50EC) sweeping from left to right across full screen following the truck */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 0, 1, 1] }}
        transition={{
          duration: 2.4,
          times: [0, 0.28, 0.7, 1],
          ease: [0.33, 1, 0.68, 1]
        }}
        style={{ transformOrigin: "left center" }}
        className="absolute inset-0 bg-[#5B50EC] z-10"
      />

      {/* Driving Truck Animation Track (Z-20: Above base, under/with wave) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-start overflow-hidden">
        <motion.div
          initial={{ x: "-5vw" }}
          animate={{
            x: ["-5vw", "-5vw", "125vw"],
            opacity: [1, 1, 1, 0]
          }}
          transition={{
            duration: 2.3,
            times: [0, 0.3, 0.75, 1],
            ease: [0.33, 1, 0.68, 1]
          }}
          className="relative flex items-end pb-12 left-0"
        >
          {/* Minimal Neobrutalist Delivery Truck Rig */}
          <div className="relative w-48 sm:w-56 h-32 sm:h-36">
            {/* Cargo Bed Parcel Drop Animation (drops at t=0.1s - 0.6s) */}
            <motion.div
              initial={{ y: -120, opacity: 0, rotate: -15, scale: 0.8 }}
              animate={{
                y: [-120, 0, -10, 0],
                opacity: [0, 1, 1, 1],
                rotate: [-15, 0, 3, 0],
                scale: [0.8, 1.08, 0.96, 1]
              }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: "easeOut"
              }}
              className="absolute left-4 bottom-9 z-30"
            >
              {/* Cardboard Box with Tape and Label */}
              <div className="w-16 h-16 bg-[#D97706] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] relative flex items-center justify-center">
                <div className="absolute inset-x-0 h-3 bg-[#B45309]/80 border-y border-black/30" />
                <div className="absolute inset-y-0 w-3 bg-[#B45309]/80 border-x border-black/30" />
                <div className="relative z-10 w-7 h-4 bg-white border border-black rounded-xs flex flex-col justify-center px-0.5 space-y-0.5">
                  <div className="w-full h-0.5 bg-black" />
                  <div className="w-3/4 h-0.5 bg-[#5B50EC]" />
                </div>
              </div>

              {/* Landing Dust Puff */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 0], opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.35, delay: 0.5 }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-neutral-400/40 rounded-full blur-xs pointer-events-none"
              />
            </motion.div>

            {/* Truck SVG Body */}
            <svg
              viewBox="0 0 200 110"
              className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rear Cargo Bed */}
              <rect
                x="10"
                y="46"
                width="95"
                height="36"
                rx="4"
                fill="#1E1B4B"
                stroke="#000"
                strokeWidth="3.5"
              />
              <line x1="12" y1="58" x2="103" y2="58" stroke="#312E81" strokeWidth="2" />
              <line x1="12" y1="70" x2="103" y2="70" stroke="#312E81" strokeWidth="2" />

              {/* Front Cabin */}
              <path
                d="M105 32 C105 30 107 28 110 28 L146 28 C158 28 168 38 172 50 L184 64 C187 67 188 71 188 75 L188 82 C188 85 186 87 183 87 L105 87 Z"
                fill="#FAF8F5"
                stroke="#000"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              {/* Windshield */}
              <path
                d="M136 34 L162 52 C164 54 165 56 164 58 L134 58 C132 58 130 56 130 54 L130 36 C130 35 131 34 133 34 Z"
                fill="#5B50EC"
                stroke="#000"
                strokeWidth="2.5"
              />

              {/* Headlight */}
              <rect x="180" y="68" width="8" height="7" rx="2" fill="#FACC15" stroke="#000" strokeWidth="2" />

              {/* Front Bumper */}
              <rect x="182" y="80" width="8" height="6" rx="2" fill="#374151" stroke="#000" strokeWidth="2" />

              {/* Rear Tail Light */}
              <rect x="6" y="68" width="5" height="7" rx="1.5" fill="#EF4444" stroke="#000" strokeWidth="2" />

              {/* Left Wheel Arch & Tire */}
              <circle cx="46" cy="88" r="16" fill="#FAF8F5" stroke="#000" strokeWidth="3.5" />
              <circle cx="46" cy="88" r="13" fill="#111827" stroke="#000" strokeWidth="2" />
              <circle cx="46" cy="88" r="5" fill="#E5E7EB" stroke="#000" strokeWidth="2" />

              {/* Right Wheel Arch & Tire */}
              <circle cx="152" cy="88" r="16" fill="#FAF8F5" stroke="#000" strokeWidth="3.5" />
              <circle cx="152" cy="88" r="13" fill="#111827" stroke="#000" strokeWidth="2" />
              <circle cx="152" cy="88" r="5" fill="#E5E7EB" stroke="#000" strokeWidth="2" />
            </svg>

            {/* Exhaust Puffs */}
            <motion.div
              animate={{
                x: [-10, -35],
                y: [0, -8],
                scale: [0.6, 1.3],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 0.45,
                repeat: Infinity,
                delay: 0.65,
                ease: "easeOut"
              }}
              className="absolute left-0 bottom-4 w-4 h-4 rounded-full bg-neutral-400/60 blur-xs pointer-events-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Pure White Software Icons (Fade in at t=1.4s once Indigo covers the screen) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [-14, 14, -14], rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="absolute top-[22%] left-[18%] text-white drop-shadow-md"
        >
          <Laptop className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [14, -14, 14] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute top-[26%] right-[20%] text-white drop-shadow-md"
        >
          <Shapes className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="absolute bottom-[24%] left-[24%] text-white drop-shadow-md"
        >
          <Zap className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute bottom-[26%] right-[22%] text-white drop-shadow-md"
        >
          <Orbit className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Center Typography (Slides in from Left at t=1.4s AFTER Indigo has fully flooded the screen) */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-4 px-6 text-white">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          Crafted Co.
        </motion.h1>

        <motion.p
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.5, ease: "easeOut" }}
          className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/90"
        >
          Software Studio • Digital Products • Design Systems
        </motion.p>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 4. PORTFOLIO: Warm Terracotta Rust (#E65100) Sketchbook Unfold
// -----------------------------------------------------------------------------
function PortfolioStudioTransition() {
  const floatingIcons = useMemo(() => {
    const iconComponents = [PenTool, Box, Layers, Sparkles, Code, Compass, Terminal, Palette, Feather, Orbit, Shapes];
    const SCATTERED_COORDINATES = [
      { x: 10, y: 16 }, { x: 86, y: 12 }, { x: 22, y: 28 }, { x: 76, y: 24 },
      { x: 14, y: 48 }, { x: 90, y: 40 }, { x: 16, y: 70 }, { x: 84, y: 64 },
      { x: 12, y: 88 }, { x: 80, y: 86 }, { x: 36, y: 92 }, { x: 60, y: 88 },
      { x: 40, y: 14 }, { x: 60, y: 18 }, { x: 18, y: 34 }, { x: 80, y: 50 }
    ];

    return Array.from({ length: 16 }, (_, i) => {
      const Icon = iconComponents[i % iconComponents.length];
      const coord = SCATTERED_COORDINATES[i % SCATTERED_COORDINATES.length];
      return {
        id: i,
        Icon,
        x: coord.x,
        y: coord.y,
        size: (i % 2) === 0 ? 24 : 18,
        driftY: (i % 2 === 0 ? 1 : -1) * 16,
        driftRotate: (i % 2 === 0 ? 1 : -1) * 25
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#E65100]">
      {/* Warm Terracotta Rust Flood Canvas */}
      <motion.div
        initial={{ opacity: 0.9, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#E65100] z-10 flex items-center justify-center"
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {floatingIcons.map(({ id, Icon, x, y, size, driftY, driftRotate }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.35, 0.85, 0.35],
                scale: [0.9, 1.1, 0.9],
                y: [0, driftY, 0],
                rotate: [0, driftRotate, 0]
              }}
              transition={{
                duration: 3 + (id % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (id % 5) * 0.1
              }}
              className="absolute text-white/80 drop-shadow-md"
              style={{
                left: `${x}%`,
                top: `${y}%`
              }}
            >
              <Icon style={{ width: size, height: size }} />
            </motion.div>
          ))}
        </div>

        {/* Center Typography */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-4 px-6 text-white">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg"
          >
            Aditya Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/90"
          >
            Product Designer • UI/UX &amp; 3D Specialist
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
