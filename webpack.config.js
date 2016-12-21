var path = require ('path');
var webpack = require ('webpack');
var nodeModules = path.resolve(__dirname, 'node_modules');
var pathToTsLoader = path.resolve(nodeModules, 'ts-loader/index.js');
var pathToBabelLoader = path.resolve(nodeModules, 'babel-loader/lib/index.js');
var pathToPolyfill = path.resolve(nodeModules, 'babel-polyfill/dist/polyfill.min.js');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: pathToBabelLoader,
                noParse: [pathToPolyfill]
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loaders: [
                    pathToBabelLoader,
                    pathToTsLoader
                ],
                noParse: [pathToPolyfill]
            },
            {test: /\.html$/, loader: 'raw'},
            {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    ts: {
        transpileOnly: true
    },
    devServer: {
        contentBase: "./dist",
        noInfo: false,
        hot: false
    },
    resolve: {
        root: [
            nodeModules
        ],
        extensions: [
            '.ts',  '.js', '', '.webpack.js', '.web.js'
        ]
    },
    resolveLoader: {
        modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', nodeModules],
        extensions: ['', '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
        packageMains: ['webpackLoader', 'webLoader', 'loader', 'main']
    }
};
