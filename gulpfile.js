const gulp = require('gulp');
const less = require('gulp-less');
const glob = require('glob');
const postcss = require('gulp-postcss');
const pxtorpx = require('postcss-px2rpx');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

function gulpSrc (paths) {
	let flag
	paths = (paths instanceof Array) ? paths : [paths];
	var existingPaths = paths.filter(function (path) {
		if (glob.sync(path).length === 0) {
			flag = false
			return false;
		}
		flag = true
		return true;
	});
	return flag
}



const imgFiles = [
	`./src/static/*.{png,jpg,gif,ico}`,
	`./src/static/**/*.{png,jpg,gif,ico}`,
];
gulp.task('compile-image', () => {
	return gulp
		.src(imgFiles)
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/static'));
});


gulp.task('compile-css', () => {
	return gulp.src(['./src/**/*.less', '!./src/**/_*.less'])
		.pipe(less())
		.pipe(postcss([pxtorpx()]))
		.pipe(cssmin())
		.pipe(rename((path) => {
			path.extname = '.wxss';
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('copy-npm', () => {
	return gulp.src(['./src/node_modules'])
		.pipe(gulp.dest('./dist/'));
});

gulp.task('compile-js', () => {
	return gulp.src(['./src/**/*.js'])
		.pipe(gulp.dest('./dist/'));
});


gulp.task('compile-json', () => {
	if (gulpSrc('./dist/project.config.json')) {
		return gulp.src(['./src/**/*.json', '!./src/project.config.json'])
			.pipe(gulp.dest('./dist/'));
	} else {
		return gulp.src(['./src/**/*.json'])
			.pipe(gulp.dest('./dist/'));
	}
});

gulp.task('compile-wxml', () => {
	return gulp.src(['./src/**/*.wxml'])
		.pipe(gulp.dest('./dist/'));
});

gulp.task('auto', () => {
	gulp.watch('./src/**/*.less', gulp.parallel('compile-css'));
	gulp.watch('./src/**/*.js', gulp.parallel('compile-js'));
	gulp.watch('./src/**/*.json', gulp.parallel('compile-json'));
	gulp.watch('./src/**/*.wxml', gulp.parallel('compile-wxml'));
	gulp.watch('./src/static/*.{png,jpg,gif,ico}', gulp.parallel('compile-image'));
});

gulp.task('dev', gulp.parallel('compile-css', 'compile-js', 'compile-json', 'compile-wxml', 'compile-image', 'auto'));

gulp.task('build', gulp.parallel('compile-css', 'compile-js', 'compile-json','compile-wxml', 'compile-image'));