let f1Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f1.txt";
let f2Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f2.txt";
let f3Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f3.txt";

let fs = require("fs");

console.log("before");

fs.readFile(f1Path, ConF);
fs.readFile(f2Path, ConF);
fs.readFile(f3Path, ConF);

function ConF(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data "+data);
    }
}

console.log("after");