"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, Copy, Check, Ruler, Palette, Type } from "lucide-react";
import confetti from "canvas-confetti";
import { playPop, playSuccess } from "@/utils/soundEffects";

interface ElementInfo {
  tag: string;
  width: number;
  height: number;
  top: number;
  left: number;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  borderRadius: string;
  padding: string;
}

export function DesignerPlayground() {
  const [inspectMode, setInspectMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
  const [hoveredTag, setHoveredTag] = useState<string>("");
  const [selectedElement, setSelectedElement] = useState<ElementInfo | null>(null);
  const [copied, setCopied] = useState(false);

  // Trigger confetti burst
  const triggerDesignerBurst = (e: React.MouseEvent) => {
    playSuccess();
    setClickCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ["#0057FF", "#10B981", "#6864F6", "#4a5d4e", "#F24E1E", "#FF7262"]
    });
  };

  // Toggle Inspect Mode
  const toggleInspect = () => {
    playPop();
    const next = !inspectMode;
    setInspectMode(next);
    if (!next) {
      setHoveredRect(null);
      setSelectedElement(null);
      document.body.classList.remove("designer-inspect-active");
    } else {
      document.body.classList.add("designer-inspect-active");
    }
  };

  // Inspect mouse tracking and click inspection
  useEffect(() => {
    if (!inspectMode) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || target.closest(".figma-inspector-panel") || target.closest(".designer-playground-pill")) {
        return;
      }
      const rect = target.getBoundingClientRect();
      setHoveredRect(rect);
      setHoveredTag(target.tagName.toLowerCase());
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || target.closest(".figma-inspector-panel") || target.closest(".designer-playground-pill")) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      playPop();

      const computed = window.getComputedStyle(target);
      const rect = target.getBoundingClientRect();

      setSelectedElement({
        tag: target.tagName.toLowerCase(),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        fontFamily: computed.fontFamily.split(",")[0].replace(/['"]/g, ""),
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        borderRadius: computed.borderRadius,
        padding: computed.padding
      });
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick, true);
    };
  }, [inspectMode]);

  const copyCSS = () => {
    if (!selectedElement) return;
    const css = `/* Figma Inspect - <${selectedElement.tag}> */
width: ${selectedElement.width}px;
height: ${selectedElement.height}px;
font-family: ${selectedElement.fontFamily};
font-size: ${selectedElement.fontSize};
font-weight: ${selectedElement.fontWeight};
color: ${selectedElement.color};
background-color: ${selectedElement.backgroundColor};
border-radius: ${selectedElement.borderRadius};
padding: ${selectedElement.padding};`;

    navigator.clipboard.writeText(css);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Designer Easter Egg Trigger Pill (Hidden on mobile < lg so it NEVER overlaps mobile header menu) */}
      <div className="hidden lg:flex fixed top-4 right-4 z-50 items-center gap-2 select-none designer-playground-pill">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#f5f2f0]/95 backdrop-blur-md border border-[#e5e2de] shadow-sm hover:shadow-md transition-all text-xs font-mono"
        >
          {/* Inspire Confetti Button */}
          <motion.button
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.92 }}
            onClick={triggerDesignerBurst}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-[#edeae7] border border-[#e5e2de] text-black font-medium transition-colors"
            title="Drop designer confetti!"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="text-[11px]">Inspire</span>
            {clickCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black text-white font-bold">
                {clickCount}
              </span>
            )}
          </motion.button>

          {/* Figma Inspect Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleInspect}
            className={`px-3 py-1 rounded-full border text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              inspectMode
                ? "bg-[#0057FF] text-white border-[#0057FF] shadow-md ring-2 ring-[#0057FF]/30"
                : "bg-white hover:bg-[#edeae7] text-[#757575] border-[#e5e2de]"
            }`}
            title={inspectMode ? "Click to exit Inspect Mode" : "Click to inspect like in Figma!"}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{inspectMode ? "Inspect: ON" : "Figma Inspect"}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Real-time Figma Hover Selection Box & Dimension Pill */}
      {inspectMode && hoveredRect && !selectedElement && (
        <div
          className="pointer-events-none fixed z-40 border-2 border-[#0057FF] bg-[#0057FF]/10 transition-all duration-75"
          style={{
            top: hoveredRect.top,
            left: hoveredRect.left,
            width: hoveredRect.width,
            height: hoveredRect.height
          }}
        >
          {/* Top-left dimension pill badge (Figma style) */}
          <div className="absolute -top-6 left-0 bg-[#0057FF] text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-md whitespace-nowrap">
            &lt;{hoveredTag}&gt; {Math.round(hoveredRect.width)} × {Math.round(hoveredRect.height)}px
          </div>

          {/* 4 Corner resize handles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#0057FF]" />
        </div>
      )}

      {/* Selected Element Pinned Figma Inspection Window */}
      <AnimatePresence>
        {inspectMode && selectedElement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="figma-inspector-panel fixed bottom-6 right-6 z-50 w-80 rounded-2xl bg-[#1e1e1e] text-white border border-[#333] shadow-2xl p-4 font-mono text-xs space-y-3 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#333]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0057FF]" />
                <span className="font-bold text-[#0057FF]">Figma Dev Mode</span>
                <span className="text-[10px] text-[#888]">&lt;{selectedElement.tag}&gt;</span>
              </div>
              <button
                onClick={() => setSelectedElement(null)}
                className="p-1 rounded-md hover:bg-[#333] text-[#aaa] hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-2 gap-2 p-2 rounded-xl bg-[#282828]">
              <div>
                <span className="text-[10px] text-[#888] block">WIDTH</span>
                <span className="font-semibold text-white">{selectedElement.width}px</span>
              </div>
              <div>
                <span className="text-[10px] text-[#888] block">HEIGHT</span>
                <span className="font-semibold text-white">{selectedElement.height}px</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-1 p-2 rounded-xl bg-[#282828]">
              <div className="flex items-center gap-1.5 text-[10px] text-[#888]">
                <Type className="w-3 h-3" />
                <span>TYPOGRAPHY</span>
              </div>
              <div className="text-xs text-white">
                {selectedElement.fontFamily} • {selectedElement.fontSize} ({selectedElement.fontWeight})
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-1.5 p-2 rounded-xl bg-[#282828]">
              <div className="flex items-center gap-1.5 text-[10px] text-[#888]">
                <Palette className="w-3 h-3" />
                <span>COLORS</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#aaa]">Text:</span>
                <span className="text-white truncate max-w-[150px]">{selectedElement.color}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#aaa]">Bg:</span>
                <span className="text-white truncate max-w-[150px]">{selectedElement.backgroundColor}</span>
              </div>
            </div>

            {/* Box Model: Radius & Padding */}
            <div className="flex items-center justify-between text-[11px] px-1 text-[#aaa]">
              <span>Radius: <strong className="text-white">{selectedElement.borderRadius}</strong></span>
              <span>Padding: <strong className="text-white">{selectedElement.padding}</strong></span>
            </div>

            {/* Copy CSS CTA */}
            <button
              onClick={copyCSS}
              className="w-full py-2 rounded-xl bg-[#0057FF] hover:bg-[#0047d4] text-white font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "CSS Copied!" : "Copy CSS Attributes"}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
