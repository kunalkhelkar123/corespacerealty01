import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "77.37.45.231",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
