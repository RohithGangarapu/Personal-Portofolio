"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

// Number of nodes in the neural network
const NODE_COUNT = 100;
// Maximum distance between nodes to draw a connection line
const CONNECTION_DISTANCE = 2.5;

function Network() {
  const group = useRef<THREE.Group>(null);
  
  // Generate random positions for the nodes only once
  const [nodes] = React.useState(() => {
    const temp = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // Create points in a rough sphere volume
      const radius = 5;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  });

  // Determine which nodes should be connected
  const connections = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < CONNECTION_DISTANCE) {
          temp.push([nodes[i], nodes[j]]);
        }
      }
    }
    return temp;
  }, [nodes]);

  // Rotate the entire network slowly
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
      group.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Render the nodes (neurons) */}
      {nodes.map((pos, i) => (
        <Sphere key={`node-${i}`} args={[0.06, 8, 8]} position={pos}>
          <meshBasicMaterial color="#3B82F6" />
        </Sphere>
      ))}
      
      {/* Render the connections (synapses) */}
      {connections.map((points, i) => (
        <Line 
          key={`line-${i}`} 
          points={points} 
          color="#1e40af" 
          lineWidth={0.5} 
          transparent 
          opacity={0.3} 
        />
      ))}
    </group>
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
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center cursor-move">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={["#0A0A0A"]} />
        <ambientLight intensity={0.5} />
        <Network />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
