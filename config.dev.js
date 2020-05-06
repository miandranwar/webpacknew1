let path = require('path');
let htmlplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new htmlplugin({
            template: './src/pugfiles/index.pug'
        })
    ],
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.pug$/i, use: ['pug-loader']}
        ]
    }
}