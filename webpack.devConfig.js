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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].chunk.js"
    },
};

module.exports = merge(commonConfig, devConfig);
