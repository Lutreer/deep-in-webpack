var path = require('path');

var rootPath = path.resolve(__dirname, '..');
module.exports = {
    base: {
        rootPath: rootPath,
        main: rootPath + "/src/main.js",
        exclude: [rootPath + '/node_modules', rootPath + '/dist', rootPath + '/build'],
        include: [rootPath + '/src']
    },
    build: {
        env: "production",
        rootPath: rootPath + '/dist',
        assetsPath: rootPath + '/dist/assets,
        gzipExtensions: ['js', 'css']
    },
    dev: {
        env: "development",
        port: 8080
    }
}
