import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.octalmesh.console",
  appName: "OctalConsole",
  webDir: "dist",
  android: {
    allowMixedContent: true,
  },
  server: {
    allowNavigation: ["octalmesh.com", "console.octalmesh.com", "100.*"],
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      backgroundColor: "#171717",
      androidScaleType: "CENTER_CROP",
      useDialog: true,
    },
  },
};

export default config;
