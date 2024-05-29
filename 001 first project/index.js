const http = require('http');
// console.log(http)

http.createServer((req,res)=>{

    // console.log(req)
    res.end('Hello');
}).listen(4500);

console.log("done")