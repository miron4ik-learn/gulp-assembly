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

const watcher = () => {
  //
}

// const mainTasks = gulp.series()

const build = gulp.series(clean),
      dev   = gulp.series(clean, gulp.parallel(server))

export {
  dev,
  build,
}

gulp.task('default', dev)