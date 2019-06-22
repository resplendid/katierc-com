'use strict';

const { join, resolve }  = require('path');

const gulp = require('gulp');
const gulpSass = require('gulp-sass');

const SASS_DIR = resolve(__dirname, 'scss');
const CSS_DIR = resolve(__dirname, 'css');

const SASS_RE = SASS_DIR + '/**/*.scss';

console.log(`GulpFile Loaded:\n  css dir: ${CSS_DIR}\n  sass dir: ${SASS_DIR}`)


// SASS
function sass() {
 return gulp
          .src(SASS_RE)
          .pipe(gulpSass().on('error', gulpSass.logError))
          .pipe(gulp.dest(CSS_DIR));
}

function sassWatch () {
  return gulp.watch(SASS_RE, gulp.series(sass));
}

const watch = gulp.series(sassWatch);

// DEFAULT
const build = gulp.series(sass);


module.exports = {
  sass,
  watch,
  default: build
}