import { AppProvider } from "@/app/providers/app-provider.tsx";
import { AppRoutes } from "@/app/router/routes.tsx";
import { useEffect } from "react";
import { initGTM } from "@/shared/lib/analytics.ts";

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
