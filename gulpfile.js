const gulp = require('gulp');
const auto = require('gulp-autoprefixer');
gulp.task('default', function () {



gulp.src('./main.css').pipe(auto({
            browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
        })).pipe(gulp.dest('./gulp'));
gulp.src('./css-desktop.css').pipe(auto({
            browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
        })).pipe(gulp.dest('./gulp'));
gulp.src('css-mobile.css').pipe(auto({
            browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
        })).pipe(gulp.dest('./gulp'));
gulp.src('css-tablet.css').pipe(auto({
            browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
        })).pipe(gulp.dest('./gulp'));

});
