const express=require('express');
const app= express();
app.get('/home',(req,res)=>{
 res.send("this is home page");
 console.log("server started");
})
app.listen(1300);