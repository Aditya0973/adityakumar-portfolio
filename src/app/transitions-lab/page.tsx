"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, Layers, Sliders, Play, RotateCw, Monitor, Code, ExternalLink, X } from "lucide-react";

type Concept = "channel" | "dock" | "curtain" | "cube";
type Platform = "portfolio" | "behance" | "github" | "linkedin" | "crafted";

interface PlatformConfig {
  id: Platform;
  name: string;
  tagline: string;
  badge: string;
  bg: string;
  cardBg: string;
  border: string;
  accent: string;
  text: string;
  iconName: string;
  highlights: string[];
}

const PLATFORMS: Record<Platform, PlatformConfig> = {
  portfolio: {
    id: "portfolio",
    name: "UI/UX Portfolio",
    tagline: "Design systems, mobile interactions, and user experiences.",
    badge: "Core Space",
    bg: "#e9e6e2",
    cardBg: "#f5f2f0",
    border: "#e5e2de",
    accent: "#4a5d4e",
    text: "#000000",
    iconName: "🎨",
    highlights: ["Explore Bali (Web)", "Admin Dashboard (SaaS)", "Commit (Mobile App)"]
  },
  behance: {
    id: "behance",
    name: "Behance Design Vault",
    tagline: "3D Blender compositions, branding mockups, and creative artwork.",
    badge: "Visual Art & 3D",
    bg: "#060913",
    cardBg: "#0d1527",
    border: "#1d293d",
    accent: "#0057FF",
    text: "#ffffff",
    iconName: "🔷",
    highlights: ["3D Isometric Airport", "3D Earth Space Rendering", "Branding Guidelines & Stationery"]
  },
  github: {
    id: "github",
    name: "GitHub Engineering Lab",
    tagline: "Open-source tools, React components, and architecture systems.",
    badge: "Code & Logic",
    bg: "#0d1117",
    cardBg: "#161b22",
    border: "#30363d",
    accent: "#10B981",
    text: "#f0f6fc",
    iconName: "💻",
    highlights: ["35+ Standardized Projects", "Custom UI Libraries", "Open Source Utilities"]
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn Career & Press",
    tagline: "Professional milestones, client recommendations, and design leadership.",
    badge: "Experience",
    bg: "#0f172a",
    cardBg: "#1e293b",
    border: "#334155",
    accent: "#0A66C2",
    text: "#f8fafc",
    iconName: "💼",
    highlights: ["AlgobrainAI Associate Designer", "NIC Govt UX Intern", "Verified Client Reviews"]
  },
  crafted: {
    id: "crafted",
    name: "Crafted Co. Studio",
    tagline: "Independent software studio developing cross-platform applications.",
    badge: "External Studio",
    bg: "#1b1515",
    cardBg: "#241e1e",
    border: "#3a2c2c",
    accent: "#6864f6",
    text: "#f3efef",
    iconName: "✦",
    highlights: ["craftnime-x (Anime App)", "music-player-x (Hi-Fi)", "crafted-co-w (Showcase)"]
  }
};

