import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  cacheDir: "./.cache",
  site: "https://devtechsl.com",
  integrations: [sitemap(), tailwind(), react()],
});
