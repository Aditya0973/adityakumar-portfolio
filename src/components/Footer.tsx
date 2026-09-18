"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { triggerConfetti } from "@/utils/confetti";
import { playSuccess } from "@/utils/soundEffects";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adityakumar0973/" },
  { label: "Behance", href: "https://www.behance.net/adityakumar973" },
  { label: "GitHub", href: "https://github.com/Aditya0973" },
  { label: "Instagram", href: "https://www.instagram.com/aditya0973/" },
  { label: "Twitter-X", href: "https://x.com/Aditya0973" },
  { label: "YouTube", href: "https://www.youtube.com/@Aditya0973" }
];

export function Footer() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopied(true);
    playSuccess();
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full pt-12 pb-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-10 select-none">
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

        <div className="flex items-center gap-6">
          <span>+91 7291065019</span>
          <a
            href="https://www.behance.net/adityakumar973"
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
        </div>
      </div>

      {/* GIANT "Let's Connect" BANNER (Matching exact Framer user screenshot) */}
      <Link
        href="/contact"
        className="block group relative overflow-hidden rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] p-8 sm:p-14 text-center hover:border-black/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-black group-hover:scale-[1.02] transition-transform duration-500 font-sans">
          Let&apos;s Connect
        </div>
        <div className="mt-2 text-xs font-mono text-[#757575] group-hover:text-black transition-colors flex items-center justify-center gap-1">
          <span>Start a project, inquire about design roles, or say hello</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </Link>

      <div className="text-center text-[10px] font-mono text-[#757575]/70 pt-2">
        © {new Date().getFullYear()} Aditya Kumar • Built with Next.js & Framer Motion
      </div>
    </footer>
  );
}
