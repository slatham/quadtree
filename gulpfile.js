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

// TODO:
// add a task to run the compile,
// then build the file as above, 
// then add a task to run mocha tests on the built file, then lint it, then remove all but the top "strict mode" declarations,
// then get all the module names - point, rectangle, circle and add them to a single export statement at the bottom of the file,
// then delete the other export statements in the file,
// then copyright notice to top of file
// add a cleanup option
// create a minified version of the file


