import * as React from "react";
import { Typography } from "@/components/core/Typography";
import { Reveal } from "@/components/animations/Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "left" }: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "items-center text-center" : "items-start text-left";
  
  return (
    <div className={`flex flex-col ${alignClass} mb-16 md:mb-24`}>
      <Reveal>
        <div className={`flex flex-col ${alignClass}`}>
          {subtitle && (
            <Typography variant="mono" className="text-[#3B82F6] mb-4 uppercase tracking-widest text-sm font-semibold">
              {subtitle}
            </Typography>
          )}
          <Typography variant="h2" className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            {title}
          </Typography>
          <div className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
        </div>
      </Reveal>
    </div>
  );
}
