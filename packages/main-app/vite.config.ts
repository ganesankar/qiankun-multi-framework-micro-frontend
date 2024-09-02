import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

const SERVER_PORT = 3000

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss()],
    },
  },
  plugins: [react()],
  server: {
    open: '/',
    port: SERVER_PORT,
  },
  preview:{
    open: '/',
    port: SERVER_PORT
  }
})
