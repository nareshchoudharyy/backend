const http = require('http');
const url = require('url');

const serverFun=(req,res)=>{
    // res.end(`You are using ${req.method} method to fectch api`); 

    const param = url.parse(req.url, 1);
    console.log(param)
    if(req.method == "GET" && param.href == "/"){
        res.end("GET method used")
        console.log("GET method used")
        console.log(param.href)
    } else if(req.method == "POST"){
        res.end("POST method used")
        console.log("POST method used")
    } else{
        res.end("Another method used")
        console.log("Another method used")
    } 
}

http.createServer(serverFun).listen(5000); 