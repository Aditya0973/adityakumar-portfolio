"use client";

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
  Grid,
  Heart,
  ExternalLink,
  ChevronRight,
  Eye,
  CheckCircle2
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess, playHoverTick } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";
import {
  SparkleStar,
  StarburstBadge,
  WashiTape,
  TapeSticker,
  PushPin,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  DoodleCrown,
  SketchArrow,
  WavyUnderline
} from "@/components/SketchDoodles";
import { MagneticButton } from "@/components/MagneticButton";
import { SquigglyLink, SquigglyText } from "@/components/SquigglyLink";

export interface WorkAsset {
  id: string;
  title: string;
  cat: string;
  file: string;
}

// All 36 sanitized work assets (any image can appear in any bento card)
const ALL_WORK_ASSETS: WorkAsset[] = [
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
    initial: { y: 40, opacity: 0, scale: 0.96 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -40, opacity: 0, scale: 0.96 }
  },
  {
    name: "slideDown",
    initial: { y: -40, opacity: 0, scale: 0.96 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 40, opacity: 0, scale: 0.96 }
  },
  {
    name: "slideLeft",
    initial: { x: 40, opacity: 0, scale: 0.96 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -40, opacity: 0, scale: 0.96 }
  },
  {
    name: "flip3D",
    initial: { rotateY: 75, opacity: 0, scale: 0.92 },
    animate: { rotateY: 0, opacity: 1, scale: 1 },
    exit: { rotateY: -75, opacity: 0, scale: 0.92 }
  },
  {
    name: "zoomRotate",
    initial: { scale: 0.88, rotate: -3, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 1.06, rotate: 3, opacity: 0 }
  }
];

