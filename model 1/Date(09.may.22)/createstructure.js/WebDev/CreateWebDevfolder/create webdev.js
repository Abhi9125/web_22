let fs = require("fs");
let path = require("path");
// create a path for wed dev folder
let webdevpath = path.join(process.cwd(),"Web Dev");

let modules = ["HtmlCss", "Java Script", "Browser", "Sql","Git"];

// creck it is it exist or not
if(fs.existsSync(webdevpath)){
    console.log("Path is already exist");
}else {
    fs.mkdirSync(webdevpath);
}

for(let i = 0; i < modules.length; i++){
    // create Modul Path
    let modulePath = path.join(webdevpath, modules[i]);

    // check is it path exist or not
    if(fs.existsSync(modulePath)){
        console.log("Path is Already Exist");
    }else{
        fs.mkdirSync(modulePath);
    }

}