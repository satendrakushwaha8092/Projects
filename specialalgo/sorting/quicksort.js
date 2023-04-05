function Quicksort(arr,low,high){
    let pivot
    if(high>low){
        pivot=Partition(arr,low,high)
        Quicksort(arr,low,pivot-1)
        Quicksort(arr,pivot+1,high)
    }
}

function Partition(arr,low,high){
    let left=arr[low]
    let right=arr[low]
    let pivot_item=arr[low]
    left=low
    right=high
    while(left<right){
        while(arr[left]<=pivot_item)
        left++
        while(arr[right]>pivot_item)
        right--
        if(left<right)
        [arr[left],arr[right]]=[arr[right],arr[left]]
    }
    arr[low]=arr[right]
    arr[right]=pivot_item
    return right
}
let arr=[6,9,1,2,0,4]
Quicksort(arr,0,arr.length-1)
console.log(arr)