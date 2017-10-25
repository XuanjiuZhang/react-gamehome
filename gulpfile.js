/*
 * @Author: zhangxuanjiu 
 * @Date: 2017-08-07 16:21:14 
 * @Last Modified by: zhangxuanjiu
 * @Last Modified time: 2017-10-25 21:23:18
 */
var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var configDev = require('./webpack.config-dev.js');
var del = require('del');
var path = require('path');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');

// 清空文件夹
gulp.task('clean', function() {
  return del([
    './build/*',
    './build/style/*',
    './build/lib/*',
    './build/img/**/*'
  ]);
});

// 复制
gulp.task('copy', ['clean'], function() {
  // gulp.src(['./src/fonts/*'])
  //   .pipe(gulp.dest('./build/fonts/'))
  // gulp.src(['./src/lib/*'])
  //   .pipe(gulp.dest('./build/lib/'))
  // return gulp.src(['./src/*.html', './src/scoreShare/*.html', './src/scoreShareBull/*.html'])
  //   .pipe(gulp.dest('./build/'));
  gulp.src(['./src/lib/*'])
    .pipe(gulp.dest('./build/lib/'))
  gulp.src(['./src/style/*.css'])
    .pipe(cssmin())
    .pipe(gulp.dest('./build/style/'))
  gulp.src(['./src/scoreShareBull/style/*.css'])
    .pipe(cssmin())
    .pipe(gulp.dest('./build/style/scoreShareBull/'))
  gulp.src(['./src/scoreShareBull/img/**/*'])
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest('./build/img/scoreShareBull/'))
  gulp.src(['./src/scoreShareBull/*.html'])
    .pipe(gulp.dest('./build/'));
});

// 监听html/css文件改动
gulp.task('watch', function() {
  gulp.watch('./src/*.html', function(event) {
    gulp.src(['./src/*.html'])
      .pipe(gulp.dest('./build/'))
  });
  gulp.watch('./src/scoreShare/*.html', function(event) {
    gulp.src(['./src/scoreShare/*.html'])
      .pipe(gulp.dest('./build/'))
  });
  gulp.watch('./src/scoreShareBull/*.html', function(event) {
    gulp.src(['./src/scoreShareBull/*.html'])
      .pipe(gulp.dest('./build/'))
  });
  gulp.watch('./src/style/*.css', function(event) {
    gulp.src(['./src/style/*.css'])
      .pipe(gulp.dest('./build/style/'))
  });
});

gulp.task('dev', ['copy'], function() {
  var compiler = webpack(configDev);
  var server = new WebpackDevServer(compiler, {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'build'),
    // match the output path 

    publicPath: '/',
    // match the output `publicPath` 

    stats: { colors: true },

    proxy: {},

    port: 8085

  });
  server.listen(8085, 'localhost');
});

gulp.task('build', ['copy'], function() {
  webpack(config).run(function() {
    console.log('build finished!')
  });
});