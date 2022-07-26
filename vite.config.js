import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from "vite-plugin-md"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  build:{
    lib:{
      entry:'./packages/index.js',
      name:'hzx-ui'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  external: ['vue'],
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'), // src路径
        '@components': resolve(__dirname, 'src/components'),
        '@packages': resolve(__dirname, 'packages'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@views': resolve(__dirname, 'src/views'),
    }
  },
  css:{
    preprocessorOptions:{
      less: {
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/globalcolor.less')}";`,
        javascriptEnabled: true,
      }
    }
  },
  server: {
    port: 9000,
    host: '0.0.0.0',
    https: false
  },
})
