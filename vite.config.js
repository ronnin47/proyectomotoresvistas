import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'  // plugin oficial de Tailwind para Vite

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // activa Tailwind
  ],
})