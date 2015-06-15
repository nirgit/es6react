// include Gulp
var gulp = require('gulp');

// include plugins
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
 
// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

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

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['lint', 'build']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

 
gulp.task('default', ['lint', 'sass', 'build', 'watch']);