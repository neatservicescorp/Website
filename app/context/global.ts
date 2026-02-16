import { create } from "zustand";
import { Theme } from "../lib/theme";

export { type Theme } from "../lib/theme";

export type GlobalState = {
  pageTheme: Theme;
  setPageTheme: (theme: Theme) => void;
};

const globalStore = create<GlobalState>((set) => ({
  pageTheme: "light",
  setPageTheme: (theme: Theme) => set({ pageTheme: theme }),
}));

export const useGlobalStore = globalStore;
