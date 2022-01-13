const gulp = require('gulp')
const watch = require("gulp-watch");

gulp.task("watch", function() {
    gulp.watch(["src/**/*.scss", "!src/scss/critical.scss"], ["sass"]);
    gulp.watch(["src/**/*.scss", "!src/scss/main.scss"], ["critical-sass"]);
    gulp.watch("src/**/*.js", ["scripts"]);
});