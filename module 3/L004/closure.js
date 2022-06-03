function getFristName(firstName){
    console.log("firstName", firstName);
    return function getLastName(LastName){
        console.log("LastName", LastName);
        return function PrintFullName(){
        console.log("FullName", firstName,LastName);
        }
    }
}
let getLastName = getFristName("Abhishek");
let PrintFullName = getLastName("Singh");
PrintFullName();
