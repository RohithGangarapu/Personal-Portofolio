"use client";
/* eslint-disable react-hooks/purity */

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticleVortex() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // High particle count for dense, premium look
  const particleCount = 5000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Core brand colors
    const color1 = new THREE.Color("#3B82F6"); // Blue
    const color2 = new THREE.Color("#8B5CF6"); // Purple
    const color3 = new THREE.Color("#06B6D4"); // Cyan
    
    for (let i = 0; i < particleCount; i++) {
      // Create a swirling galaxy / vortex effect
      const t = i / particleCount;
      const angle = t * Math.PI * 80; // Tightness of the spiral
      
      // Radius expands outward, with some randomness
      const radius = 0.5 + t * 4 + (Math.random() * 2 - 1) * (1 - t) * 2;
      
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      // Y represents the vertical thickness of the disk, getting thinner at the edges
      const y = (Math.random() * 2 - 1) * 1.5 * (1 - t + 0.1);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Color gradient based on distance from center (t) and randomness
      const mixRatio = Math.random();
      let mixedColor = color1.clone();
      
      if (t < 0.2) {
        // Inner core is bright cyan/white
        mixedColor = color3.clone().lerp(new THREE.Color("#ffffff"), 0.5 + Math.random() * 0.5);
      } else if (t < 0.6) {
        // Middle ring is blue/purple
        mixedColor = color1.clone().lerp(color2, mixRatio);
      } else {
        // Outer ring is deep blue
        mixedColor = color1.clone().multiplyScalar(0.5 + Math.random() * 0.5);
      }
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return [positions, colors];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slowly rotate the entire vortex
    pointsRef.current.rotation.y = time * 0.15;
    pointsRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    
    // Animate individual particles for a "breathing" / wave effect
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positionsArray[i3];
      const z = positionsArray[i3 + 2];
      
      // Gentle pulsing effect
      positionsArray[i3 + 1] += Math.sin(time * 2 + x + z) * 0.005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}

export function NeuralNetwork3D() {
  // Suppress THREE.Clock deprecation warning from @react-three/fiber internals
  React.useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("THREE.Clock: This module has been deprecated")
      ) {
        return;
      }
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing relative">
      {/* Background glow behind canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }} gl={{ alpha: true }}>
        <color attach="background" args={["transparent"]} />
        
        {/* Core lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#06B6D4" />
        
        <ParticleVortex />
        
        {/* Interactive camera controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
