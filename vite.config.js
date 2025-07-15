import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Remove sitemapPlugin if you're not using vite-plugin-pages
// import { sitemapPlugin } from "vite-plugin-pages-sitemap";

export default defineConfig({
  plugins: [
    react(),
    // ✅ If you really need sitemapPlugin, make sure vite-plugin-pages is installed too.
    // sitemapPlugin({ hostname: "https://scalebridge.netlify.app" }),
  ],
});
