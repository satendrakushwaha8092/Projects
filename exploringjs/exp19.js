// function issort(arr,n){
//     if(n==1) return "array is sorted"
//     return (arr[n-1]<arr[n-2])?"false":issort(arr,n-1)
// }
// console.log(issort([2,3,4,5,6],6))


function ispalimdrone(str){
    if(str.length==0||str.length==1) return true
    return (str[0]==str[str.length-1])?ispalimdrone(str.slice(1,-1)):"false"
}
console.log(ispalimdrone("abcddcba"))

//console.log(2<3?true:false)