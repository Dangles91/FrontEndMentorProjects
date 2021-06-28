var {gulp, src, dest, watch, series, parallel} = require('gulp');
var sass = require("gulp-sass")(require("sass"));
var browserSync = require('browser-sync');


var paths = {
	input: 'app/',
	output: 'dist/',
	scripts: {
		input: 'app/js/*',
		output: 'dist/js/'
	},
	styles: {
		input: 'app/sass/**/*.{scss,sass}',
		output: 'dist/css/'
	},
	copy: {
		input: 'app/copy/**/*',
		output: './'
	},
	reload: './dist/'
};

var buildStyles = function (done) {
    return src(paths.styles.input)
    .pipe(sass())
    .pipe(dest(paths.styles.output));
};

var reloadBrowser = function (done) {
	//if (!settings.reload) return done();
	browserSync.reload();
	done();
};

var startServer = function (done) {

	// Initialize BrowserSync
	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});

	// Signal completion
	done();

};

var copyFiles = function (done) {

	// Copy static files
	return src(paths.copy.input)
		.pipe(dest(paths.copy.output));

};

exports.default = series(
        parallel(
            buildStyles,
            copyFiles
        )
);

var watchSource = function (done) {
	watch(paths.input, series(exports.default, reloadBrowser));
	done();
};

exports.watch = series(
	exports.default,
    startServer,
	watchSource
);