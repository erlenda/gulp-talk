About me
---

Cluttered gulpfile.js
---

```javascript
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),

    // ...    
    
    stylish = require('jshint-stylish'),
    cfg = require('./package.json');

    // ..

    gulp.task('a', function () {
      gulp.src(['...', '...', '...'])
      .pipe(doSomethingA())
      .pipe(doSomethingB())
      .pipe(...)
      .pipe(gulp.dest('dist'));
    });
    // ...
```

Slide x
---

Slide y
---
