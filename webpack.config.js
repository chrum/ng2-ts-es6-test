var path = require ('path');
var webpack = require ('webpack');
var nodeModules = path.resolve(__dirname, 'node_modules');
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
                loader: 'babel',
                noParse: [pathToPolyfill]
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loaders: [
                    'babel',
                    'ts'
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
        extensions: [
            '.ts',  '.js', '', '.webpack.js', '.web.js'
        ]
    }
};
