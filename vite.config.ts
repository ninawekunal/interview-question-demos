import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves projects from `/<repo>/` by default. This makes built asset URLs work
  // when deployed via the Pages workflow.
  base: process.env.GITHUB_PAGES ? '/product-wishlist/' : '/',
  plugins: [react()],
})
