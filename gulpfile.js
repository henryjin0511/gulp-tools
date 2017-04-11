"use strict";
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();
	//路径
var resDest = 'dist/',
	jsSrc = 'src/*.js',
	scssSrc = 'src/*.scss',
	imgSrc = 'src/*.{png,jpg,jpeg,gif}',
	cssSrc = 'src/*.css';

//JS压缩
gulp.task('jsMin',function () {
	return gulp.src(jsSrc)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.uglify())
		.pipe(plugins.rename(function (path) {
			path.basename += 'min';
		}))
		.pipe(gulp.dest(resDest));
});

//SCSS文件转换CSS
gulp.task('scssToCss',function () {
	return gulp.src(scssSrc)
		.pipe(plugins.scssLint({
			'config': 'scsslint.yml'
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass({
			outputStyle:'expanded',  //未压缩
			// outputStyle:'compressed',  //压缩后
		}).on('error', plugins.sass.logError))
		.pipe(plugins.sourcemaps.write())
        .pipe(plugins.autoprefixer({
            browsers:[
                'Android 2.3',
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 8',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6'
            ],
            cascade: true,
            remove:true
        }))
		.pipe(gulp.dest(resDest));
});

//CSS压缩
gulp.task('cssMin',function () {
	return gulp.src(cssSrc)
		.pipe(plugins.autoprefixer({
			browsers:[
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6'
			],
			cascade: true,
			remove:true
		}))
		.pipe(plugins.cleanCss({
			advanced: false,
			compatibility: 'ie8',
			keepSpecialComments: '*',
            format:{
                breaks: {
                    afterRuleEnds: true
                }
			}
		}))
		.pipe(plugins.rename(function (path) {
			path.basename += 'min';
		}))
		.pipe(gulp.dest(resDest));
});

//图片资源压缩
gulp.task('imagemin',function(){
	gulp.src(imgSrc)
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(resDest));
});