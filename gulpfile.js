const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync');

function style () {
    return gulp.src('./scss/**/style.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream())
}

function watch () {
    browserSync.init ({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on ('change',browserSync.reload);
}

exports.style = style;
exports. watch = watch;