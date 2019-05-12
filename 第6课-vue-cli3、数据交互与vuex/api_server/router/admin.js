const Router=require('koa-router');
const uuid=require('uuid/v4');
const {md5}=require('../libs/crypto');

let router=new Router();

// /admin/login?user=xxx&password=xxx
router.get('/login', async ctx=>{
  const {user, password}=ctx.query;
  const token=uuid();

  if(!user){
    ctx.body={ok: false, code: 'EINVAILD', msg: '用户名不能为空'};
  }else if(!password){
    ctx.body={ok: false, code: 'EINVAILD', msg: '密码不能为空'};
  }else{
    //
    let rows=await ctx.db.query("SELECT * FROM admin_table WHERE username=?", [user.toLowerCase()]);
    let data=rows[0];

    if(!data){
      ctx.body={ok: false, code: 'ENOTEXIST', msg: '此管理员不存在'};
    }else if(data.password!=md5(password)){
      ctx.body={ok: false, code: 'EINCORRECT', msg: '账号或密码有误'};
    }else{
      //
      let token_expires=Math.floor(Date.now()/1000)+86400; //默认有效期1天
      await ctx.db.query("UPDATE admin_table SET token=?,token_expires=?", [
        token,
        token_expires
      ]);

      ctx.body={ok: true, data: {
        token, token_expires
      }};
    }
  }
});

router.get('/logout', async ctx=>{
  
});

module.exports=router.routes();
