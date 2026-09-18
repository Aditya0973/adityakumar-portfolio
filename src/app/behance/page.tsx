"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Pause, RotateCcw, Sliders, Sparkles, Layers, Box, Eye } from "lucide-react";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";

// 3D Visual Gallery Cards
const VISUAL_PROJECTS = [
  {
    title: "Low Poly Airplane Exploration",
    category: "3D Modeling & Lighting",
    img: "/media/airplane.png",
    aspect: "aspect-[16/10]",
    stats: "Blender 4.2 • Cycles"
  },
  {
    title: "Isometric Coffee Shop",
    category: "Isometric Architectural Concept",
    img: "/media/coffee-shop.png",
    aspect: "aspect-[16/10]",
    stats: "Blender • Eevee"
  },
  {
    title: "Titanium iPhone 15 Pro",
    category: "Product Visualization",
    img: "/media/iphone.png",
    aspect: "aspect-square",
    stats: "High-Poly Render"
  },
  {
    title: "Low Poly Micro Planet",
    category: "Geometric Worldbuilding",
    img: "/media/planet-badge.png",
    aspect: "aspect-square",
    stats: "Procedural Shaders"
  },
  {
    title: "Low Poly Medieval Tower",
    category: "Game Asset Design",
    img: "/media/tower-badge.png",
    aspect: "aspect-square",
    stats: "Hard Surface Model"
  },
  {
    title: "Blender Donut Geometry",
    category: "Surface Scattering",
    img: "/media/donut-badge.png",
    aspect: "aspect-square",
    stats: "Geometry Nodes"
  }
];

// Interactive Pastel Palette Generator
const PASTEL_PALETTES = [
  { name: "Clay & Slate", colors: ["#e9e6e2", "#d8d3cd", "#4a5d4e", "#2c332d"] },
  { name: "Nordic Frost", colors: ["#e3ebf3", "#c7d8e8", "#467299", "#1d3247"] },
  { name: "Terracotta Dawn", colors: ["#f5ede6", "#edd7c6", "#c86f43", "#3d1f11"] },
  { name: "Electric Studio", colors: ["#edf2ff", "#d0ddff", "#0057FF", "#0a1945"] }
];

