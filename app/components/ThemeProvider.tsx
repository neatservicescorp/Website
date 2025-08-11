"use client";

import React from "react";
import { useGlobalStore, Theme } from "@/app/context/global";

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
