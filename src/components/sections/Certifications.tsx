import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { certifications } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { SectionHeading } from "../layout/SectionHeading";

export function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-16 md:py-24 bg-transparent relative z-10">
      <Container>
        <SectionHeading title="Certifications" subtitle="Continuous Learning" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group h-full p-8 rounded-2xl bg-surface/50 border border-border hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden backdrop-blur-sm flex flex-col justify-between">
                
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Typography variant="mono" className="text-xs text-[#3B82F6] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
                      {cert.issuer}
                    </Typography>
                  </div>
                  
                  <Typography variant="h3" className="text-xl text-primary font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </Typography>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
