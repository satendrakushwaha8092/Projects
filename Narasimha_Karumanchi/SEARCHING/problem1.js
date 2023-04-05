/*Problem-1 Given an array of n numbers, give an algorithm for checking whether there are
any duplicate elements in the array or no?*/

function CheckDuplicatesBruteForce(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]) console.log("Duplicates exist:",arr[i])
            return
        }
    }
    console.log("No duplicates in given array.")
}
console.log(CheckDuplicatesBruteForce([1,2,3,4,5]))