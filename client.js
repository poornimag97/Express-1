
// const express=require("express")
// let app=express()
// //application level middleware
// app.use('/resource',auth,(req,res,next)=>{
//     console.log("this is application level middleware");
//     next()
// })
// //end point
// app.get('/resource',(req,res)=>{
//     console.log("this is end point")
// })
// //custom middleware
// function auth(req,res,next) {
//     console.log("this is auth")
//     next()
// }
// app.use(function (err, req, res, next) {
//         console.error(err.stack)
//         res.status(500).send('Something broke!')
//       })
// app.listen(5000,(err)=>{
//     if(err)
//     {
//         throw err
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
//  })