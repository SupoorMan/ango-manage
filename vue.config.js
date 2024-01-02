const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      alias:{
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
		config.plugin('html').tap((args) => { //标题
			args[0].title = '🍉🍋🍊🍌🍑🍍🍎';
			return args;
		})
	},
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/scss-common.scss";`
      }
    }
  }
})
