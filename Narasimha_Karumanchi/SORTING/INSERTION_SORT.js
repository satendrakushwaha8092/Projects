function insertionsort(arr){
    for(let i=0;i<arr.length;i++){
        j=i
        v=arr[i]
        while(j>=1&&arr[j-1]>v){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=v
    }
}
let arr=[5,7,2,1,4]
insertionsort(arr)
console.log(arr)