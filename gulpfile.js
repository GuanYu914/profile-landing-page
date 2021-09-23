// 透過 autoprefixer 達到 post css ，提升 css 在不同瀏覽器的兼容性

// 引入需要的模組
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')

// 使用 autoprefixer 產生 post css 
// 生成 sourcemap 對應到原始 css code
const Autoprefixer = async function () {
  gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));
  console.log('Autoprefixer completed.');
}

// 發包任務
exports.default = gulp.series(Autoprefixer);