// crud
let fs = require("fs");
// 1.-----------create a file--------
// fs.writeFileSync("FileCreate.txt","");


//2. ---------------add content in file---------
//fs.writeFileSync("FileCreate.txt","my name is abhishek singh");


//3.---------------for read content in file-------------
// let content = fs.readFileSync("FileCreate.txt","utf8");
// console.log(content);

//4.----------------upadate content in file-----------------------
// fs.writeFileSync("FileCreate.txt","Myh father name is mr. ram praveszh singh");
// let content = fs.readFileSync("FileCreate.txt","utf8");
// console.log(content);


//5.----------------append the content --------------------------
// fs.appendFileSync("FileCreate.txt","Myh father name is mr. ram praveszh singh and my mother name is mano");
// let content = fs.readFileSync("FileCreate.txt","utf8");
// console.log(content);

// 6.----------------delete file----------------
fs.unlinkSync("FileCreate.txt");

