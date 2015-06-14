var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
 
gulp.task('build', function () {
  browserify({
    entries: 'index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(uglify())
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['build']);