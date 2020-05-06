const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const prodConfig = {
    mode: "production",
    devtool: "cheap-eval-source-map",
    optimization: {
        // 拆分资源
        splitChunks: {
            chunks: "async",
        },
    },
};

module.exports = merge(commonConfig, prodConfig);
