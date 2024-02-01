const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('uglify', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));


gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/**/*', gulp.series('imagemin'));
    gulp.watch('src/scripts/**/*.js', gulp.series('uglify'));
});
