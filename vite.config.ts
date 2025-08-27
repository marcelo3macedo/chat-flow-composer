import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  base: '/chat-flow-composer/', 
  plugins: [react()],
  resolve: {
    alias: {
      "@Composer": path.resolve(__dirname, "./src"),
    },
  },
})
