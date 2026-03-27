"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup successful! You can login now.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <h1 className="text-lg font-bold text-amber-500">
          ResumeAI
        </h1>

        <button
          onClick={() => router.push("/login")}
          className="bg-amber-500 text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </nav>

      {/* Signup Card */}
      <div className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">

          <h2 className="text-2xl font-bold text-center mb-2">
            Create account 🚀
          </h2>

          <p className="text-sm text-stone-500 text-center mb-6">
            Start analyzing your resume
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-3 border rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full py-3 bg-amber-500 text-white rounded-xl font-semibold"
          >
            Sign up
          </button>

          <p className="text-xs text-center text-stone-500 mt-6">
            Already have an account?{" "}
            <span
              className="text-amber-500 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}