const { src, dest, parallel, series, watch } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const merge = require("merge2");
const concat = require('gulp-concat')
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const del = require('del')
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

const DEVMODE = process.argv[2] === "--dev" ? true : false
const paths = {
  pages: ['src/*.html']
};

const clean = () => {
  return del('lib')
}

const html = () => {
  return src(paths.pages)
    .pipe(dest("lib"));
}

// 输出 CommonJS 规范到 dist 目录下
const compile = () => {
  const tsResult = tsProject.src().pipe(tsProject());

  return merge([
    tsResult.dts.pipe(concat('bundle.d.ts')).pipe(dest('lib')),
    browserify({
      basedir: '.',
      debug: true,
      entries: ['src/index.ts'],
      cache: {},
      packageCache: {}
    })
      .plugin(tsify)
      .transform('babelify', {
        presets: ["@babel/preset-env"],
        extensions: ['.ts']
      })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(dest("lib"))
  ]);
}

const generator = series(clean, html, compile)

const change = DEVMODE ? () => {
  watch('src/**/*.ts', generator)
  generator()
} : generator

exports.default = change