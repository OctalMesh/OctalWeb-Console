"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/ui/button.tsx";
import { Label } from "@/shared/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select.tsx";
import { Separator } from "@/shared/ui/separator.tsx";
import { useThemeManager } from "@/shared/hooks/use-theme-manager.ts";
import { useCircularTransition } from "@/shared/hooks/use-circular-transition.ts";
import { colorThemes } from "@/shared/config/theme-data.ts";
import { radiusOptions } from "@/shared/config/theme-customizer-constants.ts";
import React from "react";
import "./circular-transition.css";

interface ThemeTabProps {
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  selectedRadius: string;
  setSelectedRadius: (radius: string) => void;
}

export function ThemeTab({ selectedTheme, setSelectedTheme, selectedRadius, setSelectedRadius }: ThemeTabProps) {
  const { isDarkMode, applyTheme, applyRadius } = useThemeManager();

  const { toggleTheme } = useCircularTransition();

  const handleRadiusSelect = (radius: string) => {
    setSelectedRadius(radius);
    applyRadius(radius);
  };

  const handleLightMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDarkMode) return;
    toggleTheme(event);
  };

  const handleDarkMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode) return;
    toggleTheme(event);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Theme Presets */}

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Theme Presets</Label>
        </div>

        <Select
          value={selectedTheme}
          onValueChange={(value) => {
            setSelectedTheme(value); // Update selected theme state
            applyTheme(value, isDarkMode); // Apply the selected theme
          }}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Choose Shadcn Theme" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <div className="p-2">
              {colorThemes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.primary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.secondary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.accent }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-border/20"
                        style={{ backgroundColor: theme.preset.styles.light.muted }}
                      />
                    </div>
                    <span>{theme.name}</span>
                  </div>
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Radius Selection */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Radius</Label>
        <div className="grid grid-cols-5 gap-2">
          {radiusOptions.map((option) => (
            <div
              key={option.value}
              className={`relative cursor-pointer rounded-md p-3 border transition-colors ${
                selectedRadius === option.value ? "border-primary" : "border-border hover:border-border/60"
              }`}
              onClick={() => handleRadiusSelect(option.value)}
            >
              <div className="text-center">
                <div className="text-xs font-medium">{option.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Mode Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Mode</Label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={!isDarkMode ? "secondary" : "outline"}
            size="sm"
            onClick={handleLightMode}
            className="cursor-pointer mode-toggle-button relative overflow-hidden"
          >
            <Sun className="h-4 w-4 mr-1 transition-transform duration-300" />
            Light
          </Button>
          <Button
            variant={isDarkMode ? "secondary" : "outline"}
            size="sm"
            onClick={handleDarkMode}
            className="cursor-pointer mode-toggle-button relative overflow-hidden"
          >
            <Moon className="h-4 w-4 mr-1 transition-transform duration-300" />
            Dark
          </Button>
        </div>
      </div>
    </div>
  );
}
