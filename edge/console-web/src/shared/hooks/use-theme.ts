import * as React from "react";

import { ThemeProviderContext } from "@app/providers/theme/theme-context";

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
