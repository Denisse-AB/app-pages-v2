const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/app-pages/' : '/',
  devServer: {
    proxy: {
      '/post': {
        target: 'http://localhost:3000'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
})
