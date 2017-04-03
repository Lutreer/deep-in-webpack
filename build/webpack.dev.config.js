var config = require('./config');
var webpackConfig = JSON.parse(JSON.stringify(require('./webpack.base.config')));

webpackConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    new webpack.NoErrorsPlugin(), // 允许错误不打断程序
    new webpack.optimize.UglifyJsPlugin({
        minimize: false,// js压缩
        comments: false,// 删除注释
        compress: {
            warnings: true// 压缩是输出警告
        },
    }),
])
module.exports = webpackBaseConfig;
