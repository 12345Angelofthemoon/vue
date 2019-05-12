const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
  mode: 'development',
  entry: ['@babel/polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      // {test: 条件, use: 干啥}

      //css
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},

      //图片文件
      {test: /\.(jpe?g|png|gif|webp|ico)$/i, use: {
        loader: 'url-loader',
        options: {
          limit: 4*1024,
          outputPath: 'imgs/'
        }
      }},

      //字体
      {test: /\.(eot|svg|ttf|woff2?)$/i, use: {
        loader: 'url-loader',
        options: {
          limit: 4*1024,
          outputPath: 'fonts'
        }
      }},

      //音频
      {test: /\.(mp3|ogg|wav)$/i, use: {
        loader: 'url-loader',
        options: {
          limit: 4*1024,
          outputPath: 'audios'
        }
      }},

      //视频
      {test: /\.(mp4|ogv|avi)$/i, use: {
        loader: 'url-loader',
        options: {
          limit: 4*1024,
          outputPath: 'videos'
        }
      }},

      //less
      {test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader']},

      //vue
      {test: /\.vue$/, use: 'vue-loader'},

      //js
      {test: /\.jsx?$/i, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
          // presets: [
          //   ['@babel/preset-env', {
          //     targets: {
          //       chrome: 58,
          //       ie: 7
          //     }
          //   }]
          // ]
        }
      }}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    })
  ]
};
