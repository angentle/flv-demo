const path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/h5/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',

  devServer: {
    proxy: {
      '/api': {
        // target: "http://localhost:3333/h5/",
        target: 'https://m.winfo.pub/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/msa': {
        target: 'https://cyxx.msa.gov.cn/crew_qey/',
        changeOrigin: true,
        pathRewrite: {
          '^/msa': ''
        }
      }
    }
  },

  configureWebpack: {
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/common.less')]
    }
  }
}
