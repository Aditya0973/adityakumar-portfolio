"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Box,
  Layers,
  Code,
  Palette,
  Compass,
  Film,
  Activity,
  CheckCircle2,
  Volume2
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess, playHoverTick } from "@/utils/soundEffects";

interface SkillModule {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  iconColor: string;
  bg: string;
  metric: string;
  telemetry: string;
}

const SKILL_MODULES: SkillModule[] = [
  {
    id: "ds",
    name: "Design Systems",
    category: "Architecture",
    icon: Layers,
    iconColor: "#6864F6",
    bg: "#FAF8F5",
    metric: "Tokens & Auto-Layout",
    telemetry: "$color-primary-500 • 24px Radius • 8pt Grid"
  },
  {
    id: "3d",
    name: "3D Blender Systems",
    category: "Spatial",
    icon: Box,
    iconColor: "#E65100",
    bg: "#FAF8F5",
    metric: "Cycles & Geometry Nodes",
    telemetry: "Procedural Shaders • 4K Cycles • 60 FPS"
  },
  {
    id: "micro",
    name: "Micro-Interactions",
    category: "Motion",
    icon: Zap,
    iconColor: "#EAB308",
    bg: "#FAF8F5",
    metric: "Haptics & Spring Physics",
    telemetry: "Stiffness 400 • Damping 25 • Cubic Bezier"
  },
  {
    id: "proto",
    name: "Rapid Prototyping",
    category: "Product",
    icon: Compass,
    iconColor: "#0057FF",
    bg: "#FAF8F5",
    metric: "User Flows & Wireframes",
    telemetry: "High-Fidelity • Multi-State • Micro-Copy"
  },
  {
    id: "code",
    name: "Vibecoding & Systems",
    category: "Vibecoding",
    icon: Code,
    iconColor: "#10B981",
    bg: "#FAF8F5",
    metric: "AI-Augmented Logic",
    telemetry: "Next.js 16 • Turbopack • Prompt-Driven Architecture"
  },
  {
    id: "brand",
    name: "Brand Identity",
    category: "Visual",
    icon: Palette,
    iconColor: "#EC4899",
    bg: "#FAF8F5",
    metric: "Typography & Palette",
    telemetry: "Plus Jakarta Sans • Playfair • KaTeX Math"
  }
];

