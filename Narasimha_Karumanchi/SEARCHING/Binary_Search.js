function BinarySearch(arr,searchingelement){
    let start=0
    let end=arr.length-1
    while(start<end){
        let mid=Math.round((start+end)/2)
        if(arr[mid]==searchingelement) return true
        else if(arr[mid]<searchingelement) start=mid+1
        else end=mid-1
    }
    return false
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],8))

function BinarySearchrecursion(arr,searchingelement,start,end){
    if(start>end) return false
    let mid=Math.round((start+end)/2)
    if(arr[mid]==searchingelement) return true
    else if(arr[mid]<searchingelement) return BinarySearchrecursion(arr,searchingelement,mid+1,end)
    else return BinarySearchrecursion(arr,searchingelement,start,mid-1)
}
console.log(BinarySearchrecursion([1,2,3,4,5,6,7,8,9],10,0,9))
