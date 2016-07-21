const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('scss', function() {
	return gulp.src('css/*.scss')
	.pipe(sass({
		'sourcemap = none': true
	}))
	.pipe(concat('superMaster.css'))
	.pipe(gulp.dest('css/'))
});

gulp.task('pug',function(){
	return gulp.src('html/*.pug')
	.pipe(pug({

	}))
	.pipe(gulp.dest('html/'))
});

gulp.task('js', function(){
	return gulp.src('js/*.js')
	.pipe(concat('allJs.js'))
	.pipe(gulp.dest('js/'))
})


gulp.task('watch',function(){
	gulp.watch('css/*.scss', ['scss']);
	gulp.watch('html/*.pug', ['pug']);
	gulp.watch('views/*.pug', ['pug']);
	gulp.watch('js/*.js', ['js']);
});
