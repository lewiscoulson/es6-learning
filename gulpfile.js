var gulp = require('gulp');
var traceur = require('gulp-traceur');
var mocha = require('gulp-mocha');

gulp.task('transpile', function () {
    return gulp.src('src/es6/test.js')
        .pipe(traceur())
        .pipe(gulp.dest('src/es5/'));
});

gulp.task('test', function () {
    return gulp.src('src/es5/test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function() {
  gulp.watch('src/es6/test.js', ['transpile']);
  gulp.watch('src/es5/test.js', ['test']);
});

gulp.task('default', ['transpile', 'test', 'watch']);