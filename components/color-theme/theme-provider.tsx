"use client";

import * as React from "react";
import { COLOR_MODE_THEMES, DARK_MODE_THEMES , UseThemeProps } from "./types";
import { ThemeProvider as NextThemesProvider } from ".";

export const colorContext = React.createContext<UseThemeProps | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="system"
      themes={[DARK_MODE_THEMES.LIGHT, DARK_MODE_THEMES.DARK]}
    >
      <NextThemesProvider
        disableTransitionOnChange
        enableSystem
        attribute="class"
        customContext={colorContext}
        defaultTheme="system"
        storageKey="color-theme"
        themes={[
          COLOR_MODE_THEMES.ROSE,
          COLOR_MODE_THEMES.GREEN,
          COLOR_MODE_THEMES.BLUE,
          COLOR_MODE_THEMES.ZINC,
          COLOR_MODE_THEMES.ORANGE,
        ]}
      >
        {children}
      </NextThemesProvider>
    </NextThemesProvider>
  );
}
