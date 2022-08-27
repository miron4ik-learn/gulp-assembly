import path from 'path'

import fileInclude from 'gulp-file-include'
import htmlBeautify from 'gulp-html-beautify'
import versionNumber from 'gulp-version-number'

export default () => {
  return $.gulp.src($.path.src.html)
    // Error message output
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'HTML',
          message: 'Error <%= error.message %>'
        })
      )
    )
    // File includes
    .pipe(
      fileInclude({
        // Include file relative to the dir in wich src/html
        basepath: path.dirname($.path.src.html),
      })
    )
    // Replace the alias in relative paths
    .pipe($.plugins.replace(/@img\//g, 'img/'))
    // Add version number to js/css in HTML
    .pipe(
      $.plugins.if(
        $.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: [ 'css', 'js' ],
          },
        })
      )
    )
    // Beautify HTML files
    .pipe(
      $.plugins.if(
        $.isBuild,
        htmlBeautify($.htmlBeautify)
      )
    )
    // Move files to the dist directory
    .pipe($.gulp.dest($.path.build.html))
    // Update the browser
    .pipe($.plugins.browserSync.stream())
}