const packageJson = require("../../package.json");

module.exports = {
    // 配置网站标题
    title: packageJson.name,
    // 配置网站描述
    description: packageJson.description,
    // 配置基本路径
    base: "/algorithms/",
    // 配置基本端口
    port: "8081",
};