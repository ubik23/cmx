var gulp = require('gulp');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['images', 'compress'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['clean:dist','images', 'copy', 'compress', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
})

// Gulp watch syntax
gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/*.html', ['copy'], browserSync.reload);
    gulp.watch('app/js/*.js', ['compress']);
})

gulp.task('compress', function() {
  gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('copy', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('images', function(){
  return gulp.src('app/assets/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets'))
});
