import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('clean', () => del(['dist']));

gulp.task('build', () => {
	gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
});

gulp.task('copy', () => {
	gulp.src('src/assets/**')
		.pipe(gulp.dest('dist/assets'))
	gulp.src(['.env', 'Procfile'])
		.pipe(gulp.dest('dist'));
	gulp.src('updates')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'copy']);
