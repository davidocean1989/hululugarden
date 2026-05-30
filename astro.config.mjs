import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hululugarden.com',
  build: {
    format: 'directory',
  },
  image: {
    domains: ['api.qrserver.com'],
  },
});
