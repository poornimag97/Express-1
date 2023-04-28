const express=require("express")

//top level function
let app=express()

//mount middleware
app.use(users)

//route handler function
 app.get("/",(req,res)=>{
   // res.send("hello world")
    console.log("this is app.get");
    res.send("<h1>hello world</h1>")
 })
 app.get("/admin",(req,res)=>{
   // res.send("hello world")
    console.log("this is admin");
    res.send("<h1>admin</h1>")
 })
 function users(req,res,next){
    console.log("this is middleware this is logged before app.get");
    next()
 }
 app.listen(5000,(err)=>{
    if(err)
    {
        throw err
    }
    else{
        console.log("server is running on port 5000");
    }
 })



//  app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })