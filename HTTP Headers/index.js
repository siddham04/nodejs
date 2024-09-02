const express=require('express');
const user=require('./MOCK_DATA.json')
const app=express();
const PORT=8000;

app.get("/api/user",(req,res)=>{
    res.setHeader('myName','Wg Legend');
    return res.json(user);
 })

app.listen(PORT,()=>{
    console.log(`Application is running successfully on PORT :${PORT}`);
})