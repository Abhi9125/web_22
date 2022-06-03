function printArrFn(){
    let arr = [];
    console.log("printfn run");
    for(var i = 0; i < 3; i++){
        function printI(){
            console.log("i",i);
        }
        arr.push(printI);
    }
    return arr;
}

let arrFn = printArrFn();
arrFn[0]();
arrFn[1]()
arrFn[2]();