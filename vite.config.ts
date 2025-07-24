import path from 'node:path';
import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
  ],
  base: '/trivia-game/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
