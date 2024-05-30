const http = require('http');
const url = require('url');

const serverFun=(req,res)=>{
    // console.log(req.method)
    res.end(`You are using ${req.method} method to fectch api`); 

    const param = url.parse(req.url, 1);
    if (req.method == 'GET' && param.href == '/home') {
        res.end('get called home');
    }
    else if(req.method == 'POST'){
        res.end('post called');
    }
    else if(req.method == 'GET' && param.href == '/about'){
        res.end('post called about');
    }
}

http.createServer(serverFun).listen(5000); 