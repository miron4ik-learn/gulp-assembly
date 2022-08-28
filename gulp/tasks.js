import clean from './tasks/clean.js'
import server from './tasks/server.js'

import staticFiles from './tasks/static.js'
import html from './tasks/html.js'
import scss from './tasks/scss.js'
import js from './tasks/js.js'

import { ttf2woff } from './tasks/fonts.js'
import { fontsStyle } from './tasks/fonts.js'

export default {
  clean,
  server,

  ttf2woff,
  fontsStyle,

  staticFiles,
  html,
  scss,
  js,
}