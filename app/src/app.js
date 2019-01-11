'use strict';

import Vue from 'vue';
// const App = require('./App.vue').default;
const App = require('./ App.vue').default;
// import App from './App.vue';

import { createRouter } from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

export function createApp(ssrContext) {
    // 创建router实例
    const router = createRouter();
    sync(store, router);
    const app = new Vue({
        // 注入 router 到 根 Vue实例
        router,
        store,
        render: h => h(App),
    });
    return { app, router, store };
}