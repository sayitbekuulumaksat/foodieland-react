import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 4000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    // https: {
    //   key: './path/to/server.key',
    //   cert: './path/to/server.crt',
    // },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
