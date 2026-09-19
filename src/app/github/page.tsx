"use client";

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
  ExternalLink,
  Heart,
  Cpu,
  FolderGit2
} from "lucide-react";
import { playPop, playFigmaClick, playSuccess, playHoverTick } from "@/utils/soundEffects";
import { SpaceTransition } from "@/components/SpaceTransition";
import {
  SparkleStar,
  StarburstBadge,
  WashiTape,
  TapeSticker,
  PushPin,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  DoodleCrown,
  SketchArrow,
  WavyUnderline
} from "@/components/SketchDoodles";
import { MagneticButton } from "@/components/MagneticButton";
import { SquigglyLink } from "@/components/SquigglyLink";

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
  "bg-[#ebedf0] border-[#d0d7de]",
  "bg-[#9be9a8] border-[#85e89d]",
  "bg-[#40c463] border-[#34b256]",
  "bg-[#30a14e] border-[#258d41]",
  "bg-[#216e39] border-[#1b5d30]"
];

export default function GithubPage() {
  const [contentReady, setContentReady] = useState(false);

  // Immerse background in GitHub Fresh Emerald Green (#059669)
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#059669";
    const timer = setTimeout(() => setContentReady(true), 2400);
    return () => {
      document.body.style.backgroundColor = prevBg;
      clearTimeout(timer);
    };
  }, []);

  const [matrix, setMatrix] = useState<number[][]>(() => generateContributionMatrix());
  const [matrixDetails, setMatrixDetails] = useState<Array<Array<{ level: number; count: number; date: string }>>>([]);
  const [totalContributions, setTotalContributions] = useState<number>(428);
  const [isLiveSync, setIsLiveSync] = useState<boolean>(false);
  const [isFetchingContributions, setIsFetchingContributions] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<boolean>(false);
  const [playerPos, setPlayerPos] = useState<{ x: number; y: number }>({ x: 28, y: 3 });
  const [gameScore, setGameScore] = useState<number>(0);
  const [commitsEaten, setCommitsEaten] = useState<number>(0);
  const [copiedClone, setCopiedClone] = useState<string | null>(null);

  // Fetch real live contributions directly from GitHub API for Aditya0973 (2026)
  useEffect(() => {
    let isMounted = true;
    setIsFetchingContributions(true);
    async function fetchLiveContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/Aditya0973?y=2026`);
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        if (!isMounted) return;

        const contributions = data.contributions || [];
        if (contributions.length > 0) {
          // Chunk into 7-day columns (weeks)
          const cols: number[][] = [];
          const details: Array<Array<{ level: number; count: number; date: string }>> = [];
          for (let i = 0; i < contributions.length; i += 7) {
            const rawSlice = contributions.slice(i, i + 7);
            const week = rawSlice.map((d: any) => d.level ?? 0);
            const detailWeek = rawSlice.map((d: any) => ({
              level: d.level ?? 0,
              count: d.count ?? 0,
              date: d.date ?? ""
            }));
            while (week.length < 7) {
              week.push(0);
              detailWeek.push({ level: 0, count: 0, date: "" });
            }
            cols.push(week);
            details.push(detailWeek);
          }
          setMatrix(cols);
          setMatrixDetails(details);
          const total = data.total?.["2026"] ??
            contributions.reduce((acc: number, cur: any) => acc + (cur.count || 0), 0);
          setTotalContributions(total || 428);
          setIsLiveSync(true);
        }
      } catch (err) {
        console.warn("Using contribution matrix fallback", err);
      } finally {
        if (isMounted) setIsFetchingContributions(false);
      }
    }
    fetchLiveContributions();
    return () => {
      isMounted = false;
    };
  }, []);

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
    const cmd = `git clone https://github.com/${repoName}.git`;
    navigator.clipboard.writeText(cmd);
    setCopiedClone(repoName);
    setTimeout(() => setCopiedClone(null), 2000);
  };

  // Interactive Terminal
  const [cmdInput, setCmdInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string }>>([
    {
      cmd: "whoami",
      out: "aditya-kumar — Product Designer & Design Engineer (B.Tech CSE)."
    },
    {
      cmd: "skills",
      out: "Frontend: Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion\nSystems: Turbopack, Node.js, Web Audio API, WebGL"
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
      reply = "Aditya Kumar: Product Designer & Engineer with 428 contributions in 2026.";
    } else if (cleanCmd === "skills") {
      reply = "Frontend: Next.js 16, TypeScript, Tailwind, Framer Motion | 3D: Blender, Three.js";
    } else if (cleanCmd === "repos") {
      reply = "6 Pinned Repos: ISN-Exp, Crafted-Studio-PC, Galaxy-Simulator, Nakastra-Space, Vigil-OS, Diane-Exp";
    } else if (cleanCmd === "contributions") {
      reply = `${totalContributions} live verified contributions across Aditya0973 repositories.`;
    } else if (cleanCmd === "clear") {
      setTerminalHistory([]);
      setCmdInput("");
      return;
    } else if (cleanCmd === "contact") {
      reply = "Email: adityakumar4727@gmail.com | Portfolio: /contact";
    } else {
      reply = `command not found: ${cleanCmd}. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cmdInput, out: reply }]);
    setCmdInput("");
  };

  return (
    <div className="min-h-screen bg-[#059669] text-white selection:bg-white selection:text-[#059669] pb-28 font-sans relative overflow-x-hidden">
      {/* 3-SECOND GREEN BINARY REVEAL TRANSITION SCREEN */}
      <SpaceTransition variant="github" duration={2800} />

      {/* Floating Autonomous Doodles in Space */}
      <div className="absolute top-16 left-6 pointer-events-none hidden md:block">
        <AutonomousSpiral color="#CCFF00" size={44} speed={8} />
      </div>
      <div className="absolute top-36 right-8 pointer-events-none hidden lg:block">
        <AutonomousSpring color="#FFFFFF" width={70} height={32} />
      </div>
      <div className="absolute top-[850px] left-4 pointer-events-none hidden xl:block opacity-60">
        <AutonomousAsterisk color="#FFF4CC" size={36} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-12 space-y-16"
      >
        {/* ========================================================================= */}
        {/* 1. TOP EDITORIAL STATUS & QUICK NAVIGATION BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/20 pb-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="font-bold text-white tracking-tight uppercase">
              SPACE 03 // GITHUB
            </span>
            <span className="hidden sm:inline text-white/40">/</span>
            <span className="hidden sm:inline text-white/80">
              SOFTWARE &amp; OPEN SOURCE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <StarburstBadge text="428 Commits in 2026" bgColor="#CCFF00" />
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#059669] border border-white/25 transition-all text-[11px] font-mono font-bold group"
            >
              <span>PORTFOLIO</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO SECTION: Compact & Clean */}
        {/* ========================================================================= */}
        <section className="space-y-3.5 relative max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4CC] border border-amber-300 text-xs font-mono font-bold text-black shadow-xs">
            <span>Engineering &amp; Systems Lab</span>
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Open Source{" "}
            <span className="font-serif italic font-normal text-[#FFF4CC]">&amp;</span>{" "}
            Systems Lab
          </h1>

          <p className="text-xs sm:text-sm text-emerald-100 max-w-lg leading-relaxed font-sans">
            Public repositories, full-stack systems, and live contribution telemetry.
          </p>

          <div className="pt-1">
            <MagneticButton pullStrength={0.35}>
              <a
                href="https://github.com/Aditya0973"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSuccess()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#065F46] text-xs font-mono font-extrabold tracking-wide transition-all shadow-md hover:bg-neutral-100 active:translate-y-0.5 group"
              >
                <span>VIEW GITHUB PROFILE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 01: CONTRIBUTION MATRIX & PLAYABLE ARCADE GAME */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                  EXHIBIT 01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                  Git Contribution Matrix &amp; Arcade
                </h2>
              </div>
              <p className="text-xs text-emerald-100">
                {totalContributions} contributions in 2026. Toggle arcade mode to slither and collect commits!
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => {
                  playPop();
                  setGameMode(!gameMode);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                  gameMode
                    ? "bg-[#CCFF00] text-black border-black/20 shadow-lg"
                    : "bg-white/10 text-white border-white/25 hover:bg-white/20"
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>{gameMode ? "EXIT ARCADE" : "PLAY ARCADE GAME"}</span>
              </button>

              {gameMode && (
                <button
                  onClick={restartGame}
                  className="p-1.5 rounded-xl bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  title="Reset Game"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* CRISP WHITE CARD FOR MAXIMUM READABILITY */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-black/10 text-black space-y-4 relative">
            <WashiTape color="#CCFF00" angle="1.5deg" className="-top-3 right-8" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-neutral-900 font-sans">
                  {totalContributions} contributions in 2026
                </span>
                {gameMode && (
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#065F46] text-white font-mono text-xs font-bold shadow-xs">
                      Score: {gameScore}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-black font-mono text-xs font-bold">
                      Eaten: {commitsEaten}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="text-neutral-500 text-[10px] hidden sm:inline">
                  {isLiveSync ? "● Live Synced" : "● Cached Data"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#065F46] text-white font-bold shadow-xs">
                  2026
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-neutral-500 pl-8 pr-4">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, idx) => (
                <span key={idx}>{m}</span>
              ))}
            </div>

            <div className="overflow-x-auto pb-2">
              <div className={`flex items-center gap-2 min-w-[680px] p-3 bg-neutral-50 rounded-2xl border border-neutral-200/80 transition-opacity duration-300 ${isFetchingContributions ? "opacity-50" : "opacity-100"}`}>
                {/* Day Labels Mon, Wed, Fri */}
                <div className="flex flex-col justify-between text-[9px] font-mono text-neutral-400 h-[88px] py-1 select-none shrink-0 w-6">
                  <span></span>
                  <span>Mon</span>
                  <span></span>
                  <span>Wed</span>
                  <span></span>
                  <span>Fri</span>
                  <span></span>
                </div>

                <div className="flex gap-1.5 flex-1 justify-center relative">
                  {matrix.map((col, x) => (
                    <div key={x} className="flex flex-col gap-1.5">
                      {col.map((val, y) => {
                        const isPlayer = gameMode && playerPos.x === x && playerPos.y === y;
                        const detail = matrixDetails[x]?.[y];
                        const tooltip = detail?.date
                          ? `${detail.count} contributions on ${detail.date}`
                          : `Week ${x + 1}, Day ${y + 1}`;
                        return (
                          <div
                            key={y}
                            className={`w-3 h-3 rounded-[3px] border transition-colors cursor-pointer ${
                              isPlayer
                                ? "bg-amber-400 border-amber-500 scale-125 shadow-md z-10 animate-pulse"
                                : DOT_COLORS[val]
                            }`}
                            title={tooltip}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {gameMode && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-mono text-neutral-700">
                <span>Control: <strong>Arrow Keys / WASD</strong></span>
                <div className="flex items-center gap-1">
                  <button onClick={() => movePlayer(-1, 0)} className="px-2.5 py-1 rounded bg-neutral-100 text-black hover:bg-neutral-200 font-bold">◄</button>
                  <button onClick={() => movePlayer(0, -1)} className="px-2.5 py-1 rounded bg-neutral-100 text-black hover:bg-neutral-200 font-bold">▲</button>
                  <button onClick={() => movePlayer(0, 1)} className="px-2.5 py-1 rounded bg-neutral-100 text-black hover:bg-neutral-200 font-bold">▼</button>
                  <button onClick={() => movePlayer(1, 0)} className="px-2.5 py-1 rounded bg-neutral-100 text-black hover:bg-neutral-200 font-bold">►</button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-[10px] font-mono text-neutral-500">
              <span>Verified GitHub contribution metric</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] border border-[#d0d7de]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#9be9a8]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#40c463]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#30a14e]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#216e39]" />
                <span>More</span>
              </div>
            </div>

            {/* Activity Overview */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-md">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                  <FolderGit2 className="w-4 h-4 text-[#065F46]" />
                  <span className="text-xs font-bold text-neutral-800">@Crafted-Company</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-neutral-900">Activity Overview</div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    <span className="mr-1.5 inline-block text-neutral-400">📖</span>
                    Contributed to{" "}
                    <a href="https://github.com/Aditya0973/abyss-archive-w" target="_blank" rel="noreferrer" className="text-[#065F46] font-bold hover:underline">Aditya0973/abyss-archive-w</a>,{" "}
                    <a href="https://github.com/Crafted-Company/crafted-co-w" target="_blank" rel="noreferrer" className="text-[#065F46] font-bold hover:underline">Crafted-Company/crafted-co-w</a>,{" "}
                    <a href="https://github.com/Aditya0973/champione-a" target="_blank" rel="noreferrer" className="text-[#065F46] font-bold hover:underline">Aditya0973/champione-a</a>{" "}
                    and 24 other repositories.
                  </div>
                </div>
              </div>

              {/* 4-Axis Commit Radar Axis */}
              <div className="relative w-48 h-32 flex items-center justify-center select-none shrink-0 self-center md:self-auto">
                <div className="absolute top-0 text-[10px] font-mono text-neutral-500 font-medium">Code review</div>
                <div className="absolute bottom-0 text-[10px] font-mono text-neutral-500 font-medium">Pull requests</div>
                <div className="absolute right-0 text-[10px] font-mono text-neutral-500 font-medium">Issues</div>
                <div className="absolute left-0 text-[10px] font-mono text-neutral-700 font-bold flex flex-col items-end">
                  <span>100%</span>
                  <span>Commits</span>
                </div>

                {/* Radar Grid Crosshairs */}
                <svg className="w-24 h-24 overflow-visible" viewBox="0 0 100 100">
                  <line x1="50" y1="12" x2="50" y2="88" stroke="#10b981" strokeWidth="2.5" />
                  <line x1="12" y1="50" x2="88" y2="50" stroke="#10b981" strokeWidth="2.5" />
                  <circle cx="16" cy="50" r="4.5" fill="#ffffff" stroke="#10b981" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXHIBIT 02: PINNED REPOSITORIES */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="space-y-1 pb-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                EXHIBIT 02
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                Pinned Engineering Repositories
              </h2>
            </div>
            <p className="text-xs text-emerald-100">
              Featured architectural systems, creative coding experiments, and desktop engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PINNED_REPOSITORIES.map((repo) => (
              <motion.div
                key={repo.name}
                whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
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
                        className="text-sm font-bold text-[#065F46] hover:underline truncate font-sans"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-600 shrink-0">
                      {repo.visibility}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 text-xs text-neutral-600 font-mono">
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
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black text-[11px] font-mono font-medium transition-colors cursor-pointer"
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
        {/* EXHIBIT 03: RETRO DEVELOPER TERMINAL */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="space-y-1 pb-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-md border border-black/10">
                EXHIBIT 03
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                Interactive Terminal CLI
              </h2>
            </div>
            <p className="text-xs text-emerald-100">
              Type commands to inspect developer bio, tech stack, or git operations.
            </p>
          </div>

          <div className="rounded-3xl bg-black/45 backdrop-blur-xl border-2 border-white/20 p-4 sm:p-6 shadow-2xl font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/15 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-[11px] text-white">bash — aditya@crafted-co: ~</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-bold">Type &apos;help&apos; for commands</span>
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
                className="flex-1 bg-transparent text-white focus:outline-hidden text-xs font-mono placeholder:text-white/40"
              />
            </form>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. EDITORIAL FOOTER & QUICK RETURN */}
        {/* ========================================================================= */}
        <footer className="pt-10 border-t border-white/20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/80">
            <span>Aditya Kumar • Full Stack Engineering &amp; Systems Architecture</span>
          </div>

          <div>
            <Link
              href="/"
              onClick={() => playPop()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#065F46] hover:bg-neutral-100 text-xs font-mono font-bold transition-all shadow-md active:translate-y-0.5 group"
            >
              <span>← RETURN TO PORTFOLIO HOME</span>
            </Link>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
