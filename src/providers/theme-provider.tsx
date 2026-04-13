"use client";

import { ThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function AppThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
