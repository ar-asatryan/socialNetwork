const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: 'dev.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Dotenv()
    ]
});