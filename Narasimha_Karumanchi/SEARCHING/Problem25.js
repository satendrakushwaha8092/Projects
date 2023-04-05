/*8Problem-25 Given an array of n elements. Find two elements in the array such that their sum
is equal to given element K.*/

function BruteForceSearch(arr,ele){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==ele) console.log(arr[i],arr[j])
            return
        }
    }
    console.log("items not found:No such elements")
}
BruteForceSearch([1,2,3,4,5,6,7],13)
