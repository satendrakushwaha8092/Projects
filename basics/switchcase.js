const readline = require("readline-sync");
console.log("enter a number")
const n=Number(readline.question());
switch(n){
    case 1:console.log("sunday");break;
    case 2:console.log("monday");break;
    default:console.log("enter valid input")

}