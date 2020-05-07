const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        sub: "./src/sub.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 忽略node_modules，提升打包速度
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ['lodash'],
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        chrome: "64",
                                    },
                                    useBuiltIns: "entry", // 使用babel-polyfill时，只处理使用过的es6相关特性
                                },
                            ],
                            "@babel/preset-react",
                        ],
                    },
                },
            },
            {
                test: /\.(jpg|woff|svg|eot|ttf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[path][name].[ext]",
                        outputPath: "images",
                        limit: 10240,
                    },
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
};