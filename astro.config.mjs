import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt"



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), astroI18next()],
  site: 'https://porfolio.dev/',
})
