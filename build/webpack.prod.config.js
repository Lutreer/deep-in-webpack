var webpack = require('webpack');
var config = require('./config');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin')
var webpackConfig = require('./webpack.base.config');

webpackConfig.plugins.push(
    new CleanWebpackPlugin(['dist'], {
        root: config.base.rootPath
    }),
    // 在js中可以直接使用 process.env 来检测环境
    new webpack.DefinePlugin({
        'process.env': config.build.env
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,// js压缩
        comments: true,// 删除注释
        compress: {
            warnings: true// 压缩是输出警告
        }
    })
    //gzip 压缩
    // new CompressionWebpackPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp(
    //         '\\.(' +
    //         config.build.gzipExtensions.join('|') +
    //         ')$'
    //     ),
    //     threshold: 1024,// 1kb
    //     minRatio: 0.8
    // })
);
module.exports = webpackConfig;
