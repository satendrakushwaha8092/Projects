/*Problem-30 Two elements whose sum is closest to zero. Given an array with both positive
and negative numbers, find the two elements such that their sum is closest to zero. For the
below array, algorithm should give -80 and 85. Example: 1 60 – 10 70 – 80 85 */

function sumequalltozero(arr,sum){
    let max=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]>max&&sum>arr[i]+arr[j]) {
                max=arr[i]+arr[j]
            }
        }
    }
    console.log(max)
}
sumequalltozero([1,5,2,7,9],10)