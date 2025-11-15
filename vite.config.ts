import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle() {
    copyFileSync("dist/index.html", "dist/404.html");
    // Copy .nojekyll if it exists in public folder
    try {
      copyFileSync("public/.nojekyll", "dist/.nojekyll");
    } catch (e) {
      // File doesn't exist, that's okay
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "/website/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), copy404Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
