let arr=[1,2,3,4,5]
let arr2=[]
const area=(radius) => {
    return radius*radius*3.14;
}

const result=arr.reduce((acc,curr)=>{
    let r=area(curr);
    return arr2.push(r);
},0)

console.log(result)

