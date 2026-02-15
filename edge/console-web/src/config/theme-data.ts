import { shadcnThemePresets } from '@/utils/theme-presets.ts'
import type { ColorTheme } from '@/types/theme-customizer'

export const colorThemes: ColorTheme[] = Object.entries(shadcnThemePresets).map(([key, preset]) => ({
  name: preset.label || key,
  value: key,
  preset: preset
}))
