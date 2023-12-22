import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import orama from '@orama/plugin-astro';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://kenalisyiah.com',
  image: {
    domains: ["ucarecdn.com"]
  },
  integrations: [tailwind(), orama({
    // We can generate more than one DB, with different configurations
    mydb: {
      // Required. Only pages matching this path regex will be indexed
      pathMatcher: /baca\/.+/,
      // Optional. 'english' by default
      // language: 'indonesian',

      // Optional. ['body'] by default. Use it to constraint what is used to
      // index a page.
      contentSelectors: ['#main-content']
    }
  }), react(), vue(), svelte(), sitemap()]
});