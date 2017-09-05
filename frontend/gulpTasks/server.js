const gulp  = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')



/**
 *  Whenever we call the server run the watch dependency and then the function(){}
 */

gulp.task('server',['watch'],function(){
    gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3003,
        open: true
    }))
})


gulp.task('watch',function (){
    watch('app/**/*.html',() => gulp.start('app.html'))
    watch('app/**/*.css',() => gulp.start('app.css'))
    watch('app/**/*.js',() => gulp.start('app.js'))
    watch('app/**/*.*',() => gulp.start('app.assets'))
})
