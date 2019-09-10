var gulp = require("gulp");
var less = require("gulp-less");
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');


gulp.task('css', function() {
    return gulp.src('Styles/site.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('site.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('wwwroot/css'));
    });

gulp.task('watch', function() {
    gulp.watch(['Views/**/*.less', 'Styles/**/*.less'], gulp.series('css'));
    gulp.watch('Views/**/*.js', gulp.series('scripts'));
});

gulp.task('scripts', () => {
    return gulp.src('Views/Site.js')
        .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('default', gulp.series(['scripts', 'css']));