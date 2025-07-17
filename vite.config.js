import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mahesa/', // Tetap perlu untuk assets (CSS, JS, images)
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})