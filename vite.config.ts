import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import chatHandler from './api/chat.js';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Dev middleware runs in Node (never shipped to the browser), so the key
  // stays server-side. loadEnv doesn't touch process.env, so set it here.
  process.env.GROQ_API_KEY = env.GROQ_API_KEY;
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'dev-api-chat',
        configureServer(server) {
          server.middlewares.use('/api/chat', chatHandler);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
