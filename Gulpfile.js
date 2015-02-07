var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;

var source = {
    stylesheets: ['./assets/sass/**/*.scss']
};

gulp.task('css', function()
{
    return gulp.src(source.stylesheets)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(csso())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('run', ['css']);

gulp.task('watch', function()
{
    return gulp.watch(source.stylesheets, ['css']);
});

gulp.task('default', ['run', 'watch']);