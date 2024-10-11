import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    css: {
        postcss: {
          plugins: [
            tailwindcss()],
        },
      },
    plugins: [react()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
})