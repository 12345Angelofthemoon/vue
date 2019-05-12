const stdin=require('../libs/stdin');
const db=require('../libs/database');
const {md5}=require('../libs/crypto');

(async()=>{
  let username=await stdin('请输入管理员用户名: ');
  let password=await stdin('请输入管理员密码: ');

  if(!username || !password){
    if(!username)console.log('用户名不能为空');
    if(!password)console.log('密码不能为空');
  }else{
    let ok=await stdin(`管理员账号: ${username}\n密码: ${password}\n是否确认? (y/N)`);

    if(ok=='y'){
      let rows=await db.query("SELECT * FROM admin_table WHERE username=?", [username]);

      if(rows.length>0){
        console.log(`管理员已存在: ${username}`);
      }else{
        await db.query("INSERT INTO admin_table (username, password) values(?,?)", [username, md5(password)]);
        console.log(`已成功创建管理员: ${username}`);
      }

    }else{
      console.log('用户取消');
    }
  }

  stdin.close();
  db.close();
})()
