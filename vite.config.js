import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      optimize: {
        jpeg: {
          quality: 50
        },
        png: {
          quality: 50
        },
        webp: {
          quality: 50
        },
        svg:{
          quality: 100
        }
       
    }}), react()],
})
