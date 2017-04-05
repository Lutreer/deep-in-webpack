// 这里展示了最最基本的配置
var webpack = require('webpack');
var config = require('./config');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');// 注意webpack1要用1.X的版本
var CleanWebpackPlugin = require('clean-webpack-plugin');

var baseConfig = {
    // 单页应用
    // entry: config.base.rootPath + "/src/main.js",

    // 多文件入口
    entry: {
        // app，app2就是不同的chunk
        app: config.base.main,
        // app2: '.app/js/test1.js'
    },
    output: {
        path: config.build.rootPath,
        filename: 'assets/[name].bundle.[hash:5].js',
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
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&camelCase!postcss!sass'
                )
            },
            {
                test:/.(png|jpe?g|gif|svg)$/,
                loaders:[
                    "url-loader?limit=5120&name=assets/[name]-[hash:5].[ext]",
                    "image-webpack"
                ]
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                query:{
                    minimize: false,
                    removeComments: true,
                    collapseWhitespace: false
                }

            }
        ]
    },
    postcss: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'android >= 4.5', 'ios >= 8']
        })
    ],
    plugins: [

        new HtmlWebpackPlugin({
            title: "首页",
            // 该chunk编译后要写入到的html文件，默认输出为：output.path/index.html
            // filename: 'index.html',
            chunks:['app'],
            template: config.base.rootPath + '/index.html',
            cache:false
        }),
        new webpack.ProvidePlugin({
            // 全局可以直接使用 "$" 不需要再require或者import
            $: "jquery"// npm install jquery --save-dev 或者写文件路径
        }),
        new ExtractTextPlugin("./assets/tyle-[contenthash:5].css"),

    ]
}

// loader 的include, exclude
baseConfig.module.loaders.forEach(function(loader){
    loader.exclude = config.base.exclude;
    loader.include = config.base.include;
})


module.exports = baseConfig
