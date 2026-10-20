import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Occusmart/' : '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
