// load dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown'),
    inject = require('gulp-inject'),
    //highlight = require('highligh.js'),
    //stylish = require('jshint-stylish'),
    cfg = require('./package.json');

  /*var myServer = require('./gulpfig/my-server.js')
      ,myBump = require('./gulpfig/my-bump.js')*/

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
  .pipe(jshint().on('error', function () {
    console.log('error');
  }))
  .pipe(jshint.reporter('default'));
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

gulp.task('default', ['sass', 'markdown', 'jshint', 'js', 'watch']);