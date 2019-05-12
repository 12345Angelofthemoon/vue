module.exports={
  //跟目录
  publicPath: '/',
  //编译输出文件夹
  outputDir: 'build/',
  lintOnSave: false,
  pages: {
    index: {
      entry: './src/index.js',
      template: './public/index.html',
      filename: 'index.html',
    },
    // shop: {
    //   entry: './src/shop.js',
    //   template: './public/shop.html',
    //   filename: 'shop.html',
    // }
  },
  devServer: {
    port: 3000,
    //当读取数据失败，自动尝试5000
    proxy: 'http://localhost:5000'
    // proxy: {
    //   '^/user': {
    //     target: 'http://192.168.1.123:8080',
    //   },
    //   '^/news': {
    //     target: 'http://210.94.39.27:4000'
    //   }
    // }
  }
};
