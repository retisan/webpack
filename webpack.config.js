const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.jpg$/,
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
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
