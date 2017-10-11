/*This styles.js is a gulp process that processes the css referenced in the file that cssCommandFilePath points to.
It outputs a single .css file to the cssDestFilePath.
It currently accepts:
-Variables in the format $myVariable = value;
-Nested css: see <insert helpful reference here> for more information on syntax.
-mixins: see <insert helpful reference here> for more information on syntax.
It also "autoprefixes" which means that better browser specific code with less developer typing.
see <insert helpful reference here> for what html it will auto-prefix.
*/

var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer')
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssCommandFilePath= './app/assets/styles/styles.css',
cssDestFilePath= './app/temp/styles';


gulp.task('css', function(){
	return gulp.src(cssCommandFilePath)
	.pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest(cssDestFilePath));
});
