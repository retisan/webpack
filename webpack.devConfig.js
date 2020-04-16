const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
// plugins帮助我们在webpack打包的生命周期中做一些事情
const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = merge(commonConfig, devConfig);
