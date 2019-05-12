const path=require('path');

module.exports={
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js',
    publicPath: 'http://www.zhinengshe.com/',
  },
};
