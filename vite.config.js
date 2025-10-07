import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "tickr-192.jpg",
        "tickr-512.jpg",
      ],
      manifest: {
        name: "Tickr",
        short_name: "Tickr",
        description:
          "Your personal task manager to stay organized and productive.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#172842",
        icons: [
          {
            src: "/tickr-192.jpg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/tickr-512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
