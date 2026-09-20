"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, Copy, Check, Type, Palette, Box } from "lucide-react";
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
  colorHex: string;
  bgColorHex: string;
  borderRadius: string;
  padding: string;
}

// Universal color converter supporting oklab, oklch, rgba, rgb, hsl to #HEX
function colorToHex(colorStr: string): string {
  if (!colorStr || colorStr === "transparent" || colorStr === "rgba(0, 0, 0, 0)") return "transparent";
  if (colorStr.startsWith("#")) return colorStr.toUpperCase();

  // Try standard canvas color rasterizer (works for oklab, oklch, hsl, rgb, named colors)
  if (typeof document !== "undefined") {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        ctx.fillStyle = colorStr;
        ctx.fillRect(0, 0, 1, 1);
        const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
        const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
        if (a < 255) {
          const alphaPct = Math.round((a / 255) * 100);
          return `${hex} (${alphaPct}%)`;
        }
        return hex;
      }
    } catch {
      // fallback
    }
  }

  // Regex fallback for rgb / rgba
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (match) {
    const r = parseInt(match[1]).toString(16).padStart(2, "0");
    const g = parseInt(match[2]).toString(16).padStart(2, "0");
    const b = parseInt(match[3]).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`.toUpperCase();
  }

  return colorStr;
}

// Clean formatter for extreme float radius like 3.40282e38px or 9999px
function formatRadius(radius: string): string {
  if (!radius || radius === "0px") return "0px";
  const num = parseFloat(radius);
  if (num >= 999 || radius.includes("e+") || radius.includes("e38")) {
    return "Full Pill";
  }
  return radius;
}

export function DesignerPlayground() {
  const [inspectMode, setInspectMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
  const [hoveredTag, setHoveredTag] = useState<string>("");
  const [selectedElement, setSelectedElement] = useState<ElementInfo | null>(null);
  const [copied, setCopied] = useState(false);

  // Trigger inspire sound and increment idea counter
  const triggerDesignerBurst = (e: React.MouseEvent) => {
    playSuccess();
    setClickCount((prev) => prev + 1);
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
      if (
        !target ||
        target.closest(".figma-inspector-panel") ||
        target.closest(".designer-playground-pill") ||
        target.closest(".spaces-discovery-modal") ||
        target.closest("[data-no-inspect]")
      ) {
        return;
      }
      const rect = target.getBoundingClientRect();
      setHoveredRect(rect);
      setHoveredTag(target.tagName.toLowerCase());
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target ||
        target.closest(".figma-inspector-panel") ||
        target.closest(".designer-playground-pill") ||
        target.closest(".spaces-discovery-modal") ||
        target.closest("[data-no-inspect]")
      ) {
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
        colorHex: colorToHex(computed.color),
        bgColorHex: colorToHex(computed.backgroundColor),
        borderRadius: formatRadius(computed.borderRadius),
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
    const css = `/* Inspect - <${selectedElement.tag}> */
width: ${selectedElement.width}px;
height: ${selectedElement.height}px;
font-family: ${selectedElement.fontFamily};
font-size: ${selectedElement.fontSize};
font-weight: ${selectedElement.fontWeight};
color: ${selectedElement.colorHex};
background: ${selectedElement.bgColorHex};
border-radius: ${selectedElement.borderRadius};
padding: ${selectedElement.padding};`;

    navigator.clipboard.writeText(css);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top Left: Inspire Button (Desktop Only) */}
      <div className="hidden md:flex fixed top-4 left-4 sm:left-8 z-40 items-center select-none designer-playground-pill">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ rotate: -8, y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          onClick={triggerDesignerBurst}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-neutral-300/80 shadow-xs hover:border-[#E65100] text-black font-mono text-xs font-bold transition-all cursor-pointer"
          title="Inspire designer spark!"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
          <span>Inspire</span>
          {clickCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black text-white font-bold">
              {clickCount}
            </span>
          )}
        </motion.button>
      </div>

      {/* Top Right: Inspect Mode Toggle (Desktop Only) */}
      <div className="hidden md:flex fixed top-4 right-4 sm:right-8 z-40 items-center select-none designer-playground-pill">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.94 }}
          onClick={toggleInspect}
          className={`px-3.5 py-2 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-xs ${
            inspectMode
              ? "bg-[#0057FF] text-white border-[#0057FF] shadow-md ring-2 ring-[#0057FF]/30"
              : "bg-[#FAF8F5]/90 hover:bg-white text-neutral-700 border-neutral-300/80 hover:border-[#0057FF]"
          }`}
          title={inspectMode ? "Click to exit Inspect Mode" : "Click to inspect like a designer!"}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{inspectMode ? "Inspect: ON" : "Inspect"}</span>
        </motion.button>
      </div>

      {/* Real-time Hover Selection Box & Dimension Pill */}
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
          {/* Dimension pill */}
          <div className="absolute -top-6 left-0 bg-[#0057FF] text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-md whitespace-nowrap">
            &lt;{hoveredTag}&gt; {Math.round(hoveredRect.width)} × {Math.round(hoveredRect.height)}px
          </div>

          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#0057FF]" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#0057FF]" />
        </div>
      )}

      {/* Selected Element Pinned Warm Clay Inspection Window (Matches Site Aesthetic) */}
      <AnimatePresence>
        {inspectMode && selectedElement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="figma-inspector-panel fixed bottom-6 right-6 z-50 w-80 rounded-3xl bg-[#f5f2f0] text-black border border-[#e5e2de] shadow-2xl p-5 font-mono text-xs space-y-3.5 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e2de]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0057FF]" />
                <span className="font-bold text-black text-sm tracking-tight">Inspect</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#edeae7] text-[#757575]">
                  &lt;{selectedElement.tag}&gt;
                </span>
              </div>
              <button
                onClick={() => setSelectedElement(null)}
                className="p-1 rounded-full hover:bg-[#edeae7] text-[#757575] hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-2 gap-2 p-2.5 rounded-2xl bg-white border border-[#e5e2de] shadow-2xs">
              <div>
                <span className="text-[9px] text-[#757575] uppercase block font-semibold">WIDTH</span>
                <span className="font-bold text-black text-xs">{selectedElement.width}px</span>
              </div>
              <div>
                <span className="text-[9px] text-[#757575] uppercase block font-semibold">HEIGHT</span>
                <span className="font-bold text-black text-xs">{selectedElement.height}px</span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-1 p-2.5 rounded-2xl bg-white border border-[#e5e2de] shadow-2xs">
              <div className="flex items-center gap-1.5 text-[9px] text-[#757575] uppercase font-semibold">
                <Type className="w-3 h-3 text-[#0057FF]" />
                <span>TYPOGRAPHY</span>
              </div>
              <div className="text-xs text-black font-semibold">
                {selectedElement.fontFamily} • {selectedElement.fontSize}
              </div>
              <div className="text-[10px] text-[#757575]">
                Weight: {selectedElement.fontWeight}
              </div>
            </div>

            {/* Colors with HEX Codes */}
            <div className="space-y-2 p-2.5 rounded-2xl bg-white border border-[#e5e2de] shadow-2xs">
              <div className="flex items-center gap-1.5 text-[9px] text-[#757575] uppercase font-semibold">
                <Palette className="w-3 h-3 text-[#10B981]" />
                <span>COLOR TOKENS (HEX)</span>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#757575]">Text:</span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: selectedElement.colorHex }}
                  />
                  <span className="font-bold text-black">{selectedElement.colorHex}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#757575]">Background:</span>
                <div className="flex items-center gap-1.5">
                  {selectedElement.bgColorHex !== "transparent" && (
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: selectedElement.bgColorHex }}
                    />
                  )}
                  <span className="font-bold text-black">{selectedElement.bgColorHex}</span>
                </div>
              </div>
            </div>

            {/* Box Model */}
            <div className="flex items-center justify-between text-[10px] px-2 py-1.5 rounded-xl bg-white border border-[#e5e2de] text-[#757575]">
              <span>Radius: <strong className="text-black font-mono">{selectedElement.borderRadius}</strong></span>
              <span>Padding: <strong className="text-black font-mono">{selectedElement.padding}</strong></span>
            </div>

            {/* Copy CSS CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyCSS}
              className="w-full py-2.5 rounded-xl bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:bg-neutral-800"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "CSS Rules Copied!" : "Copy CSS Attributes"}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}