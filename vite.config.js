import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Olcaynakliyat/', // GitHub deponuzun adı (başında ve sonunda slash olacak şekilde)
})
