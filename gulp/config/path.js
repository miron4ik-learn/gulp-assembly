import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder   = './src',
      buildFolder = './dist'

export default {
  build: {},
  src: {},
  watch: {},

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}