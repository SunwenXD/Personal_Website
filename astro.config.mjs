// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SunwenXD.github.io',
  base: '/Personal_Website',
  vite: {
    plugins: [tailwindcss()]
  }
});