"use client";

import { getScoreRing } from "@/lib/utils";

type Section = {
  label: string;
  score: number;
  note?: string;
};

interface Props {
  sections?: Section[];
}

const defaultSections: Section[] = [
  { label: "Professional Summary", score: 55, note: "Needs more targeted keywords" },
  { label: "Work Experience", score: 82, note: "Good structure and action verbs" },
  { label: "Skills", score: 71, note: "Consider categorizing by type" },
  { label: "Projects", score: 60, note: "Add tech stack and impact metrics" },
  { label: "Education", score: 88, note: "Well formatted and complete" },
  { label: "Formatting", score: 75, note: "Clean single-column layout" },
];

export default function SectionScoreBreakdown({ sections = defaultSections }: Props) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6">
      <h3 className="text-sm font-semibold text-stone-900 mb-5">Section Score Breakdown</h3>
      <div className="space-y-4">
        {sections.map((s) => {
          const color = getScoreRing(s.score);
          return (
            <div key={s.label}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone-700 font-medium">{s.label}</span>
                  {s.note && (
                    <span className="hidden sm:inline text-xs text-stone-400">— {s.note}</span>
                  )}
                </div>
                <span
                  className="text-sm font-bold tabular-nums"
                  style={{ color }}
                >
                  {s.score}%
                </span>
              </div>
              <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${s.score}%`, backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
