function findMissingNumber(arr){
    let sum=0
    for(let element of arr){
        sum+=element
    }
    return (arr[arr.length-1]*(arr[arr.length-1]+1))/2-sum
}

console.log(findMissingNumber([1,3,4,5,6].sort()))