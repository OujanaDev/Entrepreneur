import { copyFileSync } from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vitest/config";
import react from "@vitejs/plugin-react";

/** GitHub Pages has no rewrite rules: it serves 404.html for unknown paths, so 404.html is the app itself. */
function spaFallback(): Plugin {
  return {
    name: "spa-fallback",
    apply: "build",
    closeBundle() {
      copyFileSync(path.resolve(__dirname, "dist/index.html"), path.resolve(__dirname, "dist/404.html"));
    },
  };
}

export default defineConfig({
  // "/" on Vercel or a custom domain; "/<dépôt>/" on GitHub Pages (set by the GitHub workflow).
  base: process.env.VITE_BASE || "/",
  plugins: [react(), spaFallback()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  server: { port: 5173 },
  test: { environment: "jsdom", setupFiles: ["./src/test-setup.ts"], globals: true },
});
