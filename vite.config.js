import { defineConfig } from 'vite'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
const { createVuePlugin } = require('vite-plugin-vue2');
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [createVuePlugin(), Components({
    resolvers: [
      VuetifyResolver(),
    ],
  }),
  ],
  server: {				// ← ← ← ← ← ←
    host: '0.0.0.0'	// ← new content ←
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})