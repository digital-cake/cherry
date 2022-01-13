const gulp = require('gulp')
const watch = require("gulp-watch");

gulp.task("watch", function() {
    gulp.watch("src/scss/**/*.scss", ["sass"]);
    gulp.watch("src/scripts/**/*.js", ["scripts"]);
});