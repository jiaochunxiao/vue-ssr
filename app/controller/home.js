'use strict';
const path = require('path');
const Controller = require('egg').Controller;
const fs = require('fs');

// const bundle = fs.readFileSync(path.resolve(__dirname, '../public/server.js'), 'utf-8');
const bundle = require('../public/vue-ssr-server-bundle.json');
// const bundle = require('../public/vue-ssr-server-bundle.json');

// const clientManifest = require('../public/vue-ssr-client-manifest.json');
// 注意：此处的renderer为 createBundleRenderer 方法的返回对象
// bundleRenderer.renderToString([context, callback]): ?Promise<string>
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    runInNewContext: false, // 推荐
    template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8'),
    // clientManifest,
});

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const context = {
            url: ctx.request.url,
            title: 'Vue SSR',
            meta: '<meta name="description" content="Vue.js 服务端渲染指南">',
        };
        // return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            // console.log(html);
            if (err) {
                // console.log(err);
                if (err.code === 404) {
                    ctx.status = 404;
                    return;
                }
                ctx.status = 500;
                return;
            }
            ctx.body = html;
        });
    }
    async web() {
        const { ctx } = this;
        ctx.body = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
    }
    async about() {
        const { ctx } = this;
        // console.log('about');
        const context = {
            url: ctx.request.url,
            title: 'Vue SSR',
            meta: '<meta name="description" content="Vue.js 服务端渲染指南">',
        };
        renderer.renderToString(context, (err, html) => {
            if (err) {
                // console.log(err);
                if (err.code === 404) {
                    ctx.status = 404;
                }
                ctx.status = 500;
                return;
            }
            ctx.body = html;
        });
    }
}

module.exports = HomeController;

