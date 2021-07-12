import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import path from "path";

import antOverride from "./theme.config";
Object.assign(antOverride, { "@ant-prefix": "lambada-vite" });

const env = process.env.NODE_ENV || 'development';

// console.log('import.meta', import.meta)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    modules: {
      hashPrefix: 'lambada'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: antOverride,
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    },
  }
});
