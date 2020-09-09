const gulp = require('gulp');
const filter = require('gulp-filter');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const gzip = require('gulp-gzip');
const brotli = require('gulp-brotli');
const clean = require('gulp-clean');
const { series, parallel } = require('gulp');

gulp.task('css', () => {
  return gulp
    .src('dist/portfolio/*.css')
    .pipe(
      purgecss({
        content: ['dist/portfolio/*.js', 'dist/portfolio/*.html'],
      }),
    )
    .pipe(gulp.dest('dist/test/'));
});

gulp.task('css-gzip', () => {
  return gulp.src('dist/test/*').pipe(gzip()).pipe(gulp.dest('dist/test/'));
});

gulp.task('css-br', () => {
  return gulp
    .src('dist/test/*')
    .pipe(filter(['**/*.css', '!**/*.br.*', '!**/*.gzip.*']))
    .pipe(brotli.compress())
    .pipe(gulp.dest('dist/test'));
});

gulp.task('clear-ng-css', () => {
  return gulp
    .src('dist/portfolio/*')
    .pipe(filter(['**/styles*.css*']))
    .pipe(clean({ force: true }));
});

gulp.task('copy-op-css', () => {
  return gulp.src('dist/test/*').pipe(gulp.dest('dist/portfolio'));
});
// #6 | Clear temp folder
gulp.task('clear-test', () => {
  return gulp.src('dist/test/', { read: false }).pipe(clean({ force: true }));
});

exports.default = series('css', parallel('css-gzip', 'css-br'), 'clear-ng-css', 'copy-op-css', 'clear-test');
