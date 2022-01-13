const gulp = require("gulp");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const mediaQueriesSplitter = require('gulp-media-queries-splitter');

const sassFile = "src/scss/main.scss",
      sassDest = "theme/assets";

gulp.task("sass", function() {
  return gulp
    .src(sassFile)
    .pipe(sass().on("error", sass.logError))
    .pipe(rename('main.css.liquid'))
    .pipe(gulp.dest(sassDest))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(mediaQueriesSplitter([
        // Include all CSS rules
        {media: 'all', filename: 'main.min.css.liquid'},

        // Include only CSS rules without screen size based media queries
        {media: 'none', filename: 'main-base.min.css.liquid'},

        // Tablet & Mobile
        {media: [{min: '0px', minUntil: '990px'}, {min: '0px', max: '990px'}], filename: 'main-mobile.min.css.liquid'},

        // Desktop
        {media: {min: '990x'}, filename: 'main-desktop.min.css.liquid'},
    ]))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(sassDest));
});

const criticalSassFile = "src/scss/critical-base.scss",
      criticalSassDest = "theme/snippets";

gulp.task("critical-sass", function() {
    return gulp
      .src(criticalSassFile)
      .pipe(sass().on("error", sass.logError))
      .pipe(rename('critical-css-base.liquid'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(criticalSassDest));
  });