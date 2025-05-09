import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from 'dotenv';
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";  // Import tailwindcss correctly
import autoprefixer from "autoprefixer"; // You might also want to add autoprefixer

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: { 'process.env': process.env },
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
      plugins: [
        tailwindcss,   // Use tailwindcss as a PostCSS plugin
        autoprefixer,  // Optionally, add autoprefixer for better CSS compatibility
      ],
    },
  },
});
