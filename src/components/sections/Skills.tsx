"use client";

import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { skills } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { SectionHeading } from "../layout/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    
    // Animate the progress bars when they come into view
    gsap.fromTo(
      ".skill-progress-fill",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-transparent relative z-10">
      <Container>
        <SectionHeading title="Technical Arsenal" subtitle="Skills & Tools" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.1}>
              <div className="flex flex-col gap-6">
                <Typography variant="mono" className="text-sm text-secondary uppercase tracking-wider font-semibold">
                  {category}
                </Typography>
                <div className="flex flex-col gap-5">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <Typography variant="p" className="text-sm font-medium text-primary mt-0">
                          {skill.name}
                        </Typography>
                        <Typography variant="mono" className="text-xs text-muted mt-0">
                          {skill.percentage}%
                        </Typography>
                      </div>
                      <div className="h-1 w-full bg-surface rounded-full overflow-hidden">
                        <div 
                          className="skill-progress-fill h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full origin-left"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
