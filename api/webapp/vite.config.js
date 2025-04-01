import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000/api', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false
      }
    }
  }
})