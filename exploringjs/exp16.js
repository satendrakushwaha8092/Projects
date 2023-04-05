//recursion
// function print(n){
//     if(n==0) return
//     console.log(n)
//     print(n-1)
// }
// print(4)

// function fact(n){
//     if(n==0) return 1
//     else return n*fact(n-1)
// }
// console.log(fact(5))

// function fact(n){
//     // if(n==1){
//     //     return 1
//     // }
//      if(n==0)
//     return 1
//     else{
//         return n*fact(n-1)
//     }
// }
// console.log(fact(5))  

function sumofarr(arr){
    if(arr.length==0) return 0
    return arr.pop()+sumofarr(arr)
}
console.log(sumofarr([1,2,3,4,5]))