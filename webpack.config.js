const webpack = require('webpack');

const webpackConfig = {
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  ]
}

module.exports = {
    webpackConfig
}