var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
 
gulp.task('build', function () {
  browserify({
    entries: 'src/index.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.dist.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .on('error', function(err) {
    console.error(err);
  })
  .pipe(sourcemaps.write('./dist'))
  .pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['build']);