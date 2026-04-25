import { defineConfig } from "vite"
import { bundleTracker } from "./.chunk-scope/vite-plugin.mjs"

export default defineConfig({
  plugins: [
    bundleTracker({
      scenario: "vite-smoke",
    }),
  ],
})
