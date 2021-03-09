var packageJson = require("../../package.json");
var sidebar = require('./links/sidebar.js');
var nav = require('./links/nav.js');
var path = require('path');

module.exports = {
    // 配置网站标题
    title: packageJson.name,
    // 配置网站描述
    description: packageJson.description,
    // 配置基本路径
    base: "/",
    // 配置基本端口
    port: "8081",
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav,
        sidebar
    },
};