var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
clean = require('gulp-clean-css'),
htmlmin = require('gulp-htmlmin');

gulp.task('html',function(){
	var options = {
		removeComments: true,//清除HTML注释
	        collapseWhitespace: true,//压缩HTML
	        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
	        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	        minifyJS: true,//压缩页面JS
	        minifyCSS: true//压缩页面CSS
	};
	gulp.src('./index.html')
	.pipe(htmlmin(options))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./'));
})

gulp.task('css',function(){
	gulp.src('./css/*.css')
	.pipe(clean())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./css'));
})

gulp.task('js',function(){
	gulp.src('./js/*.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./js'));
})

gulp.task('default',function(){
	console.log('压缩js:js\n压缩css:css\n压缩html:html');
});