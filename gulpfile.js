import gulp from 'gulp'

import path from './gulp/config/path.js'
import plugins from './gulp/config/plugins.js'

const isBuild =  process.argv.includes('--build'),
      isDev   = !process.argv.includes('--build')

global.$ = {
  // Development environment
  isBuild,
  isDev,

  // Plugin browser-sync Options
  browserSync: {
    server: {
      baseDir: path.buildFolder,
    },
    notify: false,
    port: 3000,
  },

  gulp,
  path,
  plugins,
}

import tasks from './gulp/tasks.js'

const { clean, server } = tasks
const { ttf2woff, fontsStyle } = tasks
const { staticFiles, html, scss, js, images } = tasks

const watcher = () => {
  gulp.watch(path.watch.static, staticFiles)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)

  gulp.watch(path.watch.data, html)
  gulp.watch(path.watch.svg, html)
}

const fontsTasks = gulp.series(ttf2woff, fontsStyle),
      mainTasks  = gulp.series(fontsTasks, gulp.parallel(staticFiles, html, scss, js, images))

const build = gulp.series(clean, mainTasks),
      dev   = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

export {
  dev,
  build,
}

gulp.task('default', dev)