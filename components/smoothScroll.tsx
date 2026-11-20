"use client";
import React from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.3, wheelMultiplier: 0.9, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}