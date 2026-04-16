"use client";

import { getScoreRing } from "@/lib/utils";

const scoreBreakdown = [
  { label: "Work Experience", score: 82, color: "#10B981" },
  { label: "Keyword Match", score: 65, color: "#F59E0B" },
  { label: "Skills Section", score: 71, color: "#F59E0B" },
  { label: "Professional Summary", score: 55, color: "#F97316" },
];

const missingKeywords = ["Docker", "Kubernetes", "CI/CD", "AWS", "GraphQL"];

export default function ATSPreviewCard() {
  const score = 78;
  const radius = 44;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const color = getScoreRing(score);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Card header */}
      <div className="flex items-center gap-1.5 px-5 py-3 bg-stone-50 border-b border-stone-100">
        <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
        <span className="ml-2 text-xs text-stone-400 font-medium">Resume Analysis Preview</span>
        <span className="ml-auto px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-semibold rounded-full">
          DEMO
        </span>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-5 gap-6">
        {/* Score circle */}
        <div className="sm:col-span-2 flex flex-col items-center justify-center gap-3">
          <div className="relative w-28 h-28">
            <svg
              viewBox="0 0 108 108"
              className="-rotate-90 w-28 h-28"
            >
              <circle cx="54" cy="54" r={radius} fill="none" stroke="#E7E5E4" strokeWidth={stroke} />
              <circle
                cx="54"
                cy="54"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${progress} ${circumference}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-stone-900 leading-none">{score}</span>
              <span className="text-[10px] text-stone-400">/100</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-amber-600">Good</p>
            <p className="text-[11px] text-stone-400 mt-0.5">ATS Compatibility Score</p>
          </div>
        </div>

        {/* Breakdown + keywords */}
        <div className="sm:col-span-3 space-y-3">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
            Section Scores
          </p>
          {scoreBreakdown.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xs text-stone-500 w-36 shrink-0">{item.label}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${item.score}%`, backgroundColor: item.color }}
                />
              </div>
              <span className="text-xs font-semibold text-stone-700 w-7 text-right">
                {item.score}
              </span>
            </div>
          ))}

          <div className="pt-3 border-t border-stone-100">
            <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Missing Keywords
            </p>
            <div className="flex flex-wrap gap-1.5">
              {missingKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 bg-red-50 border border-red-200 text-red-600 text-[10px] rounded-md font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
