const http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write("welcome")
}).listen(8080,()=>console.log("ok"))