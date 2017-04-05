var webpackBaseConfig = require("./webpack.base.config.js");
var webpackDevConfig = require("./webpack.dev.config");
var webpackProdConfig = require("./webpack.prod.config");

var webpackConfig = "";
var _ENV = process.env.NODE_ENV
console.log("~~~~~~~~~~~~~~~~~"+(_ENV === 'development'))
if (_ENV === 'development') {
    webpackConfig = webpackDevConfig;
}else if(_ENV === 'production'){
    webpackConfig = webpackProdConfig;
}else if (_ENV === 'test') {
    webpackConfig = webpackProdConfig;
}else{
    console.log("1213123");
    return false
}

module.exports = webpackConfig
