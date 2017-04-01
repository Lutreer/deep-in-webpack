var webpackDevConfig = require("./webpack.dev.config");
var webpackProdConfig = require("./webpack.prod.config");

var webpackConfig = null;
var _ENV = process.env.NODE_ENV || "development"

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
