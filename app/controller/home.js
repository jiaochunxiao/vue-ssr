'use strict';
const path = require('path');
const Controller = require('egg').Controller;
const Vue = require('vue');
const fs = require('fs');

const bundle = fs.readFileSync(path.resolve(__dirname, '../public/server.js'), 'utf-8');

// 注意：此处的renderer为 createBundleRenderer 方法的返回对象
// bundleRenderer.renderToString([context, callback]): ?Promise<string>
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    runInNewContext: false, // 推荐
    template: fs.readFileSync(path.resolve(__dirname, '../public/index.ssr.html'), 'utf-8'),
});

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const app = new Vue({
            data: {
                title: 'Vue ssr',
            },
        });
        renderer.renderToString(app, (err, html) => {
            if (err) {
                ctx.status = 500;
            }
            console.log(html);
            ctx.body = html;
        });

    }
    async web() {
        const { ctx } = this;
        ctx.body = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
    }
}

module.exports = HomeController;
