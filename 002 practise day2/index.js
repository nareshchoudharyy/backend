const http = require('http');

const serverFun=(req,res)=>{
    console.log(req.method)
    res.end('Hii'); 
}

http.createServer(serverFun).listen(5000); 