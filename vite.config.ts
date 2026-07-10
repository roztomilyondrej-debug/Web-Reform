import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          prava: path.resolve(__dirname, 'prava-zaku.html'),
          eia: path.resolve(__dirname, 'eia.html'),
          petice: path.resolve(__dirname, 'petice.html'),
          onas: path.resolve(__dirname, 'o-nas.html'),
          kontakt: path.resolve(__dirname, 'kontakt.html'),
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
