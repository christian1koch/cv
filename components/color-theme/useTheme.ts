import { useTheme } from "./";
import { colorContext } from "./theme-provider";
import { ColorModeTheme, DarkModeTheme } from "./types";
export const useColorTheme = () => {
  const themeSettings = useTheme(colorContext);

  const setTheme = (theme: ColorModeTheme) => {
    themeSettings.setTheme(theme);
  };
  const theme = themeSettings.theme as ColorModeTheme;

  return { ...themeSettings, theme, setTheme };
};

export const useDarkModeTheme = () => {
  const themeSettings = useTheme();
  const setTheme = (theme: DarkModeTheme) => {
    themeSettings.setTheme(theme);
  };
  const theme = themeSettings.theme as DarkModeTheme;
  return { ...themeSettings, theme, setTheme };
};
