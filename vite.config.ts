import { defineConfig } from "vite";
import million from "million/compiler";

export default defineConfig({
  plugins: [million.vite()],
  esbuild: { jsx: "automatic" }
})
