import { shadcnThemePresets } from "@/shared/config/theme-presets.ts";
import type { ColorTheme } from "@/shared/types/theme-customizer.ts";

export const colorThemes: ColorTheme[] = Object.entries(shadcnThemePresets).map(([key, preset]) => ({
  name: preset.label || key,
  value: key,
  preset: preset,
}));
