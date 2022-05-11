// //1. print 

// // <--------------------------------------->
// //2. Declare a Variable in js
// // let a = 1234;
// // console.log("value of a is "+a);


// // <--------------------------------------->
// // 3.Function in Js 
// // function sum(){
// //     let a=10,b=20;
// //     console.log("sum of a and b ="+ (a+b));
// // }
// // sum();
// // // 3.1 Function call by parameter
// // function sum(c,d){
// //     console.log("sum of c and d="+ (c+d));
// //     return c;
// // }
// // let a=20,b=30;
// // let ret = sum(a,b);
// // console.log("return"+ ret);

// // ------------------------------------------------->
// // 4.  Decimal to Binary
// let Binarynumber = decimaltobinary(17);
// console.log(Binarynumber);
// function decimaltobinary(dec){
//     let ans =0;
//     let pow =1;
//     while(dec != 0){
//         let dig = dec % 2;
//         ans =ans + dig*pow;
//         pow = pow*10; 
//         dec = Math.floor(dec/2);
//     }
//     return ans;




// --------------------------------------------------------
// object in js
//let key = "eamil";
let obj = {
    firstname: "abhishek",
    Lastname: "Singh",
    Age: 45,
    friends: ["Sandeep","Aman","Stayam"],
    // "m no" : 98866565446737,
};
let key = "email";
obj["key"] = "abhisingh";
console.log(obj);