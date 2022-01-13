const gulp = require('gulp')
const watch = require("gulp-watch");

gulp.task("watch", function() {
    gulp.watch(["src/scss/**/*.scss", "!src/scss/critical.scss"], ["sass"]);
    gulp.watch(["src/scss/**/*.scss", "!src/scss/main.scss"], ["critical-sass"]);
    gulp.watch("src/scripts/**/*.js", ["scripts"]);
});