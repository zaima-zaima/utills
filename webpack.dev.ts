import { Configuration } from "webpack";

export default {
  mode: "development",
  devtool: "source-map",
  target: "web",
  devServer: {
    open: true,
    port: 3200,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
} as Configuration;
