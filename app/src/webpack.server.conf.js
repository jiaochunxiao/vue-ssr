'use strict';

const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
    target: 'node',
    entry: {
        server: './app/src/entry-server.js',
    },
    output: {
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/index.ssr.html',
            filename: 'index.ssr.html',
            files: {
                js: '/public/client.js',
            },
            excludeChunks: [ 'server' ],
        }),
    ],
});
