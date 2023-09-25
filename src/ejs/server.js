// // const express=require('express')
// // const app=express()


// // app.set('view engine','ejs')
// // app.get('/',(req,res)=>{
// //     res.render('simple')
   
// // })

// // app.set('view engine','ejs')

// // app.get('/about',(req,res)=>{
// //     res.render('about')
// // })
const express=require('express')
const bodyparser=require('body-parser')

const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
// const test =[];
const test=[]

app.get('/',(req,res)=>{
    res.render('index',{code:test})
})
app.post('/',(req,res)=>{
    test.push( req.body.sname),
    test.push(req.body.mail),
    test.push(req.body.mail),
    test.push(req.body.age),
    test.push(req.body.password);
    res.redirect('/')
})
    
app.listen(7001,()=>console.log("server running"))





