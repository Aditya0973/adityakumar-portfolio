"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Zap,
  Code,
  Laptop,
  Check,
  RotateCcw,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Heart,
  Palette,
  Terminal,
  Play
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";

import {
  SparkleStar,
  StarburstBadge,
  WashiTape,
  TapeSticker,
  PushPin,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  DoodleCrown,
  SketchArrow,
  WavyUnderline
} from "@/components/SketchDoodles";
import { MagneticButton } from "@/components/MagneticButton";

interface StudioProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Active" | "Beta" | "Concept";
  category: string;
  stack: string[];
  metrics: { label: string; val: string }[];
  externalUrl: string;
  badgeColor: string;
  accent: string;
}

const STUDIO_PRODUCTS: StudioProduct[] = [
  {
    id: "studio-pc",
    name: "Crafted Studio PC",
    tagline: "Desktop Design Engine & Asset Pipeline",
    description: "High-performance native desktop workspace engineered for rapid interface prototyping, batch asset optimization, and token sync directly to production codebases.",
    status: "Active",
    category: "Desktop Native",
    stack: ["Electron", "React 19", "Rust", "Tailwind CSS"],
    metrics: [
      { label: "Render Latency", val: "< 4ms" },
      { label: "Memory Footprint", val: "48 MB" },
      { label: "Export Speed", val: "10x Batch" }
    ],
    externalUrl: "https://github.com/Crafted-Company/crafted-studio-pc",
    badgeColor: "bg-emerald-500",
    accent: "#5B50EC"
  },
  {
    id: "craftnime",
    name: "Craftnime",
    tagline: "Minimalist Distraction-Free Streaming Client",
    description: "Ultra-clean desktop and mobile video client designed with zero advertisement bloat, smart offline chapter caching, fluid subtitle rendering, and sync history.",
    status: "Active",
    category: "Media Client",
    stack: ["Next.js", "Tauri", "HLS.js", "Framer Motion"],
    metrics: [
      { label: "Ad Load", val: "0% Zero Ads" },
      { label: "Buffer Time", val: "0.2s Instant" },
      { label: "Storage Saved", val: "42%" }
    ],
    externalUrl: "https://crafted-co.vercel.app",
    badgeColor: "bg-indigo-500",
    accent: "#6366F1"
  },
  {
    id: "music-player",
    name: "Spatial Music Player",
    tagline: "Lossless Audio Workbench & Spectrum Scope",
    description: "Spatial audio listening experience with a dynamic 60fps WebGL particle visualizer, real-time 10-band parametric EQ, and gesture-driven playlist queuing.",
    status: "Beta",
    category: "Audio Engine",
    stack: ["Web Audio API", "Three.js", "TypeScript", "Canvas"],
    metrics: [
      { label: "Frequency Range", val: "20Hz - 20kHz" },
      { label: "Visualizer FPS", val: "60 FPS" },
      { label: "EQ Bands", val: "10 Parametric" }
    ],
    externalUrl: "https://crafted-co.vercel.app",
    badgeColor: "bg-cyan-500",
    accent: "#06B6D4"
  },
  {
    id: "store-hub",
    name: "Crafted Store Hub",
    tagline: "Curated Developer Artifacts & Design Tokens",
    description: "Modern distribution portal for verified design system tokens, Tailwind components, custom shader presets, and microinteraction modules built for craft-focused teams.",
    status: "Active",
    category: "Commerce & Tooling",
    stack: ["Next.js", "Stripe API", "Prisma", "PostgreSQL"],
    metrics: [
      { label: "Verified Assets", val: "120+" },
      { label: "Download Speed", val: "Global CDN" },
      { label: "Satisfaction", val: "99.4%" }
    ],
    externalUrl: "https://crafted-co.vercel.app",
    badgeColor: "bg-amber-500",
    accent: "#F59E0B"
  }
];

