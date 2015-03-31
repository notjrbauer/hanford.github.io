var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var $ = require('gulp-load-plugins');

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('default', ['sass'])