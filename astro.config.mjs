import { defineConfig } from 'astro/config';
import content from "@astrojs/content";

export default defineConfig({
  integrations: [content()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
