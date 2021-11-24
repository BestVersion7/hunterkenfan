// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: "node",
    plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })],
    module: {
        rules: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
        ],
    }
};
