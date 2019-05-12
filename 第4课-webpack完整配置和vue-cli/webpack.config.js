const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const StyleLintPlugin=require('stylelint-webpack-plugin');

const ESLINT_ENABLE=false;
const STYLELINT_ENABLE=false;

module.exports=function (env, argv){
  //env——环境配置
  //argv——全部参数（包括env）

  let config=null;

  if(env.prod){
    config=require('./config/prod.conf');
  }else if(env.dev){
    config=require('./config/dev.conf');
  }

  return {
    entry: ['@babel/polyfill', './src/index'],
    module: {
      rules: [
        // {test: 条件, use: 干啥}

        //js
        {test: /\.jsx?$/i, use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          ...ESLINT_ENABLE?[
            {
              loader: 'eslint-loader',
              options: {

              }
            }
          ]:[]
        ]},

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


      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
      }),
      ...STYLELINT_ENABLE?[new StyleLintPlugin({
        files: ['**/*.css', '**/*.less', '**/*.vue', '**/*.scss']
      })]:[]
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.vue'],
      alias: {
        'vue': 'vue/dist/vue.esm'
      }
    },
    ...config
  };
};


//
// module.exports={



// };
