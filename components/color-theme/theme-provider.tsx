"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from ".";
import { COLOR_MODE_THEMES, DARK_MODE_THEMES } from "./types";
import { UseThemeProps } from "./types";
export const colorContext = React.createContext<UseThemeProps | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={[DARK_MODE_THEMES.LIGHT, DARK_MODE_THEMES.DARK]}
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        storageKey="color-theme"
        enableSystem
        disableTransitionOnChange
        themes={[
          COLOR_MODE_THEMES.ROSE,
          COLOR_MODE_THEMES.GREEN,
          COLOR_MODE_THEMES.BLUE,
          COLOR_MODE_THEMES.ZINC,
          COLOR_MODE_THEMES.ORANGE,
        ]}
        customContext={colorContext}
      >
        {children}
      </NextThemesProvider>
    </NextThemesProvider>
  );
}
