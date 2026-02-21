import { StrictMode } from "react";

import App from "@/app";
import { createRoot } from "react-dom/client";

import "@app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
