import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import React from "react";

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
