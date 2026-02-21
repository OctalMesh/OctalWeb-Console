import { useEffect } from "react";

import { AppProvider } from "@app/providers/app-provider";
import { AppRoutes } from "@app/router/routes";

import { initGTM } from "@shared/lib/analytics";

export default function App() {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
