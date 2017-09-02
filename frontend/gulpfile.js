const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')


gulp.task('default',function(){
    if(gulp.env.production){
        gulp.start('app','deps')
    }
    else  {
        gulp.start('app','deps','server')
    }  

})