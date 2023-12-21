import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/common.scss";',
      },
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
      },
    },
  },
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    strictPort: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://192.168.3.1:7370/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        headers: {
          Referer: 'https://192.168.3.1:7370',
        },
      },
      '/socket.io': {
        target: 'https://192.168.3.1:7370/',
        ws: true,
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'https://192.168.3.1:7370',
        },
      },
    },
  },
})
