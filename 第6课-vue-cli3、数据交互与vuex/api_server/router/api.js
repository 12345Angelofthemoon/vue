const Router=require('koa-router');

const datas=require('../datas/music163.json');

let router=new Router();

router.get('/list', async ctx=>{
  ctx.body={err: null, data: datas.map(data=>{
    let result=Object.assign({}, data);

    delete result.list;

    return result;
  })};
});
router.get('/detail/:id', async ctx=>{
  let id=ctx.params.id;

  let data=null;
  for(let i=0;i<datas.length;i++){
    if(datas[i].id==id){
      data=datas[i];
      break;
    }
  }

  if(!data){
    ctx.body={err: true, msg: `未找到此列表(id: ${id})`};
  }else{
    ctx.body={err: null, data};
  }
});

module.exports=router.routes();