export default function TransitionsSandbox() {
  const [activeConcept, setActiveConcept] = React.useState<Concept>("channel");
  const [activePlatform, setActivePlatform] = React.useState<Platform>("portfolio");

  // State for Concept 3: Curtain wiping
  const [isWiping, setIsWiping] = React.useState(false);
  const [curtainTarget, setCurtainTarget] = React.useState<Platform | null>(null);

  // State for Concept 2: Dock window opening
  const [dockWindowOpen, setDockWindowOpen] = React.useState<Platform | null>(null);

  const currentConfig = PLATFORMS[activePlatform];

  // Trigger for Curtain Concept
  const triggerCurtainTransition = (target: Platform) => {
    if (target === activePlatform || isWiping) return;
    setCurtainTarget(target);
    setIsWiping(true);
    setTimeout(() => {
      setActivePlatform(target);
    }, 350);
    setTimeout(() => {
      setIsWiping(false);
      setCurtainTarget(null);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans select-none bg-neutral-900 text-white">
      {/* ========================================================================= */}
      {/* TOP CONTROL BAR: Switch between the 4 Transition Concepts */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-50 px-4 py-3 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-bold text-white uppercase tracking-wider">Transition Lab</span>
          <span className="text-neutral-500 hidden sm:inline">| Live Preview Sandbox</span>
        </div>

        {/* Concept Selector Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
          {[
            { id: "channel" as Concept, label: "1. Channel Switcher" },
            { id: "dock" as Concept, label: "2. OS Dock" },
            { id: "curtain" as Concept, label: "3. Cinema Curtain" },
            { id: "cube" as Concept, label: "4. 3D Cube Spin" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveConcept(tab.id);
                setDockWindowOpen(null);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeConcept === tab.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-[11px] font-mono text-neutral-400">
          Active: <span className="text-white font-bold">{currentConfig.name}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEWPORT CANVAS CONTAINER */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        {/* CONCEPT 1: CHANNEL SWITCHER (Depth blur + Carousel slide + Color morph) */}
        {activeConcept === "channel" && (
          <div className="w-full max-w-3xl space-y-6">
            {/* Pill Bar Channel Switcher */}
            <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 w-fit mx-auto overflow-x-auto max-w-full">
              {(Object.keys(PLATFORMS) as Platform[]).map((p) => {
                const config = PLATFORMS[p];
                const isActive = activePlatform === p;
                return (
                  <button
                    key={p}
                    onClick={() => setActivePlatform(p)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-white text-black font-bold shadow-lg scale-105"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{config.iconName}</span>
                    <span>{config.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Display Stage with Spring Morph */}
            <motion.div
              layout
              animate={{
                backgroundColor: currentConfig.bg,
                color: currentConfig.text,
                borderColor: currentConfig.border
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-3xl border p-8 sm:p-12 shadow-2xl space-y-6 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
            >
              {/* Radial ambient glow in the corner */}
              <motion.div
                animate={{ backgroundColor: currentConfig.accent }}
                transition={{ duration: 0.7 }}
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-semibold"
                      style={{
                        backgroundColor: `${currentConfig.accent}20`,
                        borderColor: `${currentConfig.accent}40`,
                        color: currentConfig.accent
                      }}
                    >
                      {currentConfig.badge}
                    </span>
                    <span className="text-xs font-mono opacity-60">Concept: Depth Blur & Color Morph</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                      {currentConfig.name}
                    </h2>
                    <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xl">
                      {currentConfig.tagline}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                    {currentConfig.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl border text-xs font-medium space-y-1 shadow-sm"
                        style={{
                          backgroundColor: currentConfig.cardBg,
                          borderColor: currentConfig.border
                        }}
                      >
                        <span className="text-[10px] font-mono opacity-60 block">ITEM 0{i + 1}</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono opacity-70">
                <span>Click the top buttons to switch platforms</span>
                {activePlatform === "crafted" && (
                  <span className="text-indigo-400 font-bold flex items-center gap-1">
                    Triggers external studio warp <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* CONCEPT 2: OS DOCK (Bottom Magnifying Dock + Expanding Floating Window) */}
        {activeConcept === "dock" && (
          <div className="w-full max-w-4xl space-y-8 flex flex-col items-center">
            {/* Desktop Canvas */}
            <div
              className="w-full rounded-3xl border p-8 shadow-2xl relative min-h-[440px] flex flex-col justify-between overflow-hidden"
              style={{
                backgroundColor: currentConfig.bg,
                color: currentConfig.text,
                borderColor: currentConfig.border
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono ml-2 opacity-60">Desktop Space: {currentConfig.name}</span>
                </div>
                <span className="text-xs font-mono opacity-50">Concept: macOS Style Dock & Deck</span>
              </div>

              <div className="space-y-4 my-auto py-6">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  {currentConfig.name}
                </h2>
                <p className="text-sm sm:text-base opacity-75 max-w-lg">
                  {currentConfig.tagline}
                </p>
                <div className="flex gap-2 text-xs font-mono">
                  {currentConfig.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl border text-[11px]"
                      style={{ backgroundColor: currentConfig.cardBg, borderColor: currentConfig.border }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanding Window Sheet for Active Dock Selection */}
              <AnimatePresence>
                {dockWindowOpen && (
                  <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    className="absolute inset-x-6 bottom-20 top-16 rounded-2xl border backdrop-blur-2xl p-6 shadow-2xl z-20 flex flex-col justify-between"
                    style={{
                      backgroundColor: `${PLATFORMS[dockWindowOpen].cardBg}f0`,
                      borderColor: PLATFORMS[dockWindowOpen].accent,
                      color: PLATFORMS[dockWindowOpen].text
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{PLATFORMS[dockWindowOpen].iconName}</span>
                        <span className="font-bold text-sm">{PLATFORMS[dockWindowOpen].name} Deck</span>
                      </div>
                      <button
                        onClick={() => setDockWindowOpen(null)}
                        className="p-1 rounded-full hover:bg-white/10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 py-4">
                      <p className="text-xs opacity-80">{PLATFORMS[dockWindowOpen].tagline}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {PLATFORMS[dockWindowOpen].highlights.map((h, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono"
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-mono opacity-60 border-t border-white/10 pt-2">
                      <span>Click outside or X to dismiss deck</span>
                      <button
                        onClick={() => {
                          setActivePlatform(dockWindowOpen);
                          setDockWindowOpen(null);
                        }}
                        className="px-3 py-1 rounded-lg bg-white text-black font-semibold font-sans"
                      >
                        Switch Main Canvas
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-center text-xs font-mono opacity-50">
                Hover & Click icons in the dock below to open spaces
              </div>
            </div>

            {/* Apple Style Interactive Dock */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
              {(Object.keys(PLATFORMS) as Platform[]).map((p) => {
                const config = PLATFORMS[p];
                const isActive = activePlatform === p;
                return (
                  <motion.button
                    key={p}
                    whileHover={{ scale: 1.25, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => {
                      if (dockWindowOpen === p) {
                        setDockWindowOpen(null);
                      } else {
                        setDockWindowOpen(p);
                      }
                    }}
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg border transition-all ${
                      isActive ? "ring-2 ring-white border-transparent" : "border-white/10"
                    }`}
                    style={{ backgroundColor: config.cardBg }}
                    title={config.name}
                  >
                    <span>{config.iconName}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white absolute -bottom-2" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {/* CONCEPT 3: FULL SCREEN SILK CURTAIN WIPE */}
        {activeConcept === "curtain" && (
          <div className="w-full max-w-3xl space-y-6 relative">
            {/* Platform Trigger Buttons */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {(Object.keys(PLATFORMS) as Platform[]).map((p) => {
                const config = PLATFORMS[p];
                const isActive = activePlatform === p;
                return (
                  <button
                    key={p}
                    onClick={() => triggerCurtainTransition(p)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                      isActive
                        ? "bg-white text-black border-white shadow-md scale-105"
                        : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700"
                    }`}
                  >
                    {config.iconName} {config.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {/* Display Stage */}
            <div
              className="rounded-3xl border p-8 sm:p-12 shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between relative overflow-hidden"
              style={{
                backgroundColor: currentConfig.bg,
                color: currentConfig.text,
                borderColor: currentConfig.border
              }}
            >
              {/* THE CINEMATIC SILK CURTAIN */}
              <AnimatePresence>
                {isWiping && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 z-30 flex items-center justify-center shadow-2xl"
                    style={{
                      backgroundColor: curtainTarget ? PLATFORMS[curtainTarget].accent : "#000000"
                    }}
                  >
                    <div className="text-white text-center space-y-2">
                      <div className="text-3xl animate-spin">✦</div>
                      <div className="text-sm font-mono tracking-widest uppercase font-bold">
                        Wiping To {curtainTarget ? PLATFORMS[curtainTarget].name : ""}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-semibold"
                  style={{
                    backgroundColor: `${currentConfig.accent}20`,
                    borderColor: `${currentConfig.accent}40`,
                    color: currentConfig.accent
                  }}
                >
                  {currentConfig.badge}
                </span>
                <span className="text-xs font-mono opacity-60">Concept: Editorial Cinema Wipe</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  {currentConfig.name}
                </h2>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xl">
                  {currentConfig.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {currentConfig.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border text-xs font-medium shadow-sm"
                    style={{
                      backgroundColor: currentConfig.cardBg,
                      borderColor: currentConfig.border
                    }}
                  >
                    <span className="text-[10px] font-mono opacity-50 block mb-1">0{i + 1}</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs font-mono opacity-60 text-center pt-2">
                Click any button above to trigger the cinema curtain wipe
              </div>
            </div>
          </div>
        )}

        {/* CONCEPT 4: 3D CUBE / CARD ROTATION */}
        {activeConcept === "cube" && (
          <div className="w-full max-w-3xl space-y-6 flex flex-col items-center">
            {/* Rotation Buttons */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {(Object.keys(PLATFORMS) as Platform[]).map((p) => {
                const config = PLATFORMS[p];
                const isActive = activePlatform === p;
                return (
                  <button
                    key={p}
                    onClick={() => setActivePlatform(p)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                      isActive
                        ? "bg-white text-black border-white shadow-md scale-105"
                        : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700"
                    }`}
                  >
                    {config.iconName} Spin to {config.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {/* 3D Perspective Container */}
            <div style={{ perspective: 1200 }} className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformStyle: "preserve-3d",
                    backgroundColor: currentConfig.bg,
                    color: currentConfig.text,
                    borderColor: currentConfig.border
                  }}
                  className="rounded-3xl border p-8 sm:p-12 shadow-2xl min-h-[420px] flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-semibold"
                      style={{
                        backgroundColor: `${currentConfig.accent}20`,
                        borderColor: `${currentConfig.accent}40`,
                        color: currentConfig.accent
                      }}
                    >
                      {currentConfig.badge}
                    </span>
                    <span className="text-xs font-mono opacity-60">Concept: 3D Dimensional Prism Spin</span>
                  </div>

                  <div className="space-y-3 my-auto py-4">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                      {currentConfig.name}
                    </h2>
                    <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xl">
                      {currentConfig.tagline}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentConfig.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl border text-xs font-medium shadow-sm"
                        style={{
                          backgroundColor: currentConfig.cardBg,
                          borderColor: currentConfig.border
                        }}
                      >
                        <span className="text-[10px] font-mono opacity-50 block mb-1">FACE 0{i + 1}</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-mono opacity-60 text-center pt-4 border-t border-white/10">
                    Click another face above to rotate the 3D prism
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
