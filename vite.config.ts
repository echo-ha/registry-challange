import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    }),
    vanillaExtractPlugin()
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api/dockerhub': {
        target: 'https://hub.docker.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/dockerhub/, '/v2')
      }
    }
  }
});
