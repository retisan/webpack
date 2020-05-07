const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    mode: "production",
    devtool: "cheap-eval-source-map",
    optimization: {
        // 拆分资源
        splitChunks: {
            chunks: "async",
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};

module.exports = merge(commonConfig, prodConfig);
