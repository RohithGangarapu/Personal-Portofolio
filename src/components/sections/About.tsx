import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { Reveal } from "../animations/Reveal";
import { SectionHeading } from "../layout/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface/80 backdrop-blur-sm border-y border-border/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-12 flex flex-col">
            <SectionHeading title="About Me" subtitle="Who am I?" />
            
            <Reveal delay={0.2}>
              <Typography variant="p" className="text-secondary text-lg leading-relaxed mt-0 max-w-4xl">
                I am an AI Engineer specializing in architecting end-to-end Full Stack AI applications powered by Python. My expertise lies at the intersection of robust backend engineering and cutting-edge intelligence—transforming raw concepts into scalable, autonomous systems. From developing resilient infrastructure to engineering complex, multi-agent workflows and deeply integrated Gen AI solutions, I orchestrate Large Language Models (LLMs) to solve real-world problems with unprecedented efficiency and precision.
              </Typography>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
