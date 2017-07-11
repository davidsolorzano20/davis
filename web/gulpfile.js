var promise = require('es6-promise');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var bower        = require('gulp-bower');
var runSequence  = require('run-sequence');
var clean        = require('gulp-clean');
var autoprefixerOptions = {
  browsers: ['last 1 version']
};
var processors = [
  autoprefixer(autoprefixerOptions),
];

/* Directories */
var styleCustomSass = './assets/sass/style.scss';
var fonts = './assets/fonts/';
var fontsAwesomeSass = './assets/sass/components/font-awesome';
var outputCss = './assets/css';
var bowerComponents = '../bower_components/';
var assets = './assets/';
var assetLibraries = './assets/js/lib/';
var bootstrapSass = './assets/sass/components/bootstrap-sass/';
var watchSCSS = 'assets/sass/**/*.scss';
promise.polyfill();

gulp.task('prod', ['bower'],  function () {
  return gulp
    .src(styleCustomSass)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(outputCss));
});

gulp.task('dev', ['bower'], function () {
  return gulp
    .src(styleCustomSass)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(outputCss));
});

gulp.task('watch', function () {
	gulp.watch(watchSCSS, ['prod']);
});

gulp.task('bower', function(callback) {
  runSequence(
    'run-bower',
    ['bootstrap-sass', 'bootstrap-js', 'bootstrap-fonts', 'fonts-awesome','fonts-awesome-sass', 'jquery', 'freewall'],
    callback
  );
});

gulp.task('run-bower', function() {
  return bower(bowerComponents);
});

// Move around some files from the bower folder into proper destinations.
gulp.task('bootstrap-sass', function() {
  return gulp.src(bowerComponents + '/bootstrap-sass/assets/stylesheets/**/*', { base: bowerComponents + '/bootstrap-sass/assets/stylesheets/' })
    .pipe(gulp.dest(bootstrapSass));
});

gulp.task('bootstrap-js', function() {
  return gulp.src(bowerComponents + '/bootstrap-sass/assets/javascripts/bootstrap.min.js', { base: bowerComponents + '/bootstrap-sass/assets/javascripts/' })
    .pipe(gulp.dest(assetLibraries));
});

gulp.task('bootstrap-fonts', function() {
  return gulp.src(bowerComponents + '/bootstrap-sass/assets/fonts/bootstrap/*', { base: bowerComponents + '/bootstrap-sass/assets/fonts/bootstrap/' })
    .pipe(gulp.dest(fonts));
});

gulp.task('fonts-awesome', function() {
  return gulp.src(bowerComponents + '/font-awesome/fonts/*', { base: bowerComponents + '/font-awesome/fonts/' })
    .pipe(gulp.dest(fonts));
});

gulp.task('fonts-awesome-sass', function() {
  return gulp.src(bowerComponents + '/font-awesome/scss/*', { base: bowerComponents + '/font-awesome/scss/' })
    .pipe(gulp.dest(fontsAwesomeSass));
});

gulp.task('jquery', function() {
  return gulp.src(bowerComponents + '/jquery/dist/jquery.min.js', { base: bowerComponents + '/jquery/dist/' })
    .pipe(gulp.dest(assetLibraries));
});

gulp.task('freewall', function() {
	return gulp.src(bowerComponents + '/freewall/freewall.js', { base: bowerComponents + '/freewall/' })
		.pipe(gulp.dest(assetLibraries));
});

gulp.task('default', ['dev']);

