import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Olcaynakliyat/', // Depo adınız büyük/küçük harfe duyarlı olarak buraya yazılmalı
})
