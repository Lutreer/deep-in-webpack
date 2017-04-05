var webpack = require('webpack');
var config = require('./config');
var webpackConfig = require('./webpack.base.config.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');



webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': '"'+config.dev.env+'"'
    }),
    new webpack.NoErrorsPlugin(), // 允许错误不打断程序
    new webpack.HotModuleReplacementPlugin()

)

module.exports = webpackConfig;
