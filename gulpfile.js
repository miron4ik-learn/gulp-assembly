import gulp from 'gulp'

import path from './gulp/config/path.js'
import plugins from './gulp/config/plugins.js'

const isBuild =  process.argv.includes('--build'),
      isDev   = !process.argv.includes('--build')

global.$ = {
  isBuild,
  isDev,

  gulp,
  path,
  plugins,

  browserSync: {
    server: {
      baseDir: path.buildFolder,
    },
    notify: false,
    port: 3000,
  },
}

import tasks from './gulp/tasks.js'

const { clean, server } = tasks
const { staticFiles } = tasks

const watcher = () => {
  gulp.watch(path.watch.static, staticFiles)
}

const mainTasks = gulp.series(staticFiles)

const build = gulp.series(clean, mainTasks),
      dev   = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

export {
  dev,
  build,
}

gulp.task('default', dev)