export function InteractiveStickerDeck() {
  const [activeSkill, setActiveSkill] = React.useState<SkillModule>(SKILL_MODULES[0]);
  const [isDetonated, setIsDetonated] = React.useState(false);
  const [countdown, setCountdown] = React.useState<number | null>(null);

  const handleSelect = (skill: SkillModule) => {
    setActiveSkill(skill);
    playPop();
  };

  const handleDetonate = () => {
    if (isDetonated) return;
    setIsDetonated(true);
    playSuccess();

    // Auto-reassemble after 3.2s
    setTimeout(() => {
      setIsDetonated(false);
      playPop();
    }, 3200);
  };

  // Detonation scatter offsets for each of the 6 cards
  const scatterTransforms = [
    { x: -55, y: -40, rotate: -24, scale: 0.9 },
    { x: 50, y: -55, rotate: 28, scale: 1.05 },
    { x: -70, y: 35, rotate: -32, scale: 0.85 },
    { x: 65, y: -25, rotate: 22, scale: 1.08 },
    { x: -45, y: 50, rotate: -18, scale: 0.92 },
    { x: 60, y: 45, rotate: 30, scale: 1.04 }
  ];

  return (
    <div className="relative w-full rounded-3xl bg-[#0057FF] p-6 sm:p-8 text-white overflow-hidden shadow-xs border border-neutral-300 select-none">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 text-white/10 font-serif font-black text-8xl sm:text-9xl pointer-events-none select-none">
        CRAFT
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#CCFF00] uppercase">
              INTERACTIVE SYNTH
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Creative Capabilities <span className="font-serif italic font-normal text-[#FFF4CC]">&amp; Matrix</span>
            </h3>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleDetonate}
            className={`self-start sm:self-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md transition-all border cursor-pointer shadow-xs ${
              isDetonated
                ? "bg-[#CCFF00] text-black border-black animate-pulse"
                : "bg-white/20 hover:bg-white text-white hover:text-[#0057FF] border-white/30"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>{isDetonated ? "DETONATED (REASSEMBLING...)" : "COLLAPSE MATRIX"}</span>
          </motion.button>
        </div>

        <p className="text-xs sm:text-sm text-blue-100 max-w-lg">
          Tap any capability pad to inspect live tokens, or hit Collapse Matrix to test physical quantum recovery.
        </p>

        {/* Tactile Skill Matrix Grid with Detonation Physics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
          {SKILL_MODULES.map((skill, idx) => {
            const Icon = skill.icon;
            const isSelected = activeSkill.id === skill.id;
            const scatter = scatterTransforms[idx];

            return (
              <motion.button
                key={skill.id}
                type="button"
                animate={
                  isDetonated
                    ? {
                        x: scatter.x,
                        y: scatter.y,
                        rotate: scatter.rotate,
                        scale: scatter.scale,
                        opacity: 0.85
                      }
                    : {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        opacity: 1
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: isDetonated ? 300 : 450,
                  damping: isDetonated ? 16 : 24
                }}
                whileHover={!isDetonated ? { scale: 1.03, y: -2 } : {}}
                whileTap={!isDetonated ? { scale: 0.96 } : {}}
                onMouseEnter={() => !isDetonated && playHoverTick()}
                onClick={() => handleSelect(skill)}
                className={`p-4 rounded-2xl text-left border transition-colors cursor-pointer flex flex-col justify-between h-28 relative ${
                  isSelected
                    ? "bg-white text-black shadow-md border-white ring-2 ring-white/30 z-20"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md z-10"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shadow-2xs"
                    style={{
                      backgroundColor: isSelected ? `${skill.iconColor}15` : "rgba(255,255,255,0.15)"
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: isSelected ? skill.iconColor : "#FFFFFF" }}
                    />
                  </div>

                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ${
                      isSelected
                        ? "bg-neutral-100 text-neutral-600"
                        : "bg-white/10 text-blue-100"
                    }`}
                  >
                    {skill.category}
                  </span>
                </div>

                <div>
                  <div
                    className={`text-xs font-bold leading-tight font-sans ${
                      isSelected ? "text-black" : "text-white"
                    }`}
                  >
                    {skill.name}
                  </div>
                  <div
                    className={`text-[10px] font-mono truncate ${
                      isSelected ? "text-neutral-500" : "text-blue-200"
                    }`}
                  >
                    {skill.metric}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Live Active Telemetry Deck */}
        <motion.div
          key={isDetonated ? "detonated" : activeSkill.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`p-4 rounded-2xl backdrop-blur-md border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono transition-colors ${
            isDetonated
              ? "bg-amber-500/30 border-amber-300/50 text-amber-200"
              : "bg-black/25 border-white/20 text-white"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                isDetonated ? "bg-amber-400 animate-ping" : "bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"
              }`}
            />
            <span className="font-bold text-white uppercase tracking-wide">
              {isDetonated ? "SYSTEM ALERT:" : `${activeSkill.name}:`}
            </span>
            <span className={isDetonated ? "text-amber-100 font-bold" : "text-blue-100"}>
              {isDetonated
                ? "MATRIX DETONATED // QUANTUM SPRING REASSEMBLY ACTIVE"
                : activeSkill.telemetry}
            </span>
          </div>

          <span
            className={`text-[10px] font-bold shrink-0 uppercase ${
              isDetonated ? "text-amber-300" : "text-[#CCFF00]"
            }`}
          >
            {isDetonated ? "REASSEMBLING... ✦" : "ACTIVE MATRIX ✦"}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
