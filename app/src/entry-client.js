'use strict';
const { createApp } = require('./app.js');
const { app, router } = createApp();

router.onReady(() => {
    app.$mount('#app');
});

