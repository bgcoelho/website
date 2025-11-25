// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function githubPagesSpaFix() {
  return {
    name: "github-pages-spa-fix",
    writeBundle() {
      const dist = "dist";
      const index = `${dist}/index.html`;
      const notFound = `${dist}/404.html`;

      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
        console.log("✔ 404.html copied from index.html");
      } else {
        console.warn("⚠ index.html not found — skipping 404.html creation");
      }

      // Copy CNAME if exists
      if (fs.existsSync("public/CNAME")) {
        fs.copyFileSync("public/CNAME", `${dist}/CNAME`);
        console.log("✔ CNAME copied");
      } else {
        console.warn("⚠ CNAME not found in public/");
      }

      // Copy .nojekyll if exists
      if (fs.existsSync("public/.nojekyll")) {
        fs.copyFileSync("public/.nojekyll", `${dist}/.nojekyll`);
        console.log("✔ .nojekyll copied");
      } else {
        console.warn("⚠ .nojekyll not found in public/");
      }
    }
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), githubPagesSpaFix()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
