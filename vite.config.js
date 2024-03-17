import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import eslint  from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:3000,
    open:true,
  },
  plugins: [react(), eslint()],
})
