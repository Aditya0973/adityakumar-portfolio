# ✦ Aditya Kumar — Portfolio Ecosystem (2026)

> *"I make things pretty & make them work."*
> 
> A tactile, scrapbook-inspired digital portfolio and interactive ecosystem showcasing Product Design, Design Engineering, 3D Visual Arts, and Full-Stack Systems.

---

## 🎨 Design Philosophy & Vision

This portfolio challenges monotonous corporate templates by fusing **Scrapbook Neobrutalism**, **Tactile Physical Microinteractions**, and **Living Software Spaces**. Every screen is engineered to feel like a tangible physical instrument with spring physics, hand-drawn sketch doodles, procedural sound feedback, and responsive tactile depth.

### Core Pillars
1. **Design System Polymorphism**: Demonstrating mastery across multiple aesthetic design movements (Neubrutalism, Skeuomorphism, Spatial Glassmorphism, Swiss Minimalist Typography, and Cyber Retro).
2. **Tactile Microinteractions**: Procedural audio synthesized via the Web Audio API, spring physics with Framer Motion, magnetic button snapping, and cursor-aware focal states.
3. **Multi-Space Immersion**: 4 distinct color-flooded digital spaces connected through custom-built fluid cinematic splash transitions.

---

## 🌐 The 4 Spaces

```
                        ┌────────────────────────┐
                        │   ADITYA KUMAR FOLIO   │
                        └───────────┬────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       │                            │                            │
┌──────┴──────┐              ┌──────┴──────┐              ┌──────┴──────┐
│   BEHANCE   │              │   GITHUB    │              │ CRAFTED CO. │
│  02 / BLUE  │              │  03 / GREEN │              │ 04 / INDIGO │
└─────────────┘              └─────────────┘              └─────────────┘
```

### 1. Main Portfolio Space (`/`)
- **Aesthetic**: Warm Terracotta Rust (`#E65100`) on tactile Ivory Canvas (`#FAF8F5`).
- **Highlights**:
  - Hero with animated dynamic badge, profile Polaroid card, and quick project launchpad.
  - **Selected Works**: Interactive project cards with diagonal accent badges, multi-color animated squiggly hyperlinks, and deep-dive case study modals.
  - **Creative Capabilities Matrix**: Collapsible tactile cards with physical spring mechanics and auto-reset rest states.
  - **Review Wall**: Infinite horizontal review carousel with tactile review cards.
  - **Interactive Dock**: Quick launch navigation dock for instant teleportation across spaces.
  - **Screen Sketch Canvas**: Blackboard draw-on-screen tool for instant visual sketching.
  - **Project Hail Mary Easter Egg**: Interactive fist-bump interaction with Rocky sound effects and physics.

### 2. Behance Space (`/behance`)
- **Theme**: Electric Cobalt Blue (`#0057FF`) with neon lime accents (`#CCFF00`).
- **Splash Screen**: Viscous paint bucket liquid flood rising smoothly from the bottom with floating design icons.
- **Exhibit 01 — 36-Asset Bento Grid**:
  - FocusCards hover effect (blurs surrounding cards and elevates the hovered card).
  - Kinetic morphing algorithm changing 1–2 cards randomly every 1.8s.
  - 1-click single-card and full-gallery shuffle.
- **Exhibit 02 — Figma Auto Layout Studio**:
  - Live interactive replica of Figma's auto-layout properties sidebar (direction, 9-point alignment matrix, gap, padding, wrap/grid flow, and clip content).
- **Exhibit 03 — Blender 3D Donut Turntable & Color Alchemist**:
  - 3D viewport turntable with multi-speed playback and procedural HSL color matching minigame.

### 3. GitHub Space (`/github`)
- **Theme**: Fresh Emerald Green (`#059669`) with binary green accents (`#10B981`).
- **Splash Screen**: Cascading emerald matrix binary rain multiplying and flooding the screen into solid green.
- **Exhibit 01 — 2026 Contribution Matrix & Playable Arcade**:
  - Real-time verified commit tracker (428 contributions in 2026).
  - Playable retro snake/commit-eater arcade game directly on the contribution grid with keyboard and on-screen D-pad.
- **Exhibit 02 — Pinned Repositories**:
  - Verified repository cards (`ISN-Exp`, `Crafted-Studio-PC`, `Galaxy-Simulator`, `Nakastra-Space`, `Vigil-OS`, `Diane-Exp`) with 1-click clipboard `git clone` action.
