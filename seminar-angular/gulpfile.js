var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var gulpangulartemplatecache = require('gulp-angular-templatecache');
var format = require('util').format;
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var tsify = require('tsify');

var config = {
    distRoot: './wwwroot/',
    appRoot: './ClientApplication/',
    templateCache: {
        file: 'templates.js',
        options: {
            module: 'app',
            standAlone: false,
            root: '/templates/'
        }
    }
};

var vendors = [
    'bootstrap',
    'jquery',
    'popper.js'
];

gulp.task('default', [
    'build:app',
    'build:template',
    'build:vendor'
]);

gulp.task('build:ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(config.distRoot + 'js'));
});

gulp.task('build:app', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [config.appRoot + 'app/app.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.distRoot + 'js'));
});

gulp.task('build:template', () => {
    var templateDir = config.appRoot + '**/*.html';

    gulp.src(templateDir)
        .pipe(gulpangulartemplatecache(
            config.templateCache.file,
            config.templateCache.options))
        .pipe(gulp.dest(config.distRoot + 'templates'));

});

gulp.task('build:vendor', () => {
    var b = browserify({ debug: true });

    // require all libs from vendor array
    vendors.forEach(lib => b.require(lib));

    b.bundle()
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.distRoot + 'js'));
});