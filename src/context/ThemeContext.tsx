"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemePreset = "sand" | "sage" | "rose" | "clay";
export type FontPreset = "inter" | "serif" | "mono";

interface ThemeContextType {
  theme: ThemePreset;
  setTheme: (theme: ThemePreset) => void;
  font: FontPreset;
  setFont: (font: FontPreset) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  colors: {
    bg: string;
    card: string;
    border: string;
    accent: string;
    accentHover: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_CONFIGS: Record<
  ThemePreset,
  { name: string; bg: string; card: string; border: string; accent: string; accentHover: string }
> = {
  sand: {
    name: "Warm Sand",
    bg: "#e9e6e2",
    card: "#f5f2f0",
    border: "#e5e2de",
    accent: "#4a5d4e", // The original Framer sage green
    accentHover: "#3d4f41"
  },
  sage: {
    name: "Forest Pine",
    bg: "#e3e8e3",
    card: "#edf3ed",
    border: "#d5dfd5",
    accent: "#1b4d2e",
    accentHover: "#143a22"
  },
  rose: {
    name: "Dusty Terracotta",
    bg: "#ede4e1",
    card: "#f7eeec",
    border: "#e5d7d4",
    accent: "#8c4438",
    accentHover: "#73362c"
  },
  clay: {
    name: "Warm Umber",
    bg: "#e7e1d9",
    card: "#efe9e2",
    border: "#ddd4c9",
    accent: "#6b4f3b",
    accentHover: "#553e2e"
  }
};

export const FONT_CONFIGS: Record<FontPreset, { name: string; className: string }> = {
  inter: { name: "Inter Display", className: "font-sans" },
  serif: { name: "Editorial Serif", className: "font-serif" },
  mono: { name: "Architect Mono", className: "font-mono" }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreset>("sand");
  const [font, setFontState] = useState<FontPreset>("inter");
  const [soundEnabled, setSoundEnabledState] = useState(true);

  // Load from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme") as ThemePreset | null;
    const savedFont = localStorage.getItem("portfolio_font") as FontPreset | null;
    const savedSound = localStorage.getItem("portfolio_sound");

    if (savedTheme && THEME_CONFIGS[savedTheme]) setThemeState(savedTheme);
    if (savedFont && FONT_CONFIGS[savedFont]) setFontState(savedFont);
    if (savedSound !== null) setSoundEnabledState(savedSound === "true");
  }, []);

  const setTheme = (newTheme: ThemePreset) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
  };

  const setFont = (newFont: FontPreset) => {
    setFontState(newFont);
    localStorage.setItem("portfolio_font", newFont);
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    localStorage.setItem("portfolio_sound", String(enabled));
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const currentColors = THEME_CONFIGS[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        font,
        setFont,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
        colors: currentColors
      }}
    >
      <div
        className={`${FONT_CONFIGS[font].className} transition-colors duration-500 min-h-screen`}
        style={{
          backgroundColor: currentColors.bg,
          color: "#000000",
          // CSS custom properties for reactive styling across the site
          // @ts-ignore
          "--theme-bg": currentColors.bg,
          "--theme-card": currentColors.card,
          "--theme-border": currentColors.border,
          "--theme-accent": currentColors.accent,
          "--theme-accent-hover": currentColors.accentHover
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("usePortfolioTheme must be used within a ThemeProvider");
  }
  return context;
}
