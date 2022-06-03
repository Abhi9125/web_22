let fs = require("fs");
console.log("before");
fs.readFile("f1.txt", ConF);

function ConF(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data "+data)
    }
}

console.log("after");

