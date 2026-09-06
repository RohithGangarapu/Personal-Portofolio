import * as React from "react";
import { Container } from "./Container";
import { Typography } from "../core/Typography";
import { metadata } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0">
            <Typography variant="h4" className="text-primary">
              RSG<span className="text-[#3B82F6]">.dev</span>
            </Typography>
            <Typography variant="mono" className="text-secondary mt-2">
              © {new Date().getFullYear()} Rohith Sai Ganesh. All rights reserved.
            </Typography>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={metadata.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Typography variant="small">GitHub</Typography>
            </a>
            <a href={metadata.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Typography variant="small">LinkedIn</Typography>
            </a>
            <a href={metadata.leetcode} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#FFA116] transition-colors">
              <Typography variant="small">LeetCode</Typography>
            </a>
            <a href={`mailto:${metadata.email}`} className="text-secondary hover:text-primary transition-colors">
              <Typography variant="small">Email</Typography>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
