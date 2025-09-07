import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    baseURL: process.env.BASE_PATH,
    static: true,
    preset: "github-pages",
  },
});
