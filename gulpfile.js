// load dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown'),
    inject = require('gulp-inject'),
    stylish = require('jshint-stylish'),
    cfg = require('./package.json');

  var myServer = require('./gulpfig/my-server.js');
      //myBump = require('./gulpfig/my-bump.js');

// pipe'em!
gulp.task('js', function () {
  gulp.src('main.js')
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename(cfg.min.js))
  .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function () {
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
});

gulp.task('sass', function () {
  gulp.src(['style/**/*.sass'])
  .pipe(sass())
  .pipe(concat(cfg.min.css))
  .pipe(gulp.dest('dist'));
});

gulp.task('markdown', function () {
  gulp.src('./slides/slides.md')
  .pipe(markdown({
    highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
  }))
  .pipe(gulp.dest('dist'));

  gulp.src('./index.html')
  .pipe(inject(gulp.src(['./dist/slides.html']), {
    starttag: '<!-- inject:slides:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8');
    }
  }))
  .pipe(gulp.dest('.'));
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