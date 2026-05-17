import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedCompass({ size = 120 }: { size?: number }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-xl"
      >
        <defs>
          <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8B36A" />
            <stop offset="100%" stopColor="#C17C54" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#compassGradient)"
          strokeWidth="2"
          opacity="0.3"
        />

        <motion.circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#D8B36A"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.2"
          animate={{ rotate: rotation }}
          transition={{ duration: 0.05 }}
        />

        <motion.g
          animate={{ rotate: rotation * 0.5 }}
          style={{ originX: "100px", originY: "100px" }}
        >
          <path
            d="M 100 40 L 110 100 L 100 160 L 90 100 Z"
            fill="url(#compassGradient)"
            filter="url(#glow)"
            opacity="0.9"
          />
          <circle cx="100" cy="100" r="8" fill="#C17C54" />
          <circle cx="100" cy="100" r="4" fill="#F2E6C9" />
        </motion.g>

        <g>
          <text x="100" y="30" textAnchor="middle" fill="#D8B36A" fontSize="18" fontWeight="bold">N</text>
          <text x="100" y="180" textAnchor="middle" fill="#D8B36A" fontSize="14" opacity="0.6">S</text>
          <text x="170" y="105" textAnchor="middle" fill="#D8B36A" fontSize="14" opacity="0.6">E</text>
          <text x="30" y="105" textAnchor="middle" fill="#D8B36A" fontSize="14" opacity="0.6">W</text>
        </g>
      </svg>
    </div>
  );
}
