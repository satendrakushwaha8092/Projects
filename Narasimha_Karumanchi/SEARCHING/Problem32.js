/*Problem-32 Given an array of n elements. Find three elements in the array such that their sum
is equal to given element K?*/

function BruteForceSearch(arr,sum){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==sum) console.log(arr[i],arr[j],arr[k])
            }
        }
    }
}
BruteForceSearch([5,8,1,6,2],15)