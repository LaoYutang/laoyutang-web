import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    base: '/',
    port: 8000, // 启动端口
    strictPort: false, // 端口被占用尝试下一个端口
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8000,
    },

    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
