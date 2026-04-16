"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroUpload from "@/components/HeroUpload";
import TrustSection from "@/components/TrustSection";
import ATSPreviewCard from "@/components/ATSPreviewCard";
import JobDescriptionAnalyzer from "@/components/JobDescriptionAnalyzer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  FileText,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Upload,
  Zap,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "ATS Score Analysis",
    description:
      "Get a precise Applicant Tracking System score showing exactly how well your resume performs with automated screening software.",
  },
  {
    icon: Zap,
    title: "AI-Powered Feedback",
    description:
      "Receive intelligent, section-by-section feedback with actionable suggestions to strengthen every part of your resume.",
  },
  {
    icon: BarChart2,
    title: "Keyword Optimization",
    description:
      "Compare your resume against job descriptions to identify missing keywords and increase your match rate.",
  },
  {
    icon: Lightbulb,
    title: "Bullet Point Rewriter",
    description:
      "Transform weak, generic bullet points into compelling, quantified achievements with AI-powered rewrites.",
  },
  {
    icon: TrendingUp,
    title: "Score History",
    description:
      "Track your resume improvements over time and see how your ATS score improves with each revision.",
  },
  {
    icon: FileText,
    title: "PDF and DOCX Support",
    description:
      "Upload your resume in any common format. Our system parses and analyzes both PDF and Word documents accurately.",
  },
];

const steps = [
  {
    step: "01",
    title: "Upload your resume",
    description:
      "Drag and drop your PDF or DOCX resume. Our parser extracts content with high precision.",
  },
  {
    step: "02",
    title: "AI analyzes it",
    description:
      "Our AI reviews your resume structure, language, keywords, and formatting against industry standards.",
  },
  {
    step: "03",
    title: "Get your ATS score",
    description:
      "Receive a detailed score breakdown with specific feedback for each section of your resume.",
  },
  {
    step: "04",
    title: "Improve and repeat",
    description:
      "Apply the suggestions, re-upload, and track how your score improves over time.",
  },
];

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/dashboard/upload");
      }
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/dashboard/upload");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700 mb-6">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            AI-powered resume optimization
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-6">
            Know exactly why your{" "}
            <span className="text-amber-500">resume gets rejected</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Over 75% of resumes are filtered out by ATS before a human reads them.
            Our AI analyzes your resume, gives you an ATS score, and shows you
            exactly what to fix.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-sm text-sm"
            >
              Analyze your resume
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 text-sm"
            >
              Sign in to your account
            </Link>
          </div>

          <p className="mt-6 text-xs text-stone-400">
            Free to use · No credit card required · Instant results
          </p>
        </div>

        {/* Hero upload widget */}
        <div className="max-w-2xl mx-auto mt-12">
          <HeroUpload />
        </div>

        {/* ATS preview demo */}
        <div className="max-w-3xl mx-auto mt-10">
          <ATSPreviewCard />
        </div>
      </section>

      <TrustSection />

      {/* ATS explanation */}
      <section
        className="py-20 px-4 sm:px-6 bg-white border-y border-stone-100"
        id="how-it-works"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
                Why it matters
              </p>
              <h2 className="text-3xl font-bold text-stone-900 leading-tight mb-5">
                What is ATS and why does your score matter?
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                An Applicant Tracking System (ATS) is software used by 99% of
                Fortune 500 companies to automatically screen, rank, and filter
                applications before any human sees them.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Resumes are ranked on keyword matches, formatting, and structure.
                A low ATS score means your resume is filtered out even if you are
                the perfect candidate.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "75% of resumes are rejected by ATS before a human reads them",
                "Resumes with relevant keywords are 3x more likely to get interviews",
                "Simple formatting changes can increase your ATS score by 20+ points",
                "Quantified achievements improve recruiter response rates significantly",
              ].map((fact) => (
                <div
                  key={fact}
                  className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100"
                >
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-stone-700">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6" id="features">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl font-bold text-stone-900">
              Everything you need to get hired
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-200 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <Icon className="w-[18px] h-[18px] text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2 text-sm">
                    {f.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
              Process
            </p>
            <h2 className="text-3xl font-bold text-stone-900">How it works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step}>
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Description Analyzer */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
              Job Match
            </p>
            <h2 className="text-3xl font-bold text-stone-900">
              See how your resume matches a job posting
            </h2>
            <p className="text-stone-500 mt-3 text-sm max-w-xl mx-auto">
              Paste any job description and instantly see which keywords you have, which you\'re missing, and what to add.
            </p>
          </div>
          <JobDescriptionAnalyzer />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-12">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to fix your resume?
            </h2>
            <p className="text-amber-100 mb-8 leading-relaxed">
              Join thousands of job seekers who have improved their ATS score and
              landed more interviews.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors text-sm shadow-sm"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-stone-900">
              ResumeAI
            </span>
          </div>
          <p className="text-xs text-stone-400">
            2026 ResumeAI. Built for job seekers.
          </p>
        </div>
      </footer>
    </div>
  );
}
