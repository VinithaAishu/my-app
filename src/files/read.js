

// fs.readFile("sam.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// const fs=require("fs")
// const path=require("path")
// fs.writeFile(path.join(__dirname,"cod.txt"),"hhhhhhhhhhh",(err)=>{
//     if(err)
//     throw err;
//     console.log('complete');
// });
// fs.writeFileSync('sa.txt','vinitha','utf-8',(err)=>{
//     if(err)
//     throw err;
//     console.log('complete')


// });
const fs=require("fs")
const path=require("path")
fs.appendFileSync("sam.txt","hhhhhhhhhhh")
    // if(err)
    // throw er
    console.log('append complete');

