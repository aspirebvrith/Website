import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all addresses, including 0.0.0.0
    port: 3000, // Use port 3000
    watch: {
      // Use polling for file changes, which is required for Docker volume mounts
      usePolling: true,
    },
  },
})
