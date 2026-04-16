"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyze = () => {
    // 🔥 DEMO MODE
    alert(
      "⚡ This is a demo. Upload your resume to get real AI analysis."
    );
  };

  return (
    <div className="min-h-screen bg-stone-50">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-8 py-4 border-b bg-white">
        <h1 className="font-bold text-lg text-amber-600">ResumeAI</h1>

        <div className="flex gap-6 items-center text-sm">
          <button onClick={() => router.push("/login")}>Log in</button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg"
          >
            Get started
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mt-16 px-4">

        <p className="text-xs text-amber-600 font-semibold mb-2">
          JOB MATCH
        </p>

        <h1 className="text-3xl font-bold mb-3">
          See how your resume matches a job posting
        </h1>

        <p className="text-stone-500 text-sm mb-8">
          Paste a job description and see how well your resume performs
          against ATS filters.
        </p>

        {/* DEMO BADGE */}
        <div className="inline-block mb-6 px-3 py-1 bg-amber-50 text-amber-600 text-xs rounded-full">
          ⚡ Demo Mode
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl border p-6 text-left shadow-sm">

          <h2 className="font-semibold mb-2">
            Job Description Match
          </h2>

          <p className="text-xs text-stone-500 mb-4">
            Paste a job description to simulate how matching works
          </p>

          <textarea
            placeholder="Paste job description..."
            className="w-full border rounded-xl p-3 text-sm mb-4"
            rows={4}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <button
            onClick={handleAnalyze}
            className="bg-amber-500 text-white px-5 py-3 rounded-xl text-sm font-semibold"
          >
            Analyze Job Match
          </button>

          {/* DEMO INFO */}
          <div className="mt-6 text-sm text-stone-500">
            ⚡ This is a demo. Upload your resume to get real AI-powered
            analysis including ATS score, keyword match, and suggestions.
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/dashboard/upload")}
            className="mt-4 w-full border border-amber-500 text-amber-600 py-3 rounded-xl font-semibold"
          >
            Upload Resume
          </button>

        </div>
      </div>

    </div>
  );
}