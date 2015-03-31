var gulp = require("gulp");
var watch = require("gulp-watch");
var $ = require("gulp-load-plugins")();

var paths = {
  scss: ["./scss/app.scss"]
}

gulp.task("sass", function() {
  gulp.src(paths.scss)
    .pipe($.sass())
    .pipe($.csso())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("watch", ["default"], function () {
  gulp.watch(paths.scss, ["sass"])
});

gulp.task("default", ["sass"]);
