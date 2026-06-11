"use client";

import React, { createContext, useContext, ReactNode } from "react";

// We have removed authentication and Supabase dependencies to make this an open-and-use app!
// This context now acts as a lightweight wrapper to avoid breaking imports in layout.tsx.

const AppContext = createContext<any>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}