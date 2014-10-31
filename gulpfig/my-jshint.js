exports.start = function () {
  var gulp = require('gulp'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish');

  gulp.src(['main.js', 'gulpfile.js'])
  .pipe(jshint({
    "indent": 2,
    "white": true,
    "node": true,
    "undef": true,
    "predef": [ "Sizzle", "Mousetrap", "window" ],
    "-W058": true,
    "-W014": true,
    "expr": true
  }))
  .pipe(jshint.reporter('jshint-stylish'));
};