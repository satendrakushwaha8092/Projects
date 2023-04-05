//recursion3   4 May 

//"satendra"==>"ardnetas"
function reverse(str){
    if(str.length==0) return ""
    return reverse(str.slice(1))+str[0]
}
console.log("reverse=",reverse("sat"))

//method-1

function isPlr1(str){
    if(str.length<=1) return true

    return(str[0]==str.slice(-1)&&isPlr1(str.slice(1,-1)))
}
console.log("isPlr1=",isPlr1("12321"))

//method-2

function isPlr2(str){
    if(str.length<=1) return true

    if(str[0]==str.slice(-1)) return isPlr2(str.slice(1,-1))
    else return false
}
console.log("isPlr2=",isPlr2("12321"))

//method-3

function isPlr3(arr){
    if(arr.length<=1) return true

    if(arr.shift()==arr.pop()) return isPlr3(arr)
    else return false
}
console.log("isPlr3=",isPlr3([1,2,3,2,1]))

//["a","b",["a","b","c"]]==>[ 'a', 'b', 'a', 'b', 'c' ]
function flattenArr(arr){
    let flat=[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false) flat.push(arr[i])
        else flat=flat.concat(flattenArr(arr[i]))
    }
    return flat
}
console.log("flattenArr=",flattenArr(["a","b",["a","b","c"]]))