export default function CraftedPage() {
  // Immerse background in Cosmic Indigo (#5B50EC)
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#5B50EC";
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  const [activeProduct, setActiveProduct] = useState<StudioProduct>(STUDIO_PRODUCTS[0]);

  // Design Token Forge Live States
  const [tokenRadius, setTokenRadius] = useState<number>(16);
  const [tokenAccent, setTokenAccent] = useState<string>("#5B50EC");
  const [tokenShadow, setTokenShadow] = useState<"soft" | "elevation" | "glow">("elevation");

  const [contentReady, setContentReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setContentReady(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#5B50EC] text-white selection:bg-white selection:text-[#5B50EC] pb-28 font-sans relative overflow-x-hidden">
      {/* 2.8-SECOND MINIMAL PARCEL TRUCK TRANSITION SCREEN */}
      <SpaceTransition variant="crafted" duration={2800} />

      {/* Floating Autonomous Doodles in Space matching Behance and GitHub */}
      <div className="absolute top-16 left-6 pointer-events-none hidden md:block">
        <AutonomousSpiral color="#CCFF00" size={44} speed={8} />
      </div>
      <div className="absolute top-36 right-8 pointer-events-none hidden lg:block">
        <AutonomousSpring color="#FFFFFF" width={70} height={32} />
      </div>
      <div className="absolute top-[850px] left-4 pointer-events-none hidden xl:block opacity-60">
        <AutonomousAsterisk color="#FFF4CC" size={36} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-12 space-y-16"
      >
        {/* ========================================================================= */}
        {/* 1. TOP EDITORIAL STATUS & QUICK NAVIGATION BAR (IDENTICAL CONSISTENCY) */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/20 pb-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="font-bold text-white tracking-tight uppercase">
              SPACE 04 // CRAFTED CO.
            </span>
            <span className="hidden sm:inline text-white/40">/</span>
            <span className="hidden sm:inline text-white/80">
              SOFTWARE STUDIO ✦ DIGITAL PRODUCTS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <StarburstBadge text="Active Builds" bgColor="#CCFF00" />
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5B50EC] border border-white/25 transition-all text-[11px] font-mono font-bold group"
            >
              <span>PORTFOLIO</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO SECTION: Compact, Clean & Consistent with Behance/GitHub */}
        {/* ========================================================================= */}
        <section className="space-y-3.5 relative max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4CC] border border-amber-300 text-xs font-mono font-bold text-black shadow-xs">
            <span>Digital Products &amp; Design Systems</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Crafted Co.{" "}
            <span className="font-serif italic font-normal text-[#FFF4CC]">&amp;</span>{" "}
            Digital Studio
          </h1>

          <p className="text-xs sm:text-sm text-indigo-100 max-w-lg leading-relaxed font-sans">
            Independent software and design lab building native desktop utilities, streaming clients, spatial audio players, and design token architecture.
          </p>

          <div className="pt-1">
            <MagneticButton pullStrength={0.35}>
              <a
                href="https://crafted-co.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSuccess()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#5B50EC] text-xs font-mono font-extrabold tracking-wide transition-all shadow-md hover:bg-neutral-100 active:translate-y-0.5 group"
              >
                <span>LAUNCH CRAFTED CO. SITE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 01: PRODUCT LAB SUITE (INTERACTIVE SHOWCASE) */}
        {/* ========================================================================= */}
        <section className="space-y-5 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Product Lab Suite
                </h2>
              </div>
              <p className="text-xs text-indigo-100">
                Explore Crafted Co.&apos;s active production clients, native desktop utilities, and experimental engines.
              </p>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {STUDIO_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => {
                    playPop();
                    setActiveProduct(prod);
                  }}
                  className={`px-3 py-1.5 rounded-full border text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                    activeProduct.id === prod.id
                      ? "bg-[#CCFF00] text-black border-[#CCFF00] shadow-md font-bold"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {prod.name}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE PRODUCT HERO CARD (CRISP WHITE NEUBRUTALIST CARD WITH WASHI TAPE) */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-black/20 text-black space-y-6">
            <WashiTape color="#CCFF00" angle="-3deg" className="absolute -top-3 left-10 z-20" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeProduct.badgeColor} animate-pulse`} />
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    {activeProduct.category} • {activeProduct.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-sans">
                  {activeProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  {activeProduct.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pt-1">
                  {activeProduct.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={activeProduct.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSuccess()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#5B50EC] text-white font-bold text-xs shadow-md hover:bg-[#4d42e6] transition-colors"
                >
                  <span>Launch {activeProduct.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => playFigmaClick()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  <Code className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Inspect Spec Sheet</span>
                </button>
              </div>
            </div>

            {/* PRODUCT METRICS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeProduct.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1"
                >
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    {m.val}
                  </span>
                </div>
              ))}
            </div>

            {/* TECH STACK TAGS */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-neutral-500 font-medium mr-2">
                Tech Stack:
              </span>
              {activeProduct.stack.map((st) => (
                <span
                  key={st}
                  className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-medium"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 02: LIVE DESIGN SYSTEM TOKEN FORGE */}
        {/* ========================================================================= */}
        <section className="space-y-5 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Live Design System Token Forge
                </h2>
              </div>
              <p className="text-xs text-indigo-100">
                Interactive design tokens sandbox powering Crafted Co. multi-platform component libraries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
            {/* Corner Tape Accent matching Behance */}
            <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-8" />

            {/* LEFT COLUMN: THE TOKEN VARIABLES SIDEBAR (FIGMA-STYLE DARK PANEL) */}
            <div className="lg:col-span-4 bg-[#1E1E1E] text-white rounded-2xl border border-neutral-700 p-4 sm:p-5 shadow-xl space-y-4 font-sans select-none flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-bold tracking-tight text-white">Token Variables</span>
                <div className="w-6 h-6 rounded bg-[#2C2C2C] flex items-center justify-center text-neutral-400">
                  <Sliders className="w-3.5 h-3.5 text-[#5B50EC]" />
                </div>
              </div>

              {/* RADIUS SLIDER */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">Border Radius</span>
                  <span className="font-bold text-[#5B50EC]">{tokenRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="32"
                  step="4"
                  value={tokenRadius}
                  onChange={(e) => {
                    playPop();
                    setTokenRadius(Number(e.target.value));
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-neutral-800 accent-[#5B50EC]"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>Sharp (0px)</span>
                  <span>Rounded (16px)</span>
                  <span>Pill (32px)</span>
                </div>
              </div>

              {/* ACCENT COLOR SELECTOR */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block">
                  Accent Token
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: "Cosmic", color: "#5B50EC" },
                    { label: "Blaze", color: "#F97316" },
                    { label: "Emerald", color: "#10B981" },
                    { label: "Cyan", color: "#06B6D4" }
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => {
                        playPop();
                        setTokenAccent(c.color);
                      }}
                      className={`py-2 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        tokenAccent === c.color
                          ? "bg-[#2C2C2C] border-white shadow-xs font-bold"
                          : "border-neutral-800 bg-[#121212] hover:bg-[#2C2C2C]"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-xs"
                        style={{ backgroundColor: c.color }}
                      />
                      <span className="text-[10px] font-mono text-neutral-300">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SHADOW STACK */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block">
                  Elevation Mode
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["soft", "elevation", "glow"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        playPop();
                        setTokenShadow(mode);
                      }}
                      className={`py-1.5 rounded-xl border text-xs font-mono capitalize transition-all cursor-pointer ${
                        tokenShadow === mode
                          ? "bg-[#5B50EC] text-white border-[#5B50EC] font-bold shadow-xs"
                          : "border-neutral-800 bg-[#121212] text-neutral-400 hover:text-white hover:bg-[#2C2C2C]"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>Tokens Core: v2.4</span>
                <span className="text-emerald-400 font-bold">● Synced</span>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE CANVAS WITH DASHED BORDER (MATCHING BEHANCE) */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-[#FAF8F5] text-black rounded-2xl p-4 sm:p-6 shadow-inner border border-neutral-300 overflow-hidden min-h-[360px]">
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200 text-[10px] sm:text-xs text-neutral-500 font-mono">
                <span className="font-bold text-black">&lt;DesignTokenForge /&gt;</span>
                <span className="hidden sm:inline">
                  Radius: {tokenRadius}px | Accent: {tokenAccent} | Elevation: {tokenShadow.toUpperCase()}
                </span>
              </div>

              {/* Dashed Blueprint Canvas */}
              <div className="flex-1 my-4 flex items-center justify-center p-4 sm:p-6 min-h-[220px] rounded-2xl border-2 border-dashed border-[#5B50EC]/30 bg-white">
                <motion.div
                  layout
                  style={{
                    borderRadius: `${tokenRadius}px`,
                    boxShadow:
                      tokenShadow === "soft"
                        ? "0 10px 25px -5px rgba(0,0,0,0.15)"
                        : tokenShadow === "elevation"
                        ? "0 20px 40px -10px rgba(0,0,0,0.35)"
                        : `0 0 35px 2px ${tokenAccent}55`
                  }}
                  className="w-full max-w-sm bg-[#1E1E1E] text-white border border-neutral-700 p-5 sm:p-6 space-y-4 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shadow-xs"
                        style={{ backgroundColor: tokenAccent }}
                      />
                      <span className="text-xs font-mono font-bold tracking-tight text-white">
                        Token Card Spec
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">#Tokens-OK</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      Spatial Audio Controller
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Dynamic component automatically recalculating border radii, contrast elevations, and tokens in real time.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      style={{
                        borderRadius: `${Math.max(8, tokenRadius - 4)}px`,
                        backgroundColor: tokenAccent
                      }}
                      onClick={() => playFigmaClick()}
                      className="flex-1 py-2 px-3 text-xs font-bold text-white shadow-md hover:opacity-95 transition-all text-center cursor-pointer"
                    >
                      Action Token
                    </button>

                    <button
                      style={{ borderRadius: `${Math.max(8, tokenRadius - 4)}px` }}
                      onClick={() => playPop()}
                      className="py-2 px-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono transition-colors cursor-pointer border border-neutral-700"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
                <span>Token Engine: Active</span>
                <span className="text-[#5B50EC] font-bold">Inspect token variables on the left ↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 03: STUDIO ENGINEERING PRINCIPLES BENTO */}
        {/* ========================================================================= */}
        <section className="space-y-5 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Engineering &amp; Craft Principles
                </h2>
              </div>
              <p className="text-xs text-indigo-100">
                Core craftsmanship values governing all software and platforms shipped by Crafted Co.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                title: "Zero Compromise Performance",
                desc: "Every interaction renders within a 16ms frame budget (60-120fps). Heavy compute shifts to Web Workers and native Rust engines.",
                icon: <Zap className="w-5 h-5 text-[#5B50EC]" />
              },
              {
                num: "02",
                title: "Offline-First Sovereignty",
                desc: "Applications run completely functional offline using local SQLite and IndexedDB stores with conflict-free sync protocols.",
                icon: <Cpu className="w-5 h-5 text-[#5B50EC]" />
              },
              {
                num: "03",
                title: "Tactile Microinteractions",
                desc: "Interfaces should feel like physical instruments. Spring physics, precise sound cues, and cursor awareness bring products to life.",
                icon: <Sparkles className="w-5 h-5 text-[#5B50EC]" />
              },
              {
                num: "04",
                title: "Token-Driven Architecture",
                desc: "Design tokens are the single source of truth across web, desktop, and native platforms, eliminating UI drift permanently.",
                icon: <Layers className="w-5 h-5 text-[#5B50EC]" />
              }
            ].map((principle, idx) => (
              <motion.div
                key={principle.num}
                whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative rounded-3xl bg-white text-black p-6 flex flex-col justify-between space-y-4 shadow-xl border-2 border-black/10 cursor-default group"
              >
                {idx === 0 && (
                  <WashiTape color="#CCFF00" angle="-2deg" className="absolute -top-3 left-6 z-10" />
                )}
                {idx === 2 && (
                  <WashiTape color="#FFF4CC" angle="3deg" className="absolute -top-3 right-6 z-10" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#5B50EC]/10 flex items-center justify-center">
                      {principle.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#5B50EC]">
                      /{principle.num}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#5B50EC] transition-colors font-sans">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <span>Principle Verified</span>
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/20 text-center space-y-3 select-none">
          <p className="text-xs font-mono text-white/70">
            Crafted Co. • Digital Product Studio • Built by Aditya Kumar
          </p>
          <div>
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-medium transition-all"
            >
              <span>← Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
