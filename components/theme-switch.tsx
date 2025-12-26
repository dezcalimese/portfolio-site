"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";
import { useTheme } from "@/context/theme-content";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-1 p-1 bg-swiss-card border border-swiss-border rounded-full z-[999]">
      <button
        className={`p-2.5 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-swiss-accent/15 text-swiss-accent"
            : "text-swiss-text-secondary hover:text-swiss-text"
        }`}
        onClick={() => setTheme("light")}
        aria-label="Light mode"
      >
        <BsSun className="w-4 h-4" />
      </button>
      <button
        className={`p-2.5 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-swiss-accent/15 text-swiss-accent"
            : "text-swiss-text-secondary hover:text-swiss-text"
        }`}
        onClick={() => setTheme("system")}
        aria-label="System theme"
      >
        <HiComputerDesktop className="w-4 h-4" />
      </button>
      <button
        className={`p-2.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-swiss-accent/15 text-swiss-accent"
            : "text-swiss-text-secondary hover:text-swiss-text"
        }`}
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        <BsMoon className="w-4 h-4" />
      </button>
    </div>
  );
}
