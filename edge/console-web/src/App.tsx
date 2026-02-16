import { AppProvider } from "@/providers/app-provider"
import { AppRoutes } from "@/config/routes"
import { useEffect } from "react"
import { initGTM } from "@/utils/analytics"

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
