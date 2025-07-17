import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mahesa/', // Ganti dengan nama repository Anda
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})