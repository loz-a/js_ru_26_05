var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/app.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/node_modules[\\\/]moment[\\\/]locale/, /uk|ru|en-gb/)
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    }
}
