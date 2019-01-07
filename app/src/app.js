'use strict';

import Vue from 'vue';
// const App = require('./App.vue').default;
const App = require('./ App.vue').default;
// import App from './App.vue';

import { createRouter } from './router';

export function createApp() {
    // 创建router实例
    const router = createRouter();

    const app = new Vue({
        // 注入 router 到 根 Vue实例
        router,
        render: h => h(App),
    });
    return { app, router };
}