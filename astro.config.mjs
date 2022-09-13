import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
    site: "https://amna-tausif.github.io/",
    integrations: [
        react(),
        tailwind({
            config: {
                path: "./tailwind.config.cjs",
            },
        }),
    ],
})
