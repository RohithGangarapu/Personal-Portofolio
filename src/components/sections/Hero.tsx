import * as React from "react";
import { Container } from "../layout/Container";
import { Typography } from "../core/Typography";
import { Button } from "../core/Button";
import { metadata } from "@/data/portfolio";
import { Reveal } from "../animations/Reveal";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal delay={0.2}>
              <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-secondary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                Available for new opportunities
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <Typography variant="h1" className="mb-2 text-balance">
                <span className="block text-primary text-3xl md:text-5xl mb-2">
                  Hi, I&apos;m {metadata.name}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mb-2 mt-4 text-4xl md:text-6xl font-extrabold">
                  {metadata.title}
                </span>
              </Typography>
            </Reveal>
            
            {/* Simplified Tagline */}
            <div className="flex flex-col gap-4 mb-8">
              <Reveal delay={0.4}>
                <Typography variant="p" className="text-secondary text-xl leading-relaxed mt-0">
                  {metadata.description}
                </Typography>
              </Reveal>
            </div>
            
            <Reveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow">
                  <a href="#work">View Selected Work</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </Reveal>
            
            <Reveal delay={0.7}>
              <div className="flex items-center gap-6">
                <a href={metadata.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                  <svg className="w-5 h-5 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <Typography variant="mono" className="text-sm">GitHub</Typography>
                </a>
                
                <a href={metadata.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                  <svg className="w-5 h-5 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <Typography variant="mono" className="text-sm">LinkedIn</Typography>
                </a>

                <a href={metadata.leetcode} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#FFA116] transition-colors flex items-center gap-2 group">
                  <svg className="w-5 h-5 group-hover:text-[#FFA116] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.11-.702-1.823 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.111-.662 1.823-.662s1.356.195 1.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.215 0l-4.32 4.38a5.053 5.053 0 0 0 0 7.215l4.332 4.363a5.055 5.055 0 0 0 7.215 0l2.609-2.637c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.038zM20.811 11.28H14.17a1.769 1.769 0 0 0-1.767 1.766 1.769 1.769 0 0 0 1.767 1.766h6.642a1.769 1.769 0 0 0 1.767-1.766 1.769 1.769 0 0 0-1.767-1.766z"/>
                  </svg>
                  <Typography variant="mono" className="text-sm">LeetCode</Typography>
                </a>

                <a href={metadata.resume} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                  <svg className="w-5 h-5 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <Typography variant="mono" className="text-sm">Resume</Typography>
                </a>
              </div>
            </Reveal>
          </div>
          
          {/* Abstract Glowing AI Core */}
          <div className="lg:col-span-6 hidden lg:flex justify-center items-center h-full w-full">
            <Reveal delay={0.6} width="100%">
              <div className="w-full aspect-square max-h-[500px] relative rounded-full flex items-center justify-center">
                {/* Core layers */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-600/30 rounded-full blur-[80px] animate-blob"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-indigo-500/40 rounded-full blur-[60px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-cyan-400/50 rounded-full blur-[40px] animate-blob animation-delay-4000 mix-blend-screen"></div>
                
                {/* Floating particles/accents */}
                <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_10px_#60A5FA]"></div>
                  <div className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-indigo-400 rounded-full blur-[2px] shadow-[0_0_15px_#818CF8]"></div>
                  <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-cyan-300 rounded-full blur-[1px] shadow-[0_0_8px_#67E8F9]"></div>
                </div>
                
                {/* Center Solid Core */}
                <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#141414] to-[#0A0A0A] rounded-full border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.5),inset_0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center backdrop-blur-xl">
                  <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#FFFFFF,0_0_40px_#60A5FA] animate-pulse"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
      
      {/* Decorative subtle background gradient */}
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
