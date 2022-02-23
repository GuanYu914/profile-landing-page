// 引入需要的模組
const { gulp, task, series, src, dest, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const cssimport = require("gulp-cssimport");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");

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

// 發包任務
exports.default = BundleCSS;
exports.build = BundleCSS;
exports.dev = WatchCSS;
