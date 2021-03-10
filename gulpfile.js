const { src, dest, parallel, series, watch } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const merge = require("merge2");
const del = require('del')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat')
const rollup = require('gulp-rollup')
const json = require('@rollup/plugin-json');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel')

const DEVMODE = process.argv[2] === "--dev" ? true : false

const paths = {
    pages: ['src/*.html']
};

const clean = () => {
    return del('lib', 'dist')
}

const html = () => {
    return src(paths.pages)
        .pipe(dest("lib"));
}

// 编译 typescript
const compile = () => {
    const tsResult = tsProject.src().pipe(tsProject());

    return merge([
        tsResult.dts.pipe(concat('index.d.ts')).pipe(dest('dist')),
        tsResult.js.pipe(dest('lib')),
    ]);
}

// 使用 rollup 对生成的库进行打包聚合，并通过压缩减小文件数量和体积
const bundle = () => {
    return src(['./lib/**/*.js', './*.json'])
        .pipe(sourcemaps.init({ loadMaps: true }))
        // transform the files here.
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            input: './lib/index.js',
            output: {
                format: 'esm'
            },
            plugins: [json()]
        }))
        .pipe(babel({
            presets: [['@babel/preset-env', { "modules": false }]],
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist'));
}


const generator = series(clean, html, compile, bundle)

const change = DEVMODE ? () => {
    watch('src/**/*.ts', generator)
    generator()
} : generator

exports.default = change
