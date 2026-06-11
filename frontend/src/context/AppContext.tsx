"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

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
  currentAnalysis: ResumeAnalysis | null;
  isAnalyzing: boolean;
};

type AppContextType = AppState & {
  setCurrentAnalysis: (analysis: ResumeAnalysis | null) => void;
  setIsAnalyzing: (val: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    currentAnalysis: null,
    isAnalyzing: false,
  });

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

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCurrentAnalysis,
        setIsAnalyzing,
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