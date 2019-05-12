const http=require('http');

http.createServer((req, res)=>{
  setTimeout(function (){
    res.end();
  }, 3000);
}).listen(8080);
