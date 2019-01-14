'use strict';
// const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(base, {
    entry: {
        client: './app/src/entry-client.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html',
        }),
        new VueSSRClientPlugin(),
    ],
});
