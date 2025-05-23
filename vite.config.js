import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('.', 'src'),
    },
  },
  build: {
    outDir: 'dist',           // yeh line add kari
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          radix: ['@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
        },
      },
    },
  },
});
git add vite.config.js
git commit -m "Add outDir in vite build config for Vercel"
git push origin master
