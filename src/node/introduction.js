const express=require('express');

const app=express();

// const a=[
//     {
//         id:1,
//         name:"navi",
//         domain:"trainner"
//     }
// ]

// app.get('/user',function(req,res){
//     res.send("hello");
// });


// app.post('/user',function(req,res){
//     a.push({id:2,name:"logesh",doamain:"MD"})
//     res.send(a);
// });

// app.put('/user',function(req,res){
//     obj=a.findIndex((objs=>objs.id==2));

//     a[obj].name="jack"
//     res.send(a);
// });

// app.delete('/user',function(req,res){
//     obj.a.findIndex((objs=>objs.id==1));
//     a.pop();
//     res.send(a);
// })
// console.log(__filename);
// console.log(__dirname);
// app.get('/test1',(req,res)=>{
//     res.sendFile('./test1.html',{root:__dirname})

// })

app.get('/',(req,res)=>{
    res.sendFile('./Forms1.html',{root:__dirname})
})
// app.get('/*',(req,res)=>{
//     res.sendFile('./test3.html',{root:__dirname})
// })
app.listen(9007,()=>console.log("server running"))
