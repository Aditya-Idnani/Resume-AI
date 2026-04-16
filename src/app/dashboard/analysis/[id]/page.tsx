"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";

export default function AnalysisPage() {
  const { id } = useParams();
  const { analyses } = useApp();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const found = analyses.find((a) => a.id === id);
    setData(found);
  }, [id, analyses]);

  if (!data) return null;

  const score = data.atsScore || 0;

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">

        {/* 🔥 SCORE CARD */}
        <div className="bg-white p-6 rounded-2xl border flex items-center gap-6">

          {/* SCORE RING */}
          <div className="relative w-28 h-28">
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
                stroke="#f59e0b"
                strokeWidth="8"
                fill="none"
                strokeDasharray={314}
                strokeDashoffset={314 - (314 * score) / 100}
                strokeLinecap="round"
                style={{ transition: "all 1s ease" }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              {score}
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-xl font-bold">ATS Compatibility Score</h2>
            <p className="text-sm text-stone-500 mt-1">
              Your resume has been analyzed using AI against ATS standards.
            </p>

            <p className="mt-2 text-amber-500 font-semibold">
              {score > 75 ? "Excellent" : score > 60 ? "Good" : "Needs Improvement"}
            </p>
          </div>

        </div>

        {/* 🔥 KEYWORDS */}
        <div className="bg-white p-6 rounded-2xl border">

          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Keyword Match</h3>
            <span className="text-amber-500 font-bold">
              {data.keywordAnalysis?.matchPercentage || 0}%
            </span>
          </div>

          {/* BAR */}
          <div className="w-full bg-stone-200 h-2 rounded-full mb-4">
            <div
              className="bg-amber-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${data.keywordAnalysis?.matchPercentage || 0}%`,
              }}
            />
          </div>

          {/* TAGS */}
          <div className="grid md:grid-cols-3 gap-4 text-sm">

            {/* MATCHED */}
            <div>
              <p className="mb-2 font-medium text-green-600">
                ✅ Matched
              </p>
              <div className="flex flex-wrap gap-2">
                {data.keywordAnalysis?.matchedKeywords?.map((k: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* MISSING */}
            <div>
              <p className="mb-2 font-medium text-red-600">
                ❌ Missing
              </p>
              <div className="flex flex-wrap gap-2">
                {data.keywordAnalysis?.missingKeywords?.map((k: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-red-100 text-red-700 rounded-lg">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* RECOMMENDED */}
            <div>
              <p className="mb-2 font-medium text-amber-600">
                💡 Recommended
              </p>
              <div className="flex flex-wrap gap-2">
                {data.keywordAnalysis?.recommendedKeywords?.map((k: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg">
                    {k}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 🔥 STRENGTHS & WEAKNESSES */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* STRENGTHS */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold mb-3 text-green-600">
              💪 Strengths
            </h3>
            <ul className="space-y-2 text-sm">
              {data.strengths?.map((s: string, i: number) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>

          {/* WEAKNESSES */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold mb-3 text-red-600">
              ⚠️ Weaknesses
            </h3>
            <ul className="space-y-2 text-sm">
              {data.weakAreas?.map((w: string, i: number) => (
                <li key={i}>• {w}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* 🔥 SUGGESTIONS */}
        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-semibold mb-3">
            🚀 Improvement Suggestions
          </h3>

          <ul className="space-y-2 text-sm">
            {data.summary && <li>• {data.summary}</li>}
            {data.strengths?.slice(0, 2).map((s: string, i: number) => (
              <li key={i}>• Improve: {s}</li>
            ))}
          </ul>
        </div>

      </div>
    </DashboardLayout>
  );
}