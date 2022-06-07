//npm i request --> run in terminal

const request = require("request");
let fs = require("fs");

let url = "https://www.google.co.in/";

console.log("before");

request(url,cb);

function cb(error, response, body){
    if(error){
        console.log("error");
    }else{
        if(response && response.statusCode == 404){
            console.log("Page not found")
        }else{
            console.log("body",body);
            fs.writeFileSync("GoogleFirstPage.html",body)
        }
    }
}

console.log("after");