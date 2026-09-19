const fs = require("fs");
const path = require("path");

const behancePageContent = `"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Box,
  Shuffle,
  Layers,
  Trophy,
  Flame,
  Sliders,
  HelpCircle,
  Grid
} from "lucide-react";
import confetti from "canvas-confetti";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";

// All 36 sanitized work assets
const ALL_WORK_ASSETS = [
  { id: "coffee-shop", title: "Isometric Coffee Shop", cat: "Architectural 3D", file: "10_Coffee_Shop_Modeling_1920x1200.png" },
  { id: "iphone-titanium", title: "iPhone 15 Pro Titanium", cat: "Product Render", file: "11_iphone_1920x1080.png" },
  { id: "medieval-tower", title: "Low Poly Medieval Tower", cat: "3D Asset", file: "12_Low_Poly_Tower.png" },
  { id: "isometric-tree", title: "Stylized Nature Tree", cat: "Environment", file: "13_Low_Poly_Tree.png" },
  { id: "airplane", title: "Low Poly Airplane", cat: "Vehicle Concept", file: "14_Low_Poly_Airplane.png" },
  { id: "micro-planet", title: "Micro Asteroid World", cat: "Worldbuilding", file: "15_Low_Poly_Planet.png" },
  { id: "donuts-classic", title: "Sprinkled Donut Duo", cat: "Surface Shading", file: "1_Donuts.png" },
  { id: "business-cards", title: "Branded Stationery Mockup", cat: "Identity", file: "2_business_cards_v1.1.png" },
  { id: "3d-button", title: "Tactile Neumorphic Button", cat: "UI Exploration", file: "3D_Button.png" },
  { id: "3d-card", title: "Spatial Glass Card System", cat: "UI Component", file: "3D_Card_Animation_Thumbnail.png" },
  { id: "blender-models", title: "Low Poly Diorama Collection", cat: "Modeling Series", file: "3_5_Blender_Models__Polygon_Runway_.png" },
  { id: "burger-svg", title: "Stylized Vector Burger", cat: "Illustration", file: "4_Burger_SVG.png" },
  { id: "hard-surface", title: "Hard Surface Mech Concept", cat: "Industrial", file: "7_Hard_Surface_Modeling__Polygon_Runway_.png" },
  { id: "batman-logo", title: "Bat Emblem Minimalist", cat: "Graphic Identity", file: "8_Batman_Logo_Red.png" },
  { id: "bicycle-model", title: "Precision Bicycle Study", cat: "Hard Surface", file: "9_Bicyle_Modeling.png" },
  { id: "anchor-logo", title: "Maritime Anchor Brandmark", cat: "Branding", file: "Anchor_logo.png" },
  { id: "ball-loading", title: "Fluid Sphere Loading", cat: "Motion Graphic", file: "Ball_Loading_Animation.png" },
  { id: "bouncy-button", title: "Kinetic Microinteraction", cat: "Motion UI", file: "Bouncy.png" },
  { id: "composite-art", title: "Cine Composite Keyframe", cat: "Art Direction", file: "Composite.png" },
  { id: "day-night", title: "Solar Day / Night Shift", cat: "System Toggle", file: "Day___Night_Mode.png" },
  { id: "bear-logo", title: "Double Exposure Bear Emblem", cat: "Visual Identity", file: "Double_Exposure_Bear_Logo_white_bg.png" },
  { id: "earth-orbit", title: "Atmospheric Earth Orbit", cat: "Space Sci-Fi", file: "EARTH.png" },
  { id: "esports-crest", title: "Vanguard Esports Crest", cat: "Logo Series", file: "ESPORTS_Logo.png" },
  { id: "football-logo", title: "Striker Football Emblem", cat: "Sports Badge", file: "Football_Logo.png" },
  { id: "frame-4-wire", title: "Mobile Design Spec Canvas", cat: "Interface", file: "Frame_4.png" },
  { id: "frame-5-spec", title: "Design System Tokens Board", cat: "System Architecture", file: "Frame_5.png" },
  { id: "frame-7-dash", title: "Analytics Overview Dashboard", cat: "SaaS App", file: "Frame_7.png" },
  { id: "inkscape-emblem", title: "Inkscape Vector Study", cat: "Vector Art", file: "Inkscape_Logo.png" },
  { id: "liquid-fab", title: "Liquid Action Button Flow", cat: "Motion UI", file: "Liquid_FAB_Animation.png" },
  { id: "macbook-clay", title: "MacBook Studio Perspective", cat: "Device Frame", file: "MacBook.png" },
  { id: "macbook-dark", title: "MacBook Pro Cyber Dark", cat: "Mockup Render", file: "Macbook_Pro_Mockup_Dark.png" },
  { id: "mountain-crest", title: "Alpine Mountain Seal", cat: "Logo Design", file: "Mountain_Logo.png" },
  { id: "redclaw-baseball", title: "Redclaw Baseball Mascot", cat: "Club Identity", file: "REDCLAW_Baseball.png" },
  { id: "rocket-logo", title: "Orbital Rocket Monogram", cat: "App Icon", file: "Rocket_Logo.png" },
  { id: "thumb-concept", title: "Tactile Glassmorphism Deck", cat: "Visual Concept", file: "Thumbnail.png" },
  { id: "thumb1-viewport", title: "3D Viewport Geometry Scene", cat: "3D Concept", file: "Thumbnail1.png" }
];

// Whole card transition animation variants
const CARD_TRANSITIONS = [
  {
    name: "slideUp",
    initial: { y: 50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -50, opacity: 0, scale: 0.95 }
  },
  {
    name: "slideDown",
    initial: { y: -50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 50, opacity: 0, scale: 0.95 }
  },
  {
    name: "slideLeft",
    initial: { x: 50, opacity: 0, scale: 0.95 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -50, opacity: 0, scale: 0.95 }
  },
  {
    name: "flip3D",
    initial: { rotateY: 85, opacity: 0, scale: 0.9 },
    animate: { rotateY: 0, opacity: 1, scale: 1 },
    exit: { rotateY: -85, opacity: 0, scale: 0.9 }
  },
  {
    name: "zoomRotate",
    initial: { scale: 0.85, rotate: -4, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 1.08, rotate: 3, opacity: 0 }
  }
];

export default function BehancePage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0057FF";
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  // =========================================================================
  // 1. TRUE ASYMMETRIC BENTO GRID (1-3 CARDS MORPH RANDOMLY, FOCUSCARDS HOVER)
  // =========================================================================
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 4, 6, 10, 18]);
  const [slotVariants, setSlotVariants] = useState<number[]>([0, 1, 2, 3, 4, 0]);
  const [isAutoTransitioning, setIsAutoTransitioning] = useState<boolean>(true);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  // Auto transition: pick 1-3 random slots every 2.4s unless a card is hovered
  useEffect(() => {
    if (!isAutoTransitioning || hoveredSlot !== null) return;

    const interval = setInterval(() => {
      // Pick random 1 to 3 cards to change
      const numToChange = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3

      setActiveIndices((prev) => {
        const availablePool: number[] = [];
        for (let i = 0; i < ALL_WORK_ASSETS.length; i++) {
          if (!prev.includes(i)) {
            availablePool.push(i);
          }
        }
        if (availablePool.length === 0) return prev;

        // Shuffle pool
        const shuffledPool = [...availablePool].sort(() => Math.random() - 0.5);

        // Pick unique slot indices to update
        const slotsToUpdate: number[] = [];
        const slotCandidates = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
        for (let k = 0; k < numToChange && k < slotCandidates.length; k++) {
          slotsToUpdate.push(slotCandidates[k]);
        }

        const nextIndices = [...prev];
        slotsToUpdate.forEach((slotIdx, idx) => {
          if (shuffledPool[idx] !== undefined) {
            nextIndices[slotIdx] = shuffledPool[idx];
          }
        });

        // Update transition animations for changed slots
        setSlotVariants((varPrev) => {
          const nextVars = [...varPrev];
          slotsToUpdate.forEach((slotIdx) => {
            nextVars[slotIdx] = Math.floor(Math.random() * CARD_TRANSITIONS.length);
          });
          return nextVars;
        });

        return nextIndices;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, [isAutoTransitioning, hoveredSlot]);

  const shuffleSlot = (slotIdx: number) => {
    playPop();
    setActiveIndices((prev) => {
      const availablePool: number[] = [];
      for (let i = 0; i < ALL_WORK_ASSETS.length; i++) {
        if (!prev.includes(i)) {
          availablePool.push(i);
        }
      }
      if (availablePool.length === 0) return prev;
      const nextIdx = availablePool[Math.floor(Math.random() * availablePool.length)];
      const updated = [...prev];
      updated[slotIdx] = nextIdx;
      return updated;
    });
    setSlotVariants((prev) => {
      const updated = [...prev];
      updated[slotIdx] = (updated[slotIdx] + 1) % CARD_TRANSITIONS.length;
      return updated;
    });
  };

  const shuffleAllSlots = () => {
    playSuccess();
    const shuffled: number[] = [];
    const pool = [...Array(ALL_WORK_ASSETS.length).keys()];
    for (let i = 0; i < 6; i++) {
      const pickIdx = Math.floor(Math.random() * pool.length);
      shuffled.push(pool[pickIdx]);
      pool.splice(pickIdx, 1);
    }
    setActiveIndices(shuffled);
    setSlotVariants(shuffled.map(() => Math.floor(Math.random() * CARD_TRANSITIONS.length)));
  };

  // =========================================================================
  // 2. FIGMA AUTO LAYOUT STUDIO (RESPONSIVE ON MOBILE)
  // =========================================================================
  const [flow, setFlow] = useState<"row" | "column" | "wrap" | "grid">("row");
  const [alignment, setAlignment] = useState<number>(4);
  const [gap, setGap] = useState<number>(16);
  const [padX, setPadX] = useState<number>(20);
  const [padY, setPadY] = useState<number>(20);
  const [clipContent, setClipContent] = useState<boolean>(false);
  const [widthMode, setWidthMode] = useState<"Fill" | "Hug" | "Fixed">("Fill");
  const [heightMode, setHeightMode] = useState<"Hug" | "Fill" | "Fixed">("Hug");

  const getFlexAlignClasses = () => {
    const isCol = flow === "column";
    const rowIdx = Math.floor(alignment / 3);
    const colIdx = alignment % 3;

    let justify = "justify-start";
    let items = "items-start";

    if (!isCol) {
      if (colIdx === 0) justify = "justify-start";
      else if (colIdx === 1) justify = "justify-center";
      else justify = "justify-end";

      if (rowIdx === 0) items = "items-start";
      else if (rowIdx === 1) items = "items-center";
      else items = "items-end";
    } else {
      if (rowIdx === 0) justify = "justify-start";
      else if (rowIdx === 1) justify = "justify-center";
      else justify = "justify-end";

      if (colIdx === 0) items = "items-start";
      else if (colIdx === 1) items = "items-center";
      else items = "items-end";
    }

    return { justify, items };
  };

  // =========================================================================
  // 3. BLENDER DONUT 3D TURNTABLE STUDIO
  // =========================================================================
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const toggleVideoPlayback = () => {
    playPop();
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const setSpeed = (speed: number) => {
    playPop();
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const resetVideo = () => {
    playPop();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  // =========================================================================
  // 4. COLOR ALCHEMIST MINIGAME (BELOW DONUT)
  // =========================================================================
  const [targetColor, setTargetColor] = useState({ h: 220, s: 90, l: 50 });
  const [userColor, setUserColor] = useState({ h: 180, s: 60, l: 50 });
  const [gameScore, setGameScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [matchStatus, setMatchStatus] = useState<string | null>(null);

  const matchPercentage = useMemo(() => {
    const hDiff = Math.min(Math.abs(targetColor.h - userColor.h), 360 - Math.abs(targetColor.h - userColor.h));
    const sDiff = Math.abs(targetColor.s - userColor.s);
    const lDiff = Math.abs(targetColor.l - userColor.l);

    const weighted = (hDiff / 180) * 50 + (sDiff / 100) * 25 + (lDiff / 100) * 25;
    return Math.max(0, Math.round(100 - weighted));
  }, [targetColor, userColor]);

  const generateNewTarget = () => {
    playPop();
    const newH = Math.floor(Math.random() * 360);
    const newS = Math.floor(Math.random() * 60) + 40;
    const newL = Math.floor(Math.random() * 50) + 25;
    setTargetColor({ h: newH, s: newS, l: newL });
    setMatchStatus(null);
  };

  const handleTestMatch = (e: React.MouseEvent) => {
    if (matchPercentage >= 85) {
      playSuccess();
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setGameScore((prev) => prev + matchPercentage * 10 * nextStreak);
      setMatchStatus(\`PERFECT MATCH! 🎉 \${matchPercentage}%\`);

      const rect = e.currentTarget.getBoundingClientRect();
      confetti({
        particleCount: 60,
        spread: 80,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: [
          \`hsl(\${targetColor.h}, \${targetColor.s}%, \${targetColor.l}%)\`,
          "#ffffff",
          "#0057FF",
          "#ffd700"
        ]
      });

      setTimeout(() => {
        generateNewTarget();
      }, 1500);
    } else {
      playPop();
      setStreak(0);
      setMatchStatus(\`Match is \${matchPercentage}%. Keep tweaking!\`);
    }
  };

  const { justify, items } = getFlexAlignClasses();

  return (
    <div className="min-h-screen bg-[#0057FF] text-white selection:bg-white selection:text-[#0057FF] pb-24">
      {/* 3-SECOND BLUE PAINT BUCKET LIQUID FILL TRANSITION SCREEN */}
      <SpaceTransition variant="behance" duration={3000} />

      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.22),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-20 lg:pt-14 space-y-20">
        {/* ========================================================================= */}
        {/* TOP BRAND HEADER + CLEAN WHITE CTA */}
        {/* ========================================================================= */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-white">
                Behance Creative Space
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Behance Space
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              3D turnarounds, digital artwork, isometric concept renders, and visual prototypes.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0"
          >
            <a
              href="https://www.behance.net/1c5da35f"
              target="_blank"
              rel="noreferrer"
              onClick={() => playSuccess()}
              className="inline-flex flex-col items-center justify-center px-6 py-3.5 rounded-2xl bg-white text-[#0057FF] font-bold text-sm shadow-xl hover:shadow-2xl hover:bg-neutral-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <span className="tracking-tight text-sm font-extrabold">View More on Behance</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-[10px] text-[#0057FF]/70 font-mono">
                (Appreciate if you like!)
              </span>
            </a>
          </motion.div>
        </header>

        {/* ========================================================================= */}
        {/* EXHIBIT 1: TRUE ASYMMETRIC BENTO GRID SHOWCASE (FOCUSCARDS BLUR ON HOVER) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-white" />
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  01 / Visual Artwork Bento Showcase
                </h2>
              </div>
              <p className="text-xs text-white/70">
                1-3 cards morph randomly every 2.4s. Hover any card to pause and focus (blurs the others).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoTransitioning(!isAutoTransitioning)}
                className={\`px-3 py-1.5 rounded-xl border text-[11px] font-mono font-medium transition-all \${
                  isAutoTransitioning
                    ? "bg-white/20 border-white/40 text-white"
                    : "bg-white/5 border-white/20 text-white/60"
                }\`}
              >
                {isAutoTransitioning ? "Auto: ON" : "Auto: PAUSED"}
              </button>

              <button
                onClick={shuffleAllSlots}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#0057FF] font-bold text-xs shadow-md hover:bg-white/90 transition-colors"
                title="Shuffle all 6 slots"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle All</span>
              </button>
            </div>
          </div>

          {/* ASYMMETRIC BENTO GRID: DISTINCT SIZES & PROPORTIONS */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:gap-5">
            {/* Slot 0: Large Feature Card (Col 1-7, 360px) */}
            <BentoFocusSlot
              slotIndex={0}
              asset={ALL_WORK_ASSETS[activeIndices[0]]}
              variant={CARD_TRANSITIONS[slotVariants[0]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-2 md:col-span-7 h-48 sm:h-64 md:h-[360px]"
              onShuffle={() => shuffleSlot(0)}
            />

            {/* Slot 1: Tall Vertical Concept Card (Col 8-12, 360px) */}
            <BentoFocusSlot
              slotIndex={1}
              asset={ALL_WORK_ASSETS[activeIndices[1]]}
              variant={CARD_TRANSITIONS[slotVariants[1]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-5 h-40 sm:h-56 md:h-[360px]"
              onShuffle={() => shuffleSlot(1)}
            />

            {/* Slot 2: Square Art Tile (Col 1-4, 270px) */}
            <BentoFocusSlot
              slotIndex={2}
              asset={ALL_WORK_ASSETS[activeIndices[2]]}
              variant={CARD_TRANSITIONS[slotVariants[2]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-4 h-40 sm:h-52 md:h-[270px]"
              onShuffle={() => shuffleSlot(2)}
            />

            {/* Slot 3: Compact Square Detail (Col 5-7, 270px) */}
            <BentoFocusSlot
              slotIndex={3}
              asset={ALL_WORK_ASSETS[activeIndices[3]]}
              variant={CARD_TRANSITIONS[slotVariants[3]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-3 h-40 sm:h-52 md:h-[270px]"
              onShuffle={() => shuffleSlot(3)}
            />

            {/* Slot 4: Wide Concept Showcase (Col 8-12, 270px) */}
            <BentoFocusSlot
              slotIndex={4}
              asset={ALL_WORK_ASSETS[activeIndices[4]]}
              variant={CARD_TRANSITIONS[slotVariants[4]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-5 h-40 sm:h-52 md:h-[270px]"
              onShuffle={() => shuffleSlot(4)}
            />

            {/* Slot 5: Panoramic Studio Showcase (Col 1-12, 290px) */}
            <BentoFocusSlot
              slotIndex={5}
              asset={ALL_WORK_ASSETS[activeIndices[5]]}
              variant={CARD_TRANSITIONS[slotVariants[5]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-2 md:col-span-12 h-44 sm:h-60 md:h-[290px]"
              onShuffle={() => shuffleSlot(5)}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 2: FIGMA AUTO LAYOUT STUDIO (RESPONSIVE ON MOBILE) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-white" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                02 / Figma Auto Layout Engine
              </h2>
            </div>
            <p className="text-xs text-white/70">
              Exact replica of Figma's auto-layout sidebar. Tweak 9-point alignment, gap & padding to transform the live frame.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl">
            {/* LEFT COLUMN: THE FIGMA AUTO LAYOUT SIDEBAR */}
            <div className="lg:col-span-4 bg-[#2c2c2c] text-white rounded-2xl border border-[#3c3c3c] p-4 shadow-xl space-y-4 font-sans select-none">
              <div className="flex items-center justify-between pb-1 border-b border-[#3c3c3c]">
                <span className="text-xs sm:text-sm font-semibold tracking-tight text-white">Auto layout</span>
                <div className="w-6 h-6 rounded bg-[#383838] flex items-center justify-center text-[#9e9e9e]">
                  <Box className="w-3.5 h-3.5 text-[#0d99ff]" />
                </div>
              </div>

              {/* FLOW SECTION */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#9e9e9e] font-medium">Flow</label>
                <div className="grid grid-cols-4 bg-[#1e1e1e] p-1 rounded-xl border border-[#3c3c3c]">
                  <button
                    onClick={() => { playPop(); setFlow("wrap"); }}
                    className={\`py-1 rounded-lg flex items-center justify-center transition-colors \${
                      flow === "wrap" ? "bg-[#383838] text-white shadow-xs" : "text-[#9e9e9e] hover:text-white"
                    }\`}
                    title="Wrap"
                  >
                    <span className="text-xs font-mono font-bold">☵</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("column"); }}
                    className={\`py-1 rounded-lg flex items-center justify-center transition-colors \${
                      flow === "column" ? "bg-[#383838] text-white shadow-xs" : "text-[#9e9e9e] hover:text-white"
                    }\`}
                    title="Vertical Stack"
                  >
                    <span className="text-xs font-mono font-bold">↓</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("row"); }}
                    className={\`py-1 rounded-lg flex items-center justify-center transition-colors \${
                      flow === "row" ? "bg-[#383838] text-white shadow-xs" : "text-[#9e9e9e] hover:text-white"
                    }\`}
                    title="Horizontal Stack"
                  >
                    <span className="text-xs font-mono font-bold">→</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("grid"); }}
                    className={\`py-1 rounded-lg flex items-center justify-center transition-colors \${
                      flow === "grid" ? "bg-[#383838] text-white shadow-xs" : "text-[#9e9e9e] hover:text-white"
                    }\`}
                    title="Grid Layout"
                  >
                    <Grid className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* RESIZING SECTION */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#9e9e9e] font-medium">Resizing</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      playPop();
                      setWidthMode((prev) => (prev === "Fill" ? "Hug" : prev === "Hug" ? "Fixed" : "Fill"));
                    }}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#383838] hover:bg-[#444444] border border-[#484848] text-xs transition-colors"
                  >
                    <span className="text-[#9e9e9e] font-mono">W</span>
                    <span className="font-semibold text-white">{widthMode}</span>
                  </button>

                  <button
                    onClick={() => {
                      playPop();
                      setHeightMode((prev) => (prev === "Hug" ? "Fill" : prev === "Fill" ? "Fixed" : "Hug"));
                    }}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#383838] hover:bg-[#444444] border border-[#484848] text-xs transition-colors"
                  >
                    <span className="text-[#9e9e9e] font-mono">H</span>
                    <span className="font-semibold text-white">{heightMode}</span>
                  </button>
                </div>
              </div>

              {/* ALIGNMENT (3x3 9-POINT GRID) & GAP */}
              <div className="grid grid-cols-2 gap-2.5 items-start">
                <div className="space-y-1">
                  <label className="text-[10px] text-[#9e9e9e] font-medium">Alignment</label>
                  <div className="bg-[#1e1e1e] p-2 rounded-xl border border-[#3c3c3c] grid grid-cols-3 gap-2 w-full max-w-[120px] aspect-square place-items-center">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dotIdx) => {
                      const isSelected = alignment === dotIdx;
                      return (
                        <button
                          key={dotIdx}
                          onClick={() => {
                            playFigmaClick();
                            setAlignment(dotIdx);
                          }}
                          className={\`w-6 h-6 rounded-md flex items-center justify-center transition-all \${
                            isSelected
                              ? "bg-[#0d99ff] ring-2 ring-[#0d99ff]/50 scale-105"
                              : "hover:bg-[#383838]"
                          }\`}
                          title={\`Align dot \${dotIdx}\`}
                        >
                          <div
                            className={\`w-1.5 h-1.5 rounded-full \${
                              isSelected ? "bg-white" : "bg-[#777777]"
                            }\`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-[#9e9e9e] font-medium">Gap</label>
                  <div className="flex items-center justify-between bg-[#383838] border border-[#484848] rounded-xl px-2.5 py-1.5">
                    <span className="text-[10px] text-[#9e9e9e] font-mono">)- (</span>
                    <span className="text-xs font-mono font-bold text-white">{gap}px</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setGap((g) => Math.min(32, g + 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setGap((g) => Math.max(0, g - 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PADDING CONTROLS */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#9e9e9e] font-medium">Padding</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-[#383838] border border-[#484848] rounded-xl px-2 py-1.5">
                    <span className="text-[10px] text-[#9e9e9e] font-mono">[]</span>
                    <span className="text-xs font-mono font-bold text-white">{padX}</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setPadX((p) => Math.min(32, p + 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setPadX((p) => Math.max(0, p - 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#383838] border border-[#484848] rounded-xl px-2 py-1.5">
                    <span className="text-[10px] text-[#9e9e9e] font-mono">≡</span>
                    <span className="text-xs font-mono font-bold text-white">{padY}</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setPadY((p) => Math.min(32, p + 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setPadY((p) => Math.max(0, p - 4)); }}
                        className="text-[9px] text-[#9e9e9e] hover:text-white leading-none p-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CLIP CONTENT */}
              <div className="pt-1.5 border-t border-[#3c3c3c] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="clip-content"
                    checked={clipContent}
                    onChange={(e) => {
                      playPop();
                      setClipContent(e.target.checked);
                    }}
                    className="rounded border-[#484848] text-[#0d99ff] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="clip-content" className="text-xs text-white cursor-pointer select-none">
                    Clip content
                  </label>
                </div>
                <span className="text-[10px] font-mono text-[#9e9e9e]">overflow: {clipContent ? "hidden" : "visible"}</span>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE CANVAS (RESPONSIVE CHIPS) */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-white text-black rounded-2xl p-4 sm:p-6 shadow-inner border border-white/40 overflow-hidden min-h-[320px]">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-[10px] sm:text-xs text-gray-500 font-mono">
                <span className="font-semibold text-black">&lt;AutoLayoutContainer /&gt;</span>
                <span className="hidden sm:inline">
                  Flow: {flow.toUpperCase()} | Gap: {gap}px | Pad: {padX}px
                </span>
              </div>

              <div className="flex-1 my-3 overflow-x-auto">
                <motion.div
                  layout
                  style={{
                    gap: \`\${gap}px\`,
                    padding: \`\${padY}px \${padX}px\`,
                    overflow: clipContent ? "hidden" : "visible"
                  }}
                  className={\`min-h-[200px] h-full rounded-xl border-2 border-dashed border-[#0057FF]/30 bg-[#f8faff] flex \${
                    flow === "column" ? "flex-col" : flow === "wrap" ? "flex-wrap" : flow === "grid" ? "grid grid-cols-2" : "flex-row"
                  } \${justify} \${items} transition-all duration-300 relative\`}
                >
                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 px-3 py-2 rounded-xl bg-[#0057FF] text-white shadow-md flex items-center gap-1.5 text-xs font-semibold cursor-grab"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>CTA Button</span>
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 px-3 py-2 rounded-xl bg-white border border-gray-200 text-black shadow-xs flex items-center gap-1.5 text-xs font-medium cursor-grab"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">
                      AK
                    </div>
                    <span>Avatar Token</span>
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-800 text-[10px] font-mono font-bold cursor-grab"
                  >
                    PRO V2.4
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 px-3 py-2 rounded-xl bg-gray-900 text-white text-xs font-medium shadow-sm flex items-center gap-1.5 cursor-grab"
                  >
                    <Box className="w-3 h-3 text-blue-400" />
                    <span>Card Node</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>Align: {["TL", "TC", "TR", "ML", "CC", "MR", "BL", "BC", "BR"][alignment]}</span>
                <span className="text-[#0057FF] font-semibold">Click any dot in the 9-dot alignment grid</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 3: BLENDER 3D DONUT TURNAROUND STUDIO */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Box className="w-5 h-5 text-white" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                03 / Blender 3D Turnaround Studio
              </h2>
            </div>
            <p className="text-xs text-white/70">
              Cycles OptiX denoise surface scattering, chocolate icing procedural drip turntable.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/25 shadow-2xl flex items-center justify-center group">
              <video
                ref={videoRef}
                src="/media/donut-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />

              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Cycles 4.2 • OptiX</span>
              </div>

              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white/80">
                {playbackSpeed}x
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVideoPlayback}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#0057FF] font-bold text-xs shadow-md hover:bg-white/90 transition-colors"
                >
                  {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isVideoPlaying ? "Pause" : "Resume"}</span>
                </button>

                <button
                  onClick={resetVideo}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                  title="Rewind"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/20">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setSpeed(speed)}
                    className={\`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all \${
                      playbackSpeed === speed
                        ? "bg-white text-[#0057FF] font-bold shadow-xs"
                        : "text-white hover:bg-white/10"
                    }\`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 4: COLOR ALCHEMIST MINIGAME (PLACED BELOW DONUT VIDEO) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-300" />
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  04 / Color Alchemist Minigame
                </h2>
              </div>
              <p className="text-xs text-white/70">
                Tune Hue, Saturation & Lightness to match the mystery swatch.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-white">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Score: {gameScore}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-orange-300">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Streak: {streak}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex flex-col items-center space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                  Target Swatch
                </span>
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-xl border-4 border-white/50 transition-colors duration-300"
                  style={{
                    backgroundColor: \`hsl(\${targetColor.h}, \${targetColor.s}%, \${targetColor.l}%)\`
                  }}
                />
                <span className="text-[11px] font-mono text-white/60">
                  {showHint ? \`H: \${targetColor.h}° | S: \${targetColor.s}% | L: \${targetColor.l}%\` : "Mystery HSL"}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10">
                  <span className="text-xl font-extrabold font-mono text-white">
                    {matchPercentage}%
                  </span>
                  <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-white text-[#0057FF] text-[9px] font-bold tracking-wider uppercase">
                    Match
                  </span>
                </div>

                {matchStatus && (
                  <div className="text-center font-bold text-xs px-3 py-1 rounded-full bg-white text-[#0057FF]">
                    {matchStatus}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                  Your Blend
                </span>
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-xl border-4 border-white/50 transition-colors duration-150"
                  style={{
                    backgroundColor: \`hsl(\${userColor.h}, \${userColor.s}%, \${userColor.l}%)\`
                  }}
                />
                <span className="text-[11px] font-mono text-white/80">
                  H: {userColor.h}° | S: {userColor.s}% | L: {userColor.l}%
                </span>
              </div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-white/20">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span>Hue</span>
                  <span>{userColor.h}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={userColor.h}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, h: Number(e.target.value) }))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
                  }}
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span>Saturation</span>
                  <span>{userColor.s}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={userColor.s}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, s: Number(e.target.value) }))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-white/20 accent-white"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span>Lightness</span>
                  <span>{userColor.l}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={userColor.l}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, l: Number(e.target.value) }))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-white/20 accent-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-mono transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showHint ? "Hide Hint" : "Hint"}</span>
                </button>

                <button
                  onClick={generateNewTarget}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-mono transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Target</span>
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleTestMatch}
                className="px-5 py-2 rounded-xl bg-white text-[#0057FF] font-bold text-xs shadow-lg hover:bg-white/90 transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test Match (&gt;= 85%)</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="pt-8 border-t border-white/20 text-center space-y-3">
          <p className="text-xs font-mono text-white/60">
            Aditya Kumar • Visual Designer & 3D Generalist
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
      </div>
    </div>
  );
}

// BENTO FOCUS SLOT: ACETERNITY FOCUSCARDS EFFECT (HOVER BLURS ALL OTHER CARDS)
interface BentoFocusSlotProps {
  slotIndex: number;
  asset: { id: string; title: string; cat: string; file: string };
  variant: { name: string; initial: any; animate: any; exit: any };
  hoveredSlot: number | null;
  setHoveredSlot: (idx: number | null) => void;
  className?: string;
  onShuffle: () => void;
}

function BentoFocusSlot({
  slotIndex,
  asset,
  variant,
  hoveredSlot,
  setHoveredSlot,
  className = "",
  onShuffle
}: BentoFocusSlotProps) {
  const isHovered = hoveredSlot === slotIndex;
  const isBlurred = hoveredSlot !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => setHoveredSlot(slotIndex)}
      onMouseLeave={() => setHoveredSlot(null)}
      animate={{
        scale: isHovered ? 1.03 : isBlurred ? 0.98 : 1,
        filter: isBlurred ? "blur(5px)" : "blur(0px)",
        opacity: isBlurred ? 0.45 : 1
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={\`relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer select-none transition-shadow duration-300 \${
        isHovered
          ? "shadow-[0_25px_50px_rgba(0,0,0,0.5)] ring-2 ring-white/60 z-30"
          : "z-10 ring-0 shadow-lg"
      } \${className}\`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={asset.file}
          initial={variant.initial}
          animate={variant.animate}
          exit={variant.exit}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={onShuffle}
          className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/20 border border-white/20 flex items-center justify-center group"
        >
          {/* PURE ARTWORK IMAGE ONLY (NO TEXT, NO BADGES) */}
          <img
            src={\`/media/work/\${asset.file}\`}
            alt={asset.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Corner Shuffle Indicator on Hover */}
          <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Shuffle className="w-3 h-3" />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, "../src/app/behance/page.tsx"),
  behancePageContent,
  "utf8"
);
console.log("Successfully generated FocusCards Bento in src/app/behance/page.tsx!");
