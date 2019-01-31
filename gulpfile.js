const gulp = require('gulp');
const srcDir = './src';
const compileDir = './lib';
const buildDir = './build';
const concat = require('gulp-concat');

gulp.task('build', () => {

    return gulp.src([`${compileDir}/*.js`])
        .pipe(concat('index.js'))
        .pipe(gulp.dest(buildDir))


});


