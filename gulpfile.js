'use strict';

const { join, resolve }  = require('path');

const gulp = require('gulp');
const sass = require('gulp-sass');

const SASS_DIR = resolve(__dirname, 'scss');
const CSS_DIR = resolve(__dirname, 'css');

const SASS_RE = SASS_DIR + '/**/*.scss';


// SASS
gulp.task('sass', function() {
  return gulp.src(SASS_RE)
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest(CSS_DIR));
});

gulp.task('sass:watch', function() {
  gulp.watch(SASS_RE, ['sass']);
});

gulp.task('watch', ['sass:watch']);

// DEFAULT
gulp.task('default', ['sass']);
