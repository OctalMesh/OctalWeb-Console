import { useEffect } from "react";

import { AppProvider } from "@app/providers";
import { AppRouter } from "@app/router";

import { initGTM } from "@shared/lib/analytics";

export default function App() {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
