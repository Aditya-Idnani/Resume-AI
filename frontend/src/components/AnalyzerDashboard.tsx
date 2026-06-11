"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, TrendingUp, Lightbulb, Zap, Target } from "lucide-react";

interface KeywordAnalysis {
  matchPercentage: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  recommendedKeywords: string[];
}

interface AnalysisData {
  atsScore: number;
  strengths: string[];
  weakAreas: string[];
  summary: string;
  keywordAnalysis: KeywordAnalysis;
}

export default function AnalyzerDashboard({ data }: { data: AnalysisData }) {
  const isGoodScore = data.atsScore >= 75;
  const scoreColor = isGoodScore ? "text-emerald-500" : "text-amber-500";
  const scoreBg = isGoodScore ? "bg-emerald-50" : "bg-amber-50";
  const scoreBorder = isGoodScore ? "border-emerald-200" : "border-amber-200";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto space-y-6"
    >
      {/* Top Section: Score & Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className={`col-span-1 rounded-2xl border ${scoreBorder} ${scoreBg} p-8 flex flex-col items-center justify-center text-center shadow-sm`}>
          <Target className={`w-12 h-12 mb-4 ${scoreColor}`} />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-2">ATS Score</h3>
          <div className="text-6xl font-bold text-stone-900 mb-2">
            {data.atsScore}<span className="text-2xl text-stone-400">/100</span>
          </div>
          <p className="text-sm text-stone-600 font-medium">
            {isGoodScore ? "Great job! Ready for applications." : "Needs improvement before applying."}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-stone-900">AI Summary</h3>
          </div>
          <p className="text-stone-600 leading-relaxed">
            {data.summary}
          </p>
        </motion.div>
      </div>

      {/* Middle Section: Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            <h3 className="text-lg font-bold text-stone-900">What looks good</h3>
          </div>
          <ul className="space-y-4">
            {data.strengths.map((strength, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-stone-700">{strength}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h3 className="text-lg font-bold text-stone-900">Areas to improve</h3>
          </div>
          <ul className="space-y-4">
            {data.weakAreas.map((weakness, i) => (
              <li key={i} className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-stone-700">{weakness}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section: Keyword Analysis */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-1">Keyword Match</h3>
            <p className="text-sm text-stone-500">Based on standard industry requirements or provided job description.</p>
          </div>
          <div className="px-4 py-2 bg-stone-100 rounded-lg text-sm font-semibold text-stone-700">
            {data.keywordAnalysis.matchPercentage}% Match Rate
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <h4 className="text-sm font-semibold text-emerald-800 mb-3 uppercase tracking-wider">Found ({data.keywordAnalysis.matchedKeywords.length})</h4>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis.matchedKeywords.length > 0 ? (
                data.keywordAnalysis.matchedKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-medium">
                    {kw}
                  </span>
                ))
              ) : (
                <span className="text-sm text-emerald-600">None found</span>
              )}
            </div>
          </div>

          <div className="p-5 bg-rose-50/50 rounded-xl border border-rose-100">
            <h4 className="text-sm font-semibold text-rose-800 mb-3 uppercase tracking-wider">Missing ({data.keywordAnalysis.missingKeywords.length})</h4>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis.missingKeywords.length > 0 ? (
                data.keywordAnalysis.missingKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 bg-rose-100 text-rose-700 rounded-md text-xs font-medium">
                    {kw}
                  </span>
                ))
              ) : (
                <span className="text-sm text-rose-600">None missing</span>
              )}
            </div>
          </div>

          <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
            <h4 className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">Recommended ({data.keywordAnalysis.recommendedKeywords.length})</h4>
            <div className="flex flex-wrap gap-2">
              {data.keywordAnalysis.recommendedKeywords.length > 0 ? (
                data.keywordAnalysis.recommendedKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                    {kw}
                  </span>
                ))
              ) : (
                <span className="text-sm text-blue-600">No suggestions</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
