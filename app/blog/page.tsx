import React from "react";
import { getThemeFromPath } from "../context/global";
import { ThemeProvider } from "../components/ThemeProvider";

export default function Blog() {
  const initialTheme = getThemeFromPath("/contact");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen"></main>
    </ThemeProvider>
  );
}
