import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [type, setType] = useState("light");

  const ThemeLight = () => {
    setType("light");
  };
  const ThemeDark = () => {
    setType("dark");
  };

  const value = {
    type,
    ThemeLight,
    ThemeDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
