const express=require('express');


app.get('/Forms1',(req,res)=>{
    res.sendFile('./Forms1.html',{root:__dirname})
})
console.log(running);