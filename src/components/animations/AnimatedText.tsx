"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedTextProps {
  text: string | React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // If text is a simple string, we can split it, but for a simple premium feel
    // and supporting ReactNodes (like `<br/>`), we just do a simple clip path reveal 
    // or line-up animation on the wrapper.
    gsap.fromTo(
      ref.current,
      { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {text}
    </div>
  );
}
