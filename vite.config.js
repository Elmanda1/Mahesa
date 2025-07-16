import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mahesa/',  // Pastikan ini sesuai dengan nama repo
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})