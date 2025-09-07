import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "f237ec5c108e.ngrok-free.app" // 👈 Add your ngrok domain here
    ]
  },
  plugins: [react(), tailwindcss()],
  base: "/arcane-2k25",
})