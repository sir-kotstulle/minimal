var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('default', ['style', 'code', 'sync'], () => {
	gulp.watch('src/scss/**/*.scss', ['style']);
	gulp.watch('src/js/**/*.js', ['code']);
	gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('style', () => {
	gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('code', () => {
	gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('sync', () => {
	browserSync.init({
		server: 'dist/'
	});
});