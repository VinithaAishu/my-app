var http = require('http')

http.createServer(function(req,res){
res.write(`<img src=${"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg"}>`)
res.end()
}).listen(1999,()=>console.log("server is running"))