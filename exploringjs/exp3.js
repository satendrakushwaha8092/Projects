function isPlr1(str){
    let result=[]
    if(str.length==0) return result

    result.push(str.pop()) 
    return result.concat(isPlr1(str))
}
console.log("isPlr1=",isPlr1([1,2,3,4,5,6]))

// function isPlr2(str){
//     let result=[]
//     if(str.length==0) return result

//     result.push(str.slice(-1)) 
//     return result.concat(isPlr2(str.slice(-1)))
// }
// console.log("isPlr2=",isPlr2("satendra"))
