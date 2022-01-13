const gulp = require("gulp");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const sassFile = "src/scss/main.scss",
      sassDest = "theme/assets";

gulp.task("sass", function() {
  return gulp
    .src(sassFile)
    .pipe(sass().on("error", sass.logError))
    .pipe(rename('main.css.liquid'))
    .pipe(gulp.dest(sassDest))
    .pipe(rename('main.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(sassDest));
});
