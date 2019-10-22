"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variabler
var _a = require("gulp"), src = _a.src, dest = _a.dest, watch = _a.watch, series = _a.series, parallel = _a.parallel, gulp = _a.gulp;
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;
var concatCss = require("gulp-concat-css");
var cleanCSS = require('gulp-clean-css');
var babel = require("gulp-babel");
// Sökvägar
var files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    cssPath: "src/css/**/*.css",
    mediaPath: "src/media/*"
};
// Task: watcher
function watchTask() {
    watch([
        files.htmlPath,
        files.jsPath,
        files.cssPath,
        files.mediaPath
    ], parallel(copyHTML, copyMedia, jsTask, cssCombine));
}
//---------------- GULP TASKS ----------------//
// Task: kopiera HTML
function copyHTML() {
    return src(files.htmlPath)
        // Skickar filerna till mapp med namn "pub"
        .pipe(dest("pub"));
}
// Task: kopiera bilder
function copyMedia() {
    return src(files.mediaPath)
        // Skickar filerna till mapp med namn "pub/media"
        .pipe(dest("pub/css/media"));
}
// Task: Sammanslå och minifiera js-filer
function jsTask() {
    return src(files.jsPath)
        // Sammanslår alla .js-filer till "main.js"
        .pipe(concat('main.js'))
        // Förkortar "main.js"
        .pipe(uglify())
        // Skickar filen till "pub/js"
        .pipe(dest('pub/js'));
}
// Task: Sammanslå CSS-filer
function cssCombine() {
    return src(files.cssPath)
        //Sammanslår all css till "main.css"
        .pipe(concatCss("main.css"))
        // Minifierar CSS-fil
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        //Skickar sammanslagen fil till "pub/css"
        .pipe(dest('pub/css'));
}
// Huvudkommandot 'Gulp' sätter igång samtliga funktioner 
// Funktionen 'watchTask' spårar alla ändringar och håller live-filen uppdaterad
function babelTask() {
    return src("src/**/*.js")
        .pipe(babel())
        .pipe(dest("pub/js-legacy"));
}
exports.default = series(parallel(copyHTML, copyMedia, jsTask, cssCombine /*,babelTask*/), watchTask);

/*____________________________________________________________________
Kommando för att övervaka och flytta ändringar från sass-fil till css:
sass --watch src/css/style.scss:src/css/main.css
Kommando för att konvertera senare version av ES med Babel:
_____________________________________________________________________*/
