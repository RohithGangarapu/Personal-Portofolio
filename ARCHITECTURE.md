# Portfolio Architecture & Plan

## 1. Project Overview
This document outlines the architecture, design system, and responsive strategy for the Premium Developer Portfolio. The goal is to build a minimal, classy, technical, and modern portfolio for a software engineer.

## 2. Technology Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (ScrollTrigger), Framer Motion (for page transitions/micro-interactions where GSAP is overkill), Lenis (smooth scrolling)
- **3D**: Spline (React-Spline, conditionally loaded)
- **Code Quality**: ESLint, Prettier

## 3. Folder Structure
The Next.js App Router will follow a feature-driven/component-driven structure:
```text
.
├── src
│   ├── app               # Next.js App Router (pages, layouts)
│   ├── components        # Reusable UI components
│   │   ├── core          # Base components (Button, Typography)
│   │   ├── layout        # Navigation, Footer, Container
│   │   ├── sections      # Hero, About, Work, Experience, Contact
│   │   └── ui            # Complex UI components
│   ├── lib               # Utility functions, GSAP setups
│   ├── styles            # Global CSS, Tailwind configurations
│   ├── types             # TypeScript definitions
│   └── data              # Static data (Projects, Experience, Metrics)
├── public                # Static assets (images, fonts, spline exports)
├── PROJECT_STATUS.md     # Development state tracking
└── ARCHITECTURE.md       # Project architecture and planning
```

## 4. Design System

### Typography
- **Primary (UI/Content)**: Clean, modern sans-serif (e.g., *Inter* or *Geist Sans*)
- **Secondary (Technical/Metadata)**: Developer-oriented monospace (e.g., *Geist Mono* or *JetBrains Mono*)
- Uses CSS `clamp()` for fluid responsive font scaling.

### Colors
- **Background**: `#0A0A0A` (Near-black)
- **Surface**: `#141414` (Slightly lighter dark neutral)
- **Text (Primary)**: `#EDEDED` (Off-white)
- **Text (Secondary)**: `#A3A3A3` (Muted gray)
- **Accent**: `#3B82F6` (Subtle blue) or `#F5F5F5` (High-contrast white for ultimate minimalism)

### Spacing & Layout
- A strict 4px/8px grid system via Tailwind tokens.
- Max-width containers (e.g., `max-w-7xl`) centered to maintain layout integrity on ultrawide displays.

## 5. Animation Architecture

### Philosophy
"Minimal motion with exceptional execution." Animations should support the content, not dominate it.

### Tools
- **GSAP + ScrollTrigger**: For complex, scroll-linked animations and precise timeline control (e.g., section reveals, parallax, architecture visualizations).
- **Framer Motion**: For simple React-based interactions (layout animations, AnimatePresence for page transitions).
- **Lenis**: Lightweight smooth scroll wrapper around the main layout.

### Usage
- **Page Transitions**: Subtle fade/clip path reveals.
- **Section Reveals**: Slight `translateY` (e.g., 20px) + `opacity` fade-in triggered by GSAP ScrollTrigger.
- **Micro-interactions**: Magnetic buttons, subtle image scale on hover.
- **Performance**: Animate only `transform` and `opacity`. Use `will-change` selectively. Context cleanup via GSAP's `useGSAP`.

## 6. Responsive Strategy

### Breakpoints
- **Desktop (Large)**: `1920px+` (Max container width applied)
- **Desktop (Standard)**: `1440px`
- **Laptop**: `1280px` (Tailwind `xl`)
- **Tablet**: `1024px` (Tailwind `lg`)
- **Mobile (Large)**: `768px` (Tailwind `md`)
- **Mobile (Standard)**: `430px` / `390px`
- **Mobile (Small)**: `360px` (Ensuring no overflow or broken typography)

### Approach
- Fluid typography and spacing using `clamp()`.
- Flexbox/CSS Grid layouts that reflow gracefully.
- Touch-friendly tap targets (`min-h-[44px]`).
- Conditional disabling of heavy animations (like 3D/Spline) on lower-end devices or based on `prefers-reduced-motion`.

## 7. Development Workflow (Phased)
Development strictly follows the defined 8-phase cycle in `PROJECT_STATUS.md`. Each phase will be completed, tested, committed to Git, and reviewed before proceeding.
