'use strict';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: () => System.import('./views/home.vue'),
            },
            {
                path: '/about',
                component: () => System.import('./views/about.vue'),
            }
        ]
    });
}
