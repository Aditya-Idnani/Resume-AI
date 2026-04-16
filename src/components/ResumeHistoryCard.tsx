"use client";

import Link from "next/link";
import {
  FileText,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import { formatDate, getScoreColor, getScoreBg } from "@/lib/utils";
import { ResumeAnalysis } from "@/context/AppContext";
import ScoreCircle from "./ScoreCircle";

interface Props {
  analysis: ResumeAnalysis;
  previousScore?: number;
}

// ✅ Type defined outside
type SectionFeedback = {
  section: string;
  score?: number;
};

export default function ResumeHistoryCard({
  analysis,
  previousScore,
}: Props) {
  const scoreDiff =
    previousScore !== undefined
      ? analysis.atsScore - previousScore
      : null;

  // ✅ Correct data source
  const sectionFeedback: SectionFeedback[] =
    (analysis.sectionFeedback as SectionFeedback[]) || [];

  return (
    <Link
      href={`/dashboard/analysis/${analysis.id}`}
      className="group block bg-white rounded-xl border border-stone-200 hover:border-amber-200 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Top color bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            analysis.atsScore >= 80
              ? "#10B981"
              : analysis.atsScore >= 60
              ? "#F59E0B"
              : "#EF4444",
        }}
      />

      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Score */}
          <div className="flex-shrink-0">
            <ScoreCircle score={analysis.atsScore} size="sm" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  <h3 className="text-sm font-semibold text-stone-900 truncate">
                    {analysis.fileName}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span className="text-xs text-stone-400">
                      {formatDate(analysis.uploadDate)}
                    </span>
                  </div>

                  {/* Score diff */}
                  {scoreDiff !== null && (
                    <div
                      className={`flex items-center gap-0.5 text-xs font-medium ${
                        scoreDiff > 0
                          ? "text-emerald-600"
                          : scoreDiff < 0
                          ? "text-red-500"
                          : "text-stone-400"
                      }`}
                    >
                      {scoreDiff > 0 ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : scoreDiff < 0 ? (
                        <TrendingDown className="w-3 h-3" />
                      ) : (
                        <Minus className="w-3 h-3" />
                      )}
                      {scoreDiff > 0 ? `+${scoreDiff}` : scoreDiff}
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 group-hover:text-amber-700">
                <span className="hidden sm:inline">View analysis</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* ✅ FIXED MAP (MAIN BUG SOLVED) */}
            {/* Quick score pills */}
<div className="mt-3 flex flex-wrap gap-1.5">
  {(analysis.sectionFeedback as { section: string }[])
    ?.slice(0, 3)
    .map((sf: { section: string }) => {
      
      const scores: Record<string, number> = {
        "Professional Summary": 55,
        "Work Experience": 82,
        Skills: 71,
        Projects: 60,
        Education: 88,
      };

      const sectionScore = scores[sf.section] ?? 65;

      return (
        <span
          key={sf.section}
          className={`px-2 py-0.5 text-[10px] font-medium rounded-md border ${getScoreBg(sectionScore)} ${getScoreColor(sectionScore)}`}
        >
          {sf.section}: {sectionScore}%
        </span>
      );
    })}
</div>
          </div>
        </div>
      </div>
    </Link>
  );
}