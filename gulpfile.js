var concat = require('gulp-concat');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var stringify = require('./gulp/gulp-stringify');
var uglify = require('gulp-uglify');

gulp.task('build', [ 'worker' ], function () {
    return gulp.src([
        'build/banner.js',
        './.tmp/worker.js',
        'lib/AccurateTimer.js',
        'build/footer.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('AccurateTimer.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('AccurateTimer.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('worker', function () {
    return gulp.src([
        'lib/worker.js'
    ])
    .pipe(uglify())
    .pipe(stringify('var blob = new Blob([ ', ' ], { type: "application/javascript" });\n'))
    .pipe(rename('worker.js'))
    .pipe(gulp.dest('./.tmp'));
});
