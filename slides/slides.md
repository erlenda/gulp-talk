Gulp.js
---

* Erlend Andresen
* erlend.andresen@knowit.no
* 6.etasje 

![Alt text](https://raw2.github.com/gulpjs/artwork/master/gulp-2x.png "gulp logo") 

Hva er Gulp.js?
---

* et byggsystem basert på strømmer
* benytter strømmer og kode fremfor konfigurasjon 
* intuitivt, lett å lese

* fordeler
  * kjapt
  * solide pakker via NPM

gulp.js API
---

```javascript
gulp.src(globs[, options])
gulp.dest(path[, options])
gulp.task(name[, deps], fn)
gulp.watch(glob[, opts], tasks)

https://github.com/gulpjs/gulp/blob/master/docs/API.md
```

overfylt config gulpfile.js 
---

```javascript
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),

    // ...    
    
    stylish = require('jshint-stylish'),
    cfg = require('./package.json'),
    myServer = require('./gulpfig/my-server.js');

    // ...

    gulp.task('a', function () {
      gulp.src(['...', '...', '...'])
      .pipe(doSomethingA())
      .pipe(doSomethingB())
      .pipe(...)
      .pipe(gulp.dest('dist'));
    });
    // ...

    gulp.task('default', ['a', 'b', '...', 'z']);
```

laste egne tasks 
---

```javascript
var task = require('./gulpfig/task.js');

// Vis litt kode
```


Benchmark
---

### Sass benchmark
![Alt text](http://tech.tmw.co.uk/img/blog/kickoff-gulp-test/compare-sass.gif "sass benchmark") 

### Uglify benchmark
![Alt text](http://tech.tmw.co.uk/img/blog/kickoff-gulp-test/compare-js.gif "uglify benchmark")



Credits
---


![Alt text](http://s3-eu-west-1.amazonaws.com/nusdigital/event/logos/12524/original/teach-hub-halloween-lesson-plans-300x300.jpg "uglify benchmark")

* gulpjs.com
* benchmark: http://tech.tmw.co.uk/img/blog/kickoff-gulp-test/


