function BinarySearchusingrecusion(arr,searchelement,start,end){
    if(arr[arr.length-1]<searchelement) return -1
    let mid=Math.round((end+start/2))
    if(arr[mid]==searchelement) return true
    else if(arr[mid]<searchelement) return BinarySearchusingrecusion(arr,searchelement,mid+1,end)
    else return BinarySearchusingrecusion(arr,searchelement,start,mid-1)
}
console.log(BinarySearchusingrecusion([1,2,3,4,5,6,7,8],11,0,8))

// function BinarySearch() {
//     let arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let searchelement = 0
//     let start = 0
//     let last = arr.length - 1
//     while(start<=last){
//         mid=Math.round((last-start/2))
//         if(arr[mid]==searchelement) return true
//         else if(arr[mid]<searchelement) start=mid+1
//         else last=mid-1
//     }
//     return false
// }
// console.log(BinarySearch())

// function BinarySearchIterative(arr, n, data) {
//     let low = 0
//     let high = n - 1
//     while (low <= high) {
//         mid = Math.round(low+(high-low)/2)
//         if (arr[mid] == data) return mid
//         else if (arr[mid] < data) low = mid + 1
//         else high = mid - 1
//     }
//     return -1
// }
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let n = arr.length
// let data = 5
// console.log(BinarySearchIterative(arr, n, data))