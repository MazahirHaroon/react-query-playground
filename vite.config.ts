import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@api': '/src/api',
      '@interfaces': '/src/interfaces',
      '@constants': '/src/constants',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@form-components': '/src/components/Form',
      '@post-components': '/src/components/Post',
      '@components': '/src/components',
    },
  },
});
