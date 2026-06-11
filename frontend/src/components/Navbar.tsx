"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E7E5E4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-stone-900 text-sm tracking-tight">
              ResumeAI
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-3 py-2 text-sm text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-all">
              Features
            </a>
            <a href="#how-it-works" className="px-3 py-2 text-sm text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-all">
              How it works
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#analyzer"
              className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm"
            >
              Analyze Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-500 hover:bg-stone-100"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-3 space-y-1">
          <a href="#features" className="block px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-lg">Features</a>
          <a href="#how-it-works" className="block px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-lg">How it works</a>
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a href="#analyzer" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 hover:bg-amber-600 rounded-lg">
              Analyze Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
