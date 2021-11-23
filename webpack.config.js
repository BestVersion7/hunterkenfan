import webpack from "webpack";

module.exports = {
    plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })],
};
