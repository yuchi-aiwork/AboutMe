import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Essential for GitHub Pages static hosting
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
