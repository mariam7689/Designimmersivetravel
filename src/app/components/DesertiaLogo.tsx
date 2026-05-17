import { motion } from "motion/react";

interface DesertiaLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "icon" | "full";
  animated?: boolean;
  className?: string;
}

export function DesertiaLogo({ size = "md", variant = "full", animated = false, className = "" }: DesertiaLogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
    xl: { icon: 64, text: "text-5xl" },
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  const LogoIcon = () => (
    <motion.svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <motion.circle
        cx="50"
        cy="30"
        r="18"
        fill="url(#sunGradient)"
        initial={animated ? { y: -10, opacity: 0 } : {}}
        animate={animated ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <motion.path
        d="M 10 70 Q 30 55, 50 65 T 90 70"
        stroke="url(#duneGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : {}}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
      />

      <motion.path
        d="M 15 80 Q 40 68, 60 75 T 95 80"
        stroke="url(#duneGradient2)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : {}}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
      />

      <motion.path
        d="M 20 88 Q 50 78, 80 88"
        stroke="#C17C54"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : {}}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
      />

      <motion.circle cx="50" cy="50" r="2" fill="#D8B36A" opacity="0.6"
        animate={animated ? { scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] } : {}}
        transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
      />

      <defs>
        <linearGradient id="sunGradient" x1="50" y1="12" x2="50" y2="48">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#D8B36A" />
        </linearGradient>
        <linearGradient id="duneGradient" x1="10" y1="70" x2="90" y2="70">
          <stop offset="0%" stopColor="#F2E6C9" />
          <stop offset="50%" stopColor="#D8B36A" />
          <stop offset="100%" stopColor="#F2E6C9" />
        </linearGradient>
        <linearGradient id="duneGradient2" x1="15" y1="80" x2="95" y2="80">
          <stop offset="0%" stopColor="#D8B36A" />
          <stop offset="50%" stopColor="#C17C54" />
          <stop offset="100%" stopColor="#D8B36A" />
        </linearGradient>
      </defs>
    </motion.svg>
  );

  if (variant === "icon") {
    return <LogoIcon />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      {variant === "full" && (
        <motion.span
          className={`${textSize} font-semibold tracking-wide bg-gradient-to-r from-[#D8B36A] via-[#C17C54] to-[#D8B36A] bg-clip-text text-transparent`}
          initial={animated ? { opacity: 0, x: -10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
        >
          DESERTIA
        </motion.span>
      )}
    </div>
  );
}
