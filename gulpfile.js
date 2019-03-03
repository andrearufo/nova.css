// Plugins
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano");



// The paths of the folders
var paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "css"
    }
};



// Style task
function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(gulp.dest(paths.styles.dest))
    );
}
exports.style = style;



// Watch task
function watch(){
    style();
    gulp.watch(paths.styles.src, style)
}
exports.watch = watch
