const Router=require('koa-router');

let router=new Router();

// router.options('/getpage/:page', async (ctx,next)=>{
//   ctx.status=200;
//
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Methods', '*');
//   ctx.set('Access-Control-Request-Headers', '*');
//
//   console.log('options');
//
//   await next();
// });

router.all('*', async (ctx,next)=>{
  let token=ctx.query.token;

  if(!token){
    ctx.body={ok: false, code: 'ENOTOKEN', msg: '需要登录'};
  }else{
    let rows=await ctx.db.query("SELECT * FROM admin_table WHERE token=?", [token]);
    let data=rows[0];

    if(!data){
      ctx.body={ok: false, code: 'ENODATA', msg: '无法找到此登录记录'};
    }else if(data.token_expires<Math.floor(Date.now()/1000)){
      ctx.body={ok: false, code: 'EEXPIRES', msg: 'token已过期，请重新登录'};
    }else{
      ctx.admin_ID=data.ID;

      await next();
    }
  }
});

const PAGE_SIZE=10;

// /api/getpage/[页码]?[sortby=字段]&[sort=asc|desc]&[channel=频道名称]

router.get('/getpage/:page', async ctx=>{
  let {page}=ctx.params;
  let {sortby, sort, channel}=ctx.query;

  //默认参数
  sortby=sortby||'ID';
  sort=sort||'DESC';
  channel=channel||'';

  if(sort=='ascending'){
    sort='ASC';
  }else if(sort=='descending'){
    sort='DESC';
  }else{
    sort='ASC';
  }

  let rows=await ctx.db.query(`
    SELECT ID, title, time, channel
    FROM news_table
    WHERE (?='' OR channel=?)
    ORDER BY ${sortby} ${sort}
    LIMIT ?,?
  `, [
    channel, channel,
    (page-1)*PAGE_SIZE, PAGE_SIZE
  ]);

  ctx.body={ok: true, data: rows};
});

// /api/pagecount?[channel=频道名称]
router.get('/pagecount', async ctx=>{
  let {channel}=ctx.query;
  channel=channel||'';

  let rows=await ctx.db.query("SELECT COUNT(*) AS c FROM news_table WHERE (?='' OR channel=?)", [channel, channel]);

  ctx.body={ok: true, data: {
    count: Math.ceil(rows[0].c/PAGE_SIZE)
  }};
});

router.get('/delnews/:id', async ctx=>{
  let {id}=ctx.params;

  await ctx.db.query("DELETE FROM news_table WHERE ID=?", [id]);

  ctx.body={ok: true, data: null};
});

module.exports=router.routes();
