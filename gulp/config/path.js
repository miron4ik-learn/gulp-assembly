import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder   = './src',
      buildFolder = './dist'

export default {
  build: {
    static: `${buildFolder}/`,
  },
  src: {
    static: `${srcFolder}/static/*.*`,
  },
  watch: {
    static: `${srcFolder}/static/*.*`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}