let obj={
    fname:"sat",
    lname:"kush",
    address:{
        city:"jsr",
        pincode:831017,
        number:5678
    }
}
for(let objs in obj){
    console.log(objs)
}


let arr=Object.entries(obj)
console.log(arr)
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}  
  