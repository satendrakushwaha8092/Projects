// function BinarySearch() {
//     let arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let searchelement = 11
//     let start = 0
//     let last = arr.length - 1
//     while (start <= last) {
//         let mid = Math.round((start + last) / 2)
//         if (arr[mid] == searchelement) return true
//         else if (searchelement < arr[mid]) {
//             last = mid + 1
//         }
//         else start = mid - 1
//     }
//     return false
// }
// console.log(BinarySearch())

//Iterative Binary Search Algorithm 
//Narasimha_Karumanchi
function BinarySearchIterative(arr, n, data) {
    let low = 0
    let high = n - 1
    while (low <= high) {
        mid = Math.round(low+(high-low)/2)
        if (arr[mid] == data) return mid
        else if (arr[mid] < data) low = mid + 1
        else high = mid - 1
    }
    return -1
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let n = arr.length
let data = 5
console.log(BinarySearchIterative(arr, n, data))

//Recursive Binary Search Algorithm 
//Narasimha_Karumanchi
function BinarySearchRecursive(arr, low, high, data) {
    if (data > arr[arr.length - 1]) return -1
    mid = Math.round((high + low) / 2)
    if (arr[mid] == data) return mid
    else if (arr[mid] < data) return BinarySearchRecursive(arr, mid + 1, high, data)
    else return BinarySearchRecursive(arr, low, mid - 1, data)
}
console.log(BinarySearchRecursive(arr, 0, n - 1, 11))