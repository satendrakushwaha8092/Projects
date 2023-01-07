function sum(arr,k){
    let i=0
    let j=arr.length-1
    while(i<j){
    if(arr[i]+arr[j]==k) return [arr[i],arr[j]]
    if(arr[i]<k) i++
    else j--
    }
}

console.log(sum([1,2,3,4,5,6,7],10))