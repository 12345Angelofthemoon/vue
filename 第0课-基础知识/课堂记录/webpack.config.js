const path=require('path');

module.exports={
  mode: 'development',
  entry: './mod2/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
