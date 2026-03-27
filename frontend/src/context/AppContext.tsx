"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { supabase } from "@/lib/supabase";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type ResumeAnalysis = {
  id: string;
  fileName: string;
  uploadDate: string;
  atsScore: number;
  summary: string;
  strengths: string[];
  weakAreas: string[];
  sectionFeedback: any[];
  bulletPoints: any[];
  keywordAnalysis: any;
};

type AppState = {
  user: User | null;
  isAuthenticated: boolean;
  analyses: ResumeAnalysis[];
  currentAnalysis: ResumeAnalysis | null;
  isAnalyzing: boolean;
};

type AppContextType = AppState & {
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setCurrentAnalysis: (analysis: ResumeAnalysis | null) => void;
  setIsAnalyzing: (val: boolean) => void;
  addAnalysis: (analysis: ResumeAnalysis) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    user: null,
    isAuthenticated: false,
    analyses: [],
    currentAnalysis: null,
    isAnalyzing: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setState((prev) => ({
          ...prev,
          user: {
            id: data.user.id,
            name: data.user.email ?? "",
            email: data.user.email ?? "",
          },
          isAuthenticated: true,
        }));
      }

      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setState((prev) => ({
            ...prev,
            user: {
              id: session.user.id,
              name: session.user.email ?? "",
              email: session.user.email ?? "",
            },
            isAuthenticated: true,
          }));
        } else {
          setState((prev) => ({
            ...prev,
            user: null,
            isAuthenticated: false,
          }));
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
  };

  const signup = async (name: string, email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) alert(error.message);
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const setCurrentAnalysis = (analysis: ResumeAnalysis | null) => {
    setState((prev) => ({
      ...prev,
      currentAnalysis: analysis,
    }));
  };

  const setIsAnalyzing = (val: boolean) => {
    setState((prev) => ({
      ...prev,
      isAnalyzing: val,
    }));
  };

  const addAnalysis = (analysis: ResumeAnalysis) => {
    setState((prev) => ({
      ...prev,
      analyses: [analysis, ...prev.analyses],
      currentAnalysis: analysis,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        login,
        signup,
        logout,
        setCurrentAnalysis,
        setIsAnalyzing,
        addAnalysis,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}