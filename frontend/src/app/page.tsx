"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, X, ArrowRight, Loader2, Sparkles, FileSearch, AlertCircle, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnalyzerDashboard from "@/components/AnalyzerDashboard";

export default function AppHome() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((accepted: File[]) => {
    if (accepted[0]) {
      setFile(accepted[0]);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);
    setAnalysisResult(null);

    const formData = new FormData();
    formData.append("resume", file);
    if (jobDescription.trim()) {
      formData.append("jobDescription", jobDescription);
    }

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050";
      // Ensure baseUrl doesn't end with a slash, and always append /api/analyze
      const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      // If the baseUrl already includes /api, don't duplicate it
      const endpoint = normalizedBaseUrl.endsWith('/api') ? '/analyze' : '/api/analyze';
      
      const response = await fetch(`${normalizedBaseUrl}${endpoint}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let serverError = "Analysis failed. Please try again.";
        try {
          const errorData = await response.json();
          serverError = errorData.error || serverError;
        } catch(e) {
          serverError = await response.text();
        }
        throw new Error(`Server error (${response.status}): ${serverError}`);
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
      
      // Scroll to top smoothly so the results are fully visible
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setJobDescription("");
    setAnalysisResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500/30">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {!analysisResult ? (
              <motion.div
                key="upload-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-medium text-amber-400 mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    Ultra Premium ATS Analyzer
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
                    Drop your resume.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      Get hired faster.
                    </span>
                  </h1>
                  <p className="text-lg text-stone-400 max-w-xl mx-auto">
                    Instantly analyze your resume against ATS algorithms. Find missing keywords, fix formatting, and beat the bots.
                  </p>
                </div>

                <div className="bg-stone-900/50 backdrop-blur-xl border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  {/* Dropzone */}
                  {!file ? (
                    <div
                      {...getRootProps()}
                      className={`border-2 border-dashed rounded-2xl px-6 py-12 text-center cursor-pointer transition-all ${
                        isDragActive
                          ? "border-amber-400 bg-amber-500/5"
                          : "border-stone-700 hover:border-amber-500/50 hover:bg-stone-800/50"
                      }`}
                    >
                      <input {...getInputProps()} />
                      <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <Upload className="w-8 h-8 text-amber-500" />
                      </div>
                      <p className="text-lg font-semibold text-white mb-2">
                        {isDragActive ? "Drop your resume here" : "Drag & drop your resume"}
                      </p>
                      <p className="text-sm text-stone-400 mb-4">or click to browse from your computer</p>
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-stone-500 bg-stone-950 rounded-lg px-3 py-1.5 border border-stone-800">
                        <FileText className="w-3.5 h-3.5" />
                        PDF or DOCX (Max 10MB)
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-5 bg-stone-800/50 rounded-2xl border border-stone-700">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-medium text-white truncate">{file.name}</p>
                          <p className="text-sm text-stone-400">{(file.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <button
                          onClick={() => setFile(null)}
                          className="p-2 rounded-xl text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Optional Job Description */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-medium text-stone-300">
                          <FileSearch className="w-4 h-4 text-stone-400" />
                          Job Description (Optional)
                        </label>
                        <textarea
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                          placeholder="Paste the job description here for tailored keyword analysis..."
                          className="w-full h-32 bg-stone-950 border border-stone-800 rounded-xl p-4 text-sm text-stone-300 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 resize-none transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-sm text-rose-400 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleAnalyze}
                    disabled={!file || isAnalyzing}
                    className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none text-white font-bold rounded-xl text-lg shadow-xl shadow-amber-500/20 transition-all"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Analyzing via AI...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-6 h-6" />
                        Analyze Resume
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-white">Analysis Results</h2>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Analyze Another
                  </button>
                </div>
                
                {/* We use a wrapper with light theme text for the Dashboard since the dashboard is designed for a light theme, or we can just render it. Let's wrap it in a div that overrides text colors to look great. */}
                <div className="text-stone-900 bg-[#FAFAF8] rounded-[2.5rem] p-4 sm:p-8 shadow-2xl">
                   <AnalyzerDashboard data={analysisResult} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- DEMO RESUME SECTION --- */}
        <section id="demo" className="max-w-5xl mx-auto mt-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See how we spot mistakes</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Our AI acts like a recruiter, instantly highlighting weak bullet points, bad formatting, and missing keywords that get you rejected.
            </p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Fake Resume */}
              <div className="bg-[#FAFAF8] rounded-xl p-6 shadow-inner text-stone-900 text-xs sm:text-sm transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                <div className="font-bold text-lg mb-1 border-b-2 border-stone-800 pb-2">John Doe</div>
                <div className="mb-4 text-stone-600">Software Engineer | San Francisco, CA</div>
                
                <div className="font-semibold text-sm mb-2 text-stone-800 border-b border-stone-300 pb-1">Experience</div>
                <div className="mb-3 relative group">
                  <div className="font-bold">Tech Corp - Developer</div>
                  <div className="italic text-stone-500 mb-1">Jan 2020 - Present</div>
                  <ul className="list-disc pl-4 space-y-1 text-stone-700">
                    <li className="relative">
                      Developed a new feature for the website.
                      {/* Mistake Tooltip */}
                      <div className="absolute left-0 -top-10 hidden group-hover:block bg-rose-500 text-white p-2 rounded shadow-lg text-xs font-bold w-48 z-10">
                        Too vague! Add metrics and specific technologies used.
                      </div>
                      <span className="inline-block w-2 h-2 bg-rose-500 rounded-full ml-2 animate-pulse" />
                    </li>
                    <li>Attended daily meetings and wrote code.</li>
                    <li>Helped the team launch a product.</li>
                  </ul>
                </div>
              </div>

              {/* AI Feedback View */}
              <div className="space-y-6">
                <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700">
                  <div className="flex items-center gap-3 mb-3 text-rose-400 font-bold">
                    <AlertCircle className="w-5 h-5" />
                    Weak Bullet Point Detected
                  </div>
                  <p className="text-stone-300 text-sm mb-4 line-through decoration-rose-500/50">
                    "Developed a new feature for the website."
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                    <Sparkles className="w-4 h-4" />
                    AI Suggestion
                  </div>
                  <p className="text-white text-sm bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                    "Architected and deployed a scalable payment microservice using Node.js and React, increasing transaction success rate by 15% and generating $50k in new monthly revenue."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section id="features" className="max-w-5xl mx-auto mt-32 relative z-10 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to get hired</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Our analyzer breaks down every aspect of your resume to ensure it passes through Applicant Tracking Systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 hover:bg-stone-800 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ATS Scoring</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Get a precise score showing exactly how your resume performs against automated screening software.</p>
            </div>
            <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 hover:bg-stone-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Keyword Matching</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Compare your resume against any job description to instantly find missing keywords you need to add.</p>
            </div>
            <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 hover:bg-stone-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Suggestions</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Transform weak, generic bullet points into compelling, quantified achievements with AI rewrites.</p>
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section id="how-it-works" className="max-w-5xl mx-auto mt-32 relative z-10 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Get your resume analyzed and improved in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-xl font-bold text-amber-500">1</span>
                <div className="absolute top-1/2 left-full w-full h-px bg-stone-800 hidden md:block" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Upload Resume</h3>
              <p className="text-stone-400 text-sm">Drag and drop your PDF or DOCX file. Optional: paste the job description.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-xl font-bold text-amber-500">2</span>
                <div className="absolute top-1/2 left-full w-full h-px bg-stone-800 hidden md:block" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Analyzes</h3>
              <p className="text-stone-400 text-sm">Our system scans for keywords, formatting, and impactful bullet points.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-amber-500">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Results</h3>
              <p className="text-stone-400 text-sm">Review your ATS score, apply the feedback, and land more interviews.</p>
            </div>
          </div>
        </section>

        {/* --- COMPANY LOGOS SECTION --- */}
        <section className="max-w-5xl mx-auto mt-32 text-center relative z-10">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-8">
            Apply to your dream company with confidence
          </p>
          <div className="flex flex-wrap justify-between items-center w-full gap-8 sm:gap-10">
            <img 
              src="/logos/google.jpg" 
              alt="Google" 
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale invert mix-blend-screen opacity-50 hover:opacity-100 transition-all duration-500" 
            />
            <img 
              src="/logos/meta.jpeg" 
              alt="Meta" 
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale invert mix-blend-screen opacity-50 hover:opacity-100 transition-all duration-500" 
            />
            <img 
              src="/logos/amazon.jpg" 
              alt="Amazon" 
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale invert mix-blend-screen opacity-50 hover:opacity-100 transition-all duration-500" 
            />
            <img 
              src="/logos/netflix.webp" 
              alt="Netflix" 
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale invert mix-blend-screen opacity-50 hover:opacity-100 transition-all duration-500" 
            />
            <img 
              src="/logos/apple.png" 
              alt="Apple" 
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain grayscale invert mix-blend-screen opacity-50 hover:opacity-100 transition-all duration-500" 
            />
          </div>
          <p className="mt-12 text-stone-400 max-w-xl mx-auto text-sm">
            We will help you increase your ATS score and provide actionable feedback on exactly where to improve, so your resume never gets filtered out again.
          </p>
        </section>

      </main>
    </div>
  );
}
