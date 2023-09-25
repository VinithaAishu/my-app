// const http =require('http');
// const port=1000
// const os=require("os")
// http.createServer((req,res)=>{
//     res.write("welcome to node")
//     res.write(os.version())
//     res.write(os.release())
//     res.write(os.type())
//     res.write(os.machine())
  
    
//     res.end();

// }).listen(port,()=>{console.log("running");})

const fs =require('fs')

// var read =fs.readFileSync("sam.txt")
// console.log(read.toString());
var write =fs.writeFileSync("sam.txt","hiiiiiiiiiii people")
console.log(write);
read=fs.readFileSync("sam.txt")
console.log(read.toString());
//  var write=fs.writeFileSync("sam.txt","welcome to code")
// fs.writeFileSync("code.txt","code")
// console.log(write);
// fs.writeFileSync("co.txt","welcome to react")
// fs.writeFileSync("sam.txt","welcome to js")
// var read =fs.readFileSync('sam.txt')
// var add =fs.readFileSync('code.txt')
// var top =fs.readFileSync('sample.txt')
// var left =fs.readFileSync('code.txt')
// console.log(read.toString());
// console.log(add.toString());
// console.log(top.toString());
// console.log(left.toString());
// fs.unlinkSync('sample.txt','code.txt','sample.txt','code.txt')
