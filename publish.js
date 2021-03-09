var execShPromise = require("exec-sh").promise;
var copy = require('copy');
var path = require('path')

const resolve = p => path.resolve(__dirname, p)

// console.log(resolve('docs/.vuepress/dist/'))

// run interactive bash shell
const run = async () => {
    let pull, build;

    try {
        pull = await execShPromise('git pull', true);

        console.log(pull)

        // 拉取代码失败
        if (pull.stdout !== 'Already up to date.\n') {
            throw new Error('拉取代码失败!')
        }

        build = await execShPromise('yarn docs:build', true);

        const buildState = build.stdout.indexOf('successfully') !== -1

        if (buildState === false) throw new Error('执行 yarn docs:build 进行构建时失败!')

        copy(resolve('docs/.vuepress/dist/**/*'), '/usr/share/nginx/html/', function (err, files) {
            console.log(files)
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