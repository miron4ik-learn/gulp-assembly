import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder   = './src',
      buildFolder = './dist'

export default {
  build: {
    static: `${buildFolder}/`,
    html: `${buildFolder}/`,
  },
  src: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/*.html`,
  },
  watch: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/**/*.html`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}