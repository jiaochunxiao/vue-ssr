'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/public/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        // new VueSSRClientPlugin(),
    ],
};
