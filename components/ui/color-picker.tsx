"use-client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColorModeTheme } from "../color-theme/types";
import { useColorTheme } from "../color-theme/use-theme";

export interface Color {
  value: string;
  label: string;
}

const ColorIcon = ({ color }: { color: Color }) => {
  return (
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color.value }}
    />
  );
};

const ColorPicker = ({ colors }: { colors: Color[] }) => {
  const { theme, setTheme } = useColorTheme();

  const setThemeToLowercase = (theme: string) => {
    const colorTheme = theme.toLowerCase() as ColorModeTheme;
    setTheme(colorTheme);
  };

  const getCurrentColor = () => {
    return colors.find((color) => color.label.toLowerCase() === theme);
  };

  return (
    <Select
      value={getCurrentColor()?.label}
      onValueChange={setThemeToLowercase}
    >
      <SelectTrigger suppressHydrationWarning className="w-44">
        <SelectValue className="w-full" placeholder="Pick a Color" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {colors.map((color) => (
          <SelectItem key={color.label} className="w-full" value={color.label}>
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
