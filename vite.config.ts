import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: "./src/mock",
      enable: command === "serve" && mode === "mock",
    })
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
        target: 'https://127.0.0.1:25565/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        headers: {
          Referer: 'https://127.0.0.1:25565',
        },
      },
      '/socket': {
        target: 'https://127.0.0.1:8210/',
        ws: true,
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'https://127.0.0.1:8210',
        },
      },
    },
  },
}))
