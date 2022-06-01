//------------return Function by a function------------
// function outer(){
//     console.log("i m outer");
//     return function inner(){
//         console.log("i m inner");
//     }
// }
// let rfn = outer();
// console.log("------------");
// rfn();

// console.log("a",a);
// var a=10;

// // console.log("a",a);
// // let a=10;



// ------------------fn as a variable--------------------
// console.log("a",a);
// const a=10;




//--------------Assigement Function---------------------------
// function fn() {
//     console.log("fn is a function");
//     return 10;
// }
// //  let anotherFn = fn;
// //  console.log(anotherFn);
// //  let returnanotherFn = fn();
// //  console.log("returnanotherFn",returnanotherFn);
// //  anotherFn();




// // ------------------pass function as parameter---------------------
// let arr1 = [1,2,3,4,5];
// function fn(param){
//     console.log("param",param);
// }
// fn(arr1);


// ----------------Funcation pass as a parameter--------------------------
// function getAfunction(param) {
//     console.log("I AM A Func");
//     console.log("param",param);
//     param();
// }
// getAfunction(chotafn);
// function chotafn() {
//     console.log("i m chota fn");
//     return 10;
// }



// ----------Function Expression----------------
// let fnAddressHolder = function(){
//     console.log("I am a function expression"); 
// }
// // fnAddressHolder();



//-----------Function IIFE----------------------
(function IIFE(){
    console.log("I am Ifee")
})();