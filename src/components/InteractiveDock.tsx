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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0057FF]">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.268 0-5.5-2.226-5.5-5.5 0-3.321 2.29-5.5 5.5-5.5 3.322 0 5.253 2.378 5.074 5.75h-7.648c.08 1.488 1.116 2.5 2.574 2.5 1.096 0 1.954-.539 2.327-1.25h2.399zm-4.8-4.25c-.073-1.226-.849-2-2.1-2-1.196 0-2.001.764-2.148 2h4.248zM8.508 10.741c.885-.453 1.492-1.297 1.492-2.404 0-2.316-1.896-3.337-4.286-3.337H0v14h6.012c2.613 0 4.614-1.246 4.614-3.834 0-1.782-1.077-2.883-2.118-3.425v-.01c0 .01 0 0 0 .01zm-5.508-3.741h2.572c1.072 0 1.928.471 1.928 1.541 0 1.042-.856 1.529-1.928 1.529H3v-3.07zm2.784 9h-2.784v-3.4h2.884c1.242 0 2.116.516 2.116 1.7 0 1.213-.874 1.7-2.216 1.7z" />
      </svg>
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#f0f6fc]">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6864F6]">
        <path d="M12 3 Q12 12 21 12 Q12 12 12 21 Q12 12 3 12 Q12 12 12 3 Z" />
      </svg>
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
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                onClick={() => handleIconClick(item)}
                className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? "bg-white shadow-md border-2"
                    : "bg-white/80 hover:bg-white border border-[#e5e2de]"
                }`}
                style={{ borderColor: isSelected ? item.accent : undefined }}
                title={`Open ${item.name} Trailer`}
              >
                {item.iconSvg}
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
