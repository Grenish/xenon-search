"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const Toggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={toggleTheme} className="p-2 border-2 border-gray-500 rounded dark:text-gray-500 cursor-pointer">
        {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default Toggler;
