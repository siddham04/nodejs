const fs=require('fs')

// synchronous call
// fs.writeFileSync('./test.txt',"Hey there M Sid")  // the chnages are overwritten 

// asynchronous csll 
// fs.writeFile('./test.txt',"Hello World",(err)=>{})



// sync tasks return maangte hai 
// const res=fs.readFileSync('contacts.txt','utf8')
// console.log(res)


// async task-it does not returns .. it asks for callbacks if there are any errors it will throw an error 
// fs.readFile('contacts.txt','utf8',(err,res)=>{
//     if (err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(res);
//     }
// })


// To append the material in the files we use 
// fs.appendFileSync('test.txt',"Hello bro\n")

// To copy the material of 1 file to another 
// fs.cpSync('contacts.txt','MyContacts.txt')

// To delete a file
// fs.unlinkSync('contacts.txt')

// we can also check the stats of the file 
// console.log(fs.statSync('test.txt'));
// Output:
// Stats {
//     dev: 2834084586,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 562949953424008,
//     size: 129,
//     blocks: 0,
//     atimeMs: 1724845250631.976,
//     mtimeMs: 1724845250488.9597,
//     ctimeMs: 1724845250488.9597,
//     birthtimeMs: 1724844015289.3098,
//     atime: 2024-08-28T11:40:50.632Z,
//     mtime: 2024-08-28T11:40:50.489Z,
//     ctime: 2024-08-28T11:40:50.489Z,
//     birthtime: 2024-08-28T11:20:15.289Z
//   }


// We can also make a new diretory 
// fs.mkdirSync("MyDocs/a/b",{recursive:true})

