"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Pencil,
  Undo2,
  Trash2,
  X,
  Sparkles,
  Check,
  CircleDot
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";

interface StrokePoint {
  x: number;
  y: number;
}

interface Stroke {
  points: StrokePoint[];
  color: string;
  size: number;
}

export function ScreenSketchCanvas() {
  const [isActive, setIsActive] = React.useState(false);
  const [color, setColor] = React.useState("#E65100");
  const [size, setSize] = React.useState(4);
  const [strokes, setStrokes] = React.useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = React.useState<Stroke | null>(null);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = React.useRef(false);

  const colors = [
    { name: "Rust", value: "#E65100" },
    { name: "Cobalt", value: "#0057FF" },
    { name: "Emerald", value: "#10B981" },
    { name: "Indigo", value: "#6864F6" },
    { name: "Acid Lime", value: "#CCFF00" },
    { name: "Charcoal", value: "#121212" }
  ];

  const sizes = [
    { label: "Fine", value: 3 },
    { label: "Medium", value: 6 },
    { label: "Bold", value: 10 }
  ];

  // Resize Canvas to Match Window
  const syncCanvasSize = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    redrawAll(strokes);
  }, [strokes]);

  React.useEffect(() => {
    if (isActive) {
      syncCanvasSize();
      window.addEventListener("resize", syncCanvasSize);
    }
    return () => {
      window.removeEventListener("resize", syncCanvasSize);
    };
  }, [isActive, syncCanvasSize]);

  // Redraw all strokes on canvas
  const redrawAll = (allStrokes: Stroke[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    allStrokes.forEach((st) => {
      if (st.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = st.color;
      ctx.lineWidth = st.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.moveTo(st.points[0].x, st.points[0].y);
      for (let i = 1; i < st.points.length; i++) {
        const xc = (st.points[i].x + st.points[i - 1].x) / 2;
        const yc = (st.points[i].y + st.points[i - 1].y) / 2;
        ctx.quadraticCurveTo(st.points[i - 1].x, st.points[i - 1].y, xc, yc);
      }
      ctx.stroke();
    });
  };

  // Pointer event handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    const pt = { x: e.clientX, y: e.clientY };
    const newStroke: Stroke = {
      points: [pt],
      color,
      size
    };
    setCurrentStroke(newStroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !currentStroke) return;
    const pt = { x: e.clientX, y: e.clientY };
    const updatedPoints = [...currentStroke.points, pt];
    const updatedStroke = { ...currentStroke, points: updatedPoints };
    setCurrentStroke(updatedStroke);

    // Live stroke render
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const pts = updatedPoints;
    if (pts.length >= 2) {
      const prev = pts[pts.length - 2];
      const curr = pts[pts.length - 1];
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(curr.x, curr.y);
      ctx.stroke();
    }
  };

  const handlePointerUp = () => {
    if (isDrawingRef.current && currentStroke && currentStroke.points.length > 0) {
      const updated = [...strokes, currentStroke];
      setStrokes(updated);
      setCurrentStroke(null);
      isDrawingRef.current = false;
      redrawAll(updated);
    }
  };

  const handleUndo = () => {
    playPop();
    const updated = strokes.slice(0, -1);
    setStrokes(updated);
    redrawAll(updated);
  };

  const handleClear = () => {
    playFigmaClick();
    setStrokes([]);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  };

  return (
    <>
      {/* Fullscreen Overlay Canvas (Mounted when active) */}
      {isActive && (
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="fixed inset-0 z-50 cursor-crosshair touch-none select-none pointer-events-auto"
          style={{ width: "100vw", height: "100vh" }}
        />
      )}

      {/* Floating Trigger & Expandable Toolbar (Desktop Only) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 select-none">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-2 rounded-2xl bg-[#FAF8F5]/95 backdrop-blur-md border border-neutral-300 shadow-xl"
            >
              {/* Color Swatches */}
              <div className="flex items-center gap-1 border-r border-neutral-200 pr-2">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    title={c.name}
                    onClick={() => {
                      playPop();
                      setColor(c.value);
                    }}
                    className={`w-6 h-6 rounded-full border transition-transform cursor-pointer flex items-center justify-center ${
                      color === c.value ? "scale-125 ring-2 ring-black/30 border-white" : "border-black/10 hover:scale-110"
                    }`}
                    style={{ backgroundColor: c.value }}
                  >
                    {color === c.value && (
                      <Check className={`w-3.5 h-3.5 ${c.value === "#CCFF00" ? "text-black" : "text-white"}`} />
                    )}
                  </button>
                ))}
              </div>

              {/* Stroke Size Selector */}
              <div className="flex items-center gap-1">
                {sizes.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    title={`Stroke: ${s.label}`}
                    onClick={() => {
                      playPop();
                      setSize(s.value);
                    }}
                    className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-colors cursor-pointer ${
                      size === s.value
                        ? "bg-neutral-900 text-white font-bold"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Action Buttons: Undo, Clear */}
              <div className="flex items-center gap-1 border-l border-neutral-200 pl-2">
                <button
                  type="button"
                  title="Undo Stroke"
                  onClick={handleUndo}
                  disabled={strokes.length === 0}
                  className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-200 disabled:opacity-30 cursor-pointer"
                >
                  <Undo2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  title="Clear Canvas"
                  onClick={handleClear}
                  disabled={strokes.length === 0}
                  className="p-1.5 rounded-lg text-neutral-600 hover:bg-red-100 hover:text-red-600 disabled:opacity-30 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Master Sketch Floating Circle Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            if (!isActive) playSuccess();
            else playPop();
            setIsActive(!isActive);
          }}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all shadow-lg cursor-pointer ${
            isActive
              ? "bg-[#121212] text-white border-[#121212] shadow-orange-500/20"
              : "bg-[#E65100] text-white border-[#E65100] hover:bg-[#C2410C]"
          }`}
          title={isActive ? "Exit Sketch Mode" : "Sketch on Screen"}
        >
          {isActive ? (
            <X className="w-5 h-5" />
          ) : (
            <Pencil className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </>
  );
}