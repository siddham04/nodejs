const http=require('http')
const fs=require('fs')

const myserver=http.createServer((req,res)=>{   //yaha par lagega event listener
    const log=`${Date.now()}: ${req.url} New Request. Receiverd\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from server")
    })
});

myserver.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
