import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  // 👈 ویرگول اینجا باید باشد
  vite: {
    define: {
      'import.meta.env.PUBLIC_LAST_COMMIT_DATE': JSON.stringify(process.env.PUBLIC_LAST_COMMIT_DATE)
    }
  }
});
