exports.start = function () {
  var gulp = require('gulp'),
      inject = require('gulp-inject'),
      markdown = require('gulp-markdown');

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
      // foreach <h2> replace with </section><section><h2>
      var result = '<section class="hidden">' + file.contents.toString('utf8') + '</section>';
      var newhtml = result.replace(/<h2/g,'</section><section class="hidden"><h2').replace(/<section><\/section>/g, '');
      return newhtml;
    }
  }))
  .pipe(gulp.dest('.'));
};