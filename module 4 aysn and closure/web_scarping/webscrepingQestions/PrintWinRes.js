const request = require("request");
const jsdom = require("jsdom");
const url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/lucknow-super-giants-vs-royal-challengers-bangalore-eliminator-1312198/full-scorecard";

request(url,cb);

function cb(err,responce,body){
    if(err){
         consolele.log("error");
    }else if(responce.statuCode == 404){
        console.log("Page Not Found");
    }else{
        // console.log(body);
        ExtractData(body);
    }
}
function ExtractData(body){
    const JSDOM = jsdom.JSDOM; // no meaning 
//1.  string form me -> html content provide
// pass to newJSDOM 
let dom = new JSDOM(body);
// 2. // no meaning 
let document = dom.window.document; 
const Output = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
// const textformet = Output[0].textContent;
console.log(Output[0].textContent);
}