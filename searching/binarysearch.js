function binarySearch(arr,search){
    let low=0
    let high=arr.length
    while(low<=high){
        let mid=Math.round((low+high)/2)
        if(arr[mid]==search) return true
        else if(arr[mid]<search) low=mid+1
        else high=mid-1
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6],30))

function binarySearchRecursive(arr,low,high,search) {
    if(low>high) return -1
    mid=Math.round((low+high)/2)
    if(arr[mid]==search) return true
    else if(arr[mid]<search) return binarySearchRecursive(arr,mid+1,high,search)
    else return binarySearchRecursive(arr,low,mid-1,search)
}

console.log(binarySearchRecursive([1,2,3,4,5,6],0,6,10))

//function reduceSearch(arr,data){
const reduce=[1,2,3,4,5,6].reduce(function(acc,curr){
        return curr==2
    })
//}

console.log(reduce)

const include=[1,2,3,4,5].includes(2)
console.log(include)