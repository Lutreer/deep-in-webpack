var path = require('path')

var rootPath = path.resolve(__dirname, '..');
module.exports = {
    base: {
        rootPath: rootPath,
        exclude: [rootPath + '/node_modules', rootPath + '/dist', rootPath + '/build'],
        include: [rootPath + '/src']
    },
    prod: {
        index: rootPath + '/dist/index.html',
        assetsRoot: rootPath + '/dist'
    },
    dev: {
        env: "development",
        port: 8080,

    }
}
