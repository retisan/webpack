const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// plugins帮助我们在webpack打包的生命周期中做一些事情
module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: "./dist",
        open: true
    },
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(jpg|woff|svg|eot|ttf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[path][name].[ext]",
                        outputPath: "images",
                        limit: 10240
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader"
                    },
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin()]
};
