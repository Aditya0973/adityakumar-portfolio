"use client";

import React, { useRef, useEffect } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
  color: string;
}

const SPARK_PALETTE = [
  "#E65100", // Warm Rust
  "#0057FF", // Cobalt Blue
  "#10B981", // Emerald Green
  "#6864F6", // Royal Indigo
  "#CCFF00", // Acid Lime
  "#FF5500", // Bright Orange
  "#8B5CF6"  // Violet
];

export function ClickSpark({
  sparkColor,
  sparkSize = 10,
  sparkRadius = 24,
  sparkCount = 9,
  duration = 420
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClick = (e: MouseEvent) => {
      // Don't spark if clicking inputs
      const target = e.target as HTMLElement;
      if (target?.closest("input") || target?.closest("textarea")) return;

      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount + (Math.random() * 0.2 - 0.1);
        const randomColor = SPARK_PALETTE[Math.floor(Math.random() * SPARK_PALETTE.length)];
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle,
          startTime: now,
          color: randomColor
        });
      }
    };

    window.addEventListener("pointerdown", handleClick);

    const draw = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = currentTime - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const ease = 1 - (1 - progress) * (1 - progress);

        const currentDistance = ease * sparkRadius;
        const lineLength = sparkSize * (1 - progress);

        const startX = spark.x + Math.cos(spark.angle) * currentDistance;
        const startY = spark.y + Math.sin(spark.angle) * currentDistance;
        const endX = spark.x + Math.cos(spark.angle) * (currentDistance + lineLength);
        const endY = spark.y + Math.sin(spark.angle) * (currentDistance + lineLength);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = spark.color;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.globalAlpha = 1 - progress;
        ctx.stroke();
        ctx.restore();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 select-none"
    />
  );
}
