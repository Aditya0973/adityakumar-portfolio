"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sliders,
  Volume2,
  Sparkles,
  Terminal,
  Layers,
  Palette,
  Power,
  Zap,
  Check,
  RotateCw,
  Compass
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";
import {
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  SparkleStar,
  DoodleCrown
} from "@/components/SketchDoodles";

export function DesignMovementLab() {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  // Skeuomorphic state
  const [knobVal, setKnobVal] = React.useState(65);
  const [rockerOn, setRockerOn] = React.useState(true);

  // Neumorphic state
  const [neuActiveBtn, setNeuActiveBtn] = React.useState<number>(1);
  const [neuSlider, setNeuSlider] = React.useState(70);

  // Brutalist state
  const [logCounter, setLogCounter] = React.useState(42);

  const movements = [
    {
      id: "skeuo",
      title: "Skeuomorphism",
      subtitle: "Physical Analog Tactility",
      tag: "Tactile Realism",
      desc: "Brushed aluminum, realistic bevels, specular lighting, and physical spring switches."
    },
    {
      id: "neu",
      title: "Neumorphism",
      subtitle: "Soft Extruded Surface",
      tag: "Dual Light Shadows",
      desc: "Smooth convex & concave plasticity created by balanced soft highlights and shadows."
    },
    {
      id: "glass",
      title: "Glassmorphism",
      subtitle: "Optical Refraction & Depth",
      tag: "Frosted Caustics",
      desc: "Multi-layered frosted glass with specular rim reflections and chromatic background depth."
    },
    {
      id: "brutal",
      title: "Raw Brutalism",
      subtitle: "Monochrome Grid Architecture",
      tag: "Pure Structure",
      desc: "High-contrast monochrome layouts, raw monospace data streams, and ASCII grids."
    },
    {
      id: "neobrutal",
      title: "Neu-Brutalism",
      subtitle: "High-Energy Pop Art",
      tag: "Bold Offset Shadows",
      desc: "Vibrant contrasting color accents, 3px solid borders, hard 5px drop shadows, and sticker badges."
    },
    {
      id: "scrapbook",
      title: "Scrapbook Tactile",
      subtitle: "Handcrafted Editorial Ephemera",
      tag: "Paper & Stamps",
      desc: "Polaroids, translucent washi tapes, metallic clips, and postal cancellation stamps."
    }
  ];

  return (
    <section className="space-y-6 pt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-[#E65100] bg-[#FFF7ED] px-2.5 py-0.5 rounded-md border border-[#E65100]/20 shadow-2xs">
              MULTIDISCIPLINARY LAB
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">
              DESIGN MOVEMENTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] font-sans tracking-tight">
            Design Disciplines &amp; Craft Styles
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
            Every movement has a purpose. Switch between live interactive sandboxes to experience how I craft across every design paradigm.
          </p>
        </div>

        {/* Live Movement Selector Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-neutral-100/80 border border-neutral-300/80">
          {movements.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                playPop();
                setActiveTab(i);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === i
                  ? "bg-white font-bold text-black shadow-xs border border-neutral-300"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Sandbox Canvas Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-neutral-300/80 shadow-xs relative overflow-hidden min-h-[380px] flex items-center justify-center">
        {/* Washi Tape Corner */}
        <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-10" />

        <AnimatePresence mode="wait">
          {/* 1. SKEUOMORPHISM */}
          {activeTab === 0 && (
            <motion.div
              key="skeuo"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl space-y-6"
            >
              {/* Metallic Audio Console */}
              <div
                className="p-6 rounded-2xl border-2 border-[#8C827A] shadow-[0_8px_24px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)] space-y-6"
                style={{
                  background:
                    "linear-gradient(180deg, #EBE6E0 0%, #D8D1C9 50%, #C4BCB2 100%)"
                }}
              >
                {/* Screws & Label Plate */}
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 rounded-full bg-[#9E958C] border border-[#6B6259] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-[#4A423B]" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-[#2B2622] text-[#E6A040] font-mono text-[10px] font-bold tracking-widest uppercase border border-[#594F47] shadow-inner">
                    STUDIO ANALOG RIG MK-IV
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#9E958C] border border-[#6B6259] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-[#4A423B] rotate-45" />
                  </div>
                </div>

                {/* Controls Deck */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  {/* Rotary Dial */}
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#4A423B] font-bold">
                      Gain Output ({knobVal}%)
                    </span>
                    <div
                      onClick={() => {
                        playFigmaClick();
                        setKnobVal((prev) => (prev >= 90 ? 20 : prev + 15));
                      }}
                      className="w-24 h-24 rounded-full border-4 border-[#A89F95] shadow-[0_6px_14px_rgba(0,0,0,0.35),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(0,0,0,0.4)] cursor-pointer relative flex items-center justify-center group"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 35%, #FFFFFF 0%, #DCD6CE 45%, #9E958C 100%)"
                      }}
                    >
                      <motion.div
                        animate={{ rotate: (knobVal / 100) * 270 - 135 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="w-full h-full relative flex items-center justify-center"
                      >
                        <div className="absolute top-2 w-1.5 h-4 bg-[#D9381E] rounded-full shadow-xs" />
                      </motion.div>
                    </div>
                    <span className="text-[9px] font-mono text-[#6B6259]">
                      CLICK TO ROTATE
                    </span>
                  </div>

                  {/* Physical Rocker Switch & Meter */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#C8C0B5] border border-[#9E958C] shadow-inner">
                      <span className="text-[10px] font-mono font-bold text-[#3B332C]">
                        TUBE DRIVE
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          playPop();
                          setRockerOn(!rockerOn);
                        }}
                        className={`w-14 h-8 rounded-lg border-2 border-[#594F47] transition-all cursor-pointer relative flex items-center px-1 shadow-[0_3px_6px_rgba(0,0,0,0.3)] ${
                          rockerOn
                            ? "bg-[#D9381E] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4),0_0_12px_rgba(217,56,30,0.5)] justify-end"
                            : "bg-[#4A423B] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] justify-start"
                        }`}
                      >
                        <div className="w-5 h-6 rounded bg-[#EBE6E0] border border-[#7A6F65] shadow-md" />
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-[#1C1917] border border-[#3B332C] text-[#22C55E] font-mono text-xs shadow-inner flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            rockerOn ? "bg-emerald-400 shadow-[0_0_8px_#4ADE80]" : "bg-neutral-600"
                          }`}
                        />
                        <span className="text-[10px]">
                          {rockerOn ? "VALVE ACTIVE" : "STANDBY"}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#A89F95]">
                        +{(knobVal * 0.12).toFixed(1)} dB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. NEUMORPHISM */}
          {activeTab === 1 && (
            <motion.div
              key="neu"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md p-8 rounded-3xl bg-[#E8EDF2] border border-white/60 space-y-6 shadow-[12px_12px_24px_rgba(163,177,198,0.45),-12px_-12px_24px_rgba(255,255,255,0.9)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-wider">
                  Neumorphic Deck
                </span>
                <span className="text-[10px] font-mono text-neutral-400">Soft UI 2.0</span>
              </div>

              {/* Segmented Neumorphic Controls */}
              <div className="grid grid-cols-3 gap-3">
                {["Tactile", "Acoustic", "Optical"].map((label, idx) => {
                  const isSelected = neuActiveBtn === idx;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        playPop();
                        setNeuActiveBtn(idx);
                      }}
                      className={`py-3 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "text-[#E65100] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] bg-[#E8EDF2]"
                          : "text-neutral-600 shadow-[6px_6px_12px_rgba(163,177,198,0.5),-6px_-6px_12px_rgba(255,255,255,0.9)] bg-[#E8EDF2] hover:text-black"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Neumorphic Slider Track */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-600">
                  <span>Elevation Relief</span>
                  <span className="font-bold text-[#E65100]">{neuSlider}%</span>
                </div>
                <div className="p-1 rounded-full bg-[#E8EDF2] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={neuSlider}
                    onChange={(e) => setNeuSlider(Number(e.target.value))}
                    className="w-full accent-[#E65100] cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. GLASSMORPHISM */}
          {activeTab === 2 && (
            <motion.div
              key="glass"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md relative p-8 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFEDD5 0%, #DBEAFE 50%, #EDE9FE 100%)"
              }}
            >
              {/* Background Color Orbs */}
              <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-[#E65100]/40 blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#0057FF]/40 blur-2xl" />

              {/* Glass Card */}
              <div className="relative z-10 p-6 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E65100]" />
                    <span className="text-xs font-mono font-bold text-neutral-800">
                      Frosted Prism Shield
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white/40 px-2 py-0.5 rounded-full border border-white/50 text-neutral-700">
                    BLUR 24PX
                  </span>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                  Dynamic multi-layer optical refraction with specular light rims and colored ambient caustics.
                </p>

                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-xs font-mono text-neutral-800 shadow-2xs">
                    ✦ Refraction
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-xs font-mono text-neutral-800 shadow-2xs">
                    ✦ Specular Sheen
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. RAW BRUTALISM */}
          {activeTab === 3 && (
            <motion.div
              key="brutal"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg p-6 bg-black text-white font-mono space-y-4 border-4 border-black"
            >
              <div className="flex items-center justify-between border-b-2 border-white pb-2">
                <span className="text-xs font-bold tracking-widest">
                  /// RAW ARCHITECTURE SYSTEM ///
                </span>
                <span className="text-xs bg-white text-black px-2 font-extrabold">
                  SYS_OK
                </span>
              </div>

              <div className="space-y-1 text-xs text-neutral-300">
                <div>&gt; KERNEL: V6.12.0_TACTILE</div>
                <div>&gt; MONOCHROME_STREAM: ACTIVE</div>
                <div>&gt; BUFFER_ITERATIONS: {logCounter} CYCLES</div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-neutral-700">
                <button
                  type="button"
                  onClick={() => {
                    playPop();
                    setLogCounter((c) => c + 1);
                  }}
                  className="px-4 py-2 bg-white text-black font-extrabold text-xs hover:bg-neutral-200 transition-colors uppercase cursor-pointer"
                >
                  [+] INCREMENT STREAM
                </button>
                <span className="text-[10px] text-neutral-400">NO DECORATIVE FLUFF</span>
              </div>
            </motion.div>
          )}

          {/* 5. NEU-BRUTALISM */}
          {activeTab === 4 && (
            <motion.div
              key="neobrutal"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md p-6 rounded-3xl bg-[#CCFF00] border-3 border-[#121212] shadow-[6px_6px_0px_#121212] space-y-4 rotate-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-black uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border-2 border-black">
                  POP NEO-BRUTAL
                </span>
                <DoodleCrown color="#FF5500" size={28} />
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#121212] space-y-2">
                <h4 className="text-base font-extrabold text-black font-sans">
                  High-Impact Contrast
                </h4>
                <p className="text-xs text-neutral-700">
                  Punchy acid palettes, solid black outlines, and sticker-style interactive widgets.
                </p>
              </div>

              <button
                type="button"
                onClick={() => playSuccess()}
                className="w-full py-3 rounded-2xl bg-[#E65100] text-white font-mono text-xs font-extrabold border-2 border-black shadow-[4px_4px_0px_#121212] hover:bg-[#C2410C] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                PRESS FOR POP SOUND!
              </button>
            </motion.div>
          )}

          {/* 6. SCRAPBOOK TACTILE */}
          {activeTab === 5 && (
            <motion.div
              key="scrapbook"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md p-6 rounded-3xl bg-white border border-neutral-300 shadow-xs space-y-4 relative -rotate-1"
            >
              <WashiTape color="#EADDFE" angle="3deg" className="-top-3 left-8" />
              <div className="absolute -top-3 right-8 z-30">
                <PushPin color="#E65100" />
              </div>

              <div className="flex items-start justify-between border-b border-dashed border-neutral-300 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    POSTAL ENTRY #07
                  </span>
                  <h4 className="text-base font-bold text-black font-sans">
                    Handmade Polaroid
                  </h4>
                </div>
                <PostageCancellationStamp
                  text="CRAFT STUDIO"
                  date="2026"
                  color="#E65100"
                  className="scale-75 origin-right"
                />
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Authentic tactile layers with washi tapes, paper clips, postal cancellations, and notebook binder tabs.
              </p>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-neutral-200 text-xs font-mono flex items-center justify-between text-neutral-700">
                <span>Material: 300gsm Heavy Card</span>
                <span className="font-bold text-[#E65100]">VERIFIED ✦</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
