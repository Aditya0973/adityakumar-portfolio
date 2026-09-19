"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight, Home } from "lucide-react";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";

interface DockItem {
  id: string;
  name: string;
  subtitle: string;
  externalUrl: string;
  internalUrl?: string;
  accent: string;
  cardBg: string;
  border: string;
  tag: string;
  iconSvg: React.ReactNode;
  highlights: string[];
}

const DOCK_ITEMS: DockItem[] = [
  {
    id: "home",
    name: "Portfolio Home",
    subtitle: "Return to main designer portfolio.",
    externalUrl: "/",
    internalUrl: "/",
    accent: "#334237",
    cardBg: "#e9e6e2",
    border: "#d8d3cd",
    tag: "Home",
    iconSvg: <Home className="w-5 h-5 text-[#334237]" />,
    highlights: ["Interactive Portfolio", "Case Studies", "Designer Inspect"]
  },
  {
    id: "behance",
    name: "Behance",
    subtitle: "3D Blender visual compositions, graphic identity, and poster series.",
    externalUrl: "https://www.behance.net/1c5da35f",
    internalUrl: "/behance",
    accent: "#0057FF", // Exact Behance Royal Blue
    cardBg: "#060913",
    border: "#1d293d",
    tag: "Visual Design & 3D",
    iconSvg: (
      <img
        src="/icons/behance.svg"
        alt="Behance"
        className="w-5 h-5 object-contain"
      />
    ),
    highlights: ["3D Isometric Airport", "Titanium iPhone 3D", "Coffee Shop Modeling"]
  },
  {
    id: "github",
    name: "GitHub",
    subtitle: "Open-source development repositories, code playgrounds, and engineering.",
    externalUrl: "https://github.com/Aditya0973",
    internalUrl: "/github",
    accent: "#10B981", // GitHub Emerald
    cardBg: "#0d1117",
    border: "#30363d",
    tag: "Code & Open Source",
    iconSvg: (
      <img
        src="/icons/github.svg"
        alt="GitHub"
        className="w-5 h-5 object-contain"
      />
    ),
    highlights: ["35+ Clean Ecosystem Repos", "Interactive Next.js Apps", "Automated Pipelines"]
  },
  {
    id: "crafted",
    name: "Crafted Co.",
    subtitle: "Software studio creating high-fidelity cross-platform digital products.",
    externalUrl: "https://crafted-co.vercel.app",
    internalUrl: "/crafted",
    accent: "#6864F6", // Crafted Co Purple
    cardBg: "#1b1515",
    border: "#3a2c2c",
    tag: "Studio Suite",
    iconSvg: (
      <img
        src="/icons/crafted.svg"
        alt="Crafted Co."
        className="w-6 h-6 object-contain"
      />
    ),
    highlights: ["Craftnime Streaming Client", "Music Player High-Fi", "Crafted Store Hub"]
  }
];

export function InteractiveDock() {
  const router = useRouter();
  const [showHomeSplash, setShowHomeSplash] = useState(false);

  const handleIconClick = (item: DockItem) => {
    playFigmaClick();
    if (item.id === "home") {
      setShowHomeSplash(true);
      router.push("/");
      // Allow full 2.4s active time + 0.75s exit slide-up to complete smoothly
      setTimeout(() => setShowHomeSplash(false), 3600);
      return;
    }
    if (item.internalUrl) {
      router.push(item.internalUrl);
    } else {
      window.open(item.externalUrl, "_blank");
    }
  };

  return (
    <>
      {showHomeSplash && <SpaceTransition variant="portfolio" duration={2400} />}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
        {/* Mobile floating clarity badge */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 px-3 py-1 mb-1.5 rounded-full bg-[#1e2320] text-white text-[10px] font-mono font-medium shadow-lg mx-auto w-fit border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          <span>Tap to Enter In-App Spaces</span>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2.5 p-2 rounded-2xl bg-[#f5f2f0]/95 backdrop-blur-xl border border-[#e5e2de] shadow-xl hover:border-black/20 transition-all"
        >
        <span className="text-[10px] font-mono text-[#757575] px-2 uppercase tracking-wider hidden sm:inline">
          Spaces
        </span>

        {DOCK_ITEMS.map((item) => {
          // Playful tilt hover effects for each dock item (smooth, snappy, no 180 spinning)
          const hoverAnimation =
            item.id === "home"
              ? { y: -8, boxShadow: "0 16px 32px -4px rgba(51, 66, 55, 0.45)" }
              : item.id === "behance"
              ? { y: -8, rotate: -8, boxShadow: "0 16px 32px -4px rgba(0, 87, 255, 0.45)" }
              : item.id === "github"
              ? { y: -8, rotate: 8, boxShadow: "0 16px 32px -4px rgba(5, 150, 105, 0.45)" }
              : { y: -8, rotate: -6, boxShadow: "0 16px 32px -4px rgba(91, 80, 236, 0.45)" };

          return (
            <motion.button
              key={item.id}
              whileHover={hoverAnimation}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onClick={() => handleIconClick(item)}
              className="relative group w-12 h-12 rounded-2xl flex items-center justify-center transition-all bg-white/90 hover:bg-white border border-[#e5e2de]"
              title={`Open ${item.name} Space`}
            >
              <div className="transition-transform duration-300 flex items-center justify-center">
                {item.iconSvg}
              </div>

              {/* Desktop Floating mini brand tooltip */}
              <span
                className="pointer-events-none absolute -top-8 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap hidden sm:block"
                style={{ backgroundColor: item.accent }}
              >
                {item.id === "home"
                  ? "Portfolio Home ⌂"
                  : item.id === "behance"
                  ? "Enter Behance Space ✦"
                  : item.id === "github"
                  ? "Enter GitHub Space ⚡"
                  : "Enter Crafted Co Space ◈"}
              </span>
            </motion.button>
          );
        })}
        </motion.div>
      </div>
    </>
  );
}
