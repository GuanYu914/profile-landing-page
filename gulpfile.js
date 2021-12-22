// 透過 autoprefixer 達到 post css ，提升 css 在不同瀏覽器的兼容性

// 引入需要的模組
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')
const { watch } = require('gulp')

// 使用 autoprefixer 產生 post css 
// 生成 sourcemap 對應到原始 css code
const Autoprefixer = function () {
  gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));
  console.log('Autoprefixer completed.');
}

// 如果特定目錄有修改、新增、移除 css ，則呼叫 Autoprefixer
const watch_css = function () {
  const watcher = watch(['src/css/*.css']);

  watcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed`);
    Autoprefixer();
  });

  watcher.on('add', function(path, stats) {
    console.log(`File ${path} was added`);
    Autoprefixer();
  });

  watcher.on('unlink', function(path, stats) {
    console.log(`File ${path} was removed`);
    Autoprefixer();
  });
}

// 發包任務
exports.default = Autoprefixer;
exports.watch_css = watch_css;