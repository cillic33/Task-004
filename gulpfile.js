'use strict'

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass')(require('sass')),
	svgSprite = require('gulp-svg-sprite')

gulp.task('clean', () => {
    del.sync('docs')
})

gulp.task('css', () => {
	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('docs/css'))
})

gulp.task('js', () => {
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('docs/js'))
})

gulp.task('images', () => {
	gulp.src('src/img/*.png')
	.pipe(gulp.dest('docs/img'))
})

gulp.task('svgSprite', () => {
	gulp.src('src/img/*.svg')
	.pipe(svgSprite({
		mode: {
			stack: {
				sprite: "../icons/icons.svg",
				example: true
			}
		}
	}))
	.pipe(gulp.dest('docs/img'))
})

gulp.task('fonts', () => {
	gulp.src('src/fonts/*.*')
	.pipe(gulp.dest('docs/fonts'))
})

gulp.task('html', () => {
	gulp.src('src/index.html')
	.pipe(gulp.dest('docs'))
})

gulp.task('default', ['clean', 'css', 'js', 'images', 'svgSprite', 'fonts', 'html'])