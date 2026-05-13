// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },

  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Poppins',
    cssVariable: '--font-poppins',
  }],

  integrations: [icon({
    iconDir: "src/icons",
  })]
});