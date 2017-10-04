var gulp = require('gulp'),
watch = require('gulp-watch');
gulp.task('default', function(){
	console.log("gulp task");
});

gulp.task('html', function(){
	console.log("html task");
});

gulp.task('watch', function(){
	watch('./app/index.html',function(){
	gulp.start('html')
	});
});