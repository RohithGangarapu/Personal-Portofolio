import * as React from "react";
import { Container } from "./Container";
import { Button } from "../core/Button";
import { Typography } from "../core/Typography";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
            <Typography variant="mono" className="text-primary font-bold">
              Rohith Sai Ganesh
            </Typography>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#work" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Experience
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
