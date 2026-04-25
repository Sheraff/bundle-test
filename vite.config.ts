import { defineConfig } from "vite"
import { bundleTracker } from "@chunk-scope/vite-plugin"

export default defineConfig({
  plugins: [
    bundleTracker({
      scenario: "vite-smoke",
    }),
  ],
})
