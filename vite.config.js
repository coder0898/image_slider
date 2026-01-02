import { defineConfig } from "vite";

export default defineConfig({
  base: "/image_slider/",
  build: {
    outDir: "docs", // ⬅️ output folder
    emptyOutDir: true, // clears old files before build
  },
});
