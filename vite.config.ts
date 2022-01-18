/* eslint-env node */
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp'; // 自动加载组件样式
import path from 'path';
import antOverride from './theme.config';
Object.assign(antOverride, { '@ant-prefix': 'lambada-vite' });

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    mode: '/',
    build: {
      rollupOptions: {
        input: {
          lambada: path.resolve(__dirname, './index.html')
        },
        output: {
          entryFileNames: '[name].[hash].js', // 入口的包名
          chunkFileNames: '[name].[hash].js', // 每个模块的包名
          assetFileNames: 'static/[name].[hash].[ext]', // 静态文件
          format: 'esm' //cjs umd amd iife system commonjs es esm module systemjs
          // inlineDynamicImports: true
        }
      },
      minify: false //禁用最小化混淆
    },
    plugins: [
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style`
          }
        ]
      })
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
  };
});
