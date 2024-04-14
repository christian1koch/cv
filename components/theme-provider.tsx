"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as ColorThemesProvider } from "./color-theme";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { type ColorThemeProviderProps } from "./color-theme/types";

export type ColorAndNextThemeProviderProps = {
  children: React.ReactNode;
  nextThemesProviderProps: Omit<ThemeProviderProps, "children">;
  colorThemesProviderProps: ColorThemeProviderProps;
};

export function ThemeProvider({
  children,
  nextThemesProviderProps,
  colorThemesProviderProps,
}: ColorAndNextThemeProviderProps) {
  const {
    colorThemes,
    colorThemeAttribute,
    forcedTheme,
    colorThemeDisableTransitionOnChange,
    colorValue,
  } = colorThemesProviderProps;
  return (
    <ColorThemesProvider
      themes={colorThemes}
      forcedTheme={forcedTheme}
      attribute={colorThemeAttribute}
      disableTransitionOnChange={colorThemeDisableTransitionOnChange}
      value={colorValue}
    >
      <NextThemesProvider {...nextThemesProviderProps}>
        {children}
      </NextThemesProvider>
    </ColorThemesProvider>
  );
}
