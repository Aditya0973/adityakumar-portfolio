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
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_CONFIGS: Record<ThemePreset, { name: string; bg: string; card: string; border: string; accent: string }> = {
  sand: {
    name: "Warm Sand",
    bg: "#e9e6e2",
    card: "#f5f2f0",
    border: "#e5e2de",
    accent: "#4a5d4e"
  },
  sage: {
    name: "Sage Mint",
    bg: "#e2e8e2",
    card: "#edf2ed",
    border: "#dce3dc",
    accent: "#2e5a36"
  },
  rose: {
    name: "Dusty Rose",
    bg: "#ede4e4",
    card: "#f7eded",
    border: "#e5dada",
    accent: "#7c3a4d"
  },
  clay: {
    name: "Earth Clay",
    bg: "#e6e0da",
    card: "#eeeae4",
    border: "#ded7cf",
    accent: "#6b4f3b"
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

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        font,
        setFont,
        soundEnabled,
        setSoundEnabled,
        toggleSound
      }}
    >
      <div
        className={`${FONT_CONFIGS[font].className} transition-colors duration-500 min-h-screen`}
        style={{
          backgroundColor: THEME_CONFIGS[theme].bg,
          color: "#000000"
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
