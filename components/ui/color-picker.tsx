"use-client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsClient } from "@/lib/use-is-client";
import { ColorModeTheme } from "../color-theme/types";
import { useColorTheme } from "../color-theme/use-theme";

export interface Color {
  value: string;
  label: string;
}

const ColorIcon = ({ color }: { color: Color }) => {
  return (
    <div
      className="h-3 w-3 rounded-full"
      style={{ backgroundColor: color.value }}
    />
  );
};

const ColorPicker = ({ colors }: { colors: Color[] }) => {
  const isClient = useIsClient();

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
      value={isClient ? getCurrentColor()?.label : "Pick a Color"}
      onValueChange={setThemeToLowercase}
    >
      <SelectTrigger className="w-44">
        <SelectValue className="w-full" placeholder="Pick a Color" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {colors.map((color) => (
          <SelectItem key={color.label} className="w-full" value={color.label}>
            <div className="flex w-full items-center justify-evenly">
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
