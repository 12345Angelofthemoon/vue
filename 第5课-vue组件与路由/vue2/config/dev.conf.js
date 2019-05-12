const path=require('path');

module.exports={
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    compress: true,
    port: 3000,   //端口
    open: true,   //打开浏览器
    disableHostCheck: true,
    historyApiFallback: true,   //配合history router
    proxy: {      //跨域
      '/api': 'http://localhost:8080'       // /api/login => http://localhost:8080/api/login
    }
  }
};
