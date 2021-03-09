module.exports = {
    // nginx 服务器的网站根目录
    publishDir: '/usr/share/nginx/html/',
    // 打包后的目录地址中所有文件匹配符
    dist: '../docs/.vuepress/dist/**/*',
    // 打包后的目录地址
    distDir: '../docs/.vuepress/dist/'
}