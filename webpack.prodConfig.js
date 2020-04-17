const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const prodConfig = {
    mode: "production",
    devtool: "cheap-eval-source-map",
    optimization: {
        // 拆分资源
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'async',
                    minChunks: 1,
                    name: 'common'
                }
            }
        }
    },
};

module.exports = merge(commonConfig, prodConfig);
