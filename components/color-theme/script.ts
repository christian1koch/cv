/* eslint-disable -- is a script*/
export const script = (
  attribute: string,
  storageKey: string,
  defaultTheme: any,
  forcedTheme: string,
  themes: any[],
  value: { [x: string]: any },
  enableSystem: any,
  enableColorScheme: any
) => {
  const el = document.documentElement;
  const systemThemes = ["light", "dark"];
  const isClass = attribute === "class";
  const classes =
    isClass && value
      ? themes.map((t: string | number) => value[t] || t)
      : themes;

  function updateDOM(theme: string) {
    if (isClass) {
      console.log("theme", theme);
      el.classList.remove(...classes);
      el.classList.add(theme);
    } else {
      el.setAttribute(attribute, theme);
    }

    setColorScheme(theme);
  }

  function setColorScheme(theme: string) {
    if (enableColorScheme && systemThemes.includes(theme)) {
      el.style.colorScheme = theme;
    }
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  if (forcedTheme) {
    updateDOM(forcedTheme);
  } else {
    try {
      const themeName = localStorage.getItem(storageKey) || defaultTheme;
      const isSystem = enableSystem && themeName === "system";
      const theme = isSystem ? getSystemTheme() : themeName;
      updateDOM(theme);
    } catch (e) {
      //
    }
  }
};
