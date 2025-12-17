import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abwalfdltnha178.github.io', // آدرس سایت خودتان
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-dark' },
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_LAST_COMMIT_DATE': JSON.stringify(process.env.PUBLIC_LAST_COMMIT_DATE)
    }
  },
  integrations: [sitemap({
      customSitemaps: ['https://abwalfdltnha178.github.io/sitemap.xml'],
    }),]
});
