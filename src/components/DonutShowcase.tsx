"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, RefreshCw } from "lucide-react";
import { playPop, playFigmaClick } from "../utils/soundEffects";

const FLAVORS = [
  { name: "Berry Glaze", r: 236, g: 72, b: 153 },
  { name: "Matcha Mint", r: 74, g: 93, b: 78 },
  { name: "Choco Caramel", r: 107, g: 79, b: 59 },
  { name: "Cream Vanilla", r: 217, g: 199, b: 178 }
];

export function DonutShowcase() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [flavorIdx, setFlavorIdx] = useState(0);
  const [isWireframe, setIsWireframe] = useState(false);

  const activeFlavor = FLAVORS[flavorIdx];

  const handleNextFlavor = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    setFlavorIdx((prev) => (prev + 1) % FLAVORS.length);
  };

  const handleToggleWireframe = (e: React.MouseEvent) => {
    e.stopPropagation();
    playFigmaClick();
    setIsWireframe(!isWireframe);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angleA = 0;
    let angleB = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      const R1 = 14;
      const R2 = 28;
      const K2 = 100;
      const K1 = (width * K2 * 3) / (8 * (R1 + R2));

      angleA += 0.015;
      angleB += 0.012;

      const cosA = Math.cos(angleA);
      const sinA = Math.sin(angleA);
      const cosB = Math.cos(angleB);
      const sinB = Math.sin(angleB);

      ctx.fillStyle = isWireframe ? "rgba(0,0,0,0.4)" : `rgb(${activeFlavor.r}, ${activeFlavor.g}, ${activeFlavor.b})`;

      for (let theta = 0; theta < 6.28; theta += 0.35) {
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);

        for (let phi = 0; phi < 6.28; phi += 0.18) {
          const cosphi = Math.cos(phi);
          const sinphi = Math.sin(phi);

          const circlex = R2 + R1 * costheta;
          const circley = R1 * sintheta;

          const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
          const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB;
          const z = K2 + cosA * circlex * sinphi + circley * sinA;
          const ooz = 1 / z;

          const xp = Math.floor(centerX + K1 * ooz * x);
          const yp = Math.floor(centerY - K1 * ooz * y);

          const L = cosphi * costheta * sinB - cosA * costheta * sinphi - sinA * sintheta + cosB * (cosA * sintheta - costheta * sinA * sinphi);

          if (L > 0) {
            const alpha = Math.min(1, Math.max(0.2, L * 0.9));
            if (isWireframe) {
              ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
              ctx.strokeRect(xp, yp, 1.5, 1.5);
            } else {
              ctx.fillStyle = `rgba(${activeFlavor.r}, ${activeFlavor.g}, ${activeFlavor.b}, ${alpha})`;
              ctx.fillRect(xp, yp, 2, 2);
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeFlavor, isWireframe]);

  return (
    <div className="relative w-full rounded-2xl border border-[#e5e2de] bg-[#f5f2f0] p-3 overflow-hidden shadow-sm group">
      <div className="flex items-center justify-between text-[10px] font-mono text-[#757575] pb-1 border-b border-[#e5e2de]/60">
        <span className="font-semibold uppercase flex items-center gap-1 text-black">
          <Sparkles className="w-3 h-3 text-[#4a5d4e]" />
          3D Donut Lab
        </span>
        <button
          onClick={handleToggleWireframe}
          className="hover:text-black transition-colors"
          title="Toggle Wireframe"
        >
          {isWireframe ? "Shaded" : "Wireframe"}
        </button>
      </div>

      <div className="flex items-center justify-center py-2 cursor-pointer" onClick={handleNextFlavor} title="Click to change flavor!">
        <canvas ref={canvasRef} width={130} height={100} className="rounded-lg" />
      </div>

      <div className="flex items-center justify-between pt-1 text-[10px] font-mono border-t border-[#e5e2de]/60">
        <span className="text-[#757575]">{activeFlavor.name}</span>
        <button
          onClick={handleNextFlavor}
          className="text-[9px] px-2 py-0.5 rounded-full bg-[#edeae7] hover:bg-[#e5e2de] text-black font-semibold transition-colors flex items-center gap-1"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          <span>Glaze</span>
        </button>
      </div>
    </div>
  );
}
