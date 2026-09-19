"use client";

import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

interface EvervaultCardProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export function EvervaultCard({ text = "CYBER", className = "", children }: EvervaultCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = "";
    for (let i = 0; i < 1500; i++) {
      str += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={`relative overflow-hidden rounded-3xl bg-[#0d1117] border border-[#30363d] p-6 group cursor-pointer ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 backdrop-blur-xl transition duration-500"
          style={style}
        />
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-overlay group-hover:opacity-100 transition duration-500 text-[10px] font-mono font-bold text-white break-all leading-tight select-none p-4"
          style={style}
        >
          {randomString}
        </motion.div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
