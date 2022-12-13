const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
configureWebpack: {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ];
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
});
