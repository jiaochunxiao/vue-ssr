'use strict';

const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(base, {
    target: 'node',
    entry: {
        server: './app/src/entry-server.js',
    },
    output: {
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new VueSSRServerPlugin(),
    ],
});
