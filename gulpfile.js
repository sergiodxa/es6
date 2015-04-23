var concat     = require('gulp-concat');
var gulp       = require('gulp');
var minifyCSS  = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyJS   = require('gulp-jsmin');
var path       = require('path');
var rename     = require('gulp-rename');
var watch      = require('gulp-watch');

gulp.task('html', function () {
  gulp
    .src('./src/html/**/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'))
});

gulp.task('css', function () {
  gulp
    .src('./src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('js', function () {
  gulp
    .src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(minifyJS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/js/'))
});

gulp.task('examples', function () {
  gulp
    .src('./src/examples/es5/*.js')
    .pipe(minifyJS())
    .pipe(gulp.dest('./examples/es5/'))
})

gulp.task('watch', function () {
  gulp.watch(['./src/html/**/*.html'], ['html']);
  gulp.watch(['./src/css/**/*.css'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/examples/es5/*.js'], ['examples']);
});

gulp.task('default', ['html', 'css', 'js', 'examples', 'watch']);