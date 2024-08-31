const fs=require('fs')

// console.log("\nBefore Console\n")
// // sync tasks return maangte hai 
// const res=fs.readFileSync('./Architecture/MyContacts.txt','utf8')
// console.log(res)
// console.log("\nAfter Console\n")

// async task-it does not returns .. it asks for callbacks if there are any errors it will throw an error 
// console.log("\nBefore Console\n")
// fs.readFile('./Architecture/MyContacts.txt','utf8',(err,res)=>{
//     if (err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(res);
//     }
// })
// console.log("\nAfter Console\n")
