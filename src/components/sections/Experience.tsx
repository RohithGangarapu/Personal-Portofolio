import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { experience } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { SectionHeading } from "../layout/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-transparent relative z-10">
      <Container>
        {/* Highlighted Container Wrap */}
        <div className="relative rounded-3xl border border-border/60 bg-background/60 backdrop-blur-xl p-8 md:p-16 shadow-[0_0_40px_rgba(59,130,246,0.05)] overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          <SectionHeading title="Experience" subtitle="Career Journey" />

        <div className="max-w-4xl mx-auto relative border-l border-border hover:border-blue-500/30 transition-colors duration-700 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {experience.map((job, index) => (
            <Reveal key={index} delay={0.1}>
              <div className="relative group p-6 -ml-6 rounded-2xl hover:bg-surface/80 transition-all duration-500 border border-transparent hover:border-border/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-7 md:top-8 h-4 w-4 rounded-full bg-surface border-2 border-border group-hover:border-[#3B82F6] transition-colors duration-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <Typography variant="h3" className="text-2xl md:text-3xl font-semibold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500">
                    {job.role}
                  </Typography>
                  <Typography variant="mono" className="text-secondary text-sm shrink-0">
                    {job.period}
                  </Typography>
                </div>
                
                <Typography variant="large" className="text-primary mb-4">
                  @ {job.company}
                </Typography>
                
                <ul className="flex flex-col gap-3 mt-4">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#3B82F6] mt-1.5 opacity-80 text-xs">▹</span>
                      <Typography variant="p" className="text-secondary mt-0 leading-relaxed text-sm">
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </Container>
    </section>
  );
}
