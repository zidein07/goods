var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpLess = require('gulp-less');
var concatJs = require('gulp-concat');
var minJs = require('gulp-uglify');

var def = {
  less: 'less',
  js: 'js'
};

var path = {
  less: './app/styles/dev/',
  lessDist: './app/styles/dist',
  js: './app/scripts/dev/',
  jsDist: './app/scripts/dist/',
  tpl: './app/tpl/'
};

gulp.task('connect', [def.less, def.js], function () {
  browserSync.init({
    port: 3000,
    logConnections: false,
    notify: false,
    server: './app'
  });

  gulp.watch([
    path.less + "main.less",
    path.less + "**/*.less",
    path.less + "**/**/*.less"
  ], [def.less]);

  gulp.watch([
    path.js + "*.js",
    path.js + "**/*.js",
    path.js + "**/**/*.js"
  ], [def.js]);

  gulp.watch([
    "./app/*.html",
    path.tpl + "**/*.html",
    path.tpl + "**/**/*.html"
  ], browserSync.reload);
});

gulp.task(def.less, function () {
  return gulp.src(path.less + 'goods.less')
    .pipe(gulpLess())
    .pipe(gulp.dest(path.lessDist))
    .pipe(browserSync.stream());
});

gulp.task(def.js, function () {
  return gulp.src([
    path.js + 'app.js',
    path.js + '**/*.js',
    path.js + '**/**/*.js'
  ])
    .pipe(concatJs('all.js'))
    .pipe(minJs())
    .pipe(gulp.dest(path.jsDist))
    .pipe(browserSync.stream());
});

gulp.task('build', [def.less, def.js]);
gulp.task('default', ['connect']);
