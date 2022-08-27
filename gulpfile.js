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
const { staticFiles, html } = tasks

const watcher = () => {
  gulp.watch(path.watch.static, staticFiles)
  gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.series(staticFiles, html)

const build = gulp.series(clean, mainTasks),
      dev   = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

export {
  dev,
  build,
}

gulp.task('default', dev)