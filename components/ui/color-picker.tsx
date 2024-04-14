"use-client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useColorTheme } from "../color-theme/useTheme";
import { COLOR_MODE_THEMES, ColorModeTheme } from "../color-theme/types";

export interface IColor {
  value: string;
  label: string;
}

const ColorIcon = ({ color }: { color: IColor }) => {
  return (
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color.value }}
    />
  );
};

const ColorPicker = ({ colors }: { colors: IColor[] }) => {
  const { theme, setTheme } = useColorTheme();

  const setThemeToLowercase = (theme: string) => {
    const colorTheme = theme.toLowerCase() as ColorModeTheme;
    return setTheme(colorTheme);
  };

  const getCurrentColor = () => {
    return colors.find((color) => color.label.toLowerCase() === theme);
  };

  return (
    <Select
      value={getCurrentColor()?.label}
      onValueChange={setThemeToLowercase}
    >
      <SelectTrigger className="w-44" suppressHydrationWarning>
        <SelectValue className="w-full" placeholder="Pick a Color" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {colors.map((color) => (
          <SelectItem key={color.label} value={color.label} className="w-full">
            <div className="flex justify-evenly w-full items-center">
              <ColorIcon color={color} />
              <div className="mx-2">{color.label}</div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ColorPicker;
