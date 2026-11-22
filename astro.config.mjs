// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dočasne: GitHub Pages bez vlastnej domény → https://martin-michalek.github.io/strom-a-les/
// Po presmerovaní domény: SITE_URL = 'https://stromales.sk', BASE = '/',
// vytvoriť public/CNAME s obsahom "stromales.sk" a v src/config.ts nastaviť indexable: true.
const SITE_URL = 'https://stromales.sk';
const BASE = '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
