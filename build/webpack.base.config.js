// 这里展示了最最基本的配置
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var config = require('./config');
var path = require("path");

var baseConfig = {
    // 单页应用
    // entry: config.base.rootPath + "/src/main.js",

    // 多文件入口
    entry: {
        // app，app2就是不同的chunk
        app: config.base.rootPath + "/src/main.js",
        // app2: '.app/js/test1.js'
    },
    output: {
        path: config.base.rootPath + "/dist",
        filename: '[name].bundle.[chunkhash:5].js',
        // filename: '[name]-[hash].bundle.js',
        // publicPath:'https://cdn.my.com'
    },
    module: {
        // loaders
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'//等价于loader:'babel-loader',loader是可以省略的
                // query 配置在 .babelrc 里面,默认去找项目根目录下的“.babelrc”文件！跟webpack配置文件的位置无关
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "首页",
            // 该chunk编译后要写入到的html文件，默认输出为：output.path/index.html
            // filename: 'index.html',
            chunks:['app'],
            template: config.base.rootPath + '/index.html',
            inject: true,
            cache:false
        }),
        new webpack.ProvidePlugin({
            // 全局可以直接使用 "$" 不需要再require或者import
            $: "jquery"// npm install jquery --save-dev 或者写文件路径也可以
        }),
        new webpack.NoErrorsPlugin(), // 允许错误不打断程序
        new webpack.optimize.UglifyJsPlugin({
            minimize: false,// js压缩
            comments: false,// 删除注释
            compress: {
                warnings: true// 压缩是输出警告
            },
        })
    ]
}

baseConfig.module.loaders.forEach(function(loader){
    loader.exclude = config.base.exclude;
    loader.include = config.base.include;
})


module.exports = baseConfig
