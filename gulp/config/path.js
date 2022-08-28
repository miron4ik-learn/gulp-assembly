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
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    fonts: `${srcFolder}/fonts/*.ttf`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  watch: {
    static: `${srcFolder}/static/*.*`,
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },

  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
}