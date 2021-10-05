// npm modules
// const color=require("cli-color");


// (function(name){
    
//     console.log(name);
// })("omkartalekar")

// console.log(color.yellow("hello world"));

// const auth=require("./auth");
// register("coders gyan");


// auth.register("hello world");
// auth.login("omkar","1112");

const path=require("path");
// const { parse } = require("path/posix");
// dirname
// console.log("folder name",__dirname,__filename);
// console.log("file name:",path.basename(__filename));

// Extension
// console.log("Ext name:",path.extname(__filename))

// parse
// console.log("Parse:",path.parse(__filename));

// join
// console.log("Join:",path.join(__dirname,"order","app.js"));


const fs=require("fs");
// const { buffer } = require("stream/consumers");

// make a directory
// fs.mkdir(path.join(__dirname,"/test"),(err)=>{
//       if(err){
//           console.log("something went wrong...")
//           return;
//       }
//       console.log("folder created");
// })

// create a file
// fs.writeFileSync(path.join(__dirname,"test","test.txt"),"hello node\n",(err)=>{
//     if(err){
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,"test","test.txt"),"hello i am omkar",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log(" data added");
//     })
//     console.log("file created");
// })

// read file

// fs.readFile(path.join(__dirname,"test","test.txt"),"utf-8",(err,data)=>{
//     if(err){
//         throw err
//     }
//     // const content=Buffer.from(data)
//     console.log(data);
// })


// operating system module
// os module
const os =require("os");
// console.log("os type:",os.type());
// console.log("os platform:",os.platform());

// console.log("cpu architecture:",os.arch());
// console.log("cpu details:",os.cpus());
// console.log("free memory:",os.freemem());
// console.log("total memory:",os.totalmem());
// console.log("up time:",os.uptime());


// event modules
const Emitter=require("events");

// const myEmitter=new Emitter();
// myEmitter.on("someone",(data)=>{
//     console.log(data)
// })
// myEmitter.emit("someone",{
//     name:"rakesh"
// });

// class Auth extends Emitter{
//     register(username){
//         console.log(`Registerd successfully ${username}`);
//         this.emit("registered",username);
//     }
// }
// const auth=new Auth();
// auth.on("registered",(data)=>{
    // console.log(`sending email to ${data}`)
// })


// welcome email
// auth.on("registered",(data)=>{
//     console.log(`sending welcome email to ${data}`);
// })
// auth.register("codersgyan");


// http module

