"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { Upload, FileText, X, ArrowRight, CheckCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function HeroUpload() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const { isAuthenticated } = useApp();

  const onDrop = useCallback((accepted: File[]) => {
    if (accepted[0]) setFile(accepted[0]);
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

  const handleAnalyze = () => {
    if (isAuthenticated) {
      router.push("/dashboard/upload");
    } else {
      router.push("/signup");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6">
        {!file ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl px-6 py-10 text-center cursor-pointer transition-all ${
              isDragActive
                ? "border-amber-400 bg-amber-50"
                : "border-stone-300 hover:border-amber-300 hover:bg-amber-50/40"
            }`}
          >
            <input {...getInputProps()} />
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Upload className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-sm font-semibold text-stone-900 mb-1">
              {isDragActive ? "Drop your resume here" : "Drag & drop your resume"}
            </p>
            <p className="text-xs text-stone-500 mb-3">or click to browse</p>
            <div className="inline-flex items-center gap-2 text-xs text-stone-400 bg-stone-50 rounded-lg px-3 py-1.5 border border-stone-100">
              <FileText className="w-3 h-3" />
              PDF or DOCX · Max 10MB
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-900 truncate">{file.name}</p>
                <p className="text-xs text-stone-500">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setFile(null); }}
                className="p-1.5 rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              File ready · Click below to analyze
            </div>
          </div>
        )}

        <button
          onClick={handleAnalyze}
          className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-semibold rounded-xl text-sm shadow-sm transition-all"
        >
          {file ? "Analyze Resume" : "Get Started Free"}
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-xs text-stone-400 mt-3">
          Instant results · No credit card required
        </p>
      </div>
    </div>
  );
}
