var paths = {
    styles: {
        src: 'scss/**/*.scss',
        dest: 'css'
    }
};

const pkg = require("./package.json");
const comment = `/**
 * Nova.css v${pkg.version}
 * By Andrea Rufo, www.andrearufo.com
 * https://andrearufo.github.io/nova.css/
 */\r\n`;

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var size = require('gulp-size');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');
var header = require('gulp-header');
var log = require('fancy-log');

function style() {
    log.info('Starting style!');
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([autoprefixer()]))
            .pipe(header(comment + "\r\n"))
            .pipe(sourcemaps.write('.'))
            .pipe(size())
            .pipe(gulp.dest(paths.styles.dest))
    );
}
exports.style = style;

function minify() {
    log.info('Starting minify!');
    return (
        gulp
            .src(paths.styles.dest+'/nova.css')
            .pipe(sourcemaps.init())
            .pipe(postcss([cssnano()]))
            .pipe(size())
            .pipe(size({
                gzip: true
            }))
            .pipe(concat('nova.min.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.styles.dest))
    );
}
exports.minify = minify;

function watch(){
    log.info('Starting watch!');
    gulp.watch(paths.styles.src, gulp.series('style', 'minify'))
}
exports.watch = watch;

function start(){
    watch();
}
exports.default = start;
