"use client";

import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, Lightbulb, Loader2 } from "lucide-react";
import { getScoreRing } from "@/lib/utils";

const MOCK_RESULT = {
  matchScore: 64,
  matchedKeywords: ["React", "TypeScript", "Node.js", "REST API", "Git", "Agile"],
  missingKeywords: ["Docker", "Kubernetes", "AWS", "CI/CD", "Redis"],
  recommendedKeywords: ["microservices", "cloud architecture", "system design", "DevOps"],
};

export default function JobDescriptionAnalyzer() {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof MOCK_RESULT | null>(null);

  const handleAnalyze = async () => {
    if (!jobDesc.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setResult(MOCK_RESULT);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm">
      <div className="p-6 border-b border-stone-100">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-amber-600" />
          </div>
          <h3 className="text-base font-semibold text-stone-900">Job Description Match</h3>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Paste a job description to see how well your resume matches the role
        </p>
      </div>

      <div className="p-6 space-y-4">
        <textarea
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Paste the full job description here — including responsibilities, qualifications, and required skills..."
          className="w-full h-32 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 outline-none resize-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
        />

        <button
          onClick={handleAnalyze}
          disabled={!jobDesc.trim() || loading}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98]"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Search className="w-4 h-4" />
          )}
          {loading ? "Analyzing..." : "Analyze Job Match"}
        </button>

        {/* Result */}
        {result && (
          <div className="pt-2 space-y-5 animate-in fade-in duration-300">
            {/* Match score bar */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-stone-900">Keyword Match Score</p>
                <span
                  className="text-2xl font-bold"
                  style={{ color: getScoreRing(result.matchScore) }}
                >
                  {result.matchScore}%
                </span>
              </div>
              <div className="h-2.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${result.matchScore}%`,
                    backgroundColor: getScoreRing(result.matchScore),
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Matched */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <p className="text-xs font-semibold text-stone-700">
                    Matched ({result.matchedKeywords.length})
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.matchedKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-md font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                  <p className="text-xs font-semibold text-stone-700">
                    Missing ({result.missingKeywords.length})
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.missingKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <p className="text-xs font-semibold text-stone-700">
                    Recommended ({result.recommendedKeywords.length})
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.recommendedKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-md font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