export default function BehancePage() {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0057FF";
    const timer = setTimeout(() => setContentReady(true), 2400);
    return () => {
      document.body.style.backgroundColor = prevBg;
      clearTimeout(timer);
    };
  }, []);

  // =========================================================================
  // 1. ASYMMETRIC BENTO GRID (ALL 36 ASSETS, DYNAMIC 6-SLOT MORPHING)
  // =========================================================================
  const [activeAssets, setActiveAssets] = useState<WorkAsset[]>([
    ALL_WORK_ASSETS[19], // Day & Night Mode
    ALL_WORK_ASSETS[0],  // Coffee Shop
    ALL_WORK_ASSETS[2],  // Medieval Tower
    ALL_WORK_ASSETS[33], // Rocket Logo
    ALL_WORK_ASSETS[21], // Earth
    ALL_WORK_ASSETS[1]   // iPhone Titanium
  ]);
  const [slotVariants, setSlotVariants] = useState<number[]>([0, 1, 2, 3, 4, 0]);
  const [isAutoTransitioning, setIsAutoTransitioning] = useState<boolean>(true);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  // Auto transition: pick 1-2 random slots every 1.8s unless a card is hovered
  useEffect(() => {
    if (!isAutoTransitioning || hoveredSlot !== null) return;

    const interval = setInterval(() => {
      const numToChange = Math.floor(Math.random() * 2) + 1; // 1 or 2 cards
      const slotCandidates = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
      const slotsToUpdate = slotCandidates.slice(0, numToChange);

      setActiveAssets((prev) => {
        const next = [...prev];
        const currentFiles = next.map((a) => a.file);

        slotsToUpdate.forEach((slotIdx) => {
          const available = ALL_WORK_ASSETS.filter((a) => !currentFiles.includes(a.file));
          if (available.length > 0) {
            const chosen = available[Math.floor(Math.random() * available.length)];
            next[slotIdx] = chosen;
            currentFiles[slotIdx] = chosen.file;
          }
        });
        return next;
      });

      setSlotVariants((prevVars) => {
        const nextVars = [...prevVars];
        slotsToUpdate.forEach((slotIdx) => {
          nextVars[slotIdx] = Math.floor(Math.random() * CARD_TRANSITIONS.length);
        });
        return nextVars;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isAutoTransitioning, hoveredSlot]);

  const shuffleSlot = (slotIdx: number) => {
    playPop();
    setActiveAssets((prev) => {
      const next = [...prev];
      const currentFiles = next.map((a) => a.file);
      const available = ALL_WORK_ASSETS.filter((a) => !currentFiles.includes(a.file));
      if (available.length > 0) {
        next[slotIdx] = available[Math.floor(Math.random() * available.length)];
      }
      return next;
    });
    setSlotVariants((prev) => {
      const updated = [...prev];
      updated[slotIdx] = (updated[slotIdx] + 1) % CARD_TRANSITIONS.length;
      return updated;
    });
  };

  // Eagerly pre-cache all 36 work assets so shuffles are instantaneous with zero blank flash
  useEffect(() => {
    if (typeof window !== "undefined") {
      ALL_WORK_ASSETS.forEach((asset) => {
        const img = new Image();
        img.src = `/media/work/${asset.file}`;
      });
    }
  }, []);

  const shuffleAllSlots = () => {
    playSuccess();
    const shuffled = [...ALL_WORK_ASSETS].sort(() => Math.random() - 0.5);
    setActiveAssets(shuffled.slice(0, 6));
    setSlotVariants([0, 1, 2, 3, 4, 5].map(() => Math.floor(Math.random() * CARD_TRANSITIONS.length)));
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

  const handleTestMatch = () => {
    if (matchPercentage >= 85) {
      playSuccess();
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setGameScore((prev) => prev + matchPercentage * 10 * nextStreak);
      setMatchStatus(`PERFECT MATCH! ✦ ${matchPercentage}%`);

      setTimeout(() => {
        generateNewTarget();
      }, 1500);
    } else {
      playPop();
      setStreak(0);
      setMatchStatus(`Match is ${matchPercentage}%. Keep tweaking!`);
    }
  };

  const { justify, items } = getFlexAlignClasses();

  return (
    <div className="min-h-screen bg-[#0057FF] text-white selection:bg-white selection:text-[#0057FF] pb-28 relative overflow-x-hidden">
      {/* 3-SECOND BLUE PAINT BUCKET LIQUID FILL TRANSITION SCREEN */}
      <SpaceTransition variant="behance" duration={2800} />

      {/* Floating Autonomous Doodles in Space */}
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
        {/* 1. TOP EDITORIAL STATUS & QUICK NAVIGATION BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/20 pb-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="font-bold text-white tracking-tight uppercase">
              SPACE 02 // BEHANCE
            </span>
            <span className="hidden sm:inline text-white/40">/</span>
            <span className="hidden sm:inline text-white/80">
              3D RENDERS ✦ VISUAL ARTS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <StarburstBadge text="Blender 4.2 OptiX" bgColor="#CCFF00" />
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0057FF] border border-white/25 transition-all text-[11px] font-mono font-bold group"
            >
              <span>PORTFOLIO</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO SECTION: Compact & Clean */}
        {/* ========================================================================= */}
        <section className="space-y-3.5 relative max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4CC] border border-amber-300 text-xs font-mono font-bold text-black shadow-xs">
            <span>Visual Design &amp; 3D Lab</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Visual Explorations{" "}
            <span className="font-serif italic font-normal text-[#FFF4CC]">&amp;</span>{" "}
            3D Lab
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 max-w-lg leading-relaxed font-sans">
            A curated space for 3D models, procedural shaders, and interactive design experiments.
          </p>

          <div className="pt-1">
            <MagneticButton pullStrength={0.35}>
              <a
                href="https://www.behance.net/1c5da35f"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSuccess()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0057FF] text-xs font-mono font-extrabold tracking-wide transition-all shadow-md hover:bg-neutral-100 active:translate-y-0.5 group"
              >
                <span>VIEW FULL BEHANCE PROFILE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 01: TRUE ASYMMETRIC BENTO GRID SHOWCASE (FOCUSCARDS ON HOVER) */}
        {/* ========================================================================= */}
        <section className="space-y-5 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Visual Artwork Bento Showcase
                </h2>
              </div>
              <p className="text-xs text-blue-100">
                1-2 cards morph randomly every 1.8s. Hover any card to pause and focus (blurs the others). Click any card to shuffle!
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => {
                  playPop();
                  setIsAutoTransitioning(!isAutoTransitioning);
                }}
                className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono font-bold transition-all cursor-pointer ${
                  isAutoTransitioning
                    ? "bg-[#CCFF00] text-black border-black/20"
                    : "bg-white/10 border-white/25 text-white"
                }`}
              >
                {isAutoTransitioning ? "AUTO-MORPH: ON" : "AUTO-MORPH: PAUSED"}
              </button>

              <button
                onClick={shuffleAllSlots}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#0057FF] font-mono font-bold text-xs shadow-md hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Shuffle all 6 slots"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle All</span>
              </button>
            </div>
          </div>

          {/* ASYMMETRIC BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Card 0: Top-Left Tall Feature Card (Col 1-5, spans height) */}
            <BentoFocusSlot
              slotIndex={0}
              asset={activeAssets[0]}
              variant={CARD_TRANSITIONS[slotVariants[0]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-5 h-[290px] sm:h-[390px] md:h-[490px]"
              onShuffle={() => shuffleSlot(0)}
            />

            {/* Right Subgrid (Col 6-12) containing Card 1, 2, 3 */}
            <div className="col-span-1 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: Top-Right Wide Card */}
              <BentoFocusSlot
                slotIndex={1}
                asset={activeAssets[1]}
                variant={CARD_TRANSITIONS[slotVariants[1]]}
                hoveredSlot={hoveredSlot}
                setHoveredSlot={setHoveredSlot}
                className="col-span-1 sm:col-span-2 h-[190px] sm:h-[230px] md:h-[235px]"
                onShuffle={() => shuffleSlot(1)}
              />

              {/* Card 2: Mid-Center Compact Tile */}
              <BentoFocusSlot
                slotIndex={2}
                asset={activeAssets[2]}
                variant={CARD_TRANSITIONS[slotVariants[2]]}
                hoveredSlot={hoveredSlot}
                setHoveredSlot={setHoveredSlot}
                className="col-span-1 h-[190px] sm:h-[230px] md:h-[235px]"
                onShuffle={() => shuffleSlot(2)}
              />

              {/* Card 3: Mid-Right Compact Tile */}
              <BentoFocusSlot
                slotIndex={3}
                asset={activeAssets[3]}
                variant={CARD_TRANSITIONS[slotVariants[3]]}
                hoveredSlot={hoveredSlot}
                setHoveredSlot={setHoveredSlot}
                className="col-span-1 h-[190px] sm:h-[230px] md:h-[235px]"
                onShuffle={() => shuffleSlot(3)}
              />
            </div>

            {/* Row 3: Card 4 (Bottom-Left Wide) & Card 5 (Bottom-Right Wide) */}
            <BentoFocusSlot
              slotIndex={4}
              asset={activeAssets[4]}
              variant={CARD_TRANSITIONS[slotVariants[4]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-6 h-[210px] sm:h-[270px] md:h-[310px]"
              onShuffle={() => shuffleSlot(4)}
            />

            <BentoFocusSlot
              slotIndex={5}
              asset={activeAssets[5]}
              variant={CARD_TRANSITIONS[slotVariants[5]]}
              hoveredSlot={hoveredSlot}
              setHoveredSlot={setHoveredSlot}
              className="col-span-1 md:col-span-6 h-[210px] sm:h-[270px] md:h-[310px]"
              onShuffle={() => shuffleSlot(5)}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 02: FIGMA AUTO LAYOUT STUDIO (RESPONSIVE ON MOBILE) */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="space-y-1 pb-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                EXHIBIT 02
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                Figma Auto Layout Studio Engine
              </h2>
            </div>
            <p className="text-xs text-blue-100">
              Interactive replica of Figma&apos;s auto-layout sidebar. Adjust 9-point alignment, gap, flow &amp; padding to see live layout responses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
            {/* Corner Tape Accent */}
            <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-8" />

            {/* LEFT COLUMN: THE FIGMA AUTO LAYOUT SIDEBAR */}
            <div className="lg:col-span-4 bg-[#1E1E1E] text-white rounded-2xl border border-neutral-700 p-4 shadow-xl space-y-4 font-sans select-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-bold tracking-tight text-white">Auto Layout</span>
                <div className="w-6 h-6 rounded bg-[#2C2C2C] flex items-center justify-center text-neutral-400">
                  <Box className="w-3.5 h-3.5 text-[#0057FF]" />
                </div>
              </div>

              {/* FLOW SECTION */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                  Direction / Flow
                </label>
                <div className="grid grid-cols-4 bg-[#121212] p-1 rounded-xl border border-neutral-800">
                  <button
                    onClick={() => { playPop(); setFlow("wrap"); }}
                    className={`py-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      flow === "wrap" ? "bg-[#2C2C2C] text-white shadow-xs font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                    title="Wrap"
                  >
                    <span className="text-xs font-mono font-bold">☵</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("column"); }}
                    className={`py-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      flow === "column" ? "bg-[#2C2C2C] text-white shadow-xs font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                    title="Vertical Stack"
                  >
                    <span className="text-xs font-mono font-bold">↓</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("row"); }}
                    className={`py-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      flow === "row" ? "bg-[#2C2C2C] text-white shadow-xs font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                    title="Horizontal Stack"
                  >
                    <span className="text-xs font-mono font-bold">→</span>
                  </button>

                  <button
                    onClick={() => { playPop(); setFlow("grid"); }}
                    className={`py-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                      flow === "grid" ? "bg-[#2C2C2C] text-white shadow-xs font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                    title="Grid Layout"
                  >
                    <Grid className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* RESIZING SECTION */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                  Resizing
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      playPop();
                      setWidthMode((prev) => (prev === "Fill" ? "Hug" : prev === "Hug" ? "Fixed" : "Fill"));
                    }}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#2C2C2C] hover:bg-[#383838] border border-neutral-700 text-xs transition-colors cursor-pointer"
                  >
                    <span className="text-neutral-400 font-mono">W</span>
                    <span className="font-semibold text-white">{widthMode}</span>
                  </button>

                  <button
                    onClick={() => {
                      playPop();
                      setHeightMode((prev) => (prev === "Hug" ? "Fill" : prev === "Fill" ? "Fixed" : "Hug"));
                    }}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#2C2C2C] hover:bg-[#383838] border border-neutral-700 text-xs transition-colors cursor-pointer"
                  >
                    <span className="text-neutral-400 font-mono">H</span>
                    <span className="font-semibold text-white">{heightMode}</span>
                  </button>
                </div>
              </div>

              {/* ALIGNMENT (3x3 9-POINT GRID) & GAP */}
              <div className="grid grid-cols-2 gap-3 items-start">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                    Alignment Matrix
                  </label>
                  <div className="bg-[#121212] p-2 rounded-xl border border-neutral-800 grid grid-cols-3 gap-1.5 w-full max-w-[120px] aspect-square place-items-center">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dotIdx) => {
                      const isSelected = alignment === dotIdx;
                      return (
                        <button
                          key={dotIdx}
                          onClick={() => {
                            playFigmaClick();
                            setAlignment(dotIdx);
                          }}
                          className={`w-6 h-6 rounded-md flex items-center justify-center transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0057FF] ring-2 ring-[#0057FF]/60 scale-110 shadow-xs"
                              : "hover:bg-[#2C2C2C]"
                          }`}
                          title={`Align dot ${dotIdx}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? "bg-white" : "bg-neutral-500"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                    Item Gap
                  </label>
                  <div className="flex items-center justify-between bg-[#2C2C2C] border border-neutral-700 rounded-xl px-2.5 py-2">
                    <span className="text-[10px] text-neutral-400 font-mono">)- (</span>
                    <span className="text-xs font-mono font-bold text-white">{gap}px</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setGap((g) => Math.min(32, g + 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setGap((g) => Math.max(0, g - 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PADDING CONTROLS */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">
                  Padding (X / Y)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-[#2C2C2C] border border-neutral-700 rounded-xl px-2.5 py-1.5">
                    <span className="text-[10px] text-neutral-400 font-mono">[]</span>
                    <span className="text-xs font-mono font-bold text-white">{padX}</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setPadX((p) => Math.min(32, p + 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setPadX((p) => Math.max(0, p - 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▼
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#2C2C2C] border border-neutral-700 rounded-xl px-2.5 py-1.5">
                    <span className="text-[10px] text-neutral-400 font-mono">≡</span>
                    <span className="text-xs font-mono font-bold text-white">{padY}</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        onClick={() => { playPop(); setPadY((p) => Math.min(32, p + 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => { playPop(); setPadY((p) => Math.max(0, p - 4)); }}
                        className="text-[9px] text-neutral-400 hover:text-white leading-none p-0.5 cursor-pointer"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CLIP CONTENT */}
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="clip-content"
                    checked={clipContent}
                    onChange={(e) => {
                      playPop();
                      setClipContent(e.target.checked);
                    }}
                    className="rounded border-neutral-700 text-[#0057FF] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="clip-content" className="text-xs text-white cursor-pointer select-none">
                    Clip content
                  </label>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">overflow: {clipContent ? "hidden" : "visible"}</span>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE CANVAS (RESPONSIVE CHIPS) */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-[#FAF8F5] text-black rounded-2xl p-4 sm:p-6 shadow-inner border border-neutral-300 overflow-hidden min-h-[340px]">
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200 text-[10px] sm:text-xs text-neutral-500 font-mono">
                <span className="font-bold text-black">&lt;AutoLayoutFrame /&gt;</span>
                <span className="hidden sm:inline">
                  Flow: {flow.toUpperCase()} | Gap: {gap}px | Pad: {padX}px
                </span>
              </div>

              <div className="flex-1 my-4 overflow-x-auto">
                <motion.div
                  layout
                  style={{
                    gap: `${gap}px`,
                    padding: `${padY}px ${padX}px`,
                    overflow: clipContent ? "hidden" : "visible"
                  }}
                  className={`min-h-[220px] h-full rounded-2xl border-2 border-dashed border-[#0057FF]/40 bg-white flex ${
                    flow === "column" ? "flex-col" : flow === "wrap" ? "flex-wrap" : flow === "grid" ? "grid grid-cols-2" : "flex-row"
                  } ${justify} ${items} transition-all duration-300 relative shadow-2xs`}
                >
                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => playPop()}
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-[#0057FF] text-white shadow-xs flex items-center gap-1.5 text-xs font-bold cursor-grab active:cursor-grabbing"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>Primary CTA</span>
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => playPop()}
                    className="shrink-0 px-3 py-2 rounded-xl bg-neutral-100 border border-neutral-300 text-black shadow-2xs flex items-center gap-2 text-xs font-medium cursor-grab active:cursor-grabbing"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E65100] text-white flex items-center justify-center text-[10px] font-bold">
                      AK
                    </div>
                    <span>Avatar Token</span>
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => playPop()}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[#FFF4CC] border border-amber-300 text-amber-950 text-[10px] font-mono font-bold cursor-grab active:cursor-grabbing"
                  >
                    PRO 2026 ✦
                  </motion.div>

                  <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    onClick={() => playPop()}
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-black text-white text-xs font-medium shadow-xs flex items-center gap-1.5 cursor-grab active:cursor-grabbing"
                  >
                    <Box className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>3D Mesh Node</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Align: {["Top-Left", "Top-Center", "Top-Right", "Mid-Left", "Center", "Mid-Right", "Bottom-Left", "Bottom-Center", "Bottom-Right"][alignment]}</span>
                <span className="text-[#0057FF] font-bold">Click any dot in the alignment grid ↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 03: BLENDER 3D DONUT TURNAROUND STUDIO */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="space-y-1 pb-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                EXHIBIT 03
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                Blender 3D Donut Turntable Studio
              </h2>
            </div>
            <p className="text-xs text-blue-100">
              Cycles 4.2 OptiX denoise surface scattering, chocolate icing procedural drip turntable with real-time speed &amp; playback controls.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/25 shadow-2xl flex items-center justify-center group">
              <video
                ref={videoRef}
                src="/media/donut-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />

              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white shadow-md">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Cycles 4.2 • OptiX</span>
              </div>

              <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-[#CCFF00] font-bold shadow-md">
                {playbackSpeed}x SPEED
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVideoPlayback}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#0057FF] font-mono font-bold text-xs shadow-md hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isVideoPlaying ? "PAUSE" : "PLAY"}</span>
                </button>

                <button
                  onClick={resetVideo}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
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
                    className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      playbackSpeed === speed
                        ? "bg-[#CCFF00] text-black shadow-xs"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 04: COLOR ALCHEMIST MINIGAME */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Color Alchemist HSL Laboratory
                </h2>
              </div>
              <p className="text-xs text-blue-100">
                Tune Hue, Saturation &amp; Lightness to match the mystery color swatch.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-white">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>Score: {gameScore}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-amber-300">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Streak: {streak}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 font-bold">
                  Target Swatch
                </span>
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-xl border-4 border-white transition-colors duration-300"
                  style={{
                    backgroundColor: `hsl(${targetColor.h}, ${targetColor.s}%, ${targetColor.l}%)`
                  }}
                />
                <span className="text-[11px] font-mono text-white/70">
                  {showHint ? `H: ${targetColor.h}° | S: ${targetColor.s}% | L: ${targetColor.l}%` : "Mystery HSL"}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2.5">
                <div className="relative w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center bg-white/15 backdrop-blur-md">
                  <span className="text-xl font-extrabold font-mono text-white">
                    {matchPercentage}%
                  </span>
                  <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#CCFF00] text-black text-[9px] font-bold font-mono tracking-wider uppercase shadow-xs">
                    Match
                  </span>
                </div>

                {matchStatus && (
                  <div className="text-center font-bold font-mono text-xs px-3.5 py-1 rounded-full bg-white text-[#0057FF] shadow-md animate-bounce">
                    {matchStatus}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 font-bold">
                  Your Blend
                </span>
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-xl border-4 border-white transition-colors duration-150"
                  style={{
                    backgroundColor: `hsl(${userColor.h}, ${userColor.s}%, ${userColor.l}%)`
                  }}
                />
                <span className="text-[11px] font-mono text-white">
                  H: {userColor.h}° | S: {userColor.s}% | L: {userColor.l}%
                </span>
              </div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/20">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Hue (Color Angle)</span>
                  <span className="font-bold text-[#CCFF00]">{userColor.h}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={userColor.h}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, h: Number(e.target.value) }))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Saturation (Vibrancy)</span>
                  <span className="font-bold text-[#CCFF00]">{userColor.s}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={userColor.s}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, s: Number(e.target.value) }))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-white/20 accent-[#CCFF00]"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>Lightness (Brightness)</span>
                  <span className="font-bold text-[#CCFF00]">{userColor.l}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={userColor.l}
                  onChange={(e) => setUserColor((prev) => ({ ...prev, l: Number(e.target.value) }))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-white/20 accent-[#CCFF00]"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { playPop(); setShowHint(!showHint); }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-mono transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>{showHint ? "Hide Hint" : "Hint"}</span>
                </button>

                <button
                  onClick={generateNewTarget}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-mono transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Swatch</span>
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleTestMatch}
                className="px-6 py-2.5 rounded-xl bg-white text-[#0057FF] font-mono font-extrabold text-xs shadow-lg hover:bg-neutral-100 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0057FF]" />
                <span>TEST MATCH (&gt;= 85%)</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. EDITORIAL FOOTER & QUICK DOCK RETURN */}
        {/* ========================================================================= */}
        <footer className="pt-10 border-t border-white/20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/80">
            <span>Aditya Kumar • Visual Design &amp; 3D Modeling Laboratory</span>
          </div>

          <div>
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0057FF] hover:bg-neutral-100 text-xs font-mono font-bold transition-all shadow-md active:translate-y-0.5 group"
            >
              <span>← RETURN TO PORTFOLIO HOME</span>
            </Link>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

// =========================================================================
// BENTO FOCUS SLOT: ACETERNITY FOCUSCARDS (HOVER ELEVATES & DIMS/BLURS OTHERS)
// =========================================================================
interface BentoFocusSlotProps {
  slotIndex: number;
  asset: WorkAsset;
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
      onMouseEnter={() => {
        playHoverTick();
        setHoveredSlot(slotIndex);
      }}
      onMouseLeave={() => setHoveredSlot(null)}
      animate={{
        y: isHovered ? -6 : 0,
        filter: isBlurred ? "blur(5px)" : "blur(0px)",
        opacity: isBlurred ? 0.35 : 1
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl cursor-pointer select-none transition-shadow duration-300 ${
        isHovered
          ? "shadow-[0_25px_50px_rgba(0,0,0,0.5)] ring-3 ring-white z-30"
          : "z-10 ring-1 ring-white/20 shadow-lg"
      } ${className}`}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={asset.file}
          initial={variant.initial}
          animate={variant.animate}
          exit={variant.exit}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={onShuffle}
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#0047D4] border border-white/25 flex items-center justify-center group"
        >
          {/* Pure Artwork Image Only */}
          <img
            src={`/media/work/${asset.file}`}
            alt={asset.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
            decoding="async"
          />

          {/* Subtle Corner Shuffle Indicator on Hover */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white text-[#0057FF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            <Shuffle className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
