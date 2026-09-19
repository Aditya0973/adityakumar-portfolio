"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Palette, Layers, Compass } from "lucide-react";

// 1. 4-Point Sparkle Star
export function SparkleStar({
  color = "#0057FF",
  size = 20,
  className = "",
  style = {}
}: {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 select-none ${className}`}
      style={style}
      animate={{
        scale: [1, 1.25, 1],
        rotate: [0, 45, 0]
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.45, rotate: 90 }}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </motion.svg>
  );
}

// 2. Autonomous Rotating Hand-Drawn Spiral
export function AutonomousSpiral({
  color = "#E65100",
  size = 40,
  className = "",
  speed = 10
}: {
  color?: string;
  size?: number;
  className?: string;
  speed?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      animate={{
        rotate: 360,
        scale: [1, 1.08, 0.94, 1]
      }}
      transition={{
        rotate: { duration: speed, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <path
        d="M50 50 C50 42 42 42 42 50 C42 62 62 62 62 50 C62 30 30 30 30 50 C30 76 76 76 76 50 C76 18 18 18 18 50 C18 88 88 88 88 50 C88 8 8 8 8 50"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

// 3. Autonomous Coiled Spring / Tension Zigzag
export function AutonomousSpring({
  color = "#CCFF00",
  width = 60,
  height = 30,
  className = ""
}: {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      animate={{
        scaleX: [1, 1.25, 0.85, 1],
        rotate: [-3, 3, -3],
        y: [-4, 4, -4]
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M5 20 C15 5 25 35 35 20 C45 5 55 35 65 20 C75 5 85 35 95 20 C105 5 115 35 118 20"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

// 4. Autonomous 6-Point Floating Asterisk
export function AutonomousAsterisk({
  color = "#6864F6",
  size = 28,
  className = ""
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.15, 1],
        y: [-5, 5, -5]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="6" y1="12" x2="34" y2="28" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="6" y1="28" x2="34" y2="12" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </motion.svg>
  );
}

// 5. Postal Cancellation Stamp (Airmail Ink Mark)
export function PostageCancellationStamp({
  text = "STUDIO POST • NEW DELHI",
  date = "2026",
  color = "#991B1B",
  className = ""
}: {
  text?: string;
  date?: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 select-none opacity-85 pointer-events-none ${className}`}
      style={{ color }}
    >
      {/* Round Date Stamp */}
      <div
        className="w-14 h-14 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-[8px] font-mono font-bold leading-tight uppercase tracking-tighter text-center"
        style={{ borderColor: color }}
      >
        <span className="text-[7px]">{text}</span>
        <span className="text-[10px] font-extrabold my-0.5">{date}</span>
        <span className="text-[6px]">VERIFIED ✦</span>
      </div>

      {/* Wavy Cancel Lines */}
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6 C12 0 24 12 36 6 C42 3 45 4 48 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M0 12 C12 6 24 18 36 12 C42 9 45 10 48 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M0 18 C12 12 24 24 36 18 C42 15 45 16 48 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 6. Realistic Metallic / Colorful Paper Clip
export function RealisticPaperClip({
  color = "#6864F6",
  className = "",
  size = 36
}: {
  color?: string;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 1.8}
      viewBox="0 0 32 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none filter drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)] ${className}`}
    >
      <path
        d="M10 16 V42 C10 47.5 14.5 52 20 52 C25.5 52 30 47.5 30 42 V10 C30 5.5 26.5 2 22 2 C17.5 2 14 5.5 14 10 V38 C14 41 16.5 43.5 19.5 43.5 C22.5 43.5 25 41 25 38 V14"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 7. Washi Tape Strip with Translucent Pattern
export function WashiTape({
  color = "#FFF4CC",
  angle = "-3deg",
  className = "",
  pattern = "stripes"
}: {
  color?: string;
  angle?: string;
  className?: string;
  pattern?: "dots" | "stripes" | "solid";
}) {
  return (
    <div
      className={`absolute h-6 w-24 opacity-90 backdrop-blur-xs shadow-xs border-y border-black/10 z-20 pointer-events-none select-none ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${angle})`,
        maskImage:
          "polygon(0% 10%, 4% 0%, 12% 8%, 20% 0%, 28% 8%, 36% 0%, 44% 8%, 52% 0%, 60% 8%, 68% 0%, 76% 8%, 84% 0%, 92% 8%, 100% 0%, 100% 90%, 96% 100%, 88% 92%, 80% 100%, 72% 92%, 64% 100%, 56% 92%, 48% 100%, 40% 92%, 32% 100%, 24% 92%, 16% 100%, 8% 92%, 0% 100%)",
        backgroundImage:
          pattern === "stripes"
            ? "repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 2px, transparent 0, transparent 6px)"
            : pattern === "dots"
            ? "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)"
            : "none",
        backgroundSize: pattern === "dots" ? "6px 6px" : undefined
      }}
    />
  );
}

// 8. PushPin 3D Element
export function PushPin({
  color = "#E65100",
  className = ""
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`}>
      {/* Pin Shadow */}
      <div className="absolute top-4 left-3 w-4 h-2 bg-black/30 rounded-full blur-[2px] transform rotate-45" />
      {/* Pin Head */}
      <div
        className="w-5 h-5 rounded-full border border-black/20 shadow-sm relative flex items-center justify-center"
        style={{
          backgroundColor: color,
          backgroundImage: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7), transparent 60%)"
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

// 9. Hand-Drawn Doodle Crown
export function DoodleCrown({
  color = "#CCFF00",
  size = 32,
  className = ""
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      animate={{ rotate: [-2, 2, -2], y: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M3 24 L7 8 L18 16 L28 6 L35 24 Z"
        stroke="#121212"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
      <circle cx="7" cy="7" r="2" fill="#121212" />
      <circle cx="28" cy="5" r="2" fill="#121212" />
      <circle cx="18" cy="15" r="1.5" fill="#121212" />
    </motion.svg>
  );
}

// 10. Hand-Drawn Doodle Smile / Wink
export function DoodleSmile({
  color = "#121212",
  size = 28,
  className = ""
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path d="M7 11 C9 8 13 8 15 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="23" cy="11" r="2.5" fill={color} />
      <path d="M9 19 C13 25 19 25 23 19" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 11. Looping Squiggly Ribbon
export function SquigglyRibbon({
  color = "#0057FF",
  className = ""
}: {
  color?: string;
  className?: string;
}) {
  return (
    <motion.svg
      width="80"
      height="30"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M4 22 C20 4 30 38 48 20 C64 4 76 38 96 18"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

// 12. Torn Paper Edge Divider
export function TornPaperDivider({
  className = ""
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 24"
      fill="currentColor"
      preserveAspectRatio="none"
      className={`w-full h-4 text-[#FAF8F5] select-none pointer-events-none ${className}`}
    >
      <path d="M0 0 L0 16 Q30 22 60 14 T120 18 T180 12 T240 20 T300 14 T360 22 T420 16 T480 20 T540 12 T600 18 T660 14 T720 22 T780 16 T840 18 T900 12 T960 20 T1020 14 T1080 22 T1140 16 T1200 18 L1200 0 Z" />
    </svg>
  );
}

// 13. Cinematic Color Spectrum Matrix (Visualizing Design + Code = Crafted Co. through Film / Mood Lens)
export function CinematicColorPrism() {
  const [activeMood, setActiveMood] = React.useState<number>(0);

  const spaces = [
    {
      name: "Portfolio Base",
      subtitle: "The Sketch Canvas",
      tone: "Paper & Warm Rust",
      color: "#E65100",
      accent: "#FFF7ED",
      badge: "Vision",
      desc: "Tactile sketch book, editorial typography, human-crafted interfaces."
    },
    {
      name: "Behance Space",
      subtitle: "Pure Design & 3D",
      tone: "Cobalt Film Light",
      color: "#0057FF",
      accent: "#EFF6FF",
      badge: "Design",
      desc: "36+ 3D Blender renders, layout geometry, visual aesthetics."
    },
    {
      name: "GitHub Space",
      subtitle: "Logic & Architecture",
      tone: "Emerald Sage",
      color: "#10B981",
      accent: "#ECFDF5",
      badge: "Code",
      desc: "Full-stack code, reactive state, verified commit history."
    },
    {
      name: "Crafted Co.",
      subtitle: "Chromatic Synthesis",
      tone: "Royal Indigo & Amber",
      color: "#6864F6",
      accent: "#F5F3FF",
      badge: "Synthesis",
      desc: "Where human design intuition and robust engineering harmonize."
    }
  ];

  return (
    <div className="p-5 rounded-3xl bg-white/90 backdrop-blur-xs border border-neutral-300 shadow-xs space-y-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#E65100]" />
          <span className="text-xs font-mono font-bold tracking-wider text-black uppercase">
            Color Theory &amp; Space Prism
          </span>
        </div>
        <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full border border-neutral-200">
          CINEMATIC MOODS
        </span>
      </div>

      {/* Interactive Color Chips Spectrum */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {spaces.map((sp, i) => {
          const isActive = activeMood === i;
          return (
            <motion.button
              key={sp.name}
              type="button"
              onClick={() => setActiveMood(i)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-24 ${
                isActive
                  ? "border-[#121212] bg-white shadow-md ring-2 ring-black/5"
                  : "border-neutral-200 bg-neutral-50/70 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                  style={{ backgroundColor: sp.color }}
                />
                <span
                  className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: sp.accent, color: sp.color }}
                >
                  {sp.badge}
                </span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-black leading-snug">{sp.name}</div>
                <div className="text-[9px] font-mono text-neutral-500">{sp.tone}</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Space Lens Description */}
      <motion.div
        key={activeMood}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-3.5 rounded-2xl border text-xs font-mono flex items-start gap-3"
        style={{
          backgroundColor: spaces[activeMood].accent,
          borderColor: `${spaces[activeMood].color}40`
        }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full mt-1 shrink-0 border border-black/15 shadow-2xs"
          style={{ backgroundColor: spaces[activeMood].color }}
        />
        <div className="space-y-0.5 text-neutral-800">
          <div className="font-bold text-black flex items-center gap-2">
            <span>{spaces[activeMood].name}</span>
            <span className="text-[10px] text-neutral-500 font-normal">({spaces[activeMood].subtitle})</span>
          </div>
          <p className="text-[11px] leading-relaxed text-neutral-700">
            {spaces[activeMood].desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// 14. 8-Point Starburst Badge
export function StarburstBadge({
  text = "2026 Edition",
  bgColor = "#CCFF00",
  textColor = "#000000",
  className = ""
}: {
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className={`relative inline-flex items-center justify-center select-none font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-black/15 shadow-xs cursor-pointer ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="relative z-10 flex items-center gap-1">
        <span>{text}</span>
        <span className="text-xs">✦</span>
      </span>
    </motion.div>
  );
}

// 15. Hand-Drawn Wavy Underline
export function WavyUnderline({
  color = "#FF3B30",
  className = ""
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={`w-full h-3 overflow-visible pointer-events-none select-none ${className}`}
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7C14 2 26 12 38 7C50 2 62 12 74 7C86 2 98 12 110 7C114 5 117 4 118 4"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 16. Hand-Drawn Curved Arrow
export function SketchArrow({
  color = "#FF5500",
  className = "",
  flip = false
}: {
  color?: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none select-none ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M6 38C14 36 28 32 34 16C36 10 35 6 34 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 6L35 4L37 13"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 17. Semi-Transparent Tape Sticker for Polaroid / ID Cards
export function TapeSticker({
  className = "",
  angle = "-6deg"
}: {
  className?: string;
  angle?: string;
}) {
  return (
    <div
      className={`absolute w-16 h-5 bg-white/80 backdrop-blur-xs border border-neutral-300/60 shadow-xs z-30 pointer-events-none select-none ${className}`}
      style={{
        transform: `rotate(${angle})`,
        maskImage:
          "polygon(0% 15%, 5% 0%, 15% 10%, 25% 0%, 35% 10%, 45% 0%, 55% 10%, 65% 0%, 75% 10%, 85% 0%, 95% 10%, 100% 0%, 100% 85%, 95% 100%, 85% 90%, 75% 100%, 65% 90%, 55% 100%, 45% 90%, 35% 100%, 25% 90%, 15% 100%, 5% 90%, 0% 100%)"
      }}
    />
  );
}

