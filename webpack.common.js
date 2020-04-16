const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 忽略node_modules，提升打包速度
                use: {
                    loader: "babel-loader",
                    options: {
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
        })
    ],
};