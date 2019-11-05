const { src, dest, watch } = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const taskOptions = { overwrite: true };
const watchOptions = { events: 'all', ignoreInitial: false };
const destinationPath = 'build';

const htmlTask = cb => {
    src('src/*.html')
    .pipe(dest(destinationPath, taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const pngTask = cb => {
    src('src/img/*.png')
    .pipe(dest('build/img', taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const jpgTask = cb => {
    src('src/img/*.jpg')
    .pipe(dest('build/img', taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const jsTask = cb => {
    src('src/*.js')
    .pipe(dest(destinationPath, taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const lessTask = cb => {
    src('src/*.less')
    .pipe(less({
        paths: [
            '.',
            './node_modules/bootstrap-less'
        ]
    }))
    .pipe(concat('style.css'))
    .pipe(dest(destinationPath, taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const defaultTask = () => {
    browserSync.init({
        server: {
           baseDir: "./build",
           index: "/index.html"
        }
    });

    watch('src/*.js', watchOptions, jsTask).on('change', browserSync.reload);
    watch('src/img/*.jpg', watchOptions, jpgTask).on('change', browserSync.reload);
    watch('src/img/*.png', watchOptions, pngTask).on('change', browserSync.reload);
    watch('src/*.html', watchOptions, htmlTask).on('change', browserSync.reload);
    watch('src/*.less', watchOptions, lessTask).on('change', browserSync.reload);
}

exports.default = defaultTask;