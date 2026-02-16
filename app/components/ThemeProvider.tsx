"use client";

import React from "react";
import { useGlobalStore } from "@/app/context/global";
import { Theme } from "@/app/lib/theme";

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: Theme;
}) => {
  const setPageTheme = useGlobalStore((state) => state.setPageTheme);

  // Set the theme on mount based on server-determined value
  React.useEffect(() => {
    setPageTheme(initialTheme);
  }, [initialTheme, setPageTheme]);

  return <>{children}</>;
};
