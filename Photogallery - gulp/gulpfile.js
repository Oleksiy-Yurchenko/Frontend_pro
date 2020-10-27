const {series, src, dest, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');


function copyVendorJs(){
    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/blueimp-gallery/js/blueimp-gallery.js',
    ])
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
}

function copyVendorCss(){
    return src('./node_modules/blueimp-gallery/css/blueimp-gallery.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({basename: 'vendors', extname: '.min.css'}))        
        .pipe(dest('./dist/css'))
}

function copyVendorImg(){
    return src('./node_modules/blueimp-gallery/img/*.svg')                             
        .pipe(dest('./dist/img'))
}

function copyHtml(){
    return src('./src/index.html')
        .pipe(dest('./dist/html'))
}

function copyJs(){
    return src('./src/**/*.js') 
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
}

function cleanDist(){
    return src('./dist', {read: false})
        .pipe(clean());
}

function jsFilesWatch(){
    watch('./src/**/*.js', function rebuild() {
        return copyJs();
    })
}

module.exports = {
    build: series(cleanDist, copyHtml, copyVendorJs, copyJs, copyVendorCss, copyVendorImg),
    serve: series(cleanDist, copyHtml, copyVendorJs, copyJs, copyVendorCss, copyVendorImg, jsFilesWatch),
}