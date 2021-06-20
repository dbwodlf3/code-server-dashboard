const path = require('path');
const gulp = require('gulp');

const concat = require('gulp-concat');

const sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps');


const projectDir = __dirname;
const clientDir = path.join(projectDir, "src", "dashboard-client");

function sassBuild() { 
    const sass_files = path.join(clientDir, "src", "sass", "**/*.sass")
    const scss_files = path.join(clientDir, "src", "scss", "**/*.scss")
    const dest = path.join(projectDir, "static", "css")

    console.log(scss_files)
    
    return gulp.src([sass_files, scss_files])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
}

exports.sassBuild = gulp.series(sassBuild);