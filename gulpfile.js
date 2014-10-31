// load dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cfg = require('./package.json');

var myServer = require('./gulpfig/my-server.js'),
    myMarkdown = require('./gulpfig/my-markdown.js'),
    myJshint = require('./gulpfig/my-jshint.js');

// pipe'em!
gulp.task('js', function () {
  gulp.src('main.js')
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename(cfg.min.js))
  .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function () {
  myJshint.start();
});

gulp.task('sass', function () {
  gulp.src(['style/**/*.sass'])
  .pipe(sass())
  .pipe(concat(cfg.min.css))
  .pipe(gulp.dest('dist'));
});

gulp.task('markdown', function() {
  myMarkdown.start();
});

gulp.task('watch', function () {
  gulp.watch(['main.js', 'gulpfile.js'], ['jshint', 'js']);
  gulp.watch(['style/**/*.sass'], ['sass']);
  gulp.watch(['slides/*.md'], ['markdown']);
});

gulp.task('myServer', function () {
  myServer.start('localhost', 8000);
});

gulp.task('default', ['sass', 'markdown', 'jshint', 'js', 'watch']);
gulp.task('serve', ['myServer']);