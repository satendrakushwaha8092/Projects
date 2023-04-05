// function BS(arr,ele){
//     let start=0
//     let end=arr.length-1
//     while(start<=end){
//         let mid=Math.round(start+(end-start)/2)
//         if(arr[mid]==ele) return true
//         else if(arr[mid]<ele) start=mid+1
//         else end=mid-1
//     }
//     return false
// }
// console.log(BS([1,2,3,4,5,6],4))

function BS(arr,ele,start,end){
        let mid=Math.round(start+(end-start)/2)
        if(start>end) return false
        if(arr[mid]==ele) return true
        else if(arr[mid]<ele) return BS(arr,ele,mid+1,end)
        else return BS(arr,ele,start,mid-1)
}
console.log(BS([1,2,3,4,5,6],1,0,6))