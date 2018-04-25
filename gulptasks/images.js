var gulp = require('gulp'),
  config = require('../gulpconfig'),
  imagens = require('gulp-image');
  gulpIf = require('gulp-if'),
  argv = require('yargs').argv,
  gulpCopy = require('gulp-copy');
  production = argv.production;

gulp.task('copy:images', function () {
  var baseDir = production ? config.paths.dist : config.paths.build;
  gulp.src(['./src/img/**/*.{gif,png,jpg,svg}'])
    .pipe(gulpIf(production, imagens()))
    .pipe(gulp.dest(baseDir.img));

  gulp.src(config.paths.src.favicon)
    .pipe(gulp.dest(baseDir.root));
});
