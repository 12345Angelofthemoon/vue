const database=require('../libs/database');
const fs=require('fs');

const SQL=`SELECT * FROM news_table`;
const FILE='datas/news163.json';

(async ()=>{
  let db=null;

  if(!database){
    console.log('no database connected');
    return;
  }else{
    db=await database;
  }

  let datas=await db.query(SQL);
  console.log(`dumped ${datas.length} datas`);

  fs.writeFileSync(FILE, JSON.stringify(datas));
  console.log(`${datas.length} datas written to ${FILE}`);
})();
