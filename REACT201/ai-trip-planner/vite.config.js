import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/REACT201/ai-trip-planner", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
