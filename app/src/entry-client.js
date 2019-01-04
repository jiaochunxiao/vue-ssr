'use strict';
const createApp = require('./app.js');

const app = createApp();
console.log(app);
app.$mount('#app');
