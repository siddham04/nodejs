const express= require('express')
const user=require('./MOCK_DATA.json')
const app=express();
const fs=require('fs')
const PORT=8000;

// Middleware -PlugIn
app.use(express.urlencoded({extended:false}));

app.get("/api/user",(req,res)=>{
   return res.json(user);
})

// app.get("/api/user/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const userFound=user.find((user)=>user.id===id);
//     return res.json(userFound);
// })

app.post("/api/user",(req,res)=>{
    const body=req.body;
    user.push({id: user.length+1,...body});
    // console.log(body);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(user),(err,data)=>{
        return res.json({status:"Pending",id: user.length+1})
    })
 })

//  app.patch("/api/user",(req,res)=>{
    
//  })

//  app.delete("/api/user",(req,res)=>{
    
//  })

// Using routing we can do all these functins within 1 function ....
app.route("/api/user/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const userFound=user.find((user)=>user.id===id);
    return res.json(userFound);
})
.patch((req,res)=>{
    res.json({status: "Pending"});
})
.delete((req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

