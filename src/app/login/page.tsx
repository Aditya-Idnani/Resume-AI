"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ AUTO REDIRECT if already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        router.push("/dashboard/upload");
      }
    };

    checkUser();
  }, [router]);

  // ✅ EMAIL LOGIN
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard/upload");
  };

  // ✅ GOOGLE LOGIN (FIXED)
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard/upload`,
      },
    });

    if (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">

      {/* 🔥 NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <h1 className="text-lg font-bold text-amber-500">
          ResumeAI
        </h1>

        <div className="flex gap-4 text-sm">
          <button onClick={() => router.push("/")}>
            Home
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* 🔥 LOGIN CARD */}
      <div className="flex items-center justify-center px-4 py-16">

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-stone-200">

          <h2 className="text-2xl font-bold mb-2 text-center">
            Welcome back 👋
          </h2>

          <p className="text-sm text-stone-500 text-center mb-6">
            Analyze your resume and beat ATS filters
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full mb-3 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition"
          >
            Login
          </button>

          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-stone-200"></div>
            <span className="text-xs text-stone-400">OR</span>
            <div className="flex-1 h-px bg-stone-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 border rounded-xl font-medium hover:bg-stone-50 transition"
          >
            Continue with Google
          </button>

          <p className="text-xs text-center text-stone-500 mt-6">
            Don’t have an account?{" "}
            <span
              className="text-amber-500 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}