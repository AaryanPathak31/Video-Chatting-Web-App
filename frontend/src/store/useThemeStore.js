import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("vibin-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("vibin-theme", theme);
    set({ theme });
  },
}));
