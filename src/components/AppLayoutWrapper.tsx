"use client";

import React from "react";
import { CreativeNav } from "@/components/CreativeNav";
import { ScreenSketchCanvas } from "@/components/ScreenSketchCanvas";

export function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      {/* Floating Creative Navigation Header with Squiggly Underlines */}
      <CreativeNav />

      {/* Main Content Area (Full Canvas) */}
      <main className="flex-1 w-full min-w-0">{children}</main>

      {/* Desktop Freehand Screen Sketching Canvas Tool */}
      <ScreenSketchCanvas />
    </div>
  );
}
