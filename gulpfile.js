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
}

import tasks from './gulp/tasks.js'

const watcher = () => {
  //
}

const mainTasks = gulp.series()

const build = gulp.series(),
      dev   = gulp.series()

export {
  dev,
  build,
}

gulp.task('default', dev)