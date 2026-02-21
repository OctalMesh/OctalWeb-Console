import React from "react";

import { ThemeProvider } from "@app/providers/theme/theme-provider";

import { SidebarConfigProvider } from "@widgets/navigation/sidebar-context";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarConfigProvider>{children}</SidebarConfigProvider>
    </ThemeProvider>
  );
}
