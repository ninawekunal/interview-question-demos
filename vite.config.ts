import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project sites are served from `/<repo>/`.
  // Ensure built asset URLs work when deployed to:
  // https://<user>.github.io/interview-question-demos/
  base: command === "build" ? "/interview-question-demos/" : "/",
}));

