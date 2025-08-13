import { create } from "zustand";

export type Theme = "light" | "dark";

export type GlobalState = {
  pageTheme: Theme;
  setPageTheme: (theme: Theme) => void;
};

// Server-side function to get theme from pathname (no hooks needed)
export const getThemeFromPath = (pathname: string): Theme => {
  const themeMap: Record<string, Theme> = {
    "/": "dark",
    "/services": "light",
    "/projects": "light",
    "/reviews": "dark",
    "/contact": "dark",
    "/blog": "light",
  };

  return themeMap[pathname] || "light";
};

const globalStore = create<GlobalState>((set) => ({
  pageTheme: "light",
  setPageTheme: (theme: Theme) => set({ pageTheme: theme }),
}));

export const useGlobalStore = globalStore;
