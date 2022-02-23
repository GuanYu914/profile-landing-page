// 引入需要的模組
const { gulp, task, series, src, dest, watch, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const cssimport = require("gulp-cssimport");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const webp = require("gulp-webp");

// 打包所有 CSS 程式碼，並使用 autoprefixer 提升 css 在不同瀏覽器的兼容性
function BundleCSS(cb) {
  src("src/css/style.css")
    .pipe(sourcemaps.init())
    .pipe(cssimport({}))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleancss({}))
    .pipe(concat("bundle.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("public"));
  cb();
}

// 如果特定目錄有修改、新增、移除 css ，則呼叫 BundleCSS
function WatchCSS() {
  watch("src/css/*.css", BundleCSS);
}

// 將所有 .jpg, .png 檔案轉換成 .webp
function ConvertToWebP(cb) {
  src("public/img/ori/*.{jpg,png}")
    .pipe(webp({ quality: 70 }))
    .pipe(dest("public/img/webp"));
  cb();
}

// 產生最終檔案內容，包括打包 css，轉換 .jpg, .png 成 .webp 檔案
var Build = parallel(BundleCSS, ConvertToWebP);

// 發包任務
exports.default = Build;
exports.build = Build;
exports.dev = WatchCSS;
exports.webp = ConvertToWebP;
