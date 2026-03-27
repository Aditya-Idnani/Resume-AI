"use client";

import { getScoreRing, getScoreLabel } from "@/lib/utils";

interface ScoreCircleProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function ScoreCircle({ score, size = "md" }: ScoreCircleProps) {
  const radius = size === "sm" ? 30 : size === "md" ? 44 : 58;
  const stroke = size === "sm" ? 5 : 7;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const color = getScoreRing(score);

  const dimensions = {
    sm: { svg: 76, fontSize: "text-lg", labelSize: "text-xs" },
    md: { svg: 108, fontSize: "text-2xl", labelSize: "text-xs" },
    lg: { svg: 140, fontSize: "text-4xl", labelSize: "text-sm" },
  }[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: dimensions.svg, height: dimensions.svg }}>
        <svg
          width={dimensions.svg}
          height={dimensions.svg}
          className="-rotate-90"
          viewBox={`0 0 ${dimensions.svg} ${dimensions.svg}`}
        >
          {/* Track */}
          <circle
            cx={dimensions.svg / 2}
            cy={dimensions.svg / 2}
            r={radius}
            fill="none"
            stroke="#E7E5E4"
            strokeWidth={stroke}
          />
          {/* Progress */}
          <circle
            cx={dimensions.svg / 2}
            cy={dimensions.svg / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${dimensions.fontSize} font-bold text-stone-900 leading-none`}>
            {score}
          </span>
          <span className="text-[10px] text-stone-400 mt-0.5">/ 100</span>
        </div>
      </div>
      <span className={`${dimensions.labelSize} font-semibold`} style={{ color }}>
        {getScoreLabel(score)}
      </span>
    </div>
  );
}
