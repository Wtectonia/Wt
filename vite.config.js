import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      outDir: "deploy/_site",
      rollupOptions: {
        input: {
          about: 'about.html',
        },
      }
    }
  }
});
