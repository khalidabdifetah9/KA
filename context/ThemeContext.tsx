"use client";

import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface ThemeContextType {
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const Theme = ({ children }: { children: ReactNode }) => {
  const [light, setLight] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
