/* eslint-env node */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'; // 提供 React Fast Refresh 支持
import legacy from '@vitejs/plugin-legacy'; // 为打包后的文件提供传统浏览器兼容性支持
import vitePluginImp from 'vite-plugin-imp'; // 自动加载组件样式
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer'; // 打包体积分析

import antOverride from './theme.config';
Object.assign(antOverride, { '@ant-prefix': 'lambada-vite' });

// const env = process.env.NODE_ENV || 'development';
const env = process.argv[process.argv.length - 1];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    legacy(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    }),
    ...(env === 'analyze'
      ? [
          visualizer({
            filename: './node_modules/.cache/visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true
          })
        ]
      : [])
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: antOverride
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
});
