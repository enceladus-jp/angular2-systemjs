const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/client/app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))  
    .pipe(gulp.dest('dist/app'));
});

// Copy files
gulp.task('copy', ['clean', 'copy:vendor', 'copy:angular', 'copy:rxjs', 'copy:assets', 'copy:assets_dir']) ;

// Copy assets direcotry
gulp.task('copy:assets_dir', ['clean'], function(){
    return gulp.src('src/client/assets/**/*')
      .pipe(gulp.dest('dist/assets'))
}) ;

// copy dependencies
gulp.task('copy:vendor', ['clean'], function() {
  return gulp.src([
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(gulp.dest('dist/vendor'));
});

// copy Angular 2 
gulp.task('copy:angular', ['clean'], function(){
  return gulp.src([
    'node_modules/@angular/**/*'
  ])
  .pipe(gulp.dest('dist/vendor/@angular'))
}) ;

// copy rxjs 
gulp.task('copy:rxjs', ['clean'], function(){
  return gulp.src([
    'node_modules/rxjs/**/*'
  ])
  .pipe(gulp.dest('dist/vendor/rxjs'))
}) ;

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['src/client/**/*', 'index.html', 'styles.css', '!**/*.ts'], { base : './src/client' })
    .pipe(gulp.dest('dist'))
});

gulp.task('build', ['compile', 'copy']);
gulp.task('default', ['build']);