const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
/**
 *  This gulp task says that when we want to run the app
 *  Then we need other four tasks to be executed ['app.html','app.css','app.js','app.assets']
 *  we could also say that app depends on those other tasks or that those tasks are dependencies
 *  other way to run the app - >gulp.task('app',function(){//some functionality here})
 */
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])


gulp.task('app.html', function () {
    gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
})


gulp.task('app.css', function () {
    gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})


gulp.task('app.js', function () {
    gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})


gulp.task('app.assets', function () {
    gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})
