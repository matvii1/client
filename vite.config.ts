import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mat`s-blog/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    // global: {},
  },
})
