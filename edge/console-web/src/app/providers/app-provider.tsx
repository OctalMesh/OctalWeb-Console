import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@app/providers/theme/theme-provider";

import { SidebarConfigProvider } from "@widgets/sidebar/sidebar-context";

const basename = import.meta.env.VITE_BASENAME || "";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarConfigProvider>
        <Router basename={basename}>{children}</Router>
      </SidebarConfigProvider>
    </ThemeProvider>
  );
}
