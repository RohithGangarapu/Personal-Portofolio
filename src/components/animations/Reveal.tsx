"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  yOffset?: number;
  delay?: number;
  duration?: number;
}

export function Reveal({
  children,
  width = "fit-content",
  yOffset = 30,
  delay = 0,
  duration = 0.8,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    
    gsap.fromTo(
      ref.current,
      { y: yOffset, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%", // Trigger when the top of the element hits 90% of viewport
          once: true,
        },
      }
    );
  }, { scope: ref });

  return (
    <div style={{ width, position: "relative", overflow: "hidden" }}>
      <div ref={ref} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
}
