import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: 'src/auto-import.d.ts',
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
      dirs: ['./src/utils'],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },

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
      '/mock': {
        target: 'http://127.0.0.1:4523/m1/2213668-0-default',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/mock/, ''),
      },
    },
  },
})
