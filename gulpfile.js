const path = require('path');
const gulp = require('gulp');

const concat = require('gulp-concat');

const sass = require('gulp-sass');
const ts = require('gulp-typescript');

const sourcemaps = require('gulp-sourcemaps');


const projectDir = __dirname;
const clientDir = path.join(projectDir, "src", "dashboard-client");
const serverDir = path.join(projectDir, 'src', 'dashboard-server');

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

function typescriptBuild() {
    const tsConfig = ts.createProject(path.join(serverDir, 'tsconfig.json'));

    return tsConfig.src()
            .pipe(sourcemaps.init())
            .pipe(tsConfig()) // transpile base on tsConfig
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(tsConfig.options.outDir));
}

exports.sassBuild = gulp.series(sassBuild);
exports.typescriptBuild = gulp.series(typescriptBuild);