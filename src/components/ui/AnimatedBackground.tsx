"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Minimal line-art smiley
const MinimalSmiley = ({ className, strokeWidth = 1.5, style }: { className?: string, strokeWidth?: number, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

type AnimatedBackgroundProps = {
  theme?: "light" | "dark";
  count?: number;
};

type SmileyConfig = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  blur: number;
  animationType: number;
  duration: number;
  rotationAmount?: number;
};

export default function AnimatedBackground({ theme = "light", count = 15 }: AnimatedBackgroundProps) {
  const [smileys, setSmileys] = useState<SmileyConfig[]>([]);

  useEffect(() => {
    const generatedSmileys: SmileyConfig[] = [];
    const colors = ["text-[#0B5D8C]", "text-[#5A9A43]"];
    
    for (let i = 0; i < count; i++) {
      // Oversized smiley (about 15% chance)
      const isOversized = Math.random() > 0.85;
      let size;
      if (isOversized) {
        size = Math.floor(Math.random() * 151) + 150; // 150px to 300px
      } else {
        size = Math.floor(Math.random() * 111) + 10; // 10px to 120px (very small to large)
      }
      
      let x = Math.random() * 100;
      let y = Math.random() * 100;
      
      if (isOversized) {
        // Push oversized to edges to make them partially cut off
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) x = -Math.random() * 10; // Left edge
        else if (edge === 1) x = 100 + Math.random() * 10; // Right edge
        else if (edge === 2) y = -Math.random() * 10; // Top edge
        else y = 100 + Math.random() * 10; // Bottom edge
      }

      const animationType = Math.floor(Math.random() * 3);
      let duration = 20;
      let rotationAmount = 0;

      if (animationType === 0) {
        // Slow Float Up: 20-35s
        duration = Math.floor(Math.random() * 16) + 20;
      } else if (animationType === 1) {
        // Gentle Drift: 25-40s
        duration = Math.floor(Math.random() * 16) + 25;
      } else {
        // Slow Rotation: 25-40s
        duration = Math.floor(Math.random() * 16) + 25;
        rotationAmount = Math.floor(Math.random() * 5) + 8; // 8-12 degrees
        if (Math.random() > 0.5) rotationAmount *= -1;
      }

      generatedSmileys.push({
        id: i,
        x,
        y,
        size,
        opacity: (Math.random() * 0.04) + 0.02, // 2% to 6% extremely low opacity
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 2 : 0, // occasional soft blur
        animationType,
        duration,
        rotationAmount
      });
    }
    setSmileys(generatedSmileys);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* Soft Drifting Blur Circles */}
      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full blur-[120px] ${
          theme === "light" ? "bg-[#0B5D8C]/[0.06]" : "bg-white/[0.04]"
        }`}
      />
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] ${
          theme === "light" ? "bg-[#5A9A43]/[0.05]" : "bg-[#7CC45B]/[0.03]"
        }`}
      />

      {smileys.map((smiley) => {
        let animateProps = {};
        
        // 1. Slow Float Up
        if (smiley.animationType === 0) {
          animateProps = { y: ['0%', '-4%', '0%'] };
        } 
        // 2. Gentle Drift
        else if (smiley.animationType === 1) {
          animateProps = { x: ['0%', '3%', '-3%', '0%'] };
        } 
        // 3. Slow Rotation
        else {
          animateProps = { rotate: [0, smiley.rotationAmount, 0] };
        }

        return (
          <motion.div
            key={smiley.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, ...animateProps }}
            transition={{
              opacity: { duration: 2 },
              default: { duration: smiley.duration, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              left: `${smiley.x}%`,
              top: `${smiley.y}%`,
              opacity: smiley.opacity,
              filter: smiley.blur > 0 ? `blur(${smiley.blur}px)` : 'none',
              transform: 'translate(-50%, -50%)',
            }}
            className={smiley.color}
          >
            <MinimalSmiley 
              strokeWidth={smiley.size > 100 ? 1 : 1.5}
              style={{ width: `${smiley.size}px`, height: `${smiley.size}px` }} 
            />
          </motion.div>
        );
      })}

    </div>
  );
}
