module.exports={
  //跟目录
  publicPath: '/',
  //编译输出文件夹
  outputDir: 'build/',
  lintOnSave: false,
  devServer: {
    port: 3000,
    proxy: 'http://localhost:5000'
  },
};
