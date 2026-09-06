"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function SystemCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle rotation and pulsing for a "system core" feel without heavy 3D
    gsap.to(".core-ring", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
    
    gsap.to(".core-ring-inner", {
      rotation: -360,
      transformOrigin: "center center",
      duration: 15,
      ease: "none",
      repeat: -1,
    });
    
    gsap.to(".core-center", {
      scale: 1.1,
      opacity: 0.8,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center opacity-80">
      {/* Outer Ring */}
      <svg className="core-ring absolute inset-0 w-full h-full text-[#262626]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        <circle cx="50" cy="50" r="48" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="42" strokeDasharray="1 8" strokeWidth="2" />
      </svg>
      
      {/* Inner Ring */}
      <svg className="core-ring-inner absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] text-[#3B82F6] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="50" r="40" strokeDasharray="2 6" />
        <polygon points="50,15 85,50 50,85 15,50" strokeDasharray="1 4" />
      </svg>
      
      {/* Center Node */}
      <div className="core-center absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-surface border border-border shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center justify-center">
        <span className="text-[#3B82F6] font-mono font-bold tracking-widest text-sm md:text-base opacity-90 relative">
          rsg.dev
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span>
        </span>
      </div>
    </div>
  );
}
