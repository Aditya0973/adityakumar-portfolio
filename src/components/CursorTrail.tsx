"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePortfolioTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
  color: string;
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pathname = usePathname();
  const { colors } = usePortfolioTheme();

  // Determine trail color based on route
  const isSpacePage = pathname.includes("behance") || pathname.includes("github") || pathname.includes("crafted");
  const baseColor = isSpacePage ? "#FFFFFF" : colors.accent;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calculate speed
      const dist = Math.hypot(x - lastX, y - lastY);
      lastX = x;
      lastY = y;

      // Spawn smooth blurry particles
      const count = Math.min(Math.floor(dist / 6) + 1, 3);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          size: Math.random() * 10 + 8, // Blurry circle size
          alpha: 0.6,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          color: baseColor
        });
      }

      // Limit particle array size
      if (particles.length > 50) {
        particles = particles.slice(-50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.95; // Smoothly shrink
        p.alpha *= 0.93; // Smoothly fade

        if (p.alpha > 0.02 && p.size > 0.5) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      particles = particles.filter((p) => p.alpha > 0.02 && p.size > 0.5);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ mixBlendMode: isSpacePage ? "screen" : "normal" }}
    />
  );
}