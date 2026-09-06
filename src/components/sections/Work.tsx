import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { projects } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";
import { SectionHeading } from "../layout/SectionHeading";

export function Work() {
  return (
    <section id="work" className="py-16 md:py-24 bg-transparent relative z-10">
      <Container>
        <SectionHeading title="Projects" subtitle="Selected Work" />

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* Project Info */}
                <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                  <div className="flex items-center gap-4">
                    <Typography variant="mono" className="text-[#3B82F6]">
                      {project.id}
                    </Typography>
                    <Typography variant="h3" className="text-2xl">
                      {project.title}
                    </Typography>
                  </div>
                  
                  <Typography variant="lead" className="text-primary">
                    {project.description}
                  </Typography>

                  <div className="flex flex-col gap-4 mt-2">
                    <div>
                      <Typography variant="mono" className="text-secondary mb-1">Problem:</Typography>
                      <Typography variant="p" className="mt-0 text-secondary text-sm">
                        {project.problem}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="mono" className="text-secondary mb-1">Solution:</Typography>
                      <Typography variant="p" className="mt-0 text-secondary text-sm">
                        {project.solution}
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="mono" className="text-secondary mb-1">Impact:</Typography>
                      <Typography variant="p" className="mt-0 text-primary font-medium text-sm">
                        {project.results}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-mono text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-secondary hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-secondary hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Image / Visual Representation */}
                <div className="lg:col-span-7 h-[350px] md:h-[450px] bg-background rounded-2xl flex items-center justify-center p-1 order-1 lg:order-2 overflow-hidden relative group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-shadow duration-700">
                  {/* Animated Gradient Border effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#262626] via-[#141414] to-[#3B82F6] opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-2xl"></div>
                  
                  {/* Inner Container */}
                  <div className="relative w-full h-full bg-surface rounded-[15px] border border-border/50 overflow-hidden group/img flex flex-col items-center justify-center z-10 backdrop-blur-xl">
                    {/* Glow behind video */}
                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700 z-0"></div>
                    
                    {/* Using type assertion for video property */}
                    {project.video ? (
                      <div className="relative w-full h-full z-10 overflow-hidden">
                        <video 
                          src={project.video} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover object-center opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" 
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center z-10 p-8 text-center border-dashed border-2 border-border m-6 rounded-xl">
                        <Typography variant="mono" className="text-xs text-muted mb-2 tracking-widest uppercase">
                          {"// Missing Video"}
                        </Typography>
                        <Typography variant="p" className="text-secondary text-sm mt-0">
                          Add a video to <code className="bg-background px-1 rounded">public{project.video}</code>
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
