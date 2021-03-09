const execShPromise = require("exec-sh").promise;
const copy = require('copy');
const path = require('path');
const CONFIG = require('./config')

const resolve = p => path.resolve(__dirname, p)

// run interactive bash shell
const run = async () => {
    let pull, build;

    try {
        pull = await execShPromise('git pull', true);

        // 拉取代码失败
        if (pull.stderr !== '') {
            throw new Error('拉取代码失败!')
        }

        // 构建之前先删除旧的构建代码
        await execShPromise('yarn rimraf ' + resolve(CONFIG.dist))

        build = await execShPromise('yarn docs:build', true);

        const buildState = build.stdout.indexOf('successfully') !== -1

        if (buildState === false) throw new Error('执行 yarn docs:build 进行构建时失败!')

        // 发布之前先删除旧的站点代码
        await execShPromise('yarn rimraf ' + CONFIG.publishDir)

        copy(resolve(CONFIG.dist), CONFIG.publishDir, function (err, files) {
            if (err) throw err;
            // `files` is an array of the files that were copied
        });

    } catch (e) {
        console.log('Error: ', e);
        console.log('Stderr: ', e.stderr);
        console.log('Stdout: ', e.stdout);
        return e;
    }
}

run();