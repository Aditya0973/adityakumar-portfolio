"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { triggerConfetti } from "@/utils/confetti";
import { playSuccess } from "@/utils/soundEffects";
import { usePortfolioTheme } from "@/context/ThemeContext";

export function Footer() {
  const [copied, setCopied] = React.useState(false);
  const { colors } = usePortfolioTheme();

  const copyEmail = () => {
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopied(true);
    playSuccess();
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full pt-8 pb-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 select-none">
      {/* Footer Top Info Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#757575] border-t border-[#e5e2de] pt-6">
        <button
          type="button"
          onClick={copyEmail}
          className="hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer group"
          title="Click to copy email"
        >
          <span>adityakumar4727@gmail.com</span>
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#757575] group-hover:text-black" />}
        </button>

        <div className="flex items-center gap-5">
          <span>+91 7291065019</span>
          <a
            href="https://www.behance.net/1c5da35f"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/adityakumar0973/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aditya0973"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* REFINED "Let's Connect" CARD (Medium weight, elegant proportions) */}
      <Link
        href="/contact"
        className="block group relative overflow-hidden rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] p-8 sm:p-12 text-center hover:border-black/30 hover:shadow-md transition-all duration-300"
      >
        <div className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black group-hover:scale-[1.01] transition-transform duration-300 font-sans">
          Let&apos;s Connect
        </div>
        <div className="mt-2 text-xs font-mono text-[#757575] group-hover:text-black transition-colors flex items-center justify-center gap-1">
          <span>Start a project, inquire about design roles, or say hello</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </Link>

      <div className="text-center text-[10px] font-mono text-[#757575]/70 pt-1">
        © {new Date().getFullYear()} Aditya Kumar • Built with Next.js & Framer Motion
      </div>
    </footer>
  );
}
