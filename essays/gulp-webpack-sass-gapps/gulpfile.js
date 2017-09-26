var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('default', ['build']);
gulp.task('build', ['clear', 'webpack', 'concat-gs']);

gulp.task('webpack', function () {
  return gulp.src('./')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('./app/'));
});

gulp.task('clear', function () {
  return del(['./app/*']);
});

gulp.task('concat-gs', function () {
  return gulp.src('./src/server/*.js')
    .pipe(concat('gs-app.js'))
    .pipe(gulp.dest('./app/'));
});