export default function BehanceSpace() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [activePaletteIdx, setActivePaletteIdx] = useState(0);
  const [autoLayoutGap, setAutoLayoutGap] = useState(12);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    playPop();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const changeSpeed = (rate: number) => {
    playPop();
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    playSuccess();
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="pt-20 lg:pt-12 pb-24 px-4 sm:px-8 max-w-5xl mx-auto space-y-20 select-none">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER: Behance Brand + Quirky Funny CTA on Right */}
      {/* ========================================================================= */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#e5e2de]">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#e5e2de] shadow-xs flex items-center justify-center p-1.5">
              <img src="/icons/behance.svg" alt="Behance" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0057FF] font-bold">
              Visual Design Lab
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-black">
            Behance Space
          </h1>
          <p className="text-xs sm:text-sm text-[#757575] max-w-lg leading-relaxed">
            Where 3D Blender experiments, render turnarounds, and creative poster identities come alive.
          </p>
        </div>

        {/* Quirky Funny CTA Button on Right */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0"
        >
          <a
            href="https://www.behance.net/1c5da35f"
            target="_blank"
            rel="noreferrer"
            onClick={() => playFigmaClick()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0057FF] text-white text-xs font-semibold shadow-lg hover:shadow-xl hover:bg-[#0047d4] transition-all group"
          >
            <span>View More on Behance ?</span>
            <span className="text-[10px] text-white/70 hidden md:inline">(Appreciate if you like!)</span>
          </a>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXHIBIT A: BLENDER 3D DONUT TURNAROUND STUDIO */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-[#0057FF]" />
            <h2 className="text-lg font-semibold text-black">01 / Blender 3D Turnaround Studio</h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">Live Viewport</span>
        </div>

        <div className="rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] p-4 sm:p-6 shadow-sm space-y-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#edeae7] border border-[#e5e2de] shadow-inner flex items-center justify-center">
            <video
              ref={videoRef}
              src="/media/donut-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Floating Live Indicator */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Blender 250-Frame Loop</span>
            </div>
          </div>

          {/* Interactive Turnaround Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleVideo}
                className="px-4 py-2 rounded-xl bg-white border border-[#e5e2de] text-black text-xs font-medium hover:border-black/30 transition-all flex items-center gap-1.5 shadow-2xs"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause Turnaround" : "Play Turnaround"}</span>
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) videoRef.current.currentTime = 0;
                  playPop();
                }}
                className="p-2 rounded-xl bg-white border border-[#e5e2de] text-black hover:border-black/30 transition-all shadow-2xs"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-[#757575] text-[11px] mr-1">Turn Speed:</span>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => changeSpeed(rate)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    playbackRate === rate
                      ? "bg-[#0057FF] text-white shadow-xs"
                      : "bg-white border border-[#e5e2de] text-black hover:bg-[#edeae7]"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXHIBIT B: SELF-ANIMATING FIGMA AUTO-LAYOUT CANVAS */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0ACF83]" />
            <h2 className="text-lg font-semibold text-black">02 / Self-Morphing Figma Auto-Layout</h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">Figma Engine Toy</span>
        </div>

        <div className="rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] p-6 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#0057FF]/10 text-[#0057FF] font-bold text-[10px]">
                AUTO LAYOUT
              </span>
              <span className="text-[#757575]">Direction: Horizontal Flow</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#757575]">Gap Spacing:</span>
              {[8, 12, 20, 28].map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setAutoLayoutGap(g);
                    playPop();
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    autoLayoutGap === g
                      ? "bg-black text-white"
                      : "bg-white border border-[#e5e2de] text-black hover:bg-[#edeae7]"
                  }`}
                >
                  {g}px
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Auto-Layout Canvas */}
          <motion.div
            layout
            className="p-6 rounded-2xl bg-white border border-[#e5e2de] shadow-inner flex flex-wrap items-center justify-center min-h-[160px] transition-all"
            style={{ gap: `${autoLayoutGap}px` }}
          >
            {["Hero Element", "Subhead Block", "CTA Action", "Rating Pill"].map((label, idx) => (
              <motion.div
                key={label}
                layout
                whileHover={{ scale: 1.08, rotate: idx % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-4 rounded-xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-[#0057FF] transition-colors cursor-grab active:cursor-grabbing shadow-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-[#757575]">
                  <span>Frame 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#0ACF83]" />
                </div>
                <div className="text-xs font-semibold text-black">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXHIBIT C: 3D VISUAL COMPOSITIONS GALLERY */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#FF7021]" />
            <h2 className="text-lg font-semibold text-black">03 / 3D Visual Compositions</h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">Hover to Tilt</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VISUAL_PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              onClick={() => playPop()}
              className="rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] overflow-hidden shadow-sm hover:shadow-xl hover:border-black/30 transition-all cursor-pointer group"
            >
              <div className={`${proj.aspect} overflow-hidden bg-[#edeae7] relative`}>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                  {proj.stats}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#0057FF] font-semibold">
                  {proj.category}
                </span>
                <h3 className="text-sm font-semibold text-black group-hover:text-[#0057FF] transition-colors">
                  {proj.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXHIBIT D: INTERACTIVE PASTEL COLOR HARMONIES */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A7F175]" />
            <h2 className="text-lg font-semibold text-black">04 / Harmonic Pastel Palettes</h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">Click Swatch to Copy</span>
        </div>

        <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] shadow-sm space-y-5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {PASTEL_PALETTES.map((pal, idx) => (
              <button
                key={pal.name}
                onClick={() => {
                  setActivePaletteIdx(idx);
                  playPop();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
                  activePaletteIdx === idx
                    ? "bg-black text-white shadow-xs"
                    : "bg-white border border-[#e5e2de] text-black hover:bg-[#edeae7]"
                }`}
              >
                {pal.name}
              </button>
            ))}
          </div>

          {/* Color Swatch Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PASTEL_PALETTES[activePaletteIdx].colors.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyColor(c)}
                className="p-4 rounded-2xl bg-white border border-[#e5e2de] shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-28 text-left group"
              >
                <div
                  className="w-full h-12 rounded-xl border border-black/10 shadow-inner"
                  style={{ backgroundColor: c }}
                />
                <div className="flex items-center justify-between text-xs font-mono pt-2">
                  <span className="font-semibold text-black group-hover:text-[#0057FF] transition-colors">{c}</span>
                  <span className="text-[10px] text-[#757575]">
                    {copiedColor === c ? "Copied!" : "Copy"}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
