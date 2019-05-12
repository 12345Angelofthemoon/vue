const path=require('path');

module.exports={
  //数据库相关配置
  db_host: '',
  db_port: 3306,
  db_user: 'root',
  db_password: '123456',
  db_name: 'news163',

  //服务器配置
  //http端口
  port: 8081,
  //允许跨域
  allow_cross_domain: true,

  //路径配置
  upload_path: path.resolve(__dirname, 'upload'),

  //随机延迟，用于模拟真实网络环境，false可关闭
  rnd_wait: false,
  // rnd_wait: ()=>Math.floor(Math.random()*1000+500),

}
