"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Volume2, VolumeX, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { playPop, playSuccess } from "@/utils/soundEffects";

export function DesignerPlayground() {
  const [inspectMode, setInspectMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const triggerDesignerBurst = (e: React.MouseEvent) => {
    playSuccess();
    setClickCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ["#0057FF", "#10B981", "#6864F6", "#4a5d4e", "#F24E1E", "#FF7262"]
    });
  };

  const toggleInspect = () => {
    playPop();
    const next = !inspectMode;
    setInspectMode(next);
    if (next) {
      document.body.classList.add("designer-inspect-active");
    } else {
      document.body.classList.remove("designer-inspect-active");
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 select-none">
      {/* Easter Egg Trigger Pill */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#f5f2f0]/90 backdrop-blur-md border border-[#e5e2de] shadow-sm hover:shadow-md transition-all text-xs font-mono"
      >
        {/* Confetti / High-Five Button */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={triggerDesignerBurst}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-[#edeae7] border border-[#e5e2de] text-black font-medium transition-colors"
          title="Drop designer confetti!"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span className="text-[11px] hidden sm:inline">Inspire</span>
          {clickCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black text-white font-bold">
              {clickCount}
            </span>
          )}
        </motion.button>

        {/* Figma Inspect Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleInspect}
          className={`px-2 py-1 rounded-full border text-[11px] font-medium transition-all flex items-center gap-1 ${
            inspectMode
              ? "bg-[#0057FF] text-white border-[#0057FF] shadow-xs"
              : "bg-white hover:bg-[#edeae7] text-[#757575] border-[#e5e2de]"
          }`}
          title={inspectMode ? "Disable Figma Inspect mode" : "Enable Figma Inspect mode"}
        >
          <Eye className="w-3 h-3" />
          <span className="hidden sm:inline">{inspectMode ? "Inspect: ON" : "Inspect"}</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
