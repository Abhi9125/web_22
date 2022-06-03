let fs = require("fs");
let f1Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f1.txt";
let f2Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f2.txt";
let f3Path = "C:\\Users\\hp\\Desktop\\web2022\\module 4 aysn and closure\\L002\\f3.txt";
let aggregate = " ";

console.log("before");

fs.readFile(f1Path, f1cb);
function f1cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data "+data);
        aggregate += ""+data;
        fs.readFile(f2Path, f2cb);
    }
}
function f2cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
        aggregate += " "+data;
        fs.readFile(f3Path, f3cb)
    }
}
function f3cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data "+data);
        aggregate += " "+data;
        fs.writeFile("f4.txt", aggregate, FcreCb);
    }
}
function FcreCb(err, data){
    if(err){
    console.log("error");
}else{
    console.log("aggregate = "+ aggregate);
}
}


console.log("after");