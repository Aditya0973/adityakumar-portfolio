"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";

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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-[#e5e2de] bg-[#f5f2f0] py-16 px-6 mt-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Available For Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Let&apos;s build something great together.
            </h2>
            <p className="text-sm text-[#757575]">
              Currently open for UI/UX design opportunities, freelance projects, and collaborations.
            </p>
          </div>

          {/* Email Copy Pill */}
          <button
            type="button"
            onClick={copyEmail}
            className="self-start md:self-auto inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/80 transition-all active:scale-[0.98] shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Email Copied!" : "adityakumar4727@gmail.com"}</span>
          </button>
        </div>

        {/* Social Links & Info Grid */}
        <div className="pt-8 border-t border-[#e5e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-[#757575]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-black font-semibold">Follow me:</span>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors inline-flex items-center gap-0.5"
              >
                <span>{social.label}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>+91 7291065019</span>
            <span>•</span>
            <span>Based in UP, India</span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 text-center text-[11px] text-[#757575]/80 font-mono">
          © {new Date().getFullYear()} Aditya Kumar • Designed & Built with Next.js & Framer Motion
        </div>
      </div>
    </footer>
  );
}
