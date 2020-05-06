let path = require('path');
let htmlplugin = require('html-webpack-plugin');
let minicss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new minicss({filename:'[name].[contentHash].css'}),
        new htmlplugin({ template: './src/pugfiles/index.pug' })
        
    ],
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: [minicss.loader, 'css-loader', 'sass-loader'],},
            { test: /\.pug$/i, use: ['pug-loader'] }
        ]
    }
}
