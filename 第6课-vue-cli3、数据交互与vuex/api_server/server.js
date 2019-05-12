//
console.log(`
************************************************************
*                      zns api server                      *
************************************************************
`);
console.log('启动中...');

let chalk,Koa,Router,config,http,io,body,convert,static,session,fs,path,send,timeout;

try{
  chalk=require('chalk');
  Koa=require('koa');
  Router=require('koa-router');
  config=require('./config');
  http=require('http');
  io=require('socket.io');
  body=require('koa-better-body');
  convert=require('koa-convert');
  static=require('koa-static');
  session=require('koa-session');
  fs=require('fs');
  path=require('path');
  send=require('koa-send');
  timeout=require('./libs/timer').timeout;
}catch(e){
  console.log('无法引入组件，请使用以下命令安装后再启动:');
  console.log('  npm install');
  console.log('\n---------------------------------------------');
  console.error(e);
  return;
}
console.log('服务器模块已就绪');

(async ()=>{
  //
  let server=new Koa();
  try{
    let database=require('./libs/database');
    if(config.db_host){
      server.context.db=await database;
      let tables=await server.context.db.query("SHOW TABLES");
      console.log('MySQL数据库已就绪');
    }else{
      server.context.db=null;
      console.log('未配置数据库');
    }
  }catch(e){
    switch(e.code){
      case 'ECONNREFUSED':
        console.log('连接数据库失败，请确认数据库是否启动');
        break;
      case 'ER_BAD_DB_ERROR':
        console.log('连接数据库失败，请确认数据是否已正确导入');
        break;
      default:
        console.log('连接数据库失败，code:', e.code);
    }

    console.log('\n---------------------------------------------');
    console.log(JSON.parse(JSON.stringify(e)));
    return;
  }


  try{
    server.keys=JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '.keys')).toString()
    );
    console.log('读取到',chalk.yellow(server.keys.length),'个key');
  }catch(e){
    console.log('无法读取key，请使用以下命令重新生成');
    console.log('  node utils/genkeys');
    return;
  }

  server.use(session({
    maxAge: 20*60*1000,
    autoCommit: true,
    httpOnly: true,
    signed: true,
    renew: true
  }, server));

  server.use(convert(body({uploadDir: config.upload_path})));

  //跨域处理
  if(config.allow_cross_domain){
    server.use(async (ctx,next)=>{
      if(ctx.method=='OPTIONS'){
        ctx.set({
          'Access-Control-Allow-Origin': ctx.get('Origin'),
          'Access-Control-Allow-Headers': ctx.get('Access-Control-Request-Headers'),
          'Access-Control-Allow-Method': ctx.get('Access-Control-Request-Method'),
        });
        ctx.status=200;

        console.log('完成跨域授权', ctx.url);
      }else{
        ctx.set({
          'Access-Control-Allow-Origin': ctx.get('Origin'),
          'Access-Control-Allow-Headers': ctx.get('Access-Control-Request-Headers'),
          'Access-Control-Allow-Method': ctx.get('Access-Control-Request-Method'),
        });
        await next();
      }
    });
  }

  //全局错误、信息、延时处理


  server.use(async (ctx,next)=>{
    console.log(`[${new Date().toGMTString()}] ${ctx.method} ${ctx.url}`);



    try{
      await next();
      if(!ctx.body){
        console.log('无内容');
      }else if(ctx.body instanceof String || ctx.body.constructor==Object || ctx.body instanceof Array){
        console.log(JSON.stringify(ctx.body).substring(0, 70)+'...');
      }else{
        console.log(ctx.body.constructor);
      }

      //成功的情况下，延时返回
      if(config.rnd_wait){
        await timeout(config.rnd_wait());
      }
    }catch(e){
      ctx.body={ok: false, err: '服务器内部错误，从控制台查看错误详情'};
      console.log('\n---------------------------------------------');
      console.error(e);
    }
  });

  //
  let router=new Router();

  router.use('/api', require('./router/api'));
  console.log(`路由模块api已就绪`);
  router.use('/admin', require('./router/admin'));
  console.log(`路由模块admin已就绪`);

  router.post('/test_upload', async ctx=>{
    console.log(ctx.request.fields);

    ctx.body='ok';
  });
  // router.get('/upload/:file', async ctx=>{
  //   let {file}=ctx.params;
  //   await send(ctx, file, {root: __dirname+'/upload'});
  // });

  server.use(router.routes());

  //
  server.use(static('./static'));

  //
  let httpServer=http.Server(server.callback());
  httpServer.on('error', e=>{
    switch(e.code){
      case 'EADDRINUSE':
        console.log(`本机${config.port}端口已被占用，服务无法启动`);
        console.log('> 1.检查是否有其他服务占用此端口');
        console.log('> 2.或更换端口');
        break;
      default:
        console.log('服务器启动失败，错误详情如下：');
        console.log(e);
    }
    server.context.db.close();
  });
  httpServer.listen(config.port, ()=>{
    console.log('http服务已就绪');

    require('./libs/host').forEach(host=>{
      console.log('>', chalk.green(`http://${host}:${config.port}/`));
    });

    //
    let wsServer=io.listen(httpServer);

    wsServer.on('connection', sock=>{

    });
    console.log('websocket服务已就绪');
    require('./libs/host').forEach(host=>{
      console.log('>', chalk.green(`ws://${host}/`));
    });

    console.log('\n');
    console.log('http跨域访问...', config.allow_cross_domain?chalk.green('开启'):chalk.yellow('禁用'));
    console.log('模拟随机延时...', config.rnd_wait?chalk.green('开启'):chalk.yellow('禁用'));

    if(config.db_host){
      console.log('数据库...', `${config.db_host}@${config.db_port}/${config.db_name}`);
    }else{
      console.log('数据库...', `未连接`);
    }


    console.log('所有模块正常，已完成启动');
    console.log('\n\n\n');
  });
})();
