import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder   = './src',
      buildFolder = './dist'

export default {
  build: {
    static: `${buildFolder}/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    fonts: `${srcFolder}/fonts/*.ttf`,
  },
  watch: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}