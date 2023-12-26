import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import orama from '@orama/plugin-astro';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
// import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: 'https://kenalisyiah.com',
  image: {
    domains: ["ucarecdn.com"],
    service: passthroughImageService(),

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
  }), react(), vue(), svelte(), sitemap(), astroImageTools,  robotsTxt()]
});