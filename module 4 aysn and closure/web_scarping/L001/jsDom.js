// npm i jsdom --> run in terminal

const fs = require("fs");
let htmlContent = fs.readFileSync("sample.html", "utf-8");

const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM; // no meaning 
//1.  string form me -> html content provide
// pass to newJSDOM 
let dom = new JSDOM(htmlContent);
// 2. // no meaning 
let document = dom.window.document;

console.log("before");

let AllPs =document.querySelectorAll("p");
// console.log(pcontent.textContent);
// console.log(AllPs);
let fristPcontent = AllPs[0].textContent;
let secondPcontent = AllPs[1].textContent;
let thirdPcontent = AllPs[2].textContent;
console.log("firstPcontent",fristPcontent);
console.log("secondPcontent",secondPcontent);
console.log("thirdPcontent",thirdPcontent);
let h2inarray= document.querySelectorAll("h2")
let h2content = h2inarray[1].textContent;
console.log("h2content",h2content) 