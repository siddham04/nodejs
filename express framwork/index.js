const http=require('http');
const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send("Hello from home page.")
})

app.get('/about',(req,res)=>{
    return res.send("Hello from about page.")
})

app.listen(5000,()=>{
    console.log("Server Started");
});