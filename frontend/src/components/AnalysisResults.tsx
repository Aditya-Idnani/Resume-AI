"use client";

import { useApp } from "@/context/AppContext";

export default function AnalysisResults() {
  const { currentAnalysis: data } = useApp();

  if (!data) return null;

  const score = data.atsScore || 0;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 🔥 SCORE CARD */}
      <div className="bg-white p-6 rounded-2xl border flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        {/* SCORE RING */}
        <div className="relative w-28 h-28 shrink-0">
          <svg className="w-28 h-28 transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#eee"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke={score > 75 ? "#10b981" : score > 60 ? "#f59e0b" : "#ef4444"}
              strokeWidth="8"
              fill="none"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * score) / 100}
              strokeLinecap="round"
              style={{ transition: "all 1s ease" }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-stone-800">
            {score}
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-stone-900">ATS Compatibility Score</h2>
          <p className="text-stone-500 mt-2 leading-relaxed">
            Your resume has been analyzed using AI against ATS standards and the provided job description.
          </p>

          <p className={`mt-3 font-semibold text-lg ${score > 75 ? "text-emerald-500" : score > 60 ? "text-amber-500" : "text-red-500"}`}>
            {score > 75 ? "Excellent Match" : score > 60 ? "Good Match" : "Needs Improvement"}
          </p>
        </div>
      </div>

      {/* 🔥 KEYWORDS */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="font-bold text-stone-900 text-lg">Keyword Match</h3>
          <span className="text-amber-500 font-bold text-xl">
            {data.keywordAnalysis?.matchPercentage || 0}%
          </span>
        </div>

        {/* BAR */}
        <div className="w-full bg-stone-100 h-3 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-amber-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${data.keywordAnalysis?.matchPercentage || 0}%`,
            }}
          />
        </div>

        {/* TAGS */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {/* MATCHED */}
          <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
            <p className="mb-3 font-semibold text-green-700 flex items-center gap-2">
              <span className="text-lg">✅</span> Matched
            </p>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis?.matchedKeywords?.map((k: string, i: number) => (
                <span key={i} className="px-2.5 py-1 bg-green-100 text-green-800 rounded-md font-medium text-xs">
                  {k}
                </span>
              ))}
              {(!data.keywordAnalysis?.matchedKeywords || data.keywordAnalysis?.matchedKeywords.length === 0) && (
                <span className="text-stone-400 text-xs italic">No matched keywords</span>
              )}
            </div>
          </div>

          {/* MISSING */}
          <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
            <p className="mb-3 font-semibold text-red-700 flex items-center gap-2">
              <span className="text-lg">❌</span> Missing
            </p>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis?.missingKeywords?.map((k: string, i: number) => (
                <span key={i} className="px-2.5 py-1 bg-red-100 text-red-800 rounded-md font-medium text-xs">
                  {k}
                </span>
              ))}
              {(!data.keywordAnalysis?.missingKeywords || data.keywordAnalysis?.missingKeywords.length === 0) && (
                <span className="text-stone-400 text-xs italic">No missing keywords</span>
              )}
            </div>
          </div>

          {/* RECOMMENDED */}
          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
            <p className="mb-3 font-semibold text-amber-700 flex items-center gap-2">
              <span className="text-lg">💡</span> Recommended
            </p>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis?.recommendedKeywords?.map((k: string, i: number) => (
                <span key={i} className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md font-medium text-xs">
                  {k}
                </span>
              ))}
              {(!data.keywordAnalysis?.recommendedKeywords || data.keywordAnalysis?.recommendedKeywords.length === 0) && (
                <span className="text-stone-400 text-xs italic">No recommendations</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 STRENGTHS & WEAKNESSES */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* STRENGTHS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col">
          <h3 className="font-bold mb-4 text-emerald-600 text-lg flex items-center gap-2">
            <span className="text-xl">💪</span> Strengths
          </h3>
          <ul className="space-y-3 text-sm text-stone-600 flex-1">
            {data.strengths?.map((s: string, i: number) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
            {(!data.strengths || data.strengths.length === 0) && (
              <li className="text-stone-400 italic">No strengths identified.</li>
            )}
          </ul>
        </div>

        {/* WEAKNESSES */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col">
          <h3 className="font-bold mb-4 text-red-600 text-lg flex items-center gap-2">
            <span className="text-xl">⚠️</span> Weaknesses
          </h3>
          <ul className="space-y-3 text-sm text-stone-600 flex-1">
            {data.weakAreas?.map((w: string, i: number) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{w}</span>
              </li>
            ))}
            {(!data.weakAreas || data.weakAreas.length === 0) && (
              <li className="text-stone-400 italic">No weaknesses identified.</li>
            )}
          </ul>
        </div>
      </div>

      {/* 🔥 SUGGESTIONS */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm">
        <h3 className="font-bold mb-4 text-stone-900 text-lg flex items-center gap-2">
          <span className="text-xl">🚀</span> Actionable Advice
        </h3>

        <ul className="space-y-4 text-sm text-stone-700">
          {data.summary && (
            <li className="flex gap-3 items-start bg-white/60 p-4 rounded-xl">
              <span className="text-amber-500 font-bold mt-0.5">📌</span>
              <span className="leading-relaxed font-medium">{data.summary}</span>
            </li>
          )}
          {data.strengths?.slice(0, 2).map((s: string, i: number) => (
            <li key={i} className="flex gap-3 items-start bg-white/60 p-4 rounded-xl">
              <span className="text-amber-500 font-bold mt-0.5">✨</span>
              <span className="leading-relaxed">Keep highlighting: {s}</span>
            </li>
          ))}
          {data.weakAreas?.slice(0, 3).map((w: string, i: number) => (
            <li key={`w-${i}`} className="flex gap-3 items-start bg-white/60 p-4 rounded-xl">
              <span className="text-orange-500 font-bold mt-0.5">🔧</span>
              <span className="leading-relaxed">Fix: {w}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
