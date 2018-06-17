"use strict";

const gulp = require('gulp'),
      fs = require('fs'),
      sass = require('gulp-sass'),
      server = require('browser-sync'),
      plumber = require('gulp-plumber'),
      map = require('gulp-sourcemaps'),
      glob = require('gulp-sass-glob'),
      rimraf = require('rimraf'),
	    fileinclude = require('gulp-file-include');


const paths = {
	distDir: './',
	devDir: {
		views: 'src/',
		styles:'src/styles/',
		js: 'src/js/',
	},
	modules: 'node_modules/'
}

/*******************************************/
			// DEVELOPER TASKS //
/*******************************************/

/******* VIEW *******/

gulp.task('view', () =>{
	return gulp.src([paths.devDir.views + 'index.html'])
	.pipe(plumber())
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
	.pipe(gulp.dest([paths.distDir]))
	.pipe(server.stream())

});






/******* FONTS *******/

gulp.task('fonts', () => {
	return gulp.src([paths.modules + 'font-awesome/fonts/*.*'])
	.pipe(gulp.dest([paths.distDir + 'fonts']))
	.pipe(server.stream());
});

gulp.task('fontsProd', () => {
	return gulp.src([paths.distDir + 'fonts/*.*'])
	.pipe(gulp.dest([paths.distDir + 'fonts']));
});

/******* LIBRARIES *******/

// gulp.task('libs', () => {
// 	return gulp.src([paths.modules + 'font-awesome/css/font-awesome.min.css'])
// 			.pipe(gulp.dest([paths.distDir + 'libs']));
// });

/******* SASS *******/

gulp.task('sass', () => {
  return gulp.src([paths.devDir.styles + 'main.scss'])
  	.pipe(plumber())
  	.pipe(map.init())
  	.pipe(glob())
    .pipe(sass().on('error', sass.logError))
    .pipe(map.write())
    .pipe(gulp.dest([paths.distDir + 'css']))
    .pipe(server.stream());
});

/******* JS *******/

gulp.task('js', () => {
  return gulp.src([paths.devDir.js + '**/*.js'])
  	.pipe(plumber())
    .pipe(map.init())
    .pipe(map.write())
    .pipe(gulp.dest([paths.distDir + 'js']))
    .pipe(server.stream());
});

/******* WATCH *******/

gulp.task('watch', () => {
	gulp.watch(paths.devDir.views + '**/*.html', gulp.series('view')) ;
	gulp.watch(paths.devDir.styles + '**/*.scss', gulp.series('sass'));
	gulp.watch(paths.devDir.js + '**/*.js', gulp.series('js'));
});


/******* SERVER *******/

gulp.task('server', () => {
	server.init({
		port: 2999,
		server: {
			baseDir: paths.distDir
		},
		notify: false
	});
});

//default
gulp.task('default',gulp.series( gulp.parallel('js', 'view', 'server', 'watch', 'sass')));
