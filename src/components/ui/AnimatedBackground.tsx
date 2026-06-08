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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const actualCount = isMobile ? Math.floor(count * 0.5) : count;

    const generatedSmileys: SmileyConfig[] = [];
    // Using soft colors explicitly
    const colors = ["text-[#0B5D8C]", "text-[#5A9A43]"];
    
    for (let i = 0; i < actualCount; i++) {
      // Determine Layer: Layer 1 (60%), Layer 2 (30%), Layer 3 (10%)
      const layerRand = Math.random();
      let layer = 1;
      if (layerRand > 0.9) layer = 3;
      else if (layerRand > 0.6) layer = 2;

      let size;
      let opacity;
      let x = Math.random() * 100;
      let y = Math.random() * 100;

      if (layer === 1) {
        // Tiny smileys, very low opacity, slow movement
        size = isMobile ? (Math.random() * 10 + 10) : (Math.random() * 15 + 15); // 15px to 30px
        opacity = Math.random() * 0.02 + 0.03; // 0.03 to 0.05
      } else if (layer === 2) {
        // Medium smileys, slightly more visible
        size = isMobile ? (Math.random() * 20 + 20) : (Math.random() * 25 + 35); // 35px to 60px
        opacity = Math.random() * 0.02 + 0.05; // 0.05 to 0.07
      } else {
        // Very few larger smileys, extremely faded, used only near section edges
        size = isMobile ? (Math.random() * 30 + 40) : (Math.random() * 40 + 70); // 70px to 110px
        opacity = Math.random() * 0.02 + 0.02; // 0.02 to 0.04
        
        // Push strictly to edges
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) x = Math.random() * 15; // Left
        else if (edge === 1) x = 85 + Math.random() * 15; // Right
        else if (edge === 2) y = Math.random() * 15; // Top
        else y = 85 + Math.random() * 15; // Bottom
      }

      // General placement for layer 1 & 2 to avoid center where text/CTAs live
      if (layer !== 3) {
        // 70% chance to be strictly at the left/right sides
        if (Math.random() > 0.3) {
          x = Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
        } else {
          // Otherwise, if in horizontal middle, push to very top or very bottom
          y = Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15;
        }
      }

      const animationType = Math.floor(Math.random() * 3);
      let duration = 20;
      let rotationAmount = 0;

      if (animationType === 0) {
        // Very slow floating up
        duration = Math.floor(Math.random() * 20) + 20; // 20-40s
      } else if (animationType === 1) {
        // Gentle drifting left/right
        duration = Math.floor(Math.random() * 20) + 20; // 20-40s
      } else {
        // Subtle rotation
        duration = Math.floor(Math.random() * 20) + 20; // 20-40s
        rotationAmount = Math.floor(Math.random() * 3) + 2; // 2-4 degrees
        if (Math.random() > 0.5) rotationAmount *= -1;
      }

      generatedSmileys.push({
        id: i,
        x,
        y,
        size,
        opacity,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: layer === 3 ? 2 : 0,
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
          x: [0, 30, -10, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full blur-[120px] ${
          theme === "light" ? "bg-[#0B5D8C]/[0.04]" : "bg-white/[0.03]"
        }`}
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] ${
          theme === "light" ? "bg-[#5A9A43]/[0.03]" : "bg-[#7CC45B]/[0.02]"
        }`}
      />

      {smileys.map((smiley) => {
        let animateProps = {};
        
        // 1. Very Slow Float Up
        if (smiley.animationType === 0) {
          animateProps = { y: ['0%', '-2%', '0%'] };
        } 
        // 2. Gentle Drift
        else if (smiley.animationType === 1) {
          animateProps = { x: ['0%', '2%', '-2%', '0%'] };
        } 
        // 3. Subtle Rotation
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
              strokeWidth={smiley.size > 80 ? 1 : 1.5}
              style={{ width: `${smiley.size}px`, height: `${smiley.size}px` }} 
            />
          </motion.div>
        );
      })}

    </div>
  );
}
