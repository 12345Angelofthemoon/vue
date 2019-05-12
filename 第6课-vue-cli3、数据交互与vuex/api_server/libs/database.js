const mysql=require('promise-mysql');
const config=require('../config');

let db=mysql.createPool({
  host: config.db_host,
  port: config.db_port,
  user: config.db_user,
  password: config.db_password,
  database: config.db_name,
});

module.exports=db;

db.close=function (){
  db.end();
};
