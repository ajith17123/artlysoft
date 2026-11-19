import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/artlysoft/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom') ||
              id.includes('react-router-hash-link')
            ) {
              return 'vendor-react';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('chart.js')) {
              return 'vendor-charts';
            }
            if (id.includes('bootstrap') || id.includes('react-icons') || id.includes('aos')) {
              return 'vendor-ui';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
