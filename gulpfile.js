var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
// var rev = require('gulp-rev-append');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
// var wiredep = require('wiredep').stream;

//server connect (root: '',)
gulp.task('connect', function() {
  connect.server({
  root: 'public',
  livereload: true
  });
});

//css
gulp.task('css', function() {
 gulp.src('css/*.css')
  .pipe(concatCss('allCss.css'))
  .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'IE 7'],
            cascade: false
        }))
  .pipe(csso())
  .pipe(rename('allCss.min.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(connect.reload());

});

// js
gulp.task('con', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js/all/'));
});

gulp.task('js', function() {
  gulp.src('js/all/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['headColor.js', '-min.js']
    }))
    .pipe(gulp.dest('public/js'))
});

//image
// gulp.task('img', function () {
//     gulp.src('img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('public/img'))
//         .pipe(connect.reload());
// });

//html
gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

// Кеширование
// gulp.task('rev', function() {
//   gulp.src('index.html')
//     .pipe(rev())
//     .pipe(gulp.dest('public/'))
//     .pipe(connect.reload());
// });

//watch
gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('js/*.js', ['js'])
  gulp.watch('img/*', ['img'])
	gulp.watch('index.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css','con', 'js', 'watch']);