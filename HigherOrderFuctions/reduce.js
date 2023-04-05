// const arr=[1,2,3,4,5,6]
// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr
//     return acc
// });

// console.log(output)

// const arr=[1,2,3,4,5,6]
// const output=arr.reduce(function(max,curr){
//    if(curr>max){
//     max=curr
//    }
//    return max
// });

// console.log(output)

// const arr=[1,2,3,4,5,6]
// const output=arr.reduce(function(min,curr){
//    if(curr<min){
//     min=curr
//    }
//    return min
// });

// console.log(output)

// const arr=[1,2,3,4,5,6]
// const output=arr.reduce((min,curr)=>{
//    if(curr<min){
//     min=curr
//    }
//    return min
// });

// console.log(output)

const users=[
    {firstName:"first",lastName:"last1",age:23},
    {firstName:"first2",lastName:"last2",age:24},
    {firstName:"first3",lastName:"last3",age:25},
    {firstName:"firs4",lastName:"last4",age:26}

]

// const output=users.reduce((acc,curr)=>{
//    if(acc[curr.age]){
//     acc[curr.age]=++acc[curr.age]
//    }else{
//     acc[curr.age]=1
//    }
//    return acc
// },{});

// console.log(output)

const arr=[1,2,5,7,3,9,1,1,6,5]
const output=arr.reduce((acc,curr)=>{
    if(acc[curr]){
     acc[curr]=++acc[curr]
    }else{
     acc[curr]=1
    }
    return acc
 },{});
 
 console.log(output)