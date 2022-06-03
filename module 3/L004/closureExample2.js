// function printArrFn(){
//     let arr = [];
//     console.log("printfn run");
//     for(let i = 0; i < 3; i++){
//         function printI(){
//             console.log("i",i);
//         }
//         arr.push(printI);
//     }
//     return arr;
// }

// let arrFn = printArrFn();
// arrFn[0]();
// arrFn[1]()
// arrFn[2]();


//---------------------------------------
function print(){
    console.log("hello");
}

console.log("print",print);
let anotherName = print;
let emptyArr = [];
emptyArr[0] = print;
emptyArr[0]();
anotherName();
print();