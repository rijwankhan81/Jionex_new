// Lightweight Lenis setup. The menu uses data-lenis-prevent so native
// scrolling remains available inside the mobile navigation.
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.08,
      wheelMultiplier: 2,
      touchMultiplier: 2,
      respectReducedMotion: false,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