- **Exhibit 03 — Developer Terminal CLI**:
  - Interactive terminal supporting `whoami`, `skills`, `repos`, `contributions`, `clear`, and `help`.

### 4. Crafted Co. Space (`/crafted`)
- **Theme**: Cosmic Indigo (`#5B50EC`) with tactile neobrutalist accents.
- **Splash Screen**: Minimal vector parcel delivery truck with physical cardboard package drop & bounce, driving across the screen pulling an expanding Cosmic Indigo curtain sweep.
- **Exhibit 01 — Product Lab Suite**:
  - Interactive switcher for active studio builds (*Crafted Studio PC*, *Craftnime*, *Spatial Music Player*, *Crafted Store Hub*).
  - Tech stack metrics and spec sheets.
- **Exhibit 02 — Live Design System Token Forge**:
  - Dark Figma-style variable controller (Border Radius slider, Accent Token palette, Shadow Elevation modes) driving a live dynamic blueprint component in real time.
- **Exhibit 03 — Engineering & Craft Principles**:
  - Bento deck highlighting *Zero Compromise Performance*, *Offline-First Sovereignty*, *Tactile Microinteractions*, and *Token-Driven Architecture*.

---

## 🛠 Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.3.5](https://nextjs.org/) (App Router, Server Components, Turbopack) |
| **Language** | TypeScript 5 (Strict Mode, 100% Type-Safe) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Custom Variables + Neubrutalist Shadows |
| **Motion & Physics** | [Framer Motion 12](https://www.framer.com/motion/) (Layout Morphing, Gesture Springs, AnimatePresence) |
| **Audio Engine** | Procedural Web Audio API (Synthesized clicks, pops, chimes, and tick cues) |
| **3D & Vector Art** | Blender 4.2 OptiX renders + Custom Math-Drawn SVGs |
| **Icons** | Lucide React + Hand-Drawn Vector Doodles |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm / pnpm / yarn

### Installation
```bash
# Clone repository
git clone https://github.com/Aditya0973/adityakumar-portfolio.git
cd adityakumar-portfolio

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the portfolio.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root Layout with custom cursor, sound manager, preloader
│   ├── page.tsx                # Space 01: Main Portfolio & Selected Works
│   ├── about/page.tsx          # About, Experience, Education & Certificates
│   ├── work/page.tsx           # Case Studies Archive & Filter Index
│   ├── work/[slug]/page.tsx    # Dynamic Case Study Deep Dives
│   ├── behance/page.tsx        # Space 02: 3D Artworks & Figma Auto Layout Studio
│   ├── github/page.tsx         # Space 03: Live Commits, Arcade Matrix & Terminal
│   ├── crafted/page.tsx        # Space 04: Software Studio & Design System Token Forge
│   └── contact/page.tsx        # Contact & Collaboration Deck
├── components/
│   ├── CreativeNav.tsx         # Responsive Header & Fullscreen Drawer Nav
│   ├── SpaceTransition.tsx     # Custom Splash Screen Animations (Behance, GitHub, Crafted)
│   ├── DesignerCursor.tsx      # Stylus Precision Pointer & Magnetic Ring
│   ├── InteractiveDock.tsx     # Quick Space Teleportation Dock
│   ├── SketchDoodles.tsx       # Hand-Drawn SVG Doodles (Spirals, Springs, Washi Tape, Pins)
│   ├── SquigglyLink.tsx        # Kinetic SVG Underline Hyperlinks
│   ├── ScreenSketchCanvas.tsx  # Interactive Screen Blackboard Drawing Tool
│   └── ...
├── data/
│   └── portfolio.ts            # Centralized Case Study & Project Datasets
└── utils/
    └── soundEffects.ts         # Procedural Web Audio API Sound Synthesizer
```

---

## 👤 Author

**Aditya Kumar**
- **Role**: Product Designer & Design Engineer
- **GitHub**: [@Aditya0973](https://github.com/Aditya0973)
- **Behance**: [Aditya Kumar on Behance](https://www.behance.net/1c5da35f)
- **Studio**: [Crafted Co.](https://crafted-co.vercel.app)
- **Email**: [adityakumar4727@gmail.com](mailto:adityakumar4727@gmail.com)

---

## 📄 License

MIT License © 2026 Aditya Kumar. Built with craft & precision.

