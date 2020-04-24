const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

 
    gulp.task('scripts', function(cb) {
        gulp.src('./src/js/*.js')
            .pipe(concat('scriptHWJS_15_2.main.js'))
            .pipe(gulp.dest('./dist/js/'));

        gulp.src('./src/css/*.css')
            .pipe(concat('styleHWJS_15_2.main.css'))
            .pipe(gulp.dest('./dist/css/'));

        cb();
    });


    gulp.task('uglify', function(cb){
        gulp.src('./dist/js/scriptHWJS_15_2.main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));

        cb();
    });

    gulp.task('uglifycss', function(cb){
        gulp.src('./dist/css/styleHWJS_15_2.main.css')
        .pipe(uglifycss({
            "maxLineLen": 5,
            "uglyComments": true
          }))
        .pipe(gulp.dest('./dist/css/'));

        cb();
    });
