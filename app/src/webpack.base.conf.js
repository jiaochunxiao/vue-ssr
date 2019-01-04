'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
console.log(__dirname);
module.exports = {
    mode: 'production',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: 'http://localhost:7001/public/',
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
    ],
};
