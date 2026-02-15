import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: [
        "/favicon.ico",
        "/assets/pwa/apple-touch-icon.png"
      ],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "OctalMesh - Console",
        short_name: "OctalConsole",
        description: "Powerful CRM & CMS dashboard",
        theme_color: "#09090b",
        background_color: "#09090b",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "assets/pwa/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "assets/pwa/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable"
          },
          {
            src: "assets/pwa/192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "assets/pwa/512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'import.meta.env.VITE_BASENAME': JSON.stringify(process.env.VITE_BASENAME || ''),
  }
})
