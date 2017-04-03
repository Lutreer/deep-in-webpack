
var config = require('./config');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpackConfig = JSON.parse(JSON.stringify(require('./webpack.base.config')));

webpackConfig.plugins.concat([
    new CleanWebpackPlugin([config.build.rootPath]),
    new webpack.DefinePlugin({
        'process.env': config.build.env
    }),
    //gzip 压缩
    require('compression-webpack-plugin')({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(' +
            config.build.gzipExtensions.join('|') +
            ')$'
        ),
        threshold: 1024,// 1kb
        minRatio: 0.8
    })
])
module.exports = webpackBaseConfig;
