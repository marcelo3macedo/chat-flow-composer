import path from "path"

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/chat-flow-composer/', 
  plugins: [react()],
  resolve: {
    alias: {
      "@Composer": path.resolve(__dirname, "./src"),
    },
  },
})
