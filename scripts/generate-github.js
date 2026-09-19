const fs = require("fs");
const path = require("path");

const githubPageContent = `"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Star,
  Terminal,
  Code,
  Sparkles,
  Gamepad2,
  Trophy,
  RotateCcw,
  Copy,
  Check,
  Flame,
  Layers,
  ExternalLink
} from "lucide-react";
import confetti from "canvas-confetti";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";

// Pinned Repositories from Aditya's real GitHub profile (media_1789730772206.png)
const PINNED_REPOSITORIES = [
  {
    name: "india-integrated-surveillance-network-exp",
    owner: "Aditya0973",
    visibility: "Public",
    language: "JavaScript",
    langColor: "#f1e05a",
    description: "Integrated intelligence operations and geospatial tracking interface prototype.",
    url: "https://github.com/Aditya0973/india-integrated-surveillance-network-exp",
    stars: 12
  },
  {
    name: "Crafted-Company/crafted-studio-pc",
    owner: "Crafted-Company",
    visibility: "Public",
    language: "TypeScript",
    langColor: "#3178c6",
    description: "Desktop workspace client and high-performance design asset rendering pipeline.",
    url: "https://github.com/Crafted-Company/crafted-studio-pc",
    stars: 24
  },
  {
    name: "orb-galaxy-simulator-exp",
    owner: "Aditya0973",
    visibility: "Public",
    language: "JavaScript",
    langColor: "#f1e05a",
    description: "An Interactive 3D Galaxy Simulator with particle dynamics and orbital mechanics.",
    url: "https://github.com/Aditya0973/orb-galaxy-simulator-exp",
    stars: 18
  },
  {
    name: "nakastra-space-journal-w",
    owner: "Aditya0973",
    visibility: "Public",
    language: "TypeScript",
    langColor: "#3178c6",
    description: "🚀 A highly refined cognitive sky mapping journal and astronomical coordinate space journal powered by React, Tailwind CSS, and Web Audio API.",
    url: "https://github.com/Aditya0973/nakastra-space-journal-w",
    stars: 31
  },
  {
    name: "vigil-os-exp",
    owner: "Aditya0973",
    visibility: "Public",
    language: "TypeScript",
    langColor: "#3178c6",
    description: "🦇 Wayne Enterprises Tactical Intelligence Interface (VIGIL_OS v4.7.27). A brutalist, Batman-inspired mission planning and surveillance command dashboard built with Next.js.",
    url: "https://github.com/Aditya0973/vigil-os-exp",
    stars: 42
  },
  {
    name: "diane-exp",
    owner: "Aditya0973",
    visibility: "Public",
    language: "TypeScript",
    langColor: "#3178c6",
    description: "🛸 Dimensional Interactive Analytical Network Engine: A retro CRT workbench terminal built for Rick Sanchez (Earth C-137) to attune portal coordinates, monitor microverse power, tune into interdimen...",
    url: "https://github.com/Aditya0973/diane-exp",
    stars: 28
  }
];

function generateContributionMatrix() {
  const weeks = 40;
  const days = 7;
  const matrix: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      if (w < 25) {
        col.push(Math.random() > 0.88 ? Math.floor(Math.random() * 2) + 1 : 0);
      } else {
        const rand = Math.random();
        if (rand > 0.45) col.push(3);
        else if (rand > 0.25) col.push(2);
        else if (rand > 0.1) col.push(1);
        else col.push(0);
      }
    }
    matrix.push(col);
  }
  return matrix;
}

const DOT_COLORS = [
  "bg-white/10 border-white/15",
  "bg-emerald-900 border-emerald-800",
  "bg-emerald-600 border-emerald-500",
  "bg-emerald-400 border-emerald-300",
  "bg-white border-white shadow-[0_0_8px_#ffffff]"
];

export default function GithubPage() {
  // Immerse background in GitHub Bright Emerald Green (#10B981) matching Behance Royal Blue (#0057FF)
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#10B981";
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  const [matrix, setMatrix] = useState<number[][]>(() => generateContributionMatrix());
  const [gameMode, setGameMode] = useState<boolean>(false);
  const [playerPos, setPlayerPos] = useState<{ x: number; y: number }>({ x: 28, y: 3 });
  const [gameScore, setGameScore] = useState<number>(0);
  const [commitsEaten, setCommitsEaten] = useState<number>(0);
  const [activeYear, setActiveYear] = useState<number>(2026);
  const [copiedClone, setCopiedClone] = useState<string | null>(null);

  useEffect(() => {
    if (!gameMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      let dx = 0;
      let dy = 0;

      if (e.key === "ArrowUp" || e.key === "w") dy = -1;
      else if (e.key === "ArrowDown" || e.key === "s") dy = 1;
      else if (e.key === "ArrowLeft" || e.key === "a") dx = -1;
      else if (e.key === "ArrowRight" || e.key === "d") dx = 1;
      else return;

      e.preventDefault();

      setPlayerPos((prev) => {
        const nextX = Math.max(0, Math.min(matrix.length - 1, prev.x + dx));
        const nextY = Math.max(0, Math.min(6, prev.y + dy));

        if (matrix[nextX][nextY] > 0) {
          playPop();
          setGameScore((s) => s + matrix[nextX][nextY] * 100);
          setCommitsEaten((c) => c + 1);

          setMatrix((m) => {
            const newM = m.map((col) => [...col]);
            newM[nextX][nextY] = 0;
            return newM;
          });
        }

        return { x: nextX, y: nextY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameMode, matrix]);

  const movePlayer = (dx: number, dy: number) => {
    setPlayerPos((prev) => {
      const nextX = Math.max(0, Math.min(matrix.length - 1, prev.x + dx));
      const nextY = Math.max(0, Math.min(6, prev.y + dy));

      if (matrix[nextX][nextY] > 0) {
        playPop();
        setGameScore((s) => s + matrix[nextX][nextY] * 100);
        setCommitsEaten((c) => c + 1);

        setMatrix((m) => {
          const newM = m.map((col) => [...col]);
          newM[nextX][nextY] = 0;
          return newM;
        });
      }

      return { x: nextX, y: nextY };
    });
  };

  const restartGame = () => {
    playSuccess();
    setMatrix(generateContributionMatrix());
    setPlayerPos({ x: 28, y: 3 });
    setGameScore(0);
    setCommitsEaten(0);
  };

  const copyCloneCmd = (repoName: string) => {
    playSuccess();
    const cmd = \`git clone https://github.com/\${repoName}.git\`;
    navigator.clipboard.writeText(cmd);
    setCopiedClone(repoName);
    setTimeout(() => setCopiedClone(null), 2000);
  };

  // Interactive Terminal
  const [cmdInput, setCmdInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string }>>([
    {
      cmd: "whoami",
      out: "aditya-kumar — Full Stack Product Engineer & UI/UX Architect."
    },
    {
      cmd: "skills",
      out: "React • Next.js • TypeScript • Tailwind CSS • Framer Motion • Node.js • WebGL"
    }
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    playPop();
    const cleanCmd = cmdInput.trim().toLowerCase();
    let reply = "";

    if (cleanCmd === "help") {
      reply = "Available commands: whoami, skills, repos, contributions, clear, contact";
    } else if (cleanCmd === "whoami") {
      reply = "Aditya Kumar: Product Designer & Full-Stack Developer with 428 contributions.";
    } else if (cleanCmd === "skills") {
      reply = "Frontend: Next.js 15, TypeScript, Tailwind, Framer Motion | 3D: Blender, Three.js";
    } else if (cleanCmd === "repos") {
      reply = "6 Pinned Repos: ISN-Exp, Crafted-Studio-PC, Galaxy-Simulator, Nakastra-Space, Vigil-OS, Diane-Exp";
    } else if (cleanCmd === "contributions") {
      reply = "428 contributions across Aditya0973 & Crafted-Company repositories.";
    } else if (cleanCmd === "clear") {
      setTerminalHistory([]);
      setCmdInput("");
      return;
    } else if (cleanCmd === "contact") {
      reply = "Email: adityakumar4727@gmail.com | Portfolio: /contact";
    } else {
      reply = \`command not found: \${cleanCmd}. Type 'help' for available commands.\`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cmdInput, out: reply }]);
    setCmdInput("");
  };

  return (
    <div className="min-h-screen bg-[#10B981] text-white selection:bg-white selection:text-[#10B981] pb-24 font-sans">
      {/* 3-SECOND GREEN BINARY REVEAL TRANSITION SCREEN */}
      <SpaceTransition variant="github" duration={3000} />

      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.22),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-20 lg:pt-14 space-y-20">
        {/* ========================================================================= */}
        {/* TOP BRAND HEADER + READABLE WHITE CTA */}
        {/* ========================================================================= */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-white">
                GitHub Engineering Space
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              GitHub Space
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              Open-source development repositories, reactive interfaces, and real-time git activity.
            </p>
          </div>

          {/* READABLE CRISP WHITE CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0"
          >
            <a
              href="https://github.com/Aditya0973"
              target="_blank"
              rel="noreferrer"
              onClick={() => playSuccess()}
              className="inline-flex flex-col items-center justify-center px-6 py-3.5 rounded-2xl bg-white text-[#059669] font-bold text-sm shadow-xl hover:shadow-2xl hover:bg-neutral-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <span className="tracking-tight text-sm font-semibold">View More on GitHub</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-[10px] text-[#059669]/70 font-mono">
                (Star if you like code!)
              </span>
            </a>
          </motion.div>
        </header>

        {/* ========================================================================= */}
        {/* EXHIBIT 1: CONTRIBUTION MATRIX & PLAYABLE ARCADE GAME */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-white" />
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  01 / Contribution Grid &amp; Arcade Minigame
                </h2>
              </div>
              <p className="text-xs text-white/80">
                428 contributions in the last year. Toggle arcade mode to slither and collect commits!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playPop();
                  setGameMode(!gameMode);
                }}
                className={\`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all \${
                  gameMode
                    ? "bg-white text-[#059669] border-white shadow-lg"
                    : "bg-white/10 text-white border-white/25 hover:bg-white/20"
                }\`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>{gameMode ? "Exit Arcade Game" : "Play Arcade Game"}</span>
              </button>

              {gameMode && (
                <button
                  onClick={restartGame}
                  className="p-1.5 rounded-xl bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-colors"
                  title="Reset Game"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white">
                  428 contributions in the last year
                </span>
                {gameMode && (
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-white text-[#059669] font-mono text-xs font-bold shadow-xs">
                      Score: {gameScore}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-300 text-black font-mono text-xs font-bold">
                      Eaten: {commitsEaten}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-mono">
                {[2026, 2025, 2024, 2023, 2022, 2021].map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      playPop();
                      setActiveYear(year);
                    }}
                    className={\`px-2.5 py-1 rounded-lg transition-all \${
                      activeYear === year
                        ? "bg-white text-[#059669] font-bold shadow-xs"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }\`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-white/70 px-6">
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[680px] p-2 bg-black/20 rounded-2xl border border-white/15 justify-center relative">
                {matrix.map((col, x) => (
                  <div key={x} className="flex flex-col gap-1.5">
                    {col.map((val, y) => {
                      const isPlayer = gameMode && playerPos.x === x && playerPos.y === y;
                      return (
                        <div
                          key={y}
                          className={\`w-3 h-3 rounded-[3px] border transition-colors \${
                            isPlayer
                              ? "bg-amber-300 border-white scale-125 shadow-[0_0_8px_#ffffff] z-10"
                              : DOT_COLORS[val]
                          }\`}
                          title={\`Week \${x + 1}, Day \${y + 1}\`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {gameMode && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-mono text-white/80">
                <span>Control: <strong>Arrow Keys / WASD</strong></span>
                <div className="flex items-center gap-1">
                  <button onClick={() => movePlayer(-1, 0)} className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20">◄</button>
                  <button onClick={() => movePlayer(0, -1)} className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20">▲</button>
                  <button onClick={() => movePlayer(0, 1)} className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20">▼</button>
                  <button onClick={() => movePlayer(1, 0)} className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20">►</button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[10px] font-mono text-white/70">
              <span>Learn how we count contributions</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-white/10 border border-white/20" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-white" />
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 2: PINNED REPOSITORIES (CLEAN WHITE CARDS MATCHING BEHANCE UI) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                02 / Pinned Repositories
              </h2>
            </div>
            <p className="text-xs text-white/80">
              Featured architectural systems, creative coding experiments, and desktop engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PINNED_REPOSITORIES.map((repo) => (
              <motion.div
                key={repo.name}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-3xl bg-white text-black p-5 flex flex-col justify-between space-y-3 shadow-xl border border-white/40 group transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Code className="w-4 h-4 text-neutral-500 shrink-0" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-[#059669] hover:underline truncate"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-600 shrink-0">
                      {repo.visibility}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs text-neutral-600 font-mono">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.langColor }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{repo.stars}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => copyCloneCmd(repo.name)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black text-[11px] font-medium transition-colors"
                    title="Copy git clone"
                  >
                    {copiedClone === repo.name ? (
                      <>
                        <Check className="w-3 h-3 text-[#059669]" />
                        <span className="text-[#059669] font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Clone</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 3: RETRO DEVELOPER TERMINAL */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-white" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                03 / Interactive Terminal CLI
              </h2>
            </div>
            <p className="text-xs text-white/80">
              Type commands to inspect developer bio, tech stack, or git operations.
            </p>
          </div>

          <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/20 p-4 sm:p-6 shadow-2xl font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/15 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-[11px]">bash — aditya@crafted-co: ~</span>
              </div>
              <span className="text-[10px]">Type &apos;help&apos; for commands</span>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <span>aditya@dev:~$</span>
                    <span className="text-white font-semibold">{item.cmd}</span>
                  </div>
                  <div className="text-white/80 pl-4 whitespace-pre-wrap leading-relaxed">
                    {item.out}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-white/15">
              <span className="text-emerald-300 font-bold">aditya@dev:~$</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="type 'whoami', 'skills', 'repos', 'clear'..."
                className="flex-1 bg-transparent text-white focus:outline-hidden text-xs font-mono"
              />
            </form>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 4: ORGANIZATIONS & ACTIVITY OVERVIEW */}
        {/* ========================================================================= */}
        <section className="bg-white text-black rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#6864F6]/10 border border-[#6864F6]/20 flex items-center justify-center p-2">
              <img src="/icons/crafted.svg" alt="Crafted Company" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs font-bold text-black block">@Crafted-Company</span>
              <span className="text-[11px] text-neutral-500">
                Design engineering platform &amp; high-precision digital products
              </span>
            </div>
          </div>

          <div className="text-xs text-neutral-600 font-mono">
            Contributed to <strong>abyss-archive-w</strong>, <strong>crafted-co-w</strong> and 24 other repos.
          </div>
        </section>

        {/* FOOTER */}
        <div className="pt-8 border-t border-white/20 text-center space-y-3">
          <p className="text-xs font-mono text-white/70">
            Aditya Kumar • Full Stack Engineer &amp; Designer
          </p>
          <div>
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-medium transition-all"
            >
              <span>← Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, "../src/app/github/page.tsx"),
  githubPageContent,
  "utf8"
);
console.log("Successfully generated Emerald Green GitHub Space in src/app/github/page.tsx!");
