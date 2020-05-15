const path = require("path");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    mode: "production",
    devtool: "cheap-eval-source-map",
    performance: false,
    optimization: {
        // 拆分资源
        splitChunks: {
            chunks: "all",
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({}) // 压缩css代码
        ]
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].[contenthash].chunk.js"
    },
};

module.exports = merge(commonConfig, prodConfig);
