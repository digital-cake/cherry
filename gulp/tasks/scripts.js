const gulp = require("gulp");

const browserify  = require('browserify');
const babelify    = require('babelify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const uglify      = require('gulp-uglify');
const rename      = require('gulp-rename');
//const sourcemaps = require('gulp-sourcemaps');

const jsFiles = ['src/scripts/site.js'],
      jsDest = 'theme/assets';

gulp.task('scripts', function() {

  return browserify({entries: jsFiles, debug: true})
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(source('site.js'))
    .pipe(buffer())
    //.pipe(sourcemaps.init())
    .pipe(uglify().on('error', function (e) {
      console.log(e);
      this.emit('end');
    }))
    //.pipe(sourcemaps.write('./maps'))
    .pipe(rename('site.min.js'))
    .pipe(gulp.dest(jsDest));

});
