const { task, src, dest, watch, series } = require('gulp')
const connect = require('gulp-connect')

const port = 3000;
const path = 'src';

function html() {
  return src('src/**/*.html')
    .pipe(connect.reload())
}

function css() {
  return src('src/**/*.css')
    .pipe(connect.reload())
}

function js() {
  return src('src/**/*.js')
    .pipe(connect.reload())
}

// 服务器启动
function server() {
  connect.server({
    name: 'CSS-Secrets',
    root: path,
    port: port,
    livereload: true
  })
  watchFile()
}

function watchFile() {
  watch(['src/**/*.html', "src/**/*.css", "src/**/*.js"]).on('change', function (path, stats) {
    let date = new Date()
    console.log(`${date.toLocaleTimeString()} | 监听文件变动：${path}`)
  })
  watch('src/**/*.html').on('change', html)
  watch('src/**/*.css').on('change', css)
  watch('src/**/*.js').on('change', js)
}

exports.default = server;
