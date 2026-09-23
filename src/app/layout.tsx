import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { InteractiveDock } from "@/components/InteractiveDock";
import { DesignerPlayground } from "@/components/DesignerPlayground";
import { ClickSpark } from "@/components/ClickSpark";
import { Preloader } from "@/components/Preloader";
import { AppLayoutWrapper } from "@/components/AppLayoutWrapper";
import { SpacesDiscoveryNudge } from "@/components/SpacesDiscoveryNudge";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { DesignerCursor } from "@/components/DesignerCursor";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aditya Kumar — Product Designer & Engineer",
  description: "Playful, human-sketched digital experiences, interfaces, and design systems by Aditya Kumar. Based in India.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/media/aditya.jpg", type: "image/jpeg" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#121212] font-sans antialiased selection:bg-[#0057FF] selection:text-white relative overflow-x-hidden">
        <ThemeProvider>
          {/* Custom Designer Stylus Pointer with Magnetic Precision Ring */}
          <DesignerCursor />

          {/* Green Designer Preloader Screen */}
          <Preloader />

          {/* Energetic Click Spark on pointer interaction */}
          <ClickSpark sparkRadius={24} sparkCount={10} />

          {/* Dynamic layout wrapper */}
          <AppLayoutWrapper>{children}</AppLayoutWrapper>

          {/* Floating Interactive Spaces Dock */}
          <InteractiveDock />

          {/* Designer Interactive Easter Egg Playground */}
          <DesignerPlayground />

          {/* Quirky 15s Spaces Discovery Nudge Dialog */}
          <SpacesDiscoveryNudge />

          {/* Vercel Web Analytics */}
          <Analytics />

          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
