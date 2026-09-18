"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { playPop, playFigmaClick } from "@/utils/soundEffects";

interface DockItem {
  id: string;
  name: string;
  subtitle: string;
  externalUrl: string;
  accent: string;
  cardBg: string;
  border: string;
  tag: string;
  iconSvg: React.ReactNode;
  highlights: string[];
}

const DOCK_ITEMS: DockItem[] = [
  {
    id: "behance",
    name: "Behance",
    subtitle: "3D Blender visual compositions, graphic identity, and poster series.",
    externalUrl: "https://www.behance.net/1c5da35f",
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
  const [activeItem, setActiveItem] = useState<DockItem | null>(null);

  const handleIconClick = (item: DockItem) => {
    playFigmaClick();
    if (activeItem?.id === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  return (
    <>
      {/* Floating Dock: Bottom Center on Viewport */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 p-2 rounded-2xl bg-[#f5f2f0]/95 backdrop-blur-xl border border-[#e5e2de] shadow-xl hover:border-black/20 transition-all"
        >
          <span className="text-[10px] font-mono text-[#757575] px-2 uppercase tracking-wider hidden sm:inline">
            Spaces
          </span>

          {DOCK_ITEMS.map((item) => {
            const isSelected = activeItem?.id === item.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{
                  scale: 1.2,
                  y: -6,
                  boxShadow: `0 12px 24px -4px ${item.accent}50`
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 450, damping: 22 }}
                onClick={() => handleIconClick(item)}
                className={`relative group w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  isSelected
                    ? "bg-white shadow-lg border-2"
                    : "bg-white/90 hover:bg-white border border-[#e5e2de]"
                }`}
                style={{ borderColor: isSelected ? item.accent : undefined }}
                title={`Open ${item.name} Space`}
              >
                <div className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                  {item.iconSvg}
                </div>

                {/* Floating mini brand tooltip */}
                <span
                  className="pointer-events-none absolute -top-8 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.name}
                </span>

                {isSelected && (
                  <span
                    className="w-1.5 h-1.5 rounded-full absolute -bottom-1"
                    style={{ backgroundColor: item.accent }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Expandable Trailer Modal Sheet */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-white overflow-hidden border"
              style={{
                backgroundColor: activeItem.cardBg,
                borderColor: activeItem.border
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/10"
                    style={{ color: activeItem.accent }}
                  >
                    {activeItem.iconSvg}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{activeItem.name}</h3>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: activeItem.accent }}
                    >
                      {activeItem.tag}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                {activeItem.subtitle}
              </p>

              {/* Showcase Highlights Pills */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                  Featured Exhibits
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {activeItem.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono flex items-center justify-between"
                    >
                      <span>{h}</span>
                      <span className="text-[10px] text-white/40">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Launch External Link CTA */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-white/60">
                  Direct external space
                </span>

                <a
                  href={activeItem.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  style={{ backgroundColor: activeItem.accent }}
                >
                  <span>Launch {activeItem.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
