"use client";

import { useState } from "react";
import { Zap, Copy, Check, ArrowDown } from "lucide-react";

type BulletPair = {
  original: string;
  improved: string;
};

interface Props {
  bullets?: BulletPair[];
}

const defaultBullets: BulletPair[] = [
  {
    original: "Worked on backend APIs",
    improved:
      "Designed and implemented scalable REST APIs using Node.js and Express, improving system reliability by 35% and reducing average response time by 40%.",
  },
  {
    original: "Helped with database management",
    improved:
      "Architected PostgreSQL schemas and wrote optimized queries, improving data retrieval performance by 60% and reducing storage overhead by 25%.",
  },
  {
    original: "Did code reviews for the team",
    improved:
      "Led weekly code reviews for a 6-person engineering team, maintaining 95% test coverage and reducing production incidents by 30% quarter-over-quarter.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all active:scale-95 mt-2"
      style={
        copied
          ? { borderColor: "#A7F3D0", backgroundColor: "#ECFDF5", color: "#059669" }
          : { borderColor: "#E7E5E4", backgroundColor: "#FAFAF8", color: "#78716C" }
      }
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy suggestion
        </>
      )}
    </button>
  );
}

export default function AISuggestionsPanel({ bullets = defaultBullets }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 p-3.5 bg-amber-50 border border-amber-100 rounded-xl">
        <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <p className="text-xs text-stone-700">
          These bullet points were flagged as weak. Use the AI-improved versions as inspiration to
          rewrite your resume.
        </p>
      </div>

      {bullets.map((bp, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-stone-200 p-5 space-y-3 hover:border-stone-300 transition-colors"
        >
          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
            Suggestion #{i + 1}
          </p>

          {/* Original */}
          <div>
            <p className="text-[11px] font-medium text-red-500 flex items-center gap-1 mb-1.5">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full inline-block" />
              Original
            </p>
            <div className="bg-red-50/70 border border-red-100 rounded-lg px-4 py-3">
              <p className="text-sm text-stone-600 italic">&ldquo;{bp.original}&rdquo;</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-7 h-7 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center">
              <ArrowDown className="w-3.5 h-3.5 text-amber-500" />
            </div>
          </div>

          {/* Improved */}
          <div>
            <p className="text-[11px] font-medium text-emerald-600 flex items-center gap-1 mb-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
              AI Improved
            </p>
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg px-4 py-3">
              <p className="text-sm text-stone-800">&ldquo;{bp.improved}&rdquo;</p>
            </div>
            <CopyButton text={bp.improved} />
          </div>
        </div>
      ))}
    </div>
  );
}
