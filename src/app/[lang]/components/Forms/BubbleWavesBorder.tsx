"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// SVG border with animated bubble waves
export default function BubbleWavesBorder({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Animate the border by morphing the SVG path (wave effect)

  // Animate the border as a continuous wave around the block (not just top/bottom)
  // We'll use a single path and animate points with keyframes for a seamless effect
  // This is a simplified approach for a "wavy rectangle" effect
  const waveKeyframes = [
    // Base rectangle with slight waves
    "M5,15 Q20,5 35,15 T65,15 T95,15 Q100,20 95,25 T65,25 T35,25 Q20,25 5,15 L5,85 Q20,95 35,85 T65,85 T95,85 Q100,80 95,75 T65,75 T35,75 Q20,75 5,85 Z",
    // More pronounced waves
    "M5,15 Q20,0 35,20 T65,10 T95,20 Q110,30 95,35 T65,25 T35,35 Q20,30 5,15 L5,85 Q20,100 35,80 T65,90 T95,80 Q110,70 95,65 T65,75 T35,65 Q20,70 5,85 Z",
    // Inverted waves
    "M5,15 Q20,25 35,10 T65,20 T95,10 Q90,0 95,25 T65,15 T35,25 Q20,20 5,15 L5,85 Q20,75 35,90 T65,80 T95,90 Q90,100 95,75 T65,85 T35,75 Q20,80 5,85 Z",
    // Back to base
    "M5,15 Q20,5 35,15 T65,15 T95,15 Q100,20 95,25 T65,25 T35,25 Q20,25 5,15 L5,85 Q20,95 35,85 T65,85 T95,85 Q100,80 95,75 T65,75 T35,75 Q20,75 5,85 Z",
  ];

  return (
    <div className={"relative rounded-xl overflow-hidden " + (className || "")}>
      {/* Animated SVG border */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          stroke="url(#bubbleGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ d: waveKeyframes[0] }}
          animate={{
            d: waveKeyframes,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient
            id="bubbleGradient"
            x1="0"
            y1="0"
            x2="100"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--tw-gradient-from, #05796B)" />
            <stop offset="1" stopColor="var(--tw-gradient-to, #687943)" />
          </linearGradient>
        </defs>
      </motion.svg>
      <div className="relative z-20">{children}</div>
    </div>
  );
}
