import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path"
import dotenv from 'dotenv';

dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env': process.env, },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      overlay: false,
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
})
