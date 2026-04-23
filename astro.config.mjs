import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://omakaseporto.com",
  integrations: [tailwind({ applyBaseStyles: false })]